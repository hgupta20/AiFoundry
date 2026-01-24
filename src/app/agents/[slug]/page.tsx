import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Badge, LaneBadge } from '@/components/Badge';
import { getAgentBySlug, getAllAgents } from '@/lib/content';

interface AgentDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const agents = getAllAgents();
  return agents.map((agent) => ({
    slug: agent.slug,
  }));
}

export async function generateMetadata({ params }: AgentDetailPageProps) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) return { title: 'Agent Not Found' };
  
  return {
    title: `${agent.name} | DBU AI Foundry`,
    description: agent.tagline,
  };
}

export default async function AgentDetailPage({ params }: AgentDetailPageProps) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    notFound();
  }

  const allAgents = getAllAgents();
  const relatedAgents = agent.relatedAgents
    ?.map((slug) => allAgents.find((a) => a.slug === slug))
    .filter(Boolean) || [];

  const isNotCommitted = agent.maturity === 'Concept' || agent.maturity === 'Vision';

  return (
    <div className="py-12">
      <Container size="md">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/agents" className="text-gray-500 hover:text-gray-700">
                Agents
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">{agent.name}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge maturity={agent.maturity} />
            <LaneBadge lane={agent.lane} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{agent.name}</h1>
          <p className="text-xl text-gray-600">{agent.tagline}</p>
          
          {/* Maturity disclaimer for Concept/Vision */}
          {isNotCommitted && (
            <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> This is a {agent.maturity.toLowerCase()} agent—not committed to ship. 
                We&apos;re exploring feasibility and fit.
              </p>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-sm text-gray-500">For:</span>
            {agent.persona.map((p) => (
              <span key={p} className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="prose max-w-none">
          {/* Overview */}
          <section className="mb-10">
            <h2>Overview</h2>
            <p>{agent.overview}</p>
          </section>

          {/* What it Does */}
          <section className="mb-10">
            <h2>What It Does</h2>
            <ul>
              {agent.whatItDoes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Example Prompts */}
          <section className="mb-10">
            <h2>Example Prompts</h2>
            <div className="bg-gray-50 rounded-lg p-5 not-prose">
              <ul className="space-y-3">
                {agent.prompts.map((prompt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 font-mono text-sm mt-0.5">→</span>
                    <span className="text-gray-700 italic">&quot;{prompt}&quot;</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Inputs & Outputs */}
          <section className="mb-10">
            <h2>Inputs & Outputs</h2>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-green-500">↓</span> Inputs
                </h3>
                <ul className="space-y-2">
                  {agent.inputs.map((input, idx) => (
                    <li key={idx} className="text-sm text-gray-600 pl-4 border-l-2 border-gray-100">
                      {input}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-blue-500">↑</span> Outputs
                </h3>
                <ul className="space-y-2">
                  {agent.outputs.map((output, idx) => (
                    <li key={idx} className="text-sm text-gray-600 pl-4 border-l-2 border-gray-100">
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Impact */}
          {agent.impact && agent.impact.length > 0 && (
            <section className="mb-10">
              <h2>Business Impact</h2>
              <div className="grid sm:grid-cols-3 gap-4 not-prose">
                {agent.impact.map((impact, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-5">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{impact.value}</div>
                    <div className="text-sm font-medium text-gray-700 mb-2">{impact.metric}</div>
                    <div className="text-xs text-gray-500">{impact.description}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Guardrails */}
          <section className="mb-10">
            <h2>Guardrails & Trust</h2>
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-5 not-prose">
              <p className="text-sm text-amber-900 mb-4 font-medium">
                Every agent operates within clear boundaries:
              </p>
              <ul className="space-y-3">
                {agent.guardrails.map((guardrail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-amber-600 font-bold mt-0.5">⚠</span>
                    {guardrail}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* What's Next - Only for Concept/Vision */}
          {agent.whatsNext && (
            <section className="mb-10">
              <h2>What&apos;s Next</h2>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 not-prose">
                <p className="text-sm text-blue-900">{agent.whatsNext}</p>
              </div>
            </section>
          )}

          {/* Related Agents */}
          {relatedAgents.length > 0 && (
            <section className="mb-10">
              <h2>Related Agents</h2>
              <div className="grid sm:grid-cols-2 gap-4 not-prose">
                {relatedAgents.map((related) => related && (
                  <Link
                    key={related.slug}
                    href={`/agents/${related.slug}`}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{related.name}</span>
                      <Badge maturity={related.maturity} size="sm" />
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2">{related.tagline}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/agents" 
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-2"
          >
            ← Back to Agent Gallery
          </Link>
        </div>
      </Container>
    </div>
  );
}
