// import React, { useState, useCallback } from 'react';
// import { Send, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';

// // ... (previous imports and interfaces remain the same)

// export function TalentRequestForm({ onClose }: TalentRequestFormProps) {
//   const [step, setStep] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     company: '',
//     technology: '.NET',
//     description: '',
//     captcha: ''
//   });

//   const validateStep = useCallback(() => {
//     switch (step) {
//       case 1:
//         return formData.name.trim() !== '' && 
//                formData.email.trim() !== '' && 
//                formData.company.trim() !== '';
//       case 2:
//         return formData.technology !== '' && 
//                formData.description.trim() !== '';
//       case 3:
//         return formData.captcha === '81'; // 9 x 9 = 81
//       default:
//         return false;
//     }
//   }, [step, formData]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!validateStep()) return;

//     setIsLoading(true);
    
//     try {
//       if (step < 3) {
//         // Simulate network delay for smooth transition
//         await new Promise(resolve => setTimeout(resolve, 500));
//         setStep(step + 1);
//       } else {
//         // Simulate form submission
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         console.log('Form submitted:', formData);
//         onClose();
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handlePrevious = () => {
//     setStep(step - 1);
//   };

//   const isStepValid = validateStep();

//   return (
//     <div>
//       {/* ... (previous progress steps code remains the same) */}

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* ... (previous form steps code remains the same) */}

//         {/* Enhanced Navigation buttons */}
//         <div className="flex justify-between pt-6">
//           {step > 1 && (
//             <button
//               type="button"
//               onClick={handlePrevious}
//               disabled={isLoading}
//               className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <ArrowLeft className="h-5 w-5 mr-2" />
//               Previous
//             </button>
//           )}
//           <button
//             type="submit"
//             disabled={!isStepValid || isLoading}
//             className={`
//               inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg
//               transition-all duration-300
//               ${isStepValid 
//                 ? 'text-white bg-blue-600 hover:bg-blue-700' 
//                 : 'text-gray-400 bg-gray-100 cursor-not-allowed'}
//               ${step === 1 ? 'ml-auto' : ''}
//               disabled:opacity-50 disabled:cursor-not-allowed
//               group
//             `}
//           >
//             {isLoading ? (
//               <>
//                 <Loader2 className="h-5 w-5 mr-2 animate-spin" />
//                 {step === 3 ? 'Submitting...' : 'Processing...'}
//               </>
//             ) : step === 3 ? (
//               <>
//                 <Send className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
//                 Submit Request
//               </>
//             ) : (
//               <>
//                 Next Step
//                 <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
//               </>
//             )}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


const TalentRequestForm = () => {
  return (
    <div>TalentRequestForm</div>
  )
}

export default TalentRequestForm