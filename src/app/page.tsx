import Link from 'next/link';
import { Container } from '@/components/Container';
import { Badge } from '@/components/Badge';
import { getAllAgents, laneDescriptions } from '@/lib/content';
import {
  Activity,
  ArrowRight,
  Compass,
  DoorOpen,
  Factory,
  Gauge,
  Handshake,
  Layers,
  Lightbulb,
  Rocket,
  Shield,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react';

const canonicalLanes = ['Front Door', 'Build', 'Make', 'Sell & Serve', 'Run', 'Protect', 'Transform'];
const laneIcons: Record<string, JSX.Element> = {
  'Front Door': <DoorOpen className="w-5 h-5 text-gray-600" />,
  'Build': <Wrench className="w-5 h-5 text-gray-600" />,
  'Make': <Factory className="w-5 h-5 text-gray-600" />,
  'Sell & Serve': <Handshake className="w-5 h-5 text-gray-600" />,
  'Run': <Activity className="w-5 h-5 text-gray-600" />,
  'Protect': <Shield className="w-5 h-5 text-gray-600" />,
  'Transform': <Rocket className="w-5 h-5 text-gray-600" />,
};

export default function HomePage() {
  const agents = getAllAgents();
  const liveAgents = agents.filter(a => a.maturity === 'Live');
  const pilotAgents = agents.filter(a => a.maturity === 'Pilot');
  const conceptAgents = agents.filter(a => a.maturity === 'Concept');
  const visionAgents = agents.filter(a => a.maturity === 'Vision');
  
  // Get flagship agents for featuring
  const frontDoorAgent = agents.find(a => a.slug === 'ai-triage-assistant');
  const technicianAgent = agents.find(a => a.slug === 'service-technician-copilot');
  const transformAgent = agents.find(a => a.slug === 'fleet-reliability-agent');
  const featuredAgents = [frontDoorAgent, technicianAgent, transformAgent].filter(Boolean);

  return (
    <div className="py-12">
      {/* Hero Section */}
      <Container>
        <div className="home-hero px-6 py-6 sm:px-8 sm:py-8 mb-12">
          <div className="home-hero-content max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
              <Sparkles className="w-4 h-4 text-red-600" />
              DBU AI Foundry
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Practical AI agents for Cummins teams
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              A catalog of AI use cases at Cummins. Browse what&apos;s available, 
              see what&apos;s coming, and submit your own ideas.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                href="/agents" 
                className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
              >
                Browse {agents.length} Agents
              </Link>
              <Link 
                href="/submit" 
                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Submit an Idea
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Quick Stats */}
      <Container>
        <div className="flex items-center gap-6 text-sm mb-12 pb-12 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span className="text-gray-600"><strong className="text-gray-900">{liveAgents.length}</strong> Live</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span className="text-gray-600"><strong className="text-gray-900">{pilotAgents.length}</strong> in Pilot</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            <span className="text-gray-600"><strong className="text-gray-900">{conceptAgents.length}</strong> Concepts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
            <span className="text-gray-600"><strong className="text-gray-900">{visionAgents.length}</strong> Vision</span>
          </div>
        </div>
      </Container>

      {/* Featured Agents */}
      <Container>
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gray-500" />
              <h2 className="text-xl font-semibold text-gray-900">Featured Agents</h2>
            </div>
            <Link href="/agents" className="text-sm text-red-600 hover:text-red-700 font-medium">
              View all {agents.length} agents →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredAgents.map((agent) => agent && (
              <Link 
                key={agent.slug}
                href={`/agents/${agent.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Badge maturity={agent.maturity} size="sm" />
                  <span className="text-xs text-gray-500">{agent.lane}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
                  {agent.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {agent.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {agent.persona.slice(0, 2).map((p) => (
                    <span key={p} className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {p}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>

      {/* Lanes Section */}
      <div className="bg-white border-y border-gray-200 py-12 mb-16">
        <Container>
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-5 h-5 text-gray-500" />
            <h2 className="text-xl font-semibold text-gray-900">AI Across Cummins</h2>
          </div>
          <p className="text-gray-500 mb-6">Agents organized by how Cummins works</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {canonicalLanes.map((lane) => {
              const laneAgents = agents.filter(a => a.lane === lane);
              const info = laneDescriptions[lane];
              return (
                <Link
                  key={lane}
                  href={`/agents?lane=${encodeURIComponent(lane)}`}
                  className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
                >
                  <div className="mb-2">{laneIcons[lane]}</div>
                  <h3 className="font-medium text-gray-900 mb-1">{lane}</h3>
                  <p className="text-sm text-gray-500 mb-2 line-clamp-2">{info?.description}</p>
                  <p className="text-xs text-gray-400">{laneAgents.length} agent{laneAgents.length !== 1 ? 's' : ''}</p>
                </Link>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Maturity Model */}
      <Container>
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <Gauge className="w-5 h-5 text-gray-500" />
            <h2 className="text-xl font-semibold text-gray-900">Maturity Model</h2>
          </div>
          <p className="text-gray-500 mb-6">Every agent has a clear maturity status</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-lg bg-emerald-50 border border-emerald-100">
              <Badge maturity="Live" />
              <p className="mt-3 text-sm text-gray-600">
                Real and available. Production agents actively delivering value with proven impact.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-blue-50 border border-blue-100">
              <Badge maturity="Pilot" />
              <p className="mt-3 text-sm text-gray-600">
                Limited users, in validation. Testing with real users to gather feedback and refine.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-amber-50 border border-amber-100">
              <Badge maturity="Concept" />
              <p className="mt-3 text-sm text-gray-600">
                Defined idea, not built. Validated concept with clear path, not committed to ship.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-slate-50 border border-slate-100">
              <Badge maturity="Vision" />
              <p className="mt-3 text-sm text-gray-600">
                High-impact future. Aspirational agents we&apos;re exploring, not committed to ship.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Quick Links */}
      <Container>
        <div className="grid md:grid-cols-3 gap-6">
          <Link 
            href="/submit"
            className="p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-red-50 text-red-700 flex items-center justify-center mb-4">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-700">
              Submit an Idea
            </h3>
            <p className="text-sm text-gray-600">
              You don&apos;t need the perfect idea. Bring a real problem and we&apos;ll explore together.
            </p>
            <span className="text-sm font-medium text-red-600 inline-flex items-center gap-1 mt-4">
              Share an idea <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <Link 
            href="/tools"
            className="p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-700">
              AI Platforms
            </h3>
            <p className="text-sm text-gray-600">
              Understand the building blocks. Tools are enablers; agents deliver business value.
            </p>
            <span className="text-sm font-medium text-red-600 inline-flex items-center gap-1 mt-4">
              Explore platforms <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <Link 
            href="/team"
            className="p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all group"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-700">
              Team &amp; Stewardship
            </h3>
            <p className="text-sm text-gray-600">
              Meet the stewards curating the portfolio and enabling AI across Cummins.
            </p>
            <span className="text-sm font-medium text-red-600 inline-flex items-center gap-1 mt-4">
              Learn more <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
