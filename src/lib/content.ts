// Content loading utilities
import { Agent, Tool, TeamMember } from '@/types';
import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'src/content');

export function getAllAgents(): Agent[] {
  const agentsDir = path.join(contentDir, 'agents');
  
  if (!fs.existsSync(agentsDir)) {
    return [];
  }
  
  const files = fs.readdirSync(agentsDir).filter(f => f.endsWith('.json'));
  
  return files.map(file => {
    const content = fs.readFileSync(path.join(agentsDir, file), 'utf-8');
    return JSON.parse(content) as Agent;
  }).sort((a, b) => a.name.localeCompare(b.name));
}

export function getAgentBySlug(slug: string): Agent | null {
  const filePath = path.join(contentDir, 'agents', `${slug}.json`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content) as Agent;
}

export function getAllTools(): Tool[] {
  const filePath = path.join(contentDir, 'tools.json');
  
  if (!fs.existsSync(filePath)) {
    return [];
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content) as Tool[];
}

export function getTeamMembers(): TeamMember[] {
  const filePath = path.join(contentDir, 'team.json');
  
  if (!fs.existsSync(filePath)) {
    return [];
  }
  
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content) as TeamMember[];
}

export function getUniqueLanes(agents: Agent[]): string[] {
  // Return in canonical order
  const canonicalOrder = ['Front Door', 'Build', 'Make', 'Sell & Serve', 'Run', 'Protect', 'Transform'];
  const presentLanes = new Set(agents.map(a => a.lane));
  return canonicalOrder.filter(lane => presentLanes.has(lane));
}

export function getUniquePersonas(agents: Agent[]): string[] {
  return [...new Set(agents.flatMap(a => a.persona))].sort();
}

export function getUniqueMaturities(): string[] {
  return ['Live', 'Pilot', 'Concept', 'Vision'];
}

// Lane descriptions for display
export const laneDescriptions: Record<string, { description: string; icon: string }> = {
  'Front Door': {
    description: 'Entry point into AI; routing/triage and "Ask Cummins"-style access',
    icon: '🚪',
  },
  'Build': {
    description: 'Engineering, R&D, product development, validation, simulation',
    icon: '🔧',
  },
  'Make': {
    description: 'Manufacturing, shop floor, quality, SOPs, scheduling',
    icon: '🏭',
  },
  'Sell & Serve': {
    description: 'Sales, dealers, field service, warranty, parts fitment',
    icon: '🤝',
  },
  'Run': {
    description: 'Supply chain, procurement, finance, HR, operations planning',
    icon: '⚡',
  },
  'Protect': {
    description: 'Safety, compliance, regulatory, cybersecurity, risk management',
    icon: '🛡️',
  },
  'Transform': {
    description: 'Big, future-defining agents for fleet reliability and energy transition',
    icon: '🚀',
  },
};
