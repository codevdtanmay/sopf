import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Prestige from './components/Prestige';
import PrincipalMessage from './components/PrincipalMessage';
import StudentLife from './components/StudentLife';
import Achievements from './components/Achievements';
import NoticeBoard from './components/NoticeBoard';
import Gallery from './components/Gallery';
import Admissions from './components/Admissions';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortalsPreview from './components/PortalsPreview';

export default function App() {
  // Portal active state: student, teacher, admin dashboard or null
  const [activePortal, setActivePortal] = useState<'student' | 'teacher' | 'dashboard' | null>(null);

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-natural-bg text-natural-plum overflow-x-hidden" id="app-root-container">
      {/* Sticky Header Nav */}
      <Header onOpenPortal={setActivePortal} activePortal={activePortal} />

      {/* Hero Section */}
      <Hero 
        onExploreClick={() => handleScrollToSection('#highlights')} 
        onApplyClick={() => handleScrollToSection('#admissions')} 
      />

      {/* Bento Grid Highlights */}
      <Highlights />

      {/* Prestige statistics, Achievements milestones */}
      <Prestige />

      {/* PrincipalMessage desk block */}
      <PrincipalMessage />

      {/* Student Activity Stories panel */}
      <StudentLife />

      {/* Achievements indicators, Alumni memoirs */}
      <Achievements />

      {/* Notice Board bulletins system */}
      <NoticeBoard />

      {/* Masonry Celebrations Gallery */}
      <Gallery />

      {/* Admissions Conversion portal */}
      <Admissions />

      {/* Testimonial slider carousel */}
      <Testimonials />

      {/* Contact information, virtual maps vector, dispatch desk form */}
      <Contact />

      {/* Professional Footer including logo, motto, quick links */}
      <Footer />

      {/* Interactive Portals Dashboard previewer overlay */}
      {activePortal && (
        <PortalsPreview 
          initialType={activePortal} 
          onClose={() => setActivePortal(null)} 
        />
      )}
    </div>
  );
}
