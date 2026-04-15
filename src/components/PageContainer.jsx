import React from 'react';

const PageContainer = ({ title, children }) => (
  <div className="flex flex-col items-center p-4 md:p-8 min-h-screen">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 text-center tracking-tighter" style={{ textShadow: '0 0 10px rgba(253, 155, 138, 0.4)' }}>
      {title}
    </h1>
    <div className="w-full max-w-6xl">
      {children}
    </div>
  </div>
);

export default PageContainer;
