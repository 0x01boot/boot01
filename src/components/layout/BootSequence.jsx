// src/components/layout/BootSequence.jsx
import React, { useState, useEffect } from 'react';
import useTypewriter from '../../hooks/useTypewriter';

const BootSequence = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const bootSteps = [
    'Initializing system components...',
    'Loading educational modules...',
    'Starting Computer Science Explorer v1.0...',
    'System ready.'
  ];

  const { text, isTyping } = useTypewriter(bootSteps[currentStep], {
    delay: 50,
    onComplete: () => {
      if (currentStep < bootSteps.length - 1) {
        setTimeout(() => setCurrentStep(currentStep + 1), 1000);
      } else {
        setTimeout(onComplete, 1500);
      }
    }
  });

  return (
    <div className="space-y-2">
      {bootSteps.slice(0, currentStep + 1).map((step, index) => (
        <div key={index} className="flex items-center">
          <span className="mr-2">&gt;</span>
          <span>
            {index === currentStep ? text : step}
            {index === currentStep && isTyping && '_'}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BootSequence;