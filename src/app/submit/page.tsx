'use client';

import { useState } from 'react';
import { Container } from '@/components/Container';

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

const whoOptions = [
  'Engineers',
  'Manufacturing operators',
  'Technicians',
  'Dealers',
  'Customers',
  'Analysts',
  'Leaders',
  'Other',
];

const frequencyOptions = [
  { value: '', label: 'Select frequency' },
  { value: 'one-time', label: 'One-time' },
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'ongoing', label: 'Always / ongoing' },
];

const impactTypes = [
  'Time saved',
  'Cost reduction',
  'Quality improvement',
  'Safety / compliance',
  'Customer experience',
  'Revenue growth',
  'Reliability / uptime',
  'Risk reduction',
];

const agentActions = [
  'Explain',
  'Summarize',
  'Recommend',
  'Detect patterns',
  'Draft responses',
  'Guide decisions',
];

const inputTypes = [
  'Documents',
  'Manuals',
  'Tickets',
  'Sensor data',
  'Emails',
  'ERP / systems',
  'Not sure',
];

const outputTypes = [
  'Summary',
  'Checklist',
  'Recommendation',
  'Draft',
  'Alert',
  'Insight',
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
    whoExperiences: [] as string[],
    frequency: '',
    // Impact
    impactTypes: [] as string[],
    impactNarrative: '',
    // Agent
    agentActions: [] as string[],
    agentDescription: '',
    inputs: [] as string[],
    outputs: [] as string[],
    // Context
    systems: '',
    safetyCompliance: '',
    additionalNotes: '',
    attachments: '',
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
              Thank you for contributing to the Cummins AI Foundry
            </h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Your idea has been received.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 text-left max-w-md mx-auto mb-6">
              <h3 className="font-medium text-gray-900 mb-3">What happens next:</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">→</span>
                  <span>Your idea will be reviewed by the Foundry stewardship team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">→</span>
                  <span>We may follow up for clarification or to explore a pilot</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">→</span>
                  <span>Not all ideas will move forward—and that&apos;s okay</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">→</span>
                  <span>Ideas may influence future agents even if not built directly</span>
                </li>
              </ul>
            </div>

            <p className="text-xs text-gray-500 mb-8 max-w-sm mx-auto">
              Submitting an idea does not commit you or your team to delivery. 
              No commitment, no obligation.
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
                  whoExperiences: [],
                  frequency: '',
                  impactTypes: [],
                  impactNarrative: '',
                  agentActions: [],
                  agentDescription: '',
                  inputs: [],
                  outputs: [],
                  systems: '',
                  safetyCompliance: '',
                  additionalNotes: '',
                  attachments: '',
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit an AI Agent Idea</h1>
          <p className="text-gray-600 mb-2">
            Have a problem that could benefit from an AI copilot or agent?
            <br />
            <span className="text-gray-500">You don&apos;t need the perfect solution—start with the problem.</span>
          </p>
          <p className="text-sm text-gray-500">
            Ideas can be big or small. Production-ready or conceptual.
            The Foundry team will review and follow up where appropriate.
          </p>
        </div>

        {/* What we're NOT asking for */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
          <p className="text-sm text-gray-600 mb-2">
            <strong>What we&apos;re NOT asking for:</strong>
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
            <span>❌ Formal business case</span>
            <span>❌ Exact ROI</span>
            <span>❌ Executive approval</span>
            <span>❌ Technical architecture</span>
            <span>❌ Funding justification</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Section 1: About You */}
          <section>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900">About You</h2>
              <p className="text-sm text-gray-500">
                This helps us follow up and understand context. It&apos;s not used for evaluation.
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
              <h2 className="text-lg font-semibold text-gray-900">The Problem</h2>
              <p className="text-sm text-gray-500">
                You know the problem better than we do—start there.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">
                  What problem are you trying to solve? <span className="text-red-500">*</span>
                </label>
                <p className="text-xs text-gray-500 mb-2">
                  What slows you down, creates rework, causes errors, or leads to missed opportunities?
                </p>
                <textarea
                  id="problem"
                  required
                  rows={4}
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  placeholder="Describe the challenge, friction, or inefficiency..."
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Who experiences this problem?
                </label>
                <div className="flex flex-wrap gap-2">
                  {whoOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleMultiSelect('whoExperiences', option)}
                      className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                        formData.whoExperiences.includes(option)
                          ? 'bg-red-50 border-red-200 text-red-700'
                          : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">
                  How often does this occur?
                </label>
                <select
                  id="frequency"
                  value={formData.frequency}
                  onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                  className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                >
                  {frequencyOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Section 3: Business Impact */}
          <section>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Business Impact</h2>
              <p className="text-sm text-gray-500">
                Optional—but helps us prioritize. Rough estimates are fine.
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
                  Examples: &quot;~500 service requests per day&quot; · &quot;~2 hours per engineer per week&quot; · 
                  &quot;High scrap risk on one line&quot; · &quot;Affects warranty decisions globally&quot;
                </p>
                <input
                  type="text"
                  id="impactNarrative"
                  value={formData.impactNarrative}
                  onChange={(e) => setFormData({ ...formData, impactNarrative: e.target.value })}
                  placeholder="Rough estimate is fine..."
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </section>

          {/* Section 4: Imagine the AI Agent */}
          <section>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Imagine the AI Agent</h2>
              <p className="text-sm text-gray-500">
                It&apos;s okay if you&apos;re not sure—this helps us understand the shape of the opportunity.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  If an AI agent could help, what would it do?
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {agentActions.map((action) => (
                    <button
                      key={action}
                      type="button"
                      onClick={() => handleMultiSelect('agentActions', action)}
                      className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                        formData.agentActions.includes(action)
                          ? 'bg-red-50 border-red-200 text-red-700'
                          : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {action}
                    </button>
                  ))}
                </div>
                <textarea
                  id="agentDescription"
                  rows={2}
                  value={formData.agentDescription}
                  onChange={(e) => setFormData({ ...formData, agentDescription: e.target.value })}
                  placeholder="Describe in your own words (optional)..."
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What inputs would it use?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {inputTypes.map((input) => (
                      <button
                        key={input}
                        type="button"
                        onClick={() => handleMultiSelect('inputs', input)}
                        className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                          formData.inputs.includes(input)
                            ? 'bg-red-50 border-red-200 text-red-700'
                            : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        {input}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What output would be most helpful?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {outputTypes.map((output) => (
                      <button
                        key={output}
                        type="button"
                        onClick={() => handleMultiSelect('outputs', output)}
                        className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                          formData.outputs.includes(output)
                            ? 'bg-red-50 border-red-200 text-red-700'
                            : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        {output}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Context & Constraints */}
          <section>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Context & Constraints</h2>
              <p className="text-sm text-gray-500">
                Optional—helps us understand Cummins-specific realities.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="systems" className="block text-sm font-medium text-gray-700 mb-1">
                  Systems involved
                </label>
                <input
                  type="text"
                  id="systems"
                  value={formData.systems}
                  onChange={(e) => setFormData({ ...formData, systems: e.target.value })}
                  placeholder="e.g., SAP, ServiceNow, Teamcenter, SharePoint, custom tools..."
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div>
                <label htmlFor="safetyCompliance" className="block text-sm font-medium text-gray-700 mb-1">
                  Any safety, regulatory, or compliance considerations?
                </label>
                <select
                  id="safetyCompliance"
                  value={formData.safetyCompliance}
                  onChange={(e) => setFormData({ ...formData, safetyCompliance: e.target.value })}
                  className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select...</option>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                  <option value="not-sure">Not sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
                  Anything else we should know?
                </label>
                <textarea
                  id="additionalNotes"
                  rows={2}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Additional context, constraints, or ideas..."
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div>
                <label htmlFor="attachments" className="block text-sm font-medium text-gray-700 mb-1">
                  Attach docs or paste links
                </label>
                <input
                  type="text"
                  id="attachments"
                  value={formData.attachments}
                  onChange={(e) => setFormData({ ...formData, attachments: e.target.value })}
                  placeholder="Paste links to relevant documents, screenshots, or examples..."
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
