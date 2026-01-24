import { Container } from '@/components/Container';
import { BookOpen, Building2, Clock, Globe, Link2 } from 'lucide-react';

export const metadata = {
  title: 'Resources | DBU AI Foundry',
  description: 'Internal and external resources for AI agents and responsible adoption',
};

const internalResources = [
  {
    title: 'Internal guidance and playbooks',
    description:
      'Shared references, patterns, and examples that help teams build and review AI agents responsibly.',
    status: 'Coming soon',
  },
  {
    title: 'DBU AI Foundry updates',
    description:
      'Periodic updates on new agents, pilots, and lessons learned across Cummins teams.',
    status: 'Coming soon',
  },
  {
    title: 'Responsible AI references',
    description:
      'Internal guidance on transparency, human oversight, and safe usage expectations.',
    status: 'Coming soon',
  },
];

const externalResources = [
  {
    title: 'Advancing human and AI collaboration',
    description:
      'Perspective on how organizations can design human and AI collaboration for real outcomes.',
    source: 'Deloitte',
    href: 'https://www.deloitte.com/us/en/services/consulting/content/advancing-human-ai-collaboration.html',
  },
  {
    title: 'Enterprise AI platform use cases',
    description:
      'An overview of enterprise AI capabilities and use cases designed for business teams.',
    source: 'IBM',
    href: 'https://www.ibm.com/think/topics/artificial-intelligence-business-use-cases',
  },
  {
    title: 'Real world generative AI use cases',
    description:
      'Examples of how teams apply generative AI across industries and workflows.',
    source: 'Google Cloud',
    href: 'https://cloud.google.com/transform/101-real-world-generative-ai-use-cases-from-industry-leaders',
  },
];

export default function ResourcesPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
            <BookOpen className="w-4 h-4 text-red-600" />
            Resources
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">AI resources for teams</h1>
          <p className="text-gray-600 max-w-3xl">
            A curated set of internal and external references to support clear, responsible, and
            practical AI agent work across Cummins.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-gray-500" />
            <h2 className="text-xl font-semibold text-gray-900">Internal Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {internalResources.map((resource) => (
              <div
                key={resource.title}
                className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 animate-pulse">
                  Coming soon
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-gray-500" />
            <h2 className="text-xl font-semibold text-gray-900">External Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {externalResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all group"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                  <Link2 className="w-5 h-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 mb-2">
                  {resource.source}
                </p>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-700">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
