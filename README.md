# Cummins AI Foundry

A catalog of AI use cases at Cummins. Browse what's available, see what's coming, and submit your own ideas.

## Overview

The AI Foundry is an internal portfolio site showcasing AI "Agents"—role-based AI capabilities organized by business lanes (Build, Make, Sell & Serve, Run, Protect, Transform). Each agent has clear inputs, outputs, maturity status, and guardrails.

**This is not a production system or committed roadmap.** It's a showcase of what's possible with AI at Cummins.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Content**: JSON files (no database required)

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cummins-ai-foundry
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── agents/            # Agent gallery and detail pages
│   │   ├── page.tsx       # /agents - Gallery with filters
│   │   └── [slug]/        # /agents/[slug] - Agent detail
│   ├── tools/             # /tools - Tool comparison
│   ├── submit/            # /submit - Idea submission form
│   ├── team/              # /team - Foundry team
│   └── about/             # /about - About the Foundry
├── components/            # Shared UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Container.tsx
│   ├── AgentCard.tsx
│   ├── Badge.tsx
│   └── FilterBar.tsx
├── content/               # Content as JSON files
│   ├── agents/            # Individual agent JSON files
│   ├── tools.json         # Tool comparison data
│   └── team.json          # Team members
├── lib/                   # Utilities
│   └── content.ts         # Content loading functions
└── types/                 # TypeScript types
    └── index.ts
```

## Content Model

### Agents

Agents are stored as individual JSON files in `src/content/agents/`. Each agent has:

- **name**: Display name
- **slug**: URL-friendly identifier
- **tagline**: One-line description
- **lane**: Business lane (Front Door, Build, Make, Sell & Serve, Run, Protect, Transform)
- **maturity**: Live | Pilot | Concept | Vision
- **persona**: Target users
- **overview**: Detailed description
- **whatItDoes**: Array of capabilities
- **prompts**: Example prompts (3-5)
- **inputs**: What data it uses
- **outputs**: What it produces
- **impact**: Business metrics
- **guardrails**: Safety and limitations
- **whatsNext**: Future plans (for Concept/Vision)

### Adding a New Agent

1. Create a new JSON file in `src/content/agents/`:
   ```bash
   touch src/content/agents/my-new-agent.json
   ```

2. Follow the schema in `src/types/index.ts`

3. The agent will automatically appear in the gallery

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Key Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with overview and featured agents |
| `/agents` | Agent gallery with search and filters |
| `/agents/[slug]` | Individual agent detail page |
| `/tools` | Tool comparison (Tools vs Agents) |
| `/submit` | Submit an AI agent idea |
| `/team` | Foundry team members |
| `/about` | About the AI Foundry |

## Development Notes

- **No backend required**: All content is loaded from JSON files at build/request time
- **No authentication**: This is a demo/showcase site
- **Idea submissions**: Currently logs to console (demo mode)
- **Static generation**: Agent pages are statically generated at build time

## Maturity Model

| Status | Meaning |
|--------|---------|
| **Live** | Production-ready, actively used |
| **Pilot** | Testing with limited users |
| **Concept** | Validated idea, not yet built |
| **Vision** | Future exploration, not committed |

## Contributing

1. Follow the existing code style
2. Keep agents content Cummins-specific
3. All agents must include guardrails
4. Test locally before submitting changes

## License

Internal use only. © Cummins Inc.
