import React from 'react';
import PageContainer from '../components/PageContainer.jsx';
import BackNextButtons from '../components/BackNextButtons.jsx';

// --- INLINE SVG ICONS ---
// WhatsApp icon (simplified version of the chat bubble)
const IconWhatsApp = ({ size = 30 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="12" y1="12" x2="12" y2="12" stroke="none" fill="currentColor"/>
        <line x1="9" y1="12" x2="9" y2="12" stroke="none" fill="currentColor"/>
        <line x1="15" y1="12" x2="15" y2="12" stroke="none" fill="currentColor"/>
    </svg>
);
// Envelope icon
const IconEnvelope = ({ size = 30 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>);
// LinkedIn icon
const IconLinkedin = ({ size = 30 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
// GitHub icon
const IconGithub = ({ size = 30 }) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>);

const ABINESH_CONTACT = {
    phone: '+91 7418 929 717',
    email: 'abinesh0981257@gmail.com',
    linkedin: 'linkedin.com/in/abinesh-p-9514b627b',
    github: 'github.com/Abinesh-P-09082004',
};


const ContactPage = ({ setPage, pages }) => {
  const whatsappNumber = ABINESH_CONTACT.phone.replace(/[\s+]/g, '');

  const contactItems = [
    { 
      icon: <IconWhatsApp size={30} />, 
      label: 'WhatsApp', 
      value: ABINESH_CONTACT.phone, 
      href: `https://wa.me/${whatsappNumber}`,
      isExternal: true
    },
    { 
      icon: <IconEnvelope size={30} />, 
      label: 'Email', 
      value: ABINESH_CONTACT.email, 
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${ABINESH_CONTACT.email}`,
      isExternal: true

    },
    { 
      icon: <IconLinkedin size={30} />, 
      label: 'LinkedIn', 
      value: ABINESH_CONTACT.linkedin, 
      href: `https://${ABINESH_CONTACT.linkedin}`,
      isExternal: true
    },
    { 
      icon: <IconGithub size={30} />, 
      label: 'GitHub', 
      value: ABINESH_CONTACT.github, 
      href: `https://${ABINESH_CONTACT.github}`,
      isExternal: true
    }
  ];

  return (
    <PageContainer title="Get In Touch">
      <p className="text-center text-gray-300 max-w-xl mx-auto mb-10">
        Feel free to connect using the details below.
      </p>
      {/* Centering the grid container and increasing card size with new class */}
      <div className="contact-grid-wrapper">
        {contactItems.map((item, index) => (
          <div key={index} className="glass-effect-card contact-card-size p-8 flex flex-col items-start space-y-4">
            <div className="text-4xl text-blue-300 mb-2">{item.icon}</div>
            <p className="font-bold text-xl text-slate-900">{item.label}</p>
            <a
              href={item.href}
              // Set target/rel to null for non-external links (i.e., mailto)
              target={item.isExternal ? "_blank" : null}
              rel={item.isExternal ? "noopener noreferrer" : null}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 break-all text-base"
            >
              {item.value}
            </a>
          </div>
        ))}
      </div>
      <BackNextButtons
        onBack={() => setPage(pages.PROJECTS)}
        onNext={() => setPage(pages.PROFILE)}
        backText="Projects Page"
        nextText="Back to Profile"
      />
    </PageContainer>
  );
};

export default ContactPage;
