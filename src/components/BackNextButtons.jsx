import React from 'react';
// Note: Assumes styles.css is loaded globally to provide .glass-effect-button

const BackNextButtons = ({ onBack, onNext, backText, nextText, disableBack = false, disableNext = false }) => (
  <div className="flex justify-center gap-4 mt-12 mb-8">
    <button
      onClick={onBack}
      disabled={disableBack}
      className={`glass-effect-button transition-all duration-300 ${disableBack ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
      style={{ pointerEvents: disableBack ? 'none' : 'auto' }}
    >
      &larr; {backText}
    </button>
    <button
      onClick={onNext}
      disabled={disableNext}
      className={`glass-effect-button transition-all duration-300 ${disableNext ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
      style={{ pointerEvents: disableNext ? 'none' : 'auto' }}
    >
      {nextText} &rarr;
    </button>
  </div>
);

export default BackNextButtons;
