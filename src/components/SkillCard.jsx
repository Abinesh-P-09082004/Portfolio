import React from 'react';
// Note: Assumes styles.css is loaded globally to provide .glass-effect-card

const SkillCard = ({ name, icon, description }) => (
  <div className="glass-effect-card p-6 flex flex-col items-center text-center space-y-3 h-full">
    <div className="text-4xl text-blue-300 mb-2">
      {icon}
    </div>
    <h4 className="text-xl font-semibold text-slate-900">{name}</h4>
    <p className="text-sm text-gray-300 flex-grow">{description}</p>
  </div>
);

export default SkillCard;
