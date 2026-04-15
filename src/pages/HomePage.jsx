import React from 'react';
import PageContainer from '../components/PageContainer';
import ProfileCard from '../components/ProfileCard';

const ABINESH_DATA = {
  name: 'ABINESH P',
  title: 'Frontend Developer',
  handle: 'ABINESH_P',
  avatarUrl: '/ABINESH.png', // Placeholder path
};

const HomePage = ({ setPage, pages }) => {
  return (
    <PageContainer title="ABINESH P - Portfolio">
      <div className="flex flex-col items-center space-y-8">
        <ProfileCard
          name={ABINESH_DATA.name}
          title={ABINESH_DATA.title}
          handle={ABINESH_DATA.handle}
          status="Online"
          avatarUrl={ABINESH_DATA.avatarUrl}
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => setPage(pages.CONTACT)}
        />
        <div className="flex flex-row gap-4 flex-wrap justify-center mt-4">
          <button 
            onClick={() => setPage(pages.SKILLS)}
            className="glass-effect-button transition-all duration-300 hover:scale-[1.05]"
          >
            Go to Skill Page &rarr;
          </button>
          <a
            href="/Abinesh resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect-button transition-all duration-300 hover:scale-[1.05] flex items-center justify-center"
            style={{ textDecoration: 'none' }}
          >
            View My Resume
          </a>
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
