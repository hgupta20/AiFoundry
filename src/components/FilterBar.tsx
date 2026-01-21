'use client';

interface FilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedLane: string;
  onLaneChange: (value: string) => void;
  selectedMaturity: string;
  onMaturityChange: (value: string) => void;
  selectedPersona: string;
  onPersonaChange: (value: string) => void;
  lanes: string[];
  personas: string[];
}

export function FilterBar({
  search,
  onSearchChange,
  selectedLane,
  onLaneChange,
  selectedMaturity,
  onMaturityChange,
  selectedPersona,
  onPersonaChange,
  lanes,
  personas,
}: FilterBarProps) {
  const maturities = ['Live', 'Pilot', 'Concept', 'Vision'];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <label htmlFor="search" className="sr-only">Search agents</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              id="search"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search agents..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {/* Lane Filter */}
          <div>
            <label htmlFor="lane" className="sr-only">Filter by lane</label>
            <select
              id="lane"
              value={selectedLane}
              onChange={(e) => onLaneChange(e.target.value)}
              className="block w-full pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
            >
              <option value="">All Lanes</option>
              {lanes.map((lane) => (
                <option key={lane} value={lane}>{lane}</option>
              ))}
            </select>
          </div>

          {/* Maturity Filter */}
          <div>
            <label htmlFor="maturity" className="sr-only">Filter by maturity</label>
            <select
              id="maturity"
              value={selectedMaturity}
              onChange={(e) => onMaturityChange(e.target.value)}
              className="block w-full pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
            >
              <option value="">All Maturity</option>
              {maturities.map((maturity) => (
                <option key={maturity} value={maturity}>{maturity}</option>
              ))}
            </select>
          </div>

          {/* Persona Filter */}
          <div>
            <label htmlFor="persona" className="sr-only">Filter by persona</label>
            <select
              id="persona"
              value={selectedPersona}
              onChange={(e) => onPersonaChange(e.target.value)}
              className="block w-full pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
            >
              <option value="">All Personas</option>
              {personas.map((persona) => (
                <option key={persona} value={persona}>{persona}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

