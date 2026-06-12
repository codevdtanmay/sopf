import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Landmark, GraduationCap, LayoutDashboard, UserCheck, KeyRound, BellRing, Sparkles } from 'lucide-react';
import SchoolCrest from './SchoolCrest';

interface HeaderProps {
  onOpenPortal: (portalType: 'student' | 'teacher' | 'dashboard' | null) => void;
  activePortal: 'student' | 'teacher' | 'dashboard' | null;
}

export default function Header({ onOpenPortal, activePortal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Prestige', href: '#prestige' },
    { name: 'Principal’s Message', href: '#principal' },
    { name: 'Student Life', href: '#student-life' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Notices', href: '#notices' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollToSegment = (href: string) => {
    setIsOpen(false);
    onOpenPortal(null); // Close portals when navigating main content
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        id="navbar-main"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-nav py-2 shadow-lg border-b border-white/10'
            : 'bg-[#FDFBF7] py-2'
        }`}
      >
        {/* Active Admissions Announcement Bar */}
        {!scrolled && (
          <div className="bg-[#401F3E] text-[#FAF6EE] py-2 px-4 text-center text-xs flex items-center justify-center gap-2 border-b border-white/5 font-sans">
            <span className="inline-flex items-center gap-1 bg-[#6B8E23] text-white px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest animate-pulse">
              Admissions Active
            </span>
            <span className="font-semibold tracking-wide">
              Enrollment is Open for Academic Session 2026-27
            </span>
            <button
              onClick={() => handleScrollToSegment('#admissions')}
              className="underline font-bold text-[#E6B325] hover:text-[#E6B325]/80 ml-2 transition-colors cursor-pointer text-[11px]"
            >
              Apply or Query Now
            </button>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Crest */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleScrollToSegment('#home')}>
              <div className="p-1 bg-white rounded-full shadow-md flex items-center justify-center">
                <SchoolCrest size={46} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-black text-xs sm:text-sm leading-tight tracking-wider text-natural-plum">
                  THE SCHOOL OF
                </span>
                <span className="font-serif font-black text-sm sm:text-base tracking-widest text-[#401F3E]">
                  PANSY FLOWERS
                </span>
                <span className="text-[10px] font-mono font-bold text-natural-olive uppercase tracking-widest hidden sm:inline">
                  Est. 2011 • Changotola
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex bg-natural-sand/30 backdrop-blur-md px-4 py-2 rounded-full border border-natural-plum/10 items-center gap-1">
                {navLinks.slice(0, 5).map((link) => (
                  <button
                    key={link.name}
                    id={`nav-${link.name.toLowerCase().replace(/[^a-z]/g, '')}`}
                    onClick={() => handleScrollToSegment(link.href)}
                    className="px-3 py-1 text-xs font-semibold text-natural-plum/80 hover:text-natural-olive transition-colors rounded-full hover:bg-natural-cream/60 cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
                <span className="h-4 w-[1px] bg-natural-plum/20 mx-1"></span>
                {navLinks.slice(5).map((link) => (
                  <button
                    key={link.name}
                    id={`nav-${link.name.toLowerCase().replace(/[^a-z]/g, '')}`}
                    onClick={() => handleScrollToSegment(link.href)}
                    className="px-3 py-1 text-xs font-semibold text-natural-plum/80 hover:text-natural-olive transition-colors rounded-full hover:bg-natural-cream/60 cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              {/* Action Apply Button */}
              <div className="flex items-center gap-2">
                <button
                  id="header-btn-apply"
                  onClick={() => handleScrollToSegment('#admissions')}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-natural-plum hover:bg-[#341632] rounded-full transition-all shadow-lg shadow-natural-plum/10 cursor-pointer duration-300 uppercase tracking-wider"
                >
                  Apply Now
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center lg:hidden gap-2">
              <button
                id="mobile-nav-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-natural-cream hover:bg-natural-sand/55 text-natural-plum transition-colors cursor-pointer border border-natural-plum/5"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`fixed left-0 w-full bg-natural-bg/95 backdrop-blur-xl z-40 border-b border-natural-plum/10 shadow-xl overflow-hidden block lg:hidden transition-all duration-300 ${
              scrolled ? 'top-[72px]' : 'top-[112px]'
            }`}
          >
            <div className="px-4 pt-4 pb-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    id={`mobile-nav-${link.name.toLowerCase().replace(/[^a-z]/g, '')}`}
                    onClick={() => handleScrollToSegment(link.href)}
                    className="text-left px-3 py-2.5 rounded-xl text-xs font-semibold text-natural-plum/80 hover:text-natural-olive hover:bg-natural-cream transition-all cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
              
              <div className="pt-4 border-t border-natural-sand/50">
                <button
                  id="mobile-cta-apply"
                  onClick={() => handleScrollToSegment('#admissions')}
                  className="w-full py-3 bg-natural-plum hover:bg-[#341632] text-white text-xs font-bold rounded-xl text-center shadow-lg cursor-pointer"
                >
                  Begin Your Child’s Journey (Apply)
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
