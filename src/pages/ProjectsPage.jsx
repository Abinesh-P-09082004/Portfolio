import React from 'react';
import PageContainer from '../components/PageContainer.jsx';
import BackNextButtons from '../components/BackNextButtons.jsx';
import ProjectItem from '../components/ProjectItem.jsx';

const ABINESH_PROJECTS = [
  { 
    title: 'Food Calorie & BMI Calculator App', 
    imageUrl: '/snap/1.png', 
    description: 'Built an Android application to calculate BMI and daily calorie intake based on user inputs. Implemented dynamic food tracking and health status classification to improve user awareness. Designed a responsive UI using XML and developed application logic using Java in Android Studio.',
    repoLink: 'https://github.com/Abinesh-P-09082004/Food-app'
  },
  { 
    title: 'Music Player App', 
    imageUrl: '/snap/2.png', 
    description: 'Developed an Android music player with playback controls using MediaPlayer API. Ensured smooth performance and efficient user interaction through optimized Java logic. Designed a simple and user-friendly interface using XML layouts.',
    repoLink: 'https://github.com/Abinesh-P-09082004/Music-player'
  },
  { 
    title: 'Guess the Day App', 
    imageUrl: '/snap/3.png', 
    description: 'Built an Android application to predict the day of the week using date-based algorithms. Implemented accurate logical calculations to ensure correct results. Designed an interactive UI for easy user input and result display using XML.',
    repoLink: 'https://github.com/Abinesh-P-09082004/Guess-the-day'
  },
  { 
    title: 'Anime Website', 
    imageUrl: '/snap/4.png', 
    description: 'Designed and developed a responsive website using HTML and CSS to showcase anime content. Implemented structured navigation, media integration, and interactive UI elements. Improved user experience through clean layout design and responsive styling.',
    repoLink: 'https://github.com/Abinesh-P-09082004/anime'
  },
  { 
    title: 'Aero (Drone Website)', 
    imageUrl: '/snap/5.png', 
    description: 'Developed a multi-page website to showcase drone products and technical details. Implemented navigation, product sections, and embedded video content. Designed clean and structured layouts for better user engagement and readability.',
    repoLink: 'https://github.com/Abinesh-P-09082004/Aero'
  },
  { 
    title: 'Kurinji AI & Anaivar Vayal – IoT Based Smart Irrigation System', 
    imageUrl: '/snap/6.png', 
    description: 'Developed an IoT-based smart irrigation system using ESP8266 and environmental sensors to monitor real-time field conditions. Automated irrigation decisions using rule-based logic, improving water efficiency and resource management. Integrated a multilingual AI chatbot to assist farmers with crop guidance and irrigation support.'  
  },
  { 
    title: 'IBM – Data Neshers Education Insights Platform', 
    imageUrl: '/snap/7.png', 
    description: 'Designed and developed a responsive web interface using HTML and CSS with a dynamic video background to present global education insights. Implemented structured layouts with search functionality, interactive UI effects, and media integration to enhance user experience and content accessibility. Created multiple sections showcasing education systems of different countries with clean design and user-friendly navigation.',
    repoLink: 'https://github.com/Abinesh-P-09082004/IBM'
  },
  { 
    title: 'Autonomous Vehicle.', 
    imageUrl: '/snap/8.jpg', 
    description: 'A robotics project focusing on automated movement, object detection, and navigation mechanisms.'
  },
];

const CERTIFICATES = [
  { title: 'Android Course', imageUrl: '/certificate/Android course.jpg' },
  { title: 'Java Exception Handling', imageUrl: '/certificate/java exception handling.jpg' },
  { title: 'Java OOPs', imageUrl: '/certificate/java oops.jpg' },
  { title: 'Java Basics Course', imageUrl: '/certificate/jbc.png' },
  { title: 'Learning Java 11', imageUrl: '/certificate/learning java 11.jpg' },
  { title: 'Web Development Course', imageUrl: '/certificate/wdc.png' },
];

const ProjectsPage = ({ setPage, pages }) => {
  return (
    <PageContainer title="Projects">
      {/* Increased vertical spacing for projects */}
      <div className="flex flex-col project-list-spacing">
        {ABINESH_PROJECTS.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>

      <div className="mt-16 mb-8 w-full max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-10 text-center uppercase tracking-wide" style={{ color: '#382420' }}>
          Course Completion Certificates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <div key={index} className="glass-effect-card overflow-hidden flex flex-col items-center p-4">
              <img 
                src={cert.imageUrl} 
                alt={cert.title} 
                className="w-full h-auto rounded-xl object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-4 font-semibold text-center text-slate-900" style={{ color: '#382420' }}>{cert.title}</p>
            </div>
          ))}
        </div>
      </div>

      <BackNextButtons
        onBack={() => setPage(pages.SKILLS)}
        onNext={() => setPage(pages.CONTACT)}
        backText="Skills Page"
        nextText="Contact Page"
      />
    </PageContainer>
  );
};

export default ProjectsPage;
