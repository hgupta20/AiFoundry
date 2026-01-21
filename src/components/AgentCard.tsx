import Link from 'next/link';
import { Agent } from '@/types';
import { Badge, LaneBadge } from './Badge';

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  const isNotCommitted = agent.maturity === 'Concept' || agent.maturity === 'Vision';

  return (
    <Link 
      href={`/agents/${agent.slug}`}
      className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-300 hover:shadow-sm transition-all group"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-semibold text-gray-900 group-hover:text-red-700 transition-colors">
          {agent.name}
        </h3>
        <Badge maturity={agent.maturity} size="sm" />
      </div>
      
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {agent.tagline}
      </p>

      <div className="flex items-center gap-2 flex-wrap mb-3">
        <LaneBadge lane={agent.lane} size="sm" />
        {agent.persona.slice(0, 2).map((p) => (
          <span key={p} className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded">
            {p}
          </span>
        ))}
      </div>

      {/* Impact metrics for Live/Pilot agents */}
      {!isNotCommitted && agent.impact && agent.impact.length > 0 && (
        <div className="pt-3 border-t border-gray-100">
          <div className="flex items-center gap-4">
            {agent.impact.slice(0, 2).map((impact, idx) => (
              <div key={idx} className="flex items-baseline gap-1.5">
                <span className="text-sm font-semibold text-gray-900">{impact.value}</span>
                <span className="text-xs text-gray-500">{impact.metric}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Note for Concept/Vision */}
      {isNotCommitted && (
        <div className="pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-400 italic">
            {agent.maturity === 'Vision' ? 'Future exploration' : 'Concept—not committed'}
          </p>
        </div>
      )}
    </Link>
  );
}
