import React from 'react';
import PageContainer from '../components/PageContainer';
import BackNextButtons from '../components/BackNextButtons';
import SkillCard from '../components/SkillCard';

// --- ICONS (Only used ones kept) ---
const IconHTML = ({ size = 30 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M5 2c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H5zm12 16H7l.6-7h8.8l.6 7zM9 13l-.3-3h6.6l-.3 3H9z"/></svg>);
const IconDraftingCompass = ({ size = 30 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12 5v1"/><path d="M12 19v1"/><path d="M16.92 7.08l-.7.7"/><path d="M7.78 16.22l-.7.7"/><path d="M17.62 16.22l-.7-.7"/><path d="M6.38 7.78l-.7.7"/></svg>);
const IconUserSecret = ({ size = 30 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M19 17v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1"/><path d="M12 13v6"/><path d="M5 13H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1"/><path d="M19 13h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1"/></svg>);
const IconMicroscope = ({ size = 30 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8"/><path d="M9 22h2"/><path d="M10 18V2h2v4"/><path d="M3 3l.7 2.1a6 6 0 0 0 5.6 4.3h8.6a2 2 0 0 1 1.4 3.4l-3.8 3.8a6 6 0 0 0-4.3 5.6L4 21"/></svg>);
const IconChartBar = ({ size = 30 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>);
const IconCode = ({ size = 30 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>);
const IconComputer = ({ size = 30 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="15" rx="2" ry="2"/><line x1="2" x2="22" y1="18" y2="18"/><line x1="8" x2="16" y1="21" y2="21"/></svg>);

const ABINESH_SKILLS = [
  { name: 'HTML, CSS.', icon: <IconHTML />, description: 'Front-end development using HTML and CSS.' },
  { name: 'JAVASCRIPT.', icon: <IconCode />, description: 'Building dynamic web applications.' },
  { name: 'React JS.', icon: <IconComputer />, description: 'Developing single-page applications.' },
  { name: 'App development.', icon: <IconDraftingCompass />, description: 'Mobile application development.' },
  { name: 'IoT.', icon: <IconMicroscope />, description: 'Cloud, IoT, and Edge computing knowledge.' },
  { name: 'Management Skill.', icon: <IconChartBar />, description: 'Task and team management.' },
  { name: 'Communication Skill.', icon: <IconUserSecret />, description: 'Strong communication skills.' },
];

const SkillsPage = ({ setPage, pages }) => {
  return (
    <PageContainer title="Technical & Creative Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ABINESH_SKILLS.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
      <BackNextButtons
        onBack={() => setPage(pages.PROFILE)}
        onNext={() => setPage(pages.PROJECTS)}
        backText="Profile Card"
        nextText="Projects"
      />
    </PageContainer>
  );
};

export default SkillsPage;
