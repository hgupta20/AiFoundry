'use client';

import { useState } from 'react';
import { Container } from '@/components/Container';
import { ClipboardList, Lightbulb, Target } from 'lucide-react';

const businessUnits = [
  'Engine',
  'Power Systems',
  'Components',
  'Distribution',
  'Accelera',
  'Corporate',
  'Atmus',
  'Other',
];

const impactTypes = [
  'Time saved',
  'Cost reduction',
  'Quality improvement',
  'Safety or compliance',
  'Customer experience',
  'Reliability or uptime',
  'Risk reduction',
];

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    // About You
    wwid: '',
    businessUnit: '',
    role: '',
    collaborators: '',
    // Problem
    problem: '',
    // Impact
    impactTypes: [] as string[],
    impactNarrative: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMultiSelect = (field: keyof typeof formData, value: string) => {
    const current = formData[field] as string[];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setFormData({ ...formData, [field]: updated });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Demo: log to console
    console.log('AI Agent Idea Submission:', {
      ...formData,
      submittedAt: new Date().toISOString(),
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const isValid = formData.wwid.trim() && formData.businessUnit && formData.problem.trim();

  if (isSubmitted) {
    return (
      <div className="py-12">
        <Container size="sm">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Thank you for contributing to the DBU AI Foundry
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Your idea has been received.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 text-left max-w-md mx-auto mb-6">
              <h3 className="font-medium text-gray-900 mb-3">What happens next:</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">→</span>
                  <span>Your idea will be reviewed by the team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">→</span>
                  <span>We may follow up for clarification or to explore a pilot</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">→</span>
                  <span>Some ideas may be showcased as concepts in the Foundry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">→</span>
                  <span>Ideas may influence future agents even if not built directly</span>
                </li>
              </ul>
            </div>

            <p className="text-xs text-gray-500 mb-8 max-w-sm mx-auto">
            Submitting an idea does not imply a delivery commitment. It helps us explore and learn together.
            </p>
            
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  wwid: '',
                  businessUnit: '',
                  role: '',
                  collaborators: '',
                  problem: '',
                  impactTypes: [],
                  impactNarrative: '',
                });
              }}
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Submit another idea
            </button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-12">
      <Container size="sm">
        {/* Header */}
        <div className="mb-8">
          <div className="page-hero page-hero--submit px-6 py-6 sm:px-8 sm:py-7">
            <div className="page-hero-content">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
                <Lightbulb className="w-4 h-4 text-red-600" />
                Submit an AI Agent Idea
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">Start with the problem</h1>
              <p className="text-gray-600 mb-2">
                Have a problem that could benefit from an AI integrated solution or agent?
              </p>
              <p className="text-gray-600">
                You do not need a solution, a business case, or technical details. Start with the
                problem. That is enough.
              </p>
              <p className="text-sm text-gray-500 mt-3">
                Ideas can be small or big, early or well-formed. The DBU AI Foundry exists to learn
                where AI could help and to connect teams working on similar challenges.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Section 1: About You */}
          <section>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <ClipboardList className="w-5 h-5 text-gray-500" />
                <h2 className="text-lg font-semibold text-gray-900">About You</h2>
              </div>
              <p className="text-sm text-gray-500">
                This helps us follow up and understand context.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="wwid" className="block text-sm font-medium text-gray-700 mb-1">
                    WWID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="wwid"
                    required
                    value={formData.wwid}
                    onChange={(e) => setFormData({ ...formData, wwid: e.target.value })}
                    placeholder="Your WWID"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="businessUnit" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Unit <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="businessUnit"
                    required
                    value={formData.businessUnit}
                    onChange={(e) => setFormData({ ...formData, businessUnit: e.target.value })}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Select business unit</option>
                    {businessUnits.map((bu) => (
                      <option key={bu} value={bu}>{bu}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                    Role / Job Title
                  </label>
                  <input
                    type="text"
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g., Senior Engineer"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="collaborators" className="block text-sm font-medium text-gray-700 mb-1">
                    Team Members / Collaborators
                  </label>
                  <input
                    type="text"
                    id="collaborators"
                    value={formData.collaborators}
                    onChange={(e) => setFormData({ ...formData, collaborators: e.target.value })}
                    placeholder="WWIDs or names"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: The Problem */}
          <section>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <Target className="w-5 h-5 text-gray-500" />
                <h2 className="text-lg font-semibold text-gray-900">The Problem</h2>
              </div>
              <p className="text-sm text-gray-500">You know the problem better than anyone. Start there.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">
                  What problem are you trying to solve? <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-gray-500 mb-2">
                  Describe what slows work down, creates rework, causes errors, or leads to missed opportunities.
                </p>
                <textarea
                  id="problem"
                  required
                  rows={5}
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  placeholder="Describe what slows work down, creates rework, causes errors, or leads to missed opportunities."
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </section>

          {/* Section 3: Potential Impact */}
          <section>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Potential Impact</h2>
              <p className="text-sm text-gray-500">
                This helps us understand scale and prioritize follow-up. Rough estimates are completely fine.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What kind of impact could this have?
                </label>
                <div className="flex flex-wrap gap-2">
                  {impactTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleMultiSelect('impactTypes', type)}
                      className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                        formData.impactTypes.includes(type)
                          ? 'bg-red-50 border-red-200 text-red-700'
                          : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="impactNarrative" className="block text-sm font-medium text-gray-700 mb-1">
                  If you had to estimate impact, what would you say?
                </label>
                <p className="text-xs text-gray-500 mb-2">
                  Examples: &quot;About 2 hours per engineer per week&quot; · &quot;Happens on every service call&quot; ·
                  &quot;Affects warranty decisions globally&quot;
                </p>
                <textarea
                  id="impactNarrative"
                  rows={3}
                  value={formData.impactNarrative}
                  onChange={(e) => setFormData({ ...formData, impactNarrative: e.target.value })}
                  placeholder="Share a rough estimate or scope in your own words"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </section>


          {/* Submit */}
          <section className="pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                Rough ideas welcome. This helps us learn where AI could help most.
              </p>
              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="px-6 py-2.5 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Idea'}
              </button>
            </div>
          </section>
        </form>
      </Container>
    </div>
  );
}
