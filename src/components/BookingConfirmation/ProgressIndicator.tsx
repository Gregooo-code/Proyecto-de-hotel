interface ProgressIndicatorProps {
  currentStep?: 1 | 2 | 3;
}

export default function ProgressIndicator({ currentStep = 2 }: ProgressIndicatorProps) {
  const steps = [
    { number: 1, title: "Datos del Huésped", completed: currentStep >= 1 },
    { number: 2, title: "Pago", completed: currentStep >= 2 },
    { number: 3, title: "Confirmación", completed: currentStep >= 3 }
  ];

  return (
    <div className="flex justify-between items-center mb-10 relative">
      <div className="absolute left-0 right-0 h-1 bg-gray-200 top-1/2 -translate-y-1/2 z-0"></div>
      <div className={`absolute left-0 w-${currentStep === 3 ? 'full' : currentStep === 2 ? '1/2' : '0'} h-1 bg-baywatch-red top-1/2 -translate-y-1/2 z-0`}></div>
      
      {steps.map((step, index) => (
        <div 
          key={index} 
          className={`flex flex-col items-center z-10 ${index < steps.length - 1 ? 'w-full' : ''}`}
        >
          <div className={`w-10 h-10 rounded-full ${
            step.completed ? 'bg-baywatch-red text-white' : 'bg-gray-300 text-gray-600'
          } flex items-center justify-center font-bold text-lg mb-2`}>
            {step.number}
          </div>
          <span className={`text-sm font-medium ${
            step.completed ? 'text-baywatch-red' : 'text-gray-600'
          }`}>
            {step.title}
          </span>
        </div>
      ))}
    </div>
  );
}