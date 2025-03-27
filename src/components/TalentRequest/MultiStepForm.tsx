import React, { useState } from 'react';
import { Send, X, ArrowRight, ArrowLeft } from 'lucide-react';

const technologies = [
  '.NET', 'React', 'Node.js', 'Python', 'Java', 'Angular',
  'Vue.js', 'PHP', 'Ruby', 'iOS', 'Android', 'Flutter'
];

interface FormData {
  name: string;
  email: string;
  company: string;
  technology: string;
  description: string;
  captcha: string;
}

interface MultiStepFormProps {
  onClose: () => void;
}

export function MultiStepForm({ onClose }: MultiStepFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    technology: '.NET',
    description: '',
    captcha: ''
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('Form submitted:', formData);
      onClose();
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
      {/* Progress bar */}
      <div className="h-2 bg-gray-100">
        <div 
          className="h-full bg-blue-600 transition-all duration-500"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {step === 1 && 'Basic Information'}
            {step === 2 && 'Project Details'}
            {step === 3 && 'Verification'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Basic Information */}
          <div className={step === 1 ? 'block' : 'hidden'}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.company}
                  onChange={(e) => updateField('company', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Step 2: Project Details */}
          <div className={step === 2 ? 'block' : 'hidden'}>
            <div className="space-y-4">
              <div>
                <label htmlFor="technology" className="block text-sm font-medium text-gray-700">
                  Required Technology
                </label>
                <select
                  id="technology"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.technology}
                  onChange={(e) => updateField('technology', e.target.value)}
                >
                  {technologies.map((tech) => (
                    <option key={tech} value={tech}>{tech}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Project Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.description}
                  onChange={(e) => updateField('description', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Step 3: Verification */}
          <div className={step === 3 ? 'block' : 'hidden'}>
            <div>
              <label htmlFor="captcha" className="block text-sm font-medium text-gray-700">
                What is 9 × 9?
              </label>
              <input
                type="text"
                id="captcha"
                required
                className="mt-1 block w-48 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.captcha}
                onChange={(e) => updateField('captcha', e.target.value)}
              />
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between pt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </button>
            )}
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 ml-auto"
            >
              {step === 3 ? (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Submit
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}