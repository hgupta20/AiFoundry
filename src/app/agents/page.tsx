import { Suspense } from 'react';
import { Container } from '@/components/Container';
import { getAllAgents, getUniqueLanes, getUniquePersonas } from '@/lib/content';
import { AgentGallery } from './AgentGallery';

export const metadata = {
  title: 'Agent Gallery | DBU AI Foundry',
  description: 'Browse all AI agents across the Cummins enterprise',
};

export default function AgentsPage() {
  const agents = getAllAgents();
  const lanes = getUniqueLanes(agents);
  const personas = getUniquePersonas(agents);

  return (
    <div className="py-12">
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Agent Gallery</h1>
          <p className="text-gray-600">
            Explore {agents.length} AI agents across the enterprise. Filter by lane, maturity, or persona.
          </p>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <AgentGallery 
            initialAgents={agents} 
            lanes={lanes} 
            personas={personas} 
          />
        </Suspense>
      </Container>
    </div>
  );
}
