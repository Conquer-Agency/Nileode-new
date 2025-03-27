import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { MultiStepForm } from './MultiStepForm';

export function TalentRequestButton() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="group inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300"
      >
        <Users className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
        Request a Talent
      </button>

      {isFormVisible && (
        <div className="absolute top-full left-0 mt-4 w-[600px] z-50 animate-slide-up">
          <MultiStepForm onClose={() => setIsFormVisible(false)} />
        </div>
      )}
    </div>
  );
}