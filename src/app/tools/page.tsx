import { Container } from '@/components/Container';
import { getAllTools } from '@/lib/content';

export const metadata = {
  title: 'Tools vs Agents | AI Foundry',
  description: 'Understand the building blocks: tools enable agents, agents deliver value',
};

const maturityColors: Record<string, { bg: string; text: string; border: string }> = {
  'Production': {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
  },
  'Pilot': {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
  },
  'Evaluation': {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
  },
  'Not Approved': {
    bg: 'bg-red-50',
    text: 'text-red-700',
    border: 'border-red-200',
  },
};

export default function ToolsPage() {
  const tools = getAllTools();

  // Group tools by category
  const toolsByCategory = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, typeof tools>);

  const categoryOrder = ['LLM Platform', 'RAG / Vector Search', 'Orchestration Framework', 'UI / Prototyping', 'Eval / Guardrails', 'Eval / MLOps', 'Consumer AI'];

  return (
    <div className="py-12">
      <Container>
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tools vs Agents</h1>
          <div className="max-w-3xl">
            <p className="text-xl text-gray-600 mb-4">
              Tools are building blocks. Agents are how Cummins delivers value.
            </p>
            <p className="text-gray-500">
              This page explains the enablers without becoming vendor marketing. 
              We evaluate tools based on their fit for agent patterns we&apos;re building, 
              not feature comparisons.
            </p>
          </div>
        </div>

        {/* Key Distinction */}
        <div className="bg-gray-900 text-white rounded-lg p-6 mb-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Tools</h3>
              <p className="text-gray-300 text-sm">
                LLM platforms, vector databases, orchestration frameworks, and UI toolkits. 
                They provide capabilities but don&apos;t solve business problems on their own.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Agents</h3>
              <p className="text-gray-300 text-sm">
                Role-based AI capabilities with clear inputs, outputs, and guardrails. 
                They solve real problems for real personas—powered by tools.
              </p>
            </div>
          </div>
        </div>

        {/* Maturity Legend */}
        <div className="flex flex-wrap gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600 font-medium">Cummins Maturity:</div>
          {Object.entries(maturityColors).map(([status, colors]) => (
            <div key={status} className="flex items-center gap-2">
              <span className={`px-2 py-0.5 text-xs font-medium rounded border ${colors.bg} ${colors.text} ${colors.border}`}>
                {status}
              </span>
            </div>
          ))}
        </div>

        {/* Tools by Category */}
        <div className="space-y-10">
          {categoryOrder.map((category) => {
            const categoryTools = toolsByCategory[category];
            if (!categoryTools?.length) return null;
            
            return (
              <div key={category}>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{category}</h2>
                <div className="space-y-6">
                  {categoryTools.map((tool) => {
                    const colors = maturityColors[tool.cumminsMaturity];
                    return (
                      <div key={tool.name} className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                          </div>
                          <span className={`px-3 py-1 text-sm font-medium rounded border ${colors.bg} ${colors.text} ${colors.border}`}>
                            {tool.cumminsMaturity}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-6">{tool.description}</p>

                        <div className="grid md:grid-cols-3 gap-6">
                          {/* Strengths */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">Strengths</h4>
                            <ul className="space-y-1.5">
                              {tool.strengths.map((strength, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                  <span className="text-emerald-500 mt-0.5">✓</span>
                                  {strength}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Best-Fit Agent Patterns */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">Best-Fit Agent Patterns</h4>
                            <ul className="space-y-1.5">
                              {tool.bestFitAgentPatterns.map((pattern, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                  <span className="text-blue-500 mt-0.5">→</span>
                                  {pattern}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Limitations */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">Limitations</h4>
                            <ul className="space-y-1.5">
                              {tool.limitations.map((limitation, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                  <span className="text-gray-400 mt-0.5">–</span>
                                  {limitation}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Guidance */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">Need Help Choosing?</h3>
          <p className="text-sm text-blue-800 mb-4">
            The AI Foundry team can help you select the right tools for your agent. 
            We consider security, scalability, and fit with your specific use case—not just feature lists.
          </p>
          <a 
            href="/team" 
            className="text-sm font-medium text-blue-700 hover:text-blue-800"
          >
            Contact the team →
          </a>
        </div>
      </Container>
    </div>
  );
}
