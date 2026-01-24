// Content Model Types for Cummins AI Foundry

export type Maturity = 'Live' | 'Pilot' | 'Concept' | 'Vision';

// Canonical 7 Lanes
export type Lane = 
  | 'Front Door'   // Entry point into AI; routing/triage
  | 'Build'        // Engineering, R&D, product development, validation
  | 'Make'         // Manufacturing, shop floor, quality, SOPs
  | 'Sell & Serve' // Sales, dealers, field service, warranty
  | 'Run'          // Supply chain, procurement, finance, HR, operations
  | 'Protect'      // Safety, compliance, regulatory, cybersecurity
  | 'Transform';   // Big, future-defining agents

export type Persona = 
  | 'Engineer' 
  | 'Analyst' 
  | 'Manager' 
  | 'Technician' 
  | 'Executive'
  | 'Service Tech'
  | 'Dealer'
  | 'Shop Floor'
  | 'HR'
  | 'Procurement'
  | 'Safety'
  | 'Compliance'
  | 'All Employees';

export interface Agent {
  slug: string;
  name: string;
  tagline: string;          // Job-to-be-done (one sentence)
  lane: Lane;
  maturity: Maturity;
  persona: Persona[];       // Who it's for
  overview: string;         // Extended description
  whatItDoes: string[];     // Concrete bullets
  prompts: string[];        // 3-5 example prompts
  inputs: string[];         // docs, tickets, logs, manuals, etc.
  outputs: string[];        // summaries, checklists, drafts, recommendations
  systemsOrProcesses?: string[]; // Cummins systems or processes it connects to
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
  guardrails: string[];     // Always required
  whatsNext?: string;       // For Concept/Vision only
  futureScope?: string[];   // Potential future applications or extensions
  relatedAgents?: string[];
}

export interface Tool {
  name: string;
  category: string;         // LLM Platform, RAG/Search, Orchestration, UI, Eval/Guardrails
  description: string;
  strengths: string[];
  bestFitAgentPatterns: string[];  // Which agent patterns this enables
  limitations: string[];
  cumminsMaturity: 'Production' | 'Pilot' | 'Evaluation' | 'Not Approved';
}

export interface TeamMember {
  name: string;
  role: string;
  type: 'steward' | 'contributor';
  focus: string[];
}

export interface Submission {
  id: string;
  // Step 1: Problem
  problem: string;
  whoExperiences: string;
  frequency: string;
  // Step 2: Imagine the agent
  whatWouldItDo: string;
  inputs: string;
  outputs: string;
  // Step 3: Context
  team: string;
  systems?: string;
  constraints?: string;
  // Step 4: Optional
  attachments?: string;
  collaborators?: string;
  submittedAt: string;
}
