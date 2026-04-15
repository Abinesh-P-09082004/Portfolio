import React, { useState } from 'react';
// Note: Assumes styles.css is loaded globally to provide .glass-effect-card

const ProjectItem = ({ title, imageUrl, description, repoLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full mb-4 md:mb-8" style={{ width: '100%' }}>
      {/* Project Card */}
      <div className="glass-effect-card p-4 md:p-6 flex flex-col md:flex-row gap-6">
        <div 
          className="w-full md:w-1/2 bg-gray-900 rounded-xl overflow-hidden cursor-pointer group"
          style={{ position: 'relative', aspectRatio: '16/9', width: '100%' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={() => console.error(`Failed to load image: ${imageUrl}`)}
          />
          {/* subtle overlay to indicate clickability */}
          <div 
            className="transition-colors duration-300 flex items-center justify-center"
            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0)', pointerEvents: 'none' }}
          >
             <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                  style={{ width: '48px', height: '48px', color: 'rgba(255,255,255,0)', transition: 'color 0.3s ease', opacity: 0.8 }}
                  className={`group-hover:!text-white/80 ${isOpen ? 'rotate-180' : ''}`}
             >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center" style={{ width: '100%' }}>
          <h3 className="text-2xl font-bold mb-3" style={{ color: '#E87A65' }}>{title}</h3>
          <p className="leading-relaxed" style={{ color: '#7A5B55' }}>{description}</p>
          {repoLink && (
            <a 
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center hover:opacity-80 transition-opacity self-start font-medium"
              style={{ color: '#E87A65' }}
            >
              <svg style={{ marginRight: '8px' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>View Repository</span>
            </a>
          )}
        </div>
      </div>

      {/* Expanded Inline Full Image */}
      {isOpen && (
        <div style={{ position: 'relative', width: '100%', marginTop: '16px', zIndex: 10, animation: 'fadeIn 0.3s ease-in-out' }}>
          {/* Close button (X mark) positioned relative to the spawned image */}
          <button 
            onClick={() => setIsOpen(false)}
            aria-label="Close image"
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              zIndex: 20,
              padding: '8px',
              backgroundColor: '#E87A65', /* Coral color fitting the theme */
              color: 'white',
              border: '2px solid rgba(255,255,255,0.8)',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#cc624e';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#E87A65';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <img 
            src={imageUrl} 
            alt={`${title} Full View`} 
            style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
