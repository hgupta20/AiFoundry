import { Container } from '@/components/Container';
import { Badge } from '@/components/Badge';
import {
  BookOpenCheck,
  CheckCircle2,
  Database,
  Eye,
  Lightbulb,
  Lock,
  MessageSquareText,
  PlusCircle,
  Search,
  Share2,
  ShieldCheck,
  UserCheck,
  Users,
  Wrench,
  FileText,
  FileOutput,
  Link2,
  Gauge,
  ArrowRight,
  UsersRound,
} from 'lucide-react';

export const metadata = {
  title: 'About | DBU AI Foundry',
  description: 'What the DBU AI Foundry is and how it supports Cummins teams',
};

export default function AboutPage() {
  return (
    <div className="py-12">
      <Container size="md">
        <div className="mb-12 pb-8 border-b border-gray-200">
          <div className="page-hero page-hero--about px-6 py-6 sm:px-8 sm:py-7">
            <div className="page-hero-content">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
                About
              </p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">DBU AI Foundry</h1>
              <p className="text-xl text-gray-600">
                Engineering-first AI, grounded in Cummins realities. The DBU AI Foundry
                showcases practical agents that support people at work with responsible,
                transparent design.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          {/* What This Is */}
          <section className="mb-12">
            <h2>What This Is</h2>
            <p>
              The DBU AI Foundry is an internal portfolio that showcases AI use cases as Agents.
              Agents are role-based capabilities designed to help Cummins employees work smarter.
              This is not a production system and does not represent a committed roadmap. It
              highlights what exists today, what teams are actively exploring, and what could be
              possible next, without implying delivery commitments.
            </p>
            <div className="not-prose mt-4 bg-gray-50 border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Each agent documents</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  What it helps with
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  Who it is intended for, including roles or user groups
                </li>
                <li className="flex items-center gap-3">
                  <Database className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  What information it uses
                </li>
                <li className="flex items-center gap-3">
                  <FileOutput className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  What it produces
                </li>
                <li className="flex items-center gap-3">
                  <Link2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  Cummins systems or processes it connects to, where applicable
                </li>
                <li className="flex items-center gap-3">
                  <Gauge className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  Its current maturity level
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  Its limitations and guardrails
                </li>
              </ul>
            </div>
          </section>

          {/* Who This Is For */}
          <section className="mb-12">
            <h2>Who This Is For</h2>
            <p>
              The DBU AI Foundry is for all Cummins employees, including engineers, analysts,
              business partners, product owners, and leaders. No technical background is required.
              The intent is to make AI use cases understandable, discoverable, and reusable across
              teams.
            </p>
          </section>

          {/* Core Intent */}
          <section className="mb-12">
            <h2>Core Intent</h2>
            <div className="not-prose grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-3">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Demonstrate Possibilities</h3>
                <p className="text-sm text-gray-600">
                  Show what is possible with AI in Cummins workflows, focused on practical value
                  rather than hype.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                  <MessageSquareText className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Create Shared Vocabulary</h3>
                <p className="text-sm text-gray-600">
                  Establish common language such as agents, maturity levels, and guardrails to
                  improve how AI is discussed across the company.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-3">
                  <Share2 className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Enable Idea Sharing</h3>
                <p className="text-sm text-gray-600">
                  Make it easy for teams to share concepts, learn from existing work, and reduce
                  duplicated effort.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Build Trust</h3>
                <p className="text-sm text-gray-600">
                  Provide transparency into maturity, limitations, and responsible design so teams
                  can engage with AI confidently.
                </p>
              </div>
            </div>
          </section>

          {/* What This Is Not */}
          <section className="mb-12">
            <h2>What This Is Not</h2>
            <p>
              The DBU AI Foundry is not a production system, a committed delivery roadmap, a
              centralized AI platform, or a governance or approval body. Ownership, deployment,
              and operational decisions remain with the appropriate teams and existing processes.
            </p>
          </section>

          {/* Design Philosophy */}
          <section className="mb-12">
            <h2>Design Philosophy</h2>
            <div className="not-prose grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-50 text-red-700">
                    <Wrench className="w-4 h-4" />
                  </span>
                  <h3 className="font-semibold text-gray-900">Industrial-grade and credible</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Engineering-first AI grounded in Cummins realities.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-100 text-slate-700">
                    <Eye className="w-4 h-4" />
                  </span>
                  <h3 className="font-semibold text-gray-900">Clarity over cleverness</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Plain language, clear outcomes, honest limitations.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <h3 className="font-semibold text-gray-900">Trust over flash</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Responsible design and transparency over marketing shine.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-50 text-amber-700">
                    <Users className="w-4 h-4" />
                  </span>
                  <h3 className="font-semibold text-gray-900">Designed to augment work</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Reduce manual effort while keeping human accountability.
                </p>
              </div>
            </div>
          </section>

          {/* Maturity Model */}
          <section className="mb-12">
            <h2>Maturity Model</h2>
            <p>
              Each agent is labeled with a clear maturity status to set expectations.
            </p>
            
            <div className="not-prose mt-6 space-y-4">
              <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <Badge maturity="Live" />
                <div>
                  <h4 className="font-medium text-gray-900">Live</h4>
                  <p className="text-sm text-gray-600">
                    Available and in use, delivering proven value.
                  </p>
                </div>

              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <Badge maturity="Pilot" />
                <div>
                  <h4 className="font-medium text-gray-900">Pilot</h4>
                  <p className="text-sm text-gray-600">
                    In validation with limited users to gather feedback and refine.
                  </p>
                </div>

              </div>
              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <Badge maturity="Concept" />
                <div>
                  <h4 className="font-medium text-gray-900">Concept</h4>
                  <p className="text-sm text-gray-600">
                    Defined and scoped, but not yet built or deployed. Not a commitment to deliver.
                  </p>
                </div>

              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Badge maturity="Vision" />
                <div>
                  <h4 className="font-medium text-gray-900">Vision</h4>
                  <p className="text-sm text-gray-600">
                    Future-looking ideas with high potential. Not a commitment to deliver.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Guardrails */}
          <section className="mb-12">
            <h2>Guardrails</h2>
            <p>
              Responsible AI is foundational to how agents in the Foundry are designed and shared.
              Guardrails ensure solutions are trustworthy, transparent, and aligned with Cummins
              values while enabling innovation and automation.
            </p>
            <div className="not-prose mt-4 grid md:grid-cols-2 gap-4">
              <div className="bg-amber-50/70 border border-amber-100 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-100 text-amber-700">
                    <UserCheck className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Human oversight</h3>
                    <p className="text-sm text-gray-700">
                      Appropriate levels of review based on risk and maturity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50/70 border border-amber-100 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-100 text-amber-700">
                    <Database className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Grounded sources</h3>
                    <p className="text-sm text-gray-700">
                      Grounding in approved or designated sources where applicable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50/70 border border-amber-100 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-100 text-amber-700">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Clear boundaries</h3>
                    <p className="text-sm text-gray-700">
                      Stated limitations and a defined scope for each agent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50/70 border border-amber-100 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-100 text-amber-700">
                    <Eye className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Transparency</h3>
                    <p className="text-sm text-gray-700">
                      Clear disclosure of what the agent can and cannot do.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50/70 border border-amber-100 rounded-lg p-5 md:col-span-2">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-100 text-amber-700">
                    <Lock className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Controlled access</h3>
                    <p className="text-sm text-gray-700">
                      No unintended control of critical systems without review.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Engage */}
          <section className="mb-12">
            <h2>How to Engage</h2>
            <div className="not-prose bg-white border border-gray-200 rounded-lg p-5">
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-3">
                  <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  Browse Agents to explore existing use cases and ideas
                </li>
                <li className="flex items-center gap-3">
                  <PlusCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  Submit an Idea to share concepts or in-progress work
                </li>
                <li className="flex items-center gap-3">
                  <BookOpenCheck className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  Learn from other teams working on similar challenges
                </li>
              </ul>
            </div>
            <p className="mt-4">
              Inclusion in the Foundry does not imply funding, prioritization, or delivery
              commitment.
            </p>
          </section>

          {/* Stewardship */}
          <section className="mb-12">
            <h2>Stewardship</h2>
            <p>
              The DBU AI Foundry is stewarded by the DBU team as a curated portfolio. DBU&apos;s role
              is to document, connect, and amplify AI work created by DBU teams and partners across
              Cummins, providing visibility and shared context rather than ownership or operational
              control.
            </p>
          </section>

          {/* What Success Looks Like */}
          <section className="mb-12">
            <h2>What Success Looks Like</h2>
            <p>
              Success is reflected in reduced duplication of effort, faster learning across teams,
              better conversations about AI, and increased confidence in applying AI responsibly
              across Cummins.
            </p>
          </section>

          {/* Get Started */}
          <section className="mb-12">
            <h2>Get Started</h2>
            <div className="not-prose mt-6 flex flex-wrap gap-4">
              <a 
                href="/agents" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
              >
                <Search className="w-4 h-4" />
                Browse Agents
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="/submit" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                Submit an Idea
              </a>
              <a 
                href="/tools" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <Wrench className="w-4 h-4" />
                Tools vs Agents
              </a>
              <a 
                href="/team" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <UsersRound className="w-4 h-4" />
                Meet the Team
              </a>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
