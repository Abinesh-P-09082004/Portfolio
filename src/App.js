import React, { useState } from 'react';
import HomePage from './pages/HomePage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import './styles/styles.css';

// Global Page Navigation Constants
const PAGES = {
  PROFILE: 'PROFILE',
  SKILLS: 'SKILLS',
  PROJECTS: 'PROJECTS',
  CONTACT: 'CONTACT',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.PROFILE);

  const renderPage = () => {
    // This switch statement handles the navigation between the portfolio pages
    switch (currentPage) {
      case PAGES.PROFILE:
        return <HomePage setPage={setCurrentPage} pages={PAGES} />;
      case PAGES.SKILLS:
        return <SkillsPage setPage={setCurrentPage} pages={PAGES} />;
      case PAGES.PROJECTS:
        return <ProjectsPage setPage={setCurrentPage} pages={PAGES} />;
      case PAGES.CONTACT:
        return <ContactPage setPage={setCurrentPage} pages={PAGES} />;
      default:
        return <HomePage setPage={setCurrentPage} pages={PAGES} />;
    }
  };

  return (
    <>
      {/* CSS Background Layer - Defined and animated in styles.css */}
      <div id="background-layer"></div>

      {/* Application Content Layer, displayed on top of the background */}
      <div className="app-content-layer">
        {renderPage()}
      </div>
    </>
  );
}