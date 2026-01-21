'use client';

import { useState, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Agent } from '@/types';
import { AgentCard } from '@/components/AgentCard';
import { FilterBar } from '@/components/FilterBar';

interface AgentGalleryProps {
  initialAgents: Agent[];
  lanes: string[];
  personas: string[];
}

export function AgentGallery({ initialAgents, lanes, personas }: AgentGalleryProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [selectedLane, setSelectedLane] = useState(searchParams.get('lane') || '');
  const [selectedMaturity, setSelectedMaturity] = useState(searchParams.get('maturity') || '');
  const [selectedPersona, setSelectedPersona] = useState(searchParams.get('persona') || '');

  const updateURL = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.replace(`/agents?${params.toString()}`, { scroll: false });
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    updateURL('search', value);
  };

  const handleLaneChange = (value: string) => {
    setSelectedLane(value);
    updateURL('lane', value);
  };

  const handleMaturityChange = (value: string) => {
    setSelectedMaturity(value);
    updateURL('maturity', value);
  };

  const handlePersonaChange = (value: string) => {
    setSelectedPersona(value);
    updateURL('persona', value);
  };

  const filteredAgents = useMemo(() => {
    return initialAgents.filter((agent) => {
      // Search filter
      if (search) {
        const searchLower = search.toLowerCase();
        const matchesSearch =
          agent.name.toLowerCase().includes(searchLower) ||
          agent.tagline.toLowerCase().includes(searchLower) ||
          agent.overview.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Lane filter
      if (selectedLane && agent.lane !== selectedLane) return false;

      // Maturity filter
      if (selectedMaturity && agent.maturity !== selectedMaturity) return false;

      // Persona filter
      if (selectedPersona && !agent.persona.includes(selectedPersona)) return false;

      return true;
    });
  }, [initialAgents, search, selectedLane, selectedMaturity, selectedPersona]);

  // Group by maturity for display
  const groupedAgents = useMemo(() => {
    const groups: Record<string, Agent[]> = {
      Live: [],
      Pilot: [],
      Concept: [],
      Vision: [],
    };

    filteredAgents.forEach((agent) => {
      groups[agent.maturity].push(agent);
    });

    return groups;
  }, [filteredAgents]);

  const hasActiveFilters = search || selectedLane || selectedMaturity || selectedPersona;

  return (
    <div>
      <FilterBar
        search={search}
        onSearchChange={handleSearchChange}
        selectedLane={selectedLane}
        onLaneChange={handleLaneChange}
        selectedMaturity={selectedMaturity}
        onMaturityChange={handleMaturityChange}
        selectedPersona={selectedPersona}
        onPersonaChange={handlePersonaChange}
        lanes={lanes}
        personas={personas}
      />

      {filteredAgents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No agents match your filters.</p>
          {hasActiveFilters && (
            <button
              onClick={() => {
                setSearch('');
                setSelectedLane('');
                setSelectedMaturity('');
                setSelectedPersona('');
                router.replace('/agents', { scroll: false });
              }}
              className="mt-2 text-sm text-red-600 hover:text-red-700"
            >
              Clear all filters
            </button>
          )}
        </div>
      ) : selectedMaturity ? (
        // If filtering by maturity, show flat list
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.slug} agent={agent} />
          ))}
        </div>
      ) : (
        // Otherwise show grouped by maturity
        <div className="space-y-10">
          {Object.entries(groupedAgents).map(([maturity, agents]) => {
            if (agents.length === 0) return null;
            return (
              <div key={maturity}>
                <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      maturity === 'Live'
                        ? 'bg-emerald-500'
                        : maturity === 'Pilot'
                        ? 'bg-blue-500'
                        : maturity === 'Concept'
                        ? 'bg-amber-500'
                        : 'bg-gray-400'
                    }`}
                  />
                  {maturity}
                  <span className="text-sm font-normal text-gray-500">({agents.length})</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {agents.map((agent) => (
                    <AgentCard key={agent.slug} agent={agent} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-8 text-center text-sm text-gray-500">
        Showing {filteredAgents.length} of {initialAgents.length} agents
      </div>
    </div>
  );
}

