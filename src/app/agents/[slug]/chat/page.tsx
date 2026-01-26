import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { Badge, LaneBadge } from '@/components/Badge';
import { getAgentBySlug, getAllAgents } from '@/lib/content';
import {
  ArrowLeft,
  Bot,
  ClipboardList,
  MessageSquarePlus,
  Mic,
  Paperclip,
  Send,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface AgentChatPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const agents = getAllAgents();
  return agents.map((agent) => ({
    slug: agent.slug,
  }));
}

export async function generateMetadata({ params }: AgentChatPageProps) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) return { title: 'Agent Not Found' };

  return {
    title: `Chat with ${agent.name} | DBU AI Foundry`,
    description: `Start a conversation with ${agent.name}.`,
  };
}

export default async function AgentChatPage({ params }: AgentChatPageProps) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    notFound();
  }

  const initials = agent.name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="py-12">
      <Container size="lg">
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/agents" className="text-gray-500 hover:text-gray-700">
                Agents
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href={`/agents/${agent.slug}`} className="text-gray-500 hover:text-gray-700">
                {agent.name}
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">Chat</li>
          </ol>
        </nav>

        <div className="mb-10">
          <div className="page-hero page-hero--agents px-6 py-6 sm:px-8 sm:py-7">
            <div className="page-hero-content">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge maturity={agent.maturity} />
                <LaneBadge lane={agent.lane} />
                <span className="text-sm text-gray-500">Interactive session</span>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Chat with {agent.name}</h1>
                  <p className="text-lg text-gray-600 max-w-2xl">{agent.tagline}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:border-gray-300 hover:text-gray-900 transition-colors"
                  >
                    <MessageSquarePlus className="w-4 h-4" />
                    New chat
                  </button>
                  <Link
                    href={`/agents/${agent.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:border-gray-300 hover:text-gray-900 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Agent details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <section className="bg-white border border-gray-200 rounded-2xl shadow-sm">
            <header className="border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white flex items-center justify-center text-sm font-semibold">
                  {initials}
                </div>
                <div>
                  <p className="text-sm text-gray-500">Agent workspace</p>
                  <h2 className="text-lg font-semibold text-gray-900">{agent.name}</h2>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Ready
              </div>
            </header>

            <div className="px-6 py-6 space-y-6 bg-gradient-to-b from-gray-50 via-white to-white">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="max-w-[80%] bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                  <p className="text-sm text-gray-500 mb-2">Assistant • 9:01 AM</p>
                  <p className="text-gray-800 text-sm">
                    Hi! I’m ready to help. Share a question, a document summary, or a decision you need to make.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">Safety checklist</span>
                    <span className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">Root cause</span>
                    <span className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">Next steps</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-end gap-3">
                <div className="max-w-[80%] bg-gray-900 text-white rounded-2xl p-4 shadow-sm">
                  <p className="text-xs text-gray-300 mb-2">You • 9:02 AM</p>
                  <p className="text-sm">
                    Summarize the issue reported in the last warranty claim and outline potential fixes.
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-sm font-semibold">
                  You
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="max-w-[80%] bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                  <p className="text-sm text-gray-500 mb-2">Assistant • 9:03 AM</p>
                  <p className="text-sm text-gray-800">
                    I can help with that. Share the claim notes or paste the key data points, and I’ll synthesize the
                    summary, hypotheses, and recommended actions.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                      <ClipboardList className="w-3.5 h-3.5" />
                      Requesting claim details
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Guardrails enabled
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className="border-t border-gray-100 px-6 py-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-xs font-medium text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-gray-300"
                  >
                    <Paperclip className="w-3.5 h-3.5" />
                    Attach
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-xs font-medium text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-gray-300"
                  >
                    <Mic className="w-3.5 h-3.5" />
                    Voice
                  </button>
                  <span className="text-xs text-gray-500">Supported: PDF, CSV, images</span>
                </div>
                <div className="flex items-end gap-3">
                  <label htmlFor="chat-input" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="chat-input"
                    rows={3}
                    placeholder="Ask for a summary, draft, or recommendation..."
                    className="flex-1 resize-none rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
                  />
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700"
                  >
                    <Send className="w-4 h-4" />
                    Send
                  </button>
                </div>
              </div>
            </footer>
          </section>

          <aside className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Session guidance</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-red-500 mt-0.5" />
                  <span>Share the decision context or data snapshots to speed up analysis.</span>
                </div>
                <div className="flex items-start gap-3">
                  <ClipboardList className="w-4 h-4 text-red-500 mt-0.5" />
                  <span>Attach relevant documents so the agent can ground recommendations.</span>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-red-500 mt-0.5" />
                  <span>Guardrails stay on—no sensitive data is stored beyond the session.</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Suggested starters</h3>
              <div className="flex flex-wrap gap-2">
                {agent.prompts.slice(0, 4).map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    className="text-xs text-gray-700 bg-white border border-gray-200 px-3 py-2 rounded-full hover:border-gray-300"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">About this agent</h3>
              <p className="text-sm text-gray-600 mb-4">{agent.overview}</p>
              <div className="flex flex-wrap gap-2">
                {agent.persona.map((persona) => (
                  <span key={persona} className="text-xs text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                    {persona}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
