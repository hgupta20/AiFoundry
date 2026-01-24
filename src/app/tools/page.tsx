import { Container } from '@/components/Container';
import { getAllTools } from '@/lib/content';
import {
  AppWindow,
  Blocks,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  Cloud,
  Database,
  Gauge,
  Lock,
  MessageSquareText,
  Network,
  Scale,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
  AlertTriangle,
} from 'lucide-react';

export const metadata = {
  title: 'AI Platforms | DBU AI Foundry',
  description: 'AI platforms and agent enablement across DBU',
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
  const ragTools = toolsByCategory['RAG / Vector Search'] ?? [];

  return (
    <div className="py-12">
      <Container>
        {/* AI Platforms Header */}
        <div className="mb-10">
          <div className="page-hero page-hero--tools px-6 py-6 sm:px-8 sm:py-7">
            <div className="page-hero-content max-w-3xl">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Platforms</h1>
              <p className="text-xl text-gray-600 mb-4">
                AI agents deliver value at Cummins. Platforms and technologies enable those agents.
              </p>
              <p className="text-gray-500">
                This page provides a high-level view of the AI platforms currently used or evaluated
                across DBU to build and support AI agents. The intent is clarity and alignment, not
                technical comparison or vendor promotion.
              </p>
              <p className="text-gray-500 mt-3">
                Platforms are assessed based on how well they support the agent patterns Cummins
                teams are building today, how they fit existing enterprise systems, and how
                responsibly they can be applied at scale.
              </p>
            </div>
          </div>
        </div>

        {/* How to Read */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">How to Read This Page</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Not a feature-by-feature comparison</li>
            <li>Strengths and limitations are described from a Cummins use case perspective</li>
            <li>Platform maturity reflects current DBU usage, not enterprise-wide mandates</li>
            <li>Inclusion does not imply standardization or long-term commitment</li>
          </ul>
        </div>

        {/* Platforms vs Agents */}
        <div className="bg-gray-900 text-white rounded-lg p-6 mb-12">
          <h2 className="text-lg font-semibold mb-4">Platforms vs Agents</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Platforms</h3>
              <p className="text-gray-300 text-sm">
                Platforms provide foundational capabilities such as language models, data access,
                orchestration, security, and user interfaces. On their own, platforms do not solve
                business problems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Tools</h3>
              <p className="text-gray-300 text-sm">
                LLM platforms, vector databases, orchestration frameworks, and UI toolkits. They
                provide capabilities but do not solve business problems on their own.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Agents</h3>
              <p className="text-gray-300 text-sm">
                Agents are role-based AI capabilities with defined inputs, outputs, guardrails,
                and users. Agents apply platforms to real workflows and deliver value to Cummins
                employees.
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-sm mt-4">
            In short, platforms enable agents. Agents create outcomes.
          </p>
        </div>

        {/* Maturity Levels */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Cummins Platform Maturity Levels</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100">
              <p className="text-sm font-semibold text-gray-900 mb-1">Production</p>
              <p className="text-sm text-gray-600">Actively used in delivered agents with validated value.</p>
            </div>
            <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
              <p className="text-sm font-semibold text-gray-900 mb-1">Pilot</p>
              <p className="text-sm text-gray-600">In use with limited scope or users to validate fit and impact.</p>
            </div>
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
              <p className="text-sm font-semibold text-gray-900 mb-1">Evaluation</p>
              <p className="text-sm text-gray-600">Under active assessment. Not yet approved for delivery use.</p>
            </div>
            <div className="p-4 rounded-lg bg-red-50 border border-red-100">
              <p className="text-sm font-semibold text-gray-900 mb-1">Not Approved</p>
              <p className="text-sm text-gray-600">Not approved for Cummins business use.</p>
            </div>
          </div>
        </div>

        {/* LLM Platforms */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Cloud className="w-5 h-5 text-gray-500" />
            <h2 className="text-xl font-semibold text-gray-900">LLM Platforms</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">Azure OpenAI Service</h3>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded">
                  Production
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Enterprise access to large language models used across multiple DBU agents.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Strengths</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Alignment with enterprise security and compliance expectations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Data remains within the Azure tenant and is not used for model training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Regional deployment supports data residency needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Reliable performance with enterprise support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Tight integration with existing Azure services</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Best-Fit Agent Patterns</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>Knowledge retrieval and question answering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>Document analysis and summarization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>Engineering and technical documentation assistants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>Multi-turn conversational agents</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Limitations</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                      <span>Higher cost relative to some alternatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                      <span>Limited to OpenAI model family</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                      <span>Requires Azure setup and governance alignment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-50 text-amber-700">
                    <Blocks className="w-4 h-4" />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">Amazon Bedrock</h3>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-100 px-2 py-1 rounded">
                  Evaluation
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Managed access to multiple foundation models within the AWS ecosystem.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Strengths</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Access to multiple model providers within one platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Flexible model selection for experimentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Strong fit for AWS-native workloads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Supports fine-tuning and customization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Built-in safety and guardrail capabilities</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Best-Fit Agent Patterns</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>Agents requiring model comparison or flexibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>AWS-integrated data pipelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>High-volume or batch-oriented workloads</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Limitations</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                      <span>Model quality varies by provider</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                      <span>Pricing complexity across models</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                      <span>Additional learning curve for effective model selection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Platforms */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Network className="w-5 h-5 text-gray-500" />
            <h2 className="text-xl font-semibold text-gray-900">Enterprise Platforms</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                    <AppWindow className="w-4 h-4" />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">Salesforce Agentforce</h3>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2 py-1 rounded">
                  Pilot
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                AI agent capabilities embedded directly within Salesforce workflows.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Strengths</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Native access to Salesforce data and processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Strong fit for sales, service, and CRM-driven use cases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Governance aligned with Salesforce data controls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Reduces integration complexity for Salesforce-centric agents</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Best-Fit Agent Patterns</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>Sales and service support agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>Case summarization and prioritization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>CRM workflow assistance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Limitations</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                      <span>Limited applicability outside Salesforce ecosystem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                      <span>Less flexible for cross-platform agents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-100 text-slate-700">
                    <Database className="w-4 h-4" />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">Palantir</h3>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded">
                  Production
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Enterprise platform for data integration, analytics, and AI-enabled workflows.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Strengths</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Alignment with complex enterprise data environments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Powerful orchestration across systems and processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Built-in governance and auditability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Well-suited for operational and analytical agents</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Best-Fit Agent Patterns</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>Cross-system operational agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>Analytics-driven decision support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>Scenario analysis and planning assistants</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Limitations</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                      <span>Higher implementation complexity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                      <span>Requires platform-specific expertise</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                    <Gauge className="w-4 h-4" />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">Databricks</h3>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded">
                  Production
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Unified platform for data engineering, analytics, and AI development.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Strengths</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Integration with enterprise data assets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Supports large-scale data processing and ML workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Good foundation for data-heavy agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Enables collaboration between data and AI teams</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Best-Fit Agent Patterns</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>Data-intensive analytical agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>Agents grounded in structured and semi-structured data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>Advanced analytics and forecasting use cases</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Limitations</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                      <span>Less suited for conversational-first agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                      <span>Requires data engineering maturity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RAG / Vector Search */}
        {ragTools.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-5 h-5 text-gray-500" />
              <h2 className="text-xl font-semibold text-gray-900">RAG / Vector Search</h2>
            </div>
            <div className="space-y-6">
              {ragTools.map((tool) => {
                const colors = maturityColors[tool.cumminsMaturity];
                return (
                  <div key={tool.name} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-100 text-slate-700">
                          <Database className="w-4 h-4" />
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                      </div>
                      <span className={`text-xs font-semibold uppercase tracking-wider ${colors.text} ${colors.bg} ${colors.border} border px-2 py-1 rounded`}>
                        {tool.cumminsMaturity}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Strengths</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {tool.strengths.map((strength, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Best-Fit Agent Patterns</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {tool.bestFitAgentPatterns.map((pattern, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                              <span>{pattern}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Limitations</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {tool.limitations.map((limitation, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                              <span>{limitation}</span>
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
        )}

        {/* Orchestration and Agent Frameworks */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Scale className="w-5 h-5 text-gray-500" />
            <h2 className="text-xl font-semibold text-gray-900">Orchestration and Agent Frameworks</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-indigo-50 text-indigo-700">
                  <Blocks className="w-4 h-4" />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">LangChain / LangGraph</h3>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded">
                Production
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Frameworks for building structured, multi-step agent workflows.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Strengths</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span>Enables complex reasoning and workflow orchestration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span>Supports tool use and human review checkpoints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span>Strong ecosystem and community support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span>Well-suited for multi-agent architectures</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Best-Fit Agent Patterns</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span>Multi-step reasoning agents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span>Retrieval-augmented generation workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span>Agents requiring coordination across tools or systems</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Limitations</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                    <span>Rapid evolution requires maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                    <span>Added complexity for simple use cases</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* User Interface and Prototyping */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <AppWindow className="w-5 h-5 text-gray-500" />
            <h2 className="text-xl font-semibold text-gray-900">User Interface and Prototyping</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                  <AppWindow className="w-4 h-4" />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">Streamlit</h3>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2 py-1 rounded">
                Pilot
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Lightweight framework for rapid prototyping and internal demos.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Strengths</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span>Fast iteration with minimal frontend effort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span>Python-native development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span>Effective for early validation and stakeholder demos</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Best-Fit Agent Patterns</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span>Proofs of concept</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span>Internal analyst tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span>Early-stage agent demos</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Limitations</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                    <span>Not designed for enterprise-scale production use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                    <span>Limited UI customization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Evaluation and Guardrails */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-gray-500" />
            <h2 className="text-xl font-semibold text-gray-900">Evaluation and Guardrails</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-50 text-amber-700">
                    <ShieldAlert className="w-4 h-4" />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">Guardrails AI</h3>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-100 px-2 py-1 rounded">
                  Evaluation
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Framework for enforcing structured outputs and safety checks.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Strengths</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span>Helps manage risk in sensitive use cases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span>Supports validation and output consistency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span>Integrates with major LLM platforms</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Best-Fit Agent Patterns</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span>Agents handling sensitive or regulated data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span>Customer-facing or high-risk use cases</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Limitations</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                    <span>Adds response latency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                    <span>Customization requires additional development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">Weights &amp; Biases</h3>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 px-2 py-1 rounded">
                  Pilot
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Platform for experiment tracking, evaluation, and collaboration.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Strengths</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span>Support for prompt and agent evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span>Enables comparison and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5" />
                    <span>Supports team collaboration</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Best-Fit Agent Patterns</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span>Prompt experimentation and tuning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span>Agent performance monitoring</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Limitations</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                    <span>SaaS dependency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                    <span>Learning curve for advanced features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Beyond Platforms */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Beyond Platforms</h2>
          <div className="max-w-3xl">
            <p className="text-gray-600 mb-4">
              Building effective AI agents requires more than selecting the right platforms.
              Agents behave differently from traditional applications. They reason, generate
              content, and interact with information in new ways.
            </p>
            <p className="text-gray-600 mb-6">
              The areas below highlight capabilities that shape how agents deliver value,
              reliability, and trust across Cummins.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-100 text-slate-700">
                  <BookOpenCheck className="w-4 h-4" />
                </span>
                <h3 className="font-semibold text-gray-900">Knowledge &amp; Grounding</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Ensure agents are grounded in accurate, current Cummins knowledge that is traceable
                to trusted sources.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Trusted sources</li>
                <li>Current guidance</li>
                <li>Clear attribution</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-indigo-50 text-indigo-700">
                  <Brain className="w-4 h-4" />
                </span>
                <h3 className="font-semibold text-gray-900">Agent Reasoning &amp; Workflows</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Design how agents plan, sequence actions, and coordinate work with appropriate
                human review.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Stepwise tasks</li>
                <li>Multi-source synthesis</li>
                <li>Human checkpoints</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
                <h3 className="font-semibold text-gray-900">Evaluation &amp; Quality</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Maintain reliability as models, prompts, and data evolve.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Measure outcomes</li>
                <li>Detect regressions</li>
                <li>Improve with confidence</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-50 text-amber-700">
                  <Shield className="w-4 h-4" />
                </span>
                <h3 className="font-semibold text-gray-900">Safety &amp; Responsible AI</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Define boundaries and protections to align with Cummins values.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Defined limits</li>
                <li>Sensitive data care</li>
                <li>Transparent behavior</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5 md:col-span-2">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                  <MessageSquareText className="w-4 h-4" />
                </span>
                <h3 className="font-semibold text-gray-900">User Experience &amp; Adoption</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Clear communication builds trust and drives adoption.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Clear interactions</li>
                <li>Feedback loops</li>
                <li>Adoption confidence</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 mt-6">
            These capabilities work together with AI platforms to shape how agents are designed,
            delivered, and trusted. While platforms provide foundational technology, these areas
            determine how effectively agents support real work at Cummins.
          </p>
        </div>

        {/* Guidance */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-2">Need Help Choosing?</h3>
          <p className="text-sm text-blue-800 mb-4">
          The DBU AI Foundry team can help you evaluate options based on your use case, existing systems, and enterprise considerations, not just features.
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
