import { Container } from '@/components/Container';

export const metadata = {
  title: 'Team & Stewardship | DBU AI Foundry',
  description: 'Stewardship and enablement supporting the DBU AI Foundry',
};

export default function TeamPage() {
  const coreStewards = [
    {
      name: 'Shannon Metz',
      role: 'Business Owner and Project Sponsor',
      note: 'Title placeholder',
      description:
        'Provides executive sponsorship and business alignment for the DBU AI Foundry. Ensures the Foundry remains focused on real business value, responsible adoption, and alignment with Cummins priorities.',
    },
    {
      name: 'Jagdheer Killi',
      role: 'IT Owner',
      note: 'Title placeholder',
      description:
        'Provides architectural guidance and ensures alignment with enterprise technology principles, security expectations, and scalable design patterns.',
    },
    {
      name: 'Harsh Gupta',
      role: 'Application Owner and Technical Owner',
      note: 'Title placeholder',
      description:
        'Leads application-level design and implementation patterns that support agent development, experimentation, and integration across platforms.',
    },
    {
      name: 'Rajesh Babu',
      role: 'Platform Owner',
      note: 'Title placeholder',
      description:
        'Supports platform-level enablement and alignment across AI technologies used by agents in the Foundry, ensuring practical fit and responsible use.',
    },
  ];

  return (
    <div className="py-12">
      <Container>
        <div className="mb-10">
          {/* <h1 className="text-3xl font-bold text-gray-900 mb-2">Team &amp; Stewardship</h1> */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Team</h1>
          <div className="max-w-3xl text-gray-600 space-y-3">
            <p>
            The DBU AI Foundry is supported by a small core team that helps maintain and organize the Foundry and align technical approaches. This team does not own or operate all agents
              in the Foundry. Instead, it helps create shared visibility, consistency, and
              connection across AI work happening in DBU and beyond.
            </p>
            <p>
              Agents showcased in the Foundry are built and owned by many different teams across
              Cummins.
            </p>
          </div>
        </div>

        {/* Core Stewardship Team */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Core Team</h2>
          <p className="text-sm text-gray-500 mb-6">Titles listed are placeholders.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {coreStewards.map((member) => (
              <div 
                key={member.name} 
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-lg font-semibold text-red-700">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-red-600 mb-1">{member.role}</p>
                <p className="text-xs text-gray-500 mb-3">{member.note}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How This Team Supports the Foundry */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">How This Team Supports the Foundry</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="grid md:grid-cols-[1.6fr_1fr] gap-6 items-start">
              <div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Provide guidance and align with business priorities when needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Enable consistent patterns for building and sharing agents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Support responsible AI practices and clear transparency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>Connect teams working on similar use cases and challenges</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 mb-2">
                  Ownership Stays Local
                </p>
                <p className="text-sm text-gray-600">
                  The team does not replace existing ownership models. Agent ownership, delivery,
                  and operations remain with the teams building and using them.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* A Shared Effort Across Cummins */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">A Shared Effort Across Cummins</h2>
          <div className="max-w-3xl text-gray-600 space-y-3">
            <p>
              The DBU AI Foundry reflects contributions from many teams across Cummins. Its
              success depends on collaboration, idea sharing, and local ownership of solutions.
            </p>
            <p>
              The Foundry exists to make that work more visible, reusable, and easier to learn
              from.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <p className="text-gray-600 mb-6">
            If you are building or exploring an AI agent and would like it represented in the
            Foundry, we welcome contributions and collaboration.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Submit an Idea</h3>
              <p className="text-sm text-gray-600 mb-4">
                You don&apos;t need the perfect idea. Bring a real problem and we&apos;ll explore whether
                AI can help.
              </p>
              <a 
                href="/submit" 
                className="text-sm font-medium text-red-600 hover:text-red-700"
              >
                Submit an idea →
              </a>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="font-semibold text-gray-900 mb-2">Join a Pilot</h3>
              <p className="text-sm text-gray-600 mb-4">
                Active pilots need real users. If you&apos;re in a relevant role, ask your manager
                about participating.
              </p>
              <a 
                href="/agents?maturity=Pilot" 
                className="text-sm font-medium text-red-600 hover:text-red-700"
              >
                See pilots →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
