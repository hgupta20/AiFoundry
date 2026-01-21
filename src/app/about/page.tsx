import { Container } from '@/components/Container';
import { Badge } from '@/components/Badge';

export const metadata = {
  title: 'About | AI Foundry',
  description: 'Why the Cummins AI Foundry exists and how we work',
};

export default function AboutPage() {
  return (
    <div className="py-12">
      <Container size="md">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">About AI Foundry</h1>
          <p className="text-xl text-gray-600">
            Engineering-first AI for Cummins. We showcase practical agents that 
            deliver value—grounded, responsible, and human-in-the-loop.
          </p>
        </div>

        <div className="prose max-w-none">
          {/* What This Is */}
          <section className="mb-12">
            <h2>What This Is</h2>
            <p>
              The AI Foundry is an internal portfolio showcasing AI use cases as &quot;Agents&quot;—role-based 
              capabilities that help Cummins employees work smarter. This is not a production system 
              and not a committed roadmap. It&apos;s a credible showcase of what&apos;s possible.
            </p>
            <p>
              <strong>Agents deliver value. Tools enable agents.</strong> Every agent has clear inputs, 
              outputs, guardrails, and maturity status. We believe in assistive copilots, not 
              autonomous decision-makers.
            </p>
          </section>

          {/* Core Intent */}
          <section className="mb-12">
            <h2>Core Intent</h2>
            <div className="not-prose grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Demonstrate Possibilities</h3>
                <p className="text-sm text-gray-600">
                  Show what&apos;s possible with GenAI in Cummins workflows—big value, big impact, 
                  without the hype.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Create Shared Vocabulary</h3>
                <p className="text-sm text-gray-600">
                  Agents, lanes, maturity levels—a common language for talking about AI at Cummins.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Enable Submissions</h3>
                <p className="text-sm text-gray-600">
                  Turn this into a living portfolio by making it easy for anyone to submit ideas.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">Build Trust</h3>
                <p className="text-sm text-gray-600">
                  Transparency about maturity, guardrails, and stewardship builds confidence in AI.
                </p>
              </div>
            </div>
          </section>

          {/* Design Philosophy */}
          <section className="mb-12">
            <h2>Design Philosophy</h2>
            <div className="not-prose bg-gray-900 text-white rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-400">●</span>
                  <span><strong>Industrial-grade, credible, calm.</strong> Engineering-first AI, not consumer flash.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">●</span>
                  <span><strong>Clarity over cleverness.</strong> Plain language, clear outcomes, honest limitations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">●</span>
                  <span><strong>Trust over flash.</strong> Guardrails and transparency, not marketing hype.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">●</span>
                  <span><strong>Assistive copilots.</strong> Humans remain accountable—AI assists, never decides autonomously.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Maturity Model */}
          <section className="mb-12">
            <h2>Maturity Model</h2>
            <p>
              Every agent has a clear maturity status. We&apos;re transparent about what&apos;s real 
              and what&apos;s aspirational.
            </p>
            
            <div className="not-prose mt-6 space-y-4">
              <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <Badge maturity="Live" />
                <div>
                  <h4 className="font-medium text-gray-900">Live</h4>
                  <p className="text-sm text-gray-600">
                    Real and available. Production agents actively delivering value with proven impact metrics.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <Badge maturity="Pilot" />
                <div>
                  <h4 className="font-medium text-gray-900">Pilot</h4>
                  <p className="text-sm text-gray-600">
                    Limited users, in validation. Testing with real users and data to gather feedback and refine.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <Badge maturity="Concept" />
                <div>
                  <h4 className="font-medium text-gray-900">Concept</h4>
                  <p className="text-sm text-gray-600">
                    Defined idea, not built. Validated concept with clear potential—<strong>not committed to ship.</strong>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Badge maturity="Vision" />
                <div>
                  <h4 className="font-medium text-gray-900">Vision</h4>
                  <p className="text-sm text-gray-600">
                    High-impact future. Aspirational agents we&apos;re exploring—<strong>not committed to ship.</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Guardrails */}
          <section className="mb-12">
            <h2>Guardrails Language</h2>
            <p>
              Every agent includes guardrails. These aren&apos;t optional—they&apos;re core to how we 
              build responsible AI at Cummins.
            </p>
            <div className="not-prose mt-4 bg-amber-50 border border-amber-100 rounded-lg p-5">
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-amber-600 font-bold">⚠</span>
                  <strong>Assistive only</strong>—humans remain accountable for all decisions
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-amber-600 font-bold">⚠</span>
                  <strong>Grounded in approved sources</strong> where applicable
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-amber-600 font-bold">⚠</span>
                  <strong>Human review required</strong> for decisions and actions
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-amber-600 font-bold">⚠</span>
                  <strong>No autonomous control</strong> of systems in v1
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="text-amber-600 font-bold">⚠</span>
                  <strong>Clear limitations</strong>—every agent states what it cannot do
                </li>
              </ul>
            </div>
          </section>

          {/* Get Started */}
          <section className="mb-12">
            <h2>Get Started</h2>
            <div className="not-prose mt-6 flex flex-wrap gap-4">
              <a 
                href="/agents" 
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
              >
                Browse Agents
              </a>
              <a 
                href="/submit" 
                className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Submit an Idea
              </a>
              <a 
                href="/tools" 
                className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Tools vs Agents
              </a>
              <a 
                href="/team" 
                className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Meet the Team
              </a>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
