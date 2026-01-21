import { Container } from '@/components/Container';
import { getTeamMembers } from '@/lib/content';

export const metadata = {
  title: 'Foundry Team | AI Foundry',
  description: 'Meet the stewards and contributors enabling AI at Cummins',
};

export default function TeamPage() {
  const teamMembers = getTeamMembers();
  const stewards = teamMembers.filter(m => m.type === 'steward');
  const contributors = teamMembers.filter(m => m.type === 'contributor');

  return (
    <div className="py-12">
      <Container>
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Foundry Team</h1>
          <p className="text-gray-600 max-w-2xl">
            The AI Foundry is a stewardship model—we curate the portfolio, enable teams, 
            and ensure responsible AI practices. This isn&apos;t about building everything ourselves.
          </p>
        </div>

        {/* Stewards */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Foundry Stewards</h2>
          <p className="text-sm text-gray-500 mb-6">
            Responsible for portfolio curation, governance, and AI standards
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {stewards.map((member) => (
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
                <p className="text-sm text-red-600 mb-4">{member.role}</p>
                
                <div className="flex flex-wrap gap-1.5">
                  {member.focus.map((area) => (
                    <span 
                      key={area} 
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contributors */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Contributors & Partners</h2>
          <p className="text-sm text-gray-500 mb-6">
            Design, engineering, and domain expertise powering the portfolio
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {contributors.map((member) => (
              <div 
                key={member.name} 
                className="bg-gray-50 border border-gray-100 rounded-lg p-4"
              >
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mb-3">
                  <span className="text-sm font-medium text-gray-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 className="font-medium text-gray-900 text-sm">{member.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{member.role}</p>
                
                <div className="flex flex-wrap gap-1">
                  {member.focus.slice(0, 2).map((area) => (
                    <span 
                      key={area} 
                      className="text-xs text-gray-500"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Get Involved */}
        <div className="bg-gray-900 text-white rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-6">Get Involved</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-2">Submit an Idea</h3>
              <p className="text-sm text-gray-400 mb-3">
                You don&apos;t need the perfect idea—bring a real problem and we&apos;ll explore 
                whether AI can help.
              </p>
              <a 
                href="/submit" 
                className="text-sm font-medium text-red-400 hover:text-red-300"
              >
                Submit an idea →
              </a>
            </div>
            <div>
              <h3 className="font-medium mb-2">Join a Pilot</h3>
              <p className="text-sm text-gray-400 mb-3">
                Active pilots need real users. If you&apos;re in a relevant role, 
                ask your manager about participating.
              </p>
              <a 
                href="/agents?maturity=Pilot" 
                className="text-sm font-medium text-red-400 hover:text-red-300"
              >
                See pilots →
              </a>
            </div>
            <div>
              <h3 className="font-medium mb-2">Contribute Expertise</h3>
              <p className="text-sm text-gray-400 mb-3">
                We need domain experts, data owners, and process SMEs to build 
                agents that actually work.
              </p>
              <span className="text-sm text-gray-500">
                Contact: foundry@cummins.com
              </span>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            The Foundry is about enablement, not ownership. We succeed when AI works for teams across Cummins—not when we get credit.
          </p>
        </div>
      </Container>
    </div>
  );
}
