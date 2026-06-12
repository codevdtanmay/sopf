import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, GraduationCap, CheckCircle, Trophy, Sparkles, Building2, ChevronRight, Milestone } from 'lucide-react';

export default function Prestige() {
  const [activeSegment, setActiveSegment] = useState<'journey' | 'recognition'>('journey');

  const prestigeCards = [
    { value: '20+', label: 'Years of Excellence', icon: Award, desc: 'Purity in teaching standards & ethics' },
    { value: '1200+', label: 'Active Learners', icon: GraduationCap, desc: 'Pristine developmental growth paths' },
    { value: '70+', label: 'Elite Faculty', icon: Sparkles, desc: 'Masters in respective disciplines' },
    { value: '100%', label: 'Board Triumph', desc: 'Sustained perfect state-wide averages' },
    { value: '50+', label: 'National Awards', desc: 'Recognitions across science & sports sports' }
  ];

  const timelineMilestones = [
    { year: '2011', title: 'Foundation Footprints', desc: 'The School of Pansy Flowers was inaugurated in Changotola with a core vision to merge deep morals with modern science. Start with 120 students.' },
    { year: '2015', title: 'First Board Accreditation', desc: 'Affiliated with the national board and completed our fully equipped physics and biology research complexes. Student base expanded to 550.' },
    { year: '2019', title: 'Smart-Tech Leap', desc: 'Introduced smart interactive computational panels in all classrooms and launched our elite robotics design lab and high-grade sports fields.' },
    { year: '2023', title: 'Global Recognition Award', desc: 'Bestowed the "National Innovative School of the Year" grant for children’s patented research in smart sensors. Student volume stabilized at 1200+.' },
  ];

  const recognitions = [
    { title: 'Affiliation Verification', desc: 'Officially verified and certified under high standard Central Board of Secondary Education codes.' },
    { title: 'Global Curriculum Integration', desc: 'Syllabus designed in cohesion with premium cognitive developmental stages.' },
    { title: 'Premium Sports Certification', desc: 'Fitted with turf certification for active athletic systems and gymnastics safeties.' },
    { title: 'Pristine Clean Environment', desc: '100% green campus utilizing solar generators, complete air filtration and organic garden circles.' }
  ];

  return (
    <section id="prestige" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Dynamic graphic dividers */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#E6B325]/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision Statement and statistics block */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6B8E23]/10 border border-[#6B8E23]/25">
                <Trophy className="w-4 h-4 text-[#6B8E23]" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#6B8E23] uppercase">
                  Institutional Authority
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#401F3E] tracking-tight leading-tight">
                Leading Education. <br />
                <span className="text-[#6B8E23]">
                  Shaping Futures.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#401F3E]/75 font-normal leading-relaxed">
                The School of Pansy Flowers stands as a center of academic excellence, innovation, and holistic development pioneering global learning blueprints in historical Changotola.
              </p>
            </div>

            {/* Achievements stats cards list */}
            <div className="space-y-4 pt-4 text-left">
              <p className="text-xs font-mono font-extrabold text-[#401F3E]/50 uppercase tracking-widest">
                Our Prestige Index
              </p>
              <div className="grid grid-cols-2 gap-4">
                {prestigeCards.slice(0, 4).map((card, i) => (
                  <div key={i} className="p-5 bg-white border border-[#401F3E]/10 rounded-2xl flex flex-col justify-center shadow-sm">
                    <span className="text-2xl sm:text-3.5xl font-serif font-black text-[#401F3E]">{card.value}</span>
                    <span className="text-xs font-bold text-[#6B8E23] mt-0.5">{card.label}</span>
                    <span className="text-[10px] text-[#401F3E]/60 mt-1 leading-snug">{card.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Timeline vs Recognition panel */}
          <div className="lg:col-span-7 bg-[#FAF6EE] border border-[#401F3E]/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md relative text-left">
            <div className="flex bg-white p-1.5 rounded-xl border border-[#401F3E]/5 mb-8 max-w-sm">
              <button
                id="prestige-tab-journey"
                onClick={() => setActiveSegment('journey')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeSegment === 'journey'
                    ? 'bg-[#401F3E] text-white shadow-md'
                    : 'text-[#401F3E]/60 hover:text-[#401F3E]'
                }`}
              >
                Our 20-Year Journey
              </button>
              <button
                id="prestige-tab-recognition"
                onClick={() => setActiveSegment('recognition')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activeSegment === 'recognition'
                    ? 'bg-[#401F3E] text-white shadow-md'
                    : 'text-[#401F3E]/60 hover:text-[#401F3E]'
                }`}
              >
                Standards
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeSegment === 'journey' ? (
                <motion.div
                  key="journey-panel"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Milestone className="w-5 h-5 text-[#6B8E23]" />
                    <span className="text-sm font-bold text-[#401F3E]">Historical Campus Chronology</span>
                  </div>
                  
                  {/* Milestones Flow */}
                  <div className="relative border-l border-[#401F3E]/10 pl-6 ml-4 space-y-8">
                    {timelineMilestones.map((milestone, idx) => (
                      <div key={idx} className="relative group scroll-mt-20">
                        {/* Circle bullet with active look */}
                        <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#E6B325] group-hover:bg-[#E6B325] transition-colors z-10 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>

                        {/* Date badge */}
                        <span className="inline-block px-2.5 py-0.5 rounded bg-[#E6B325]/15 text-[10px] font-mono font-bold text-[#E6B325] mb-2 border border-[#E6B325]/25">
                          {milestone.year}
                        </span>
                        
                        <h4 className="text-base font-serif font-black text-[#401F3E] group-hover:text-[#6B8E23] transition-colors">
                          {milestone.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#401F3E]/70 font-normal mt-1.5 leading-relaxed">
                          {milestone.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="recognition-panel"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-5 h-5 text-[#6B8E23]" />
                    <span className="text-sm font-bold text-[#401F3E]">Institutional Accreditations & Standards</span>
                  </div>

                  <p className="text-xs text-[#401F3E]/60 leading-relaxed font-normal mb-4">
                    The School of Pansy Flowers strictly operates under state-verified regulations to maintain elite benchmark outcomes across behavioral and intellectual milestones.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {recognitions.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-white border border-[#401F3E]/5 space-y-2 hover:border-[#6B8E23]/25 transition-all group">
                        <div className="flex items-center gap-2 text-[#6B8E23] group-hover:text-[#6B8E23]">
                          <CheckCircle className="w-4 h-4 text-[#6B8E23]" />
                          <h4 className="text-xs sm:text-sm font-bold text-[#401F3E]">{item.title}</h4>
                        </div>
                        <p className="text-[11px] sm:text-xs text-[#401F3E]/70 font-normal leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Recognition footer statement */}
                  <div className="pt-4 border-t border-[#401F3E]/10 flex items-center justify-between text-xs font-mono text-[#401F3E]/50 font-bold uppercase tracking-wider">
                    <span>District Code: 832/MP/2011</span>
                    <span className="text-[#6B8E23] font-black">CBSE Affiliation Active</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
