import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <Container>
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/logo.png" 
                  alt="Cummins" 
                  width={32} 
                  height={32}
                  className="h-8 w-auto"
                />
                <div>
                  <span className="font-semibold text-gray-900">AI Foundry</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 max-w-md">
                Cummins AI Foundry showcases our internal AI use cases, tools, and best practices. 
                Building practical AI solutions that deliver measurable business value.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Navigation</h3>
              <ul className="space-y-2">
                <li><Link href="/agents" className="text-sm text-gray-600 hover:text-gray-900">Agent Gallery</Link></li>
                <li><Link href="/tools" className="text-sm text-gray-600 hover:text-gray-900">Tool Comparison</Link></li>
                <li><Link href="/submit" className="text-sm text-gray-600 hover:text-gray-900">Submit an Idea</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/team" className="text-sm text-gray-600 hover:text-gray-900">Our Team</Link></li>
                <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">About AI Foundry</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Cummins Inc. Internal use only.
            </p>
            <p className="text-sm text-gray-500">
              AI Foundry v1.0
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

