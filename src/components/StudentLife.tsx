import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, Award, Heart, BookOpen } from 'lucide-react';
import { STUDENT_LIFE_ACTIVITIES } from '../data';

export default function StudentLife() {
  const [activeTab, setActiveTab] = useState(STUDENT_LIFE_ACTIVITIES[0].id);

  const activeActivity = STUDENT_LIFE_ACTIVITIES.find(act => act.id === activeTab) || STUDENT_LIFE_ACTIVITIES[0];

  const getIcon = (category: string) => {
    switch(category) {
      case 'Arts & Culture': return <Sparkles className="w-5 h-5" />;
      case 'Community Engagement': return <Heart className="w-5 h-5" />;
      case 'Educational Trips': return <Compass className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section id="student-life" className="py-24 bg-[#FDFBF7] overflow-hidden relative">
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#E6B325]/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6B8E23]/10 border border-[#6B8E23]/25 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#E6B325] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#6B8E23] uppercase">
              Vibrant Campus Life
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#401F3E] tracking-tight mb-4">
            Beyond the Textbook
          </h2>
          <p className="text-sm sm:text-base text-[#401F3E]/70 font-normal leading-relaxed">
            Nurturing well-rounded, compassionate human beings who thrive through peer collaborations, social empathy, creative performance, and physical athletics.
          </p>
        </div>

        {/* Storytelling tab layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Navigation Tab list (Col span 4) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none snap-x justify-start">
            {STUDENT_LIFE_ACTIVITIES.map((act) => (
              <button
                key={act.id}
                id={`student-life-tab-${act.id}`}
                onClick={() => setActiveTab(act.id)}
                className={`snap-center flex-shrink-0 flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all border duration-300 w-64 lg:w-full cursor-pointer ${
                  activeTab === act.id
                    ? 'bg-white border-[#401F3E]/20 text-[#401F3E] shadow-md'
                    : 'bg-[#FAF6EE]/50 border-[#401F3E]/5 hover:border-[#401F3E]/15 text-[#401F3E]/60 hover:text-[#401F3E]'
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${
                  activeTab === act.id ? 'bg-[#6B8E23]/15 text-[#6B8E23]' : 'bg-[#FAF6EE] text-[#401F3E]/50'
                }`}>
                  {getIcon(act.category)}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono font-bold text-[#6B8E23] uppercase tracking-widest leading-none">
                    {act.category}
                  </span>
                  <span className="text-xs sm:text-sm font-bold mt-1.5 leading-none">
                    {act.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Story panel display (Col span 8) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeActivity.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden border border-[#401F3E]/10 bg-white flex flex-col md:flex-row h-full min-h-[400px] text-left shadow-sm"
              >
                {/* Visual Imagery half */}
                <div className="w-full md:w-1/2 relative min-h-[220px] md:min-h-0">
                  <img
                    src={activeActivity.image}
                    alt={activeActivity.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center absolute inset-0 filter grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-white/10 to-transparent"></div>
                </div>

                {/* Narrative content details section */}
                <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#6B8E23]">
                    {getIcon(activeActivity.category)}
                    <span>{activeActivity.category}</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-[#401F3E]">
                    {activeActivity.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#401F3E]/75 font-normal leading-relaxed">
                    {activeActivity.description}
                  </p>

                  <div className="pt-4 border-t border-[#401F3E]/15 flex items-center justify-between text-[11px] font-mono text-[#401F3E]/50">
                    <span>Enrollment Base: Class VI–XII</span>
                    <span className="text-[#6B8E23] font-bold uppercase tracking-wider">Active Module</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
