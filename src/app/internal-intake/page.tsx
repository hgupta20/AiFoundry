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

const agentTypes = [
  'Knowledge',
  'Workflow',
  'Analysis',
  'Coordination',
  'Not sure',
];

const dataSensitivityOptions = [
  'Public',
  'Internal',
  'Confidential',
  'Restricted',
  'Not sure',
];

const integrationComplexityOptions = [
  'Low',
  'Medium',
  'High',
  'Not sure',
];

const oversightOptions = [
  'No additional oversight',
  'Human review required',
  'Human approval required',
  'Not sure',
];

const maturityOptions = [
  'Concept',
  'Pilot',
  'Vision candidate',
];

export default function SubmitPage() {
  const [formData, setFormData] = useState({
    // About You
    wwid: '',
    businessUnit: '',
    role: '',
    collaborators: '',
    // Problem Clarification
    problem: '',
    restatedProblem: '',
    primaryPersona: '',
    currentWorkaround: '',
    // Agent Opportunity
    agentType: '',
    agentWouldDo: '',
    agentWouldNotDo: '',
    // Inputs and Outputs
    primaryInputs: '',
    expectedOutputs: '',
    frequency: '',
    latencyExpectation: '',
    // Systems and Data
    systemsInvolved: '',
    dataSensitivity: '',
    integrationComplexity: '',
    // Constraints and Guardrails
    safetyConsiderations: '',
    regulatoryConcerns: '',
    humanOversight: '',
    // Platform Fit
    likelyPlatforms: '',
    knownDependencies: '',
    // Maturity Assessment
    maturityCandidate: '',
    recommendedNextStep: '',
    // Ownership and Next Steps
    potentialOwningTeam: '',
    followUpActions: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
                  <span>Your idea will be reviewed by the team.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">→</span>
                  <span>We may follow up for clarification or to explore a pilot.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">→</span>
                  <span>Some ideas may be showcased as concepts in the Foundry.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5">→</span>
                  <span>Ideas may influence future agents even if not built directly.</span>
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
                  restatedProblem: '',
                  primaryPersona: '',
                  currentWorkaround: '',
                  agentType: '',
                  agentWouldDo: '',
                  agentWouldNotDo: '',
                  primaryInputs: '',
                  expectedOutputs: '',
                  frequency: '',
                  latencyExpectation: '',
                  systemsInvolved: '',
                  dataSensitivity: '',
                  integrationComplexity: '',
                  safetyConsiderations: '',
                  regulatoryConcerns: '',
                  humanOversight: '',
                  likelyPlatforms: '',
                  knownDependencies: '',
                  maturityCandidate: '',
                  recommendedNextStep: '',
                  potentialOwningTeam: '',
                  followUpActions: '',
                  notes: '',
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Internal Intake</h1>
          <p className="text-gray-600">
            This internal intake captures the detailed information needed to assess and shape AI
            agent opportunities. Please complete the sections below to support follow-up and
            evaluation.
          </p>
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

          {/* Section 2: Problem Clarification */}
          <section>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Problem Clarification</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">
                  Restated problem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="problem"
                  required
                  rows={4}
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  placeholder="Summarize the problem in clear, plain language"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="restatedProblem" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional clarification
                </label>
                <textarea
                  id="restatedProblem"
                  rows={3}
                  value={formData.restatedProblem}
                  onChange={(e) => setFormData({ ...formData, restatedProblem: e.target.value })}
                  placeholder="Add any nuance, context, or edge cases"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="primaryPersona" className="block text-sm font-medium text-gray-700 mb-1">
                    Primary persona
                  </label>
                  <select
                    id="primaryPersona"
                    value={formData.primaryPersona}
                    onChange={(e) => setFormData({ ...formData, primaryPersona: e.target.value })}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Select persona</option>
                    {whoOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="currentWorkaround" className="block text-sm font-medium text-gray-700 mb-1">
                    Current workaround
                  </label>
                  <input
                    type="text"
                    id="currentWorkaround"
                    value={formData.currentWorkaround}
                    onChange={(e) => setFormData({ ...formData, currentWorkaround: e.target.value })}
                    placeholder="What do teams do today to handle this?"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Agent Opportunity */}
          <section>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Agent Opportunity</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="agentType" className="block text-sm font-medium text-gray-700 mb-1">
                  Agent type
                </label>
                <select
                  id="agentType"
                  value={formData.agentType}
                  onChange={(e) => setFormData({ ...formData, agentType: e.target.value })}
                  className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select type</option>
                  {agentTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="agentWouldDo" className="block text-sm font-medium text-gray-700 mb-1">
                  What the agent would do
                </label>
                <textarea
                  id="agentWouldDo"
                  rows={3}
                  value={formData.agentWouldDo}
                  onChange={(e) => setFormData({ ...formData, agentWouldDo: e.target.value })}
                  placeholder="Describe the expected behaviors or outcomes"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="agentWouldNotDo" className="block text-sm font-medium text-gray-700 mb-1">
                  What the agent would not do
                </label>
                <textarea
                  id="agentWouldNotDo"
                  rows={3}
                  value={formData.agentWouldNotDo}
                  onChange={(e) => setFormData({ ...formData, agentWouldNotDo: e.target.value })}
                  placeholder="Define boundaries, exclusions, or guardrails"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </section>

          {/* Section 4: Inputs and Outputs */}
          <section>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Inputs and Outputs</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="primaryInputs" className="block text-sm font-medium text-gray-700 mb-1">
                  Primary inputs
                </label>
                <textarea
                  id="primaryInputs"
                  rows={2}
                  value={formData.primaryInputs}
                  onChange={(e) => setFormData({ ...formData, primaryInputs: e.target.value })}
                  placeholder="List data sources, documents, or systems"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="expectedOutputs" className="block text-sm font-medium text-gray-700 mb-1">
                  Expected outputs
                </label>
                <textarea
                  id="expectedOutputs"
                  rows={2}
                  value={formData.expectedOutputs}
                  onChange={(e) => setFormData({ ...formData, expectedOutputs: e.target.value })}
                  placeholder="Describe the outputs or deliverables"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">
                    Frequency
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
                <div>
                  <label htmlFor="latencyExpectation" className="block text-sm font-medium text-gray-700 mb-1">
                    Latency expectations
                  </label>
                  <input
                    type="text"
                    id="latencyExpectation"
                    value={formData.latencyExpectation}
                    onChange={(e) => setFormData({ ...formData, latencyExpectation: e.target.value })}
                    placeholder="e.g., near real-time, daily batch, within 1 hour"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Systems and Data */}
          <section>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Systems and Data</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="systemsInvolved" className="block text-sm font-medium text-gray-700 mb-1">
                  Systems involved
                </label>
                <input
                  type="text"
                  id="systemsInvolved"
                  value={formData.systemsInvolved}
                  onChange={(e) => setFormData({ ...formData, systemsInvolved: e.target.value })}
                  placeholder="List systems or platforms involved"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dataSensitivity" className="block text-sm font-medium text-gray-700 mb-1">
                    Data sensitivity
                  </label>
                  <select
                    id="dataSensitivity"
                    value={formData.dataSensitivity}
                    onChange={(e) => setFormData({ ...formData, dataSensitivity: e.target.value })}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Select sensitivity</option>
                    {dataSensitivityOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="integrationComplexity" className="block text-sm font-medium text-gray-700 mb-1">
                    Integration complexity
                  </label>
                  <select
                    id="integrationComplexity"
                    value={formData.integrationComplexity}
                    onChange={(e) => setFormData({ ...formData, integrationComplexity: e.target.value })}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Select complexity</option>
                    {integrationComplexityOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Constraints and Guardrails */}
          <section>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Constraints and Guardrails</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="safetyConsiderations" className="block text-sm font-medium text-gray-700 mb-1">
                  Safety considerations
                </label>
                <textarea
                  id="safetyConsiderations"
                  rows={2}
                  value={formData.safetyConsiderations}
                  onChange={(e) => setFormData({ ...formData, safetyConsiderations: e.target.value })}
                  placeholder="Describe any safety concerns"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="regulatoryConcerns" className="block text-sm font-medium text-gray-700 mb-1">
                  Regulatory or compliance concerns
                </label>
                <textarea
                  id="regulatoryConcerns"
                  rows={2}
                  value={formData.regulatoryConcerns}
                  onChange={(e) => setFormData({ ...formData, regulatoryConcerns: e.target.value })}
                  placeholder="Note any regulatory or compliance considerations"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="humanOversight" className="block text-sm font-medium text-gray-700 mb-1">
                  Human oversight needed
                </label>
                <select
                  id="humanOversight"
                  value={formData.humanOversight}
                  onChange={(e) => setFormData({ ...formData, humanOversight: e.target.value })}
                  className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select oversight</option>
                  {oversightOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Section 7: Platform Fit */}
          <section>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Platform Fit</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="likelyPlatforms" className="block text-sm font-medium text-gray-700 mb-1">
                  Likely platforms
                </label>
                <input
                  type="text"
                  id="likelyPlatforms"
                  value={formData.likelyPlatforms}
                  onChange={(e) => setFormData({ ...formData, likelyPlatforms: e.target.value })}
                  placeholder="List likely platforms or tools"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="knownDependencies" className="block text-sm font-medium text-gray-700 mb-1">
                  Known dependencies
                </label>
                <input
                  type="text"
                  id="knownDependencies"
                  value={formData.knownDependencies}
                  onChange={(e) => setFormData({ ...formData, knownDependencies: e.target.value })}
                  placeholder="List dependencies or prerequisites"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </section>

          {/* Section 8: Maturity Assessment */}
          <section>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Maturity Assessment</h2>
            </div>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="maturityCandidate" className="block text-sm font-medium text-gray-700 mb-1">
                    Concept, pilot, or vision candidate
                  </label>
                  <select
                    id="maturityCandidate"
                    value={formData.maturityCandidate}
                    onChange={(e) => setFormData({ ...formData, maturityCandidate: e.target.value })}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Select maturity</option>
                    {maturityOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="recommendedNextStep" className="block text-sm font-medium text-gray-700 mb-1">
                    Recommended next step
                  </label>
                  <input
                    type="text"
                    id="recommendedNextStep"
                    value={formData.recommendedNextStep}
                    onChange={(e) => setFormData({ ...formData, recommendedNextStep: e.target.value })}
                    placeholder="e.g., discovery workshop, data review, pilot"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Ownership and Next Steps */}
          <section>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Ownership and Next Steps</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="potentialOwningTeam" className="block text-sm font-medium text-gray-700 mb-1">
                  Potential owning team
                </label>
                <input
                  type="text"
                  id="potentialOwningTeam"
                  value={formData.potentialOwningTeam}
                  onChange={(e) => setFormData({ ...formData, potentialOwningTeam: e.target.value })}
                  placeholder="Team or function that may own delivery"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="followUpActions" className="block text-sm font-medium text-gray-700 mb-1">
                  Follow-up actions
                </label>
                <textarea
                  id="followUpActions"
                  rows={2}
                  value={formData.followUpActions}
                  onChange={(e) => setFormData({ ...formData, followUpActions: e.target.value })}
                  placeholder="List planned follow-up or next steps"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Notes
                </label>
                <textarea
                  id="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Additional notes"
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
