import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Landmark, ChevronRight, GraduationCap, ArrowUpRight } from 'lucide-react';
import { SCHOOL_ACHIEVEMENTS } from '../data';

export default function Achievements() {
  const [selectedCategory, setSelectedCategory] = useState<'analytics' | 'alumni' | 'competitions'>('analytics');

  const alumniSpotlights = [
    {
      name: 'Dr. Siddharth Rao',
      batch: 'Batch of 2014',
      achievement: 'Postdoctoral Fellow at MIT, Robotics',
      desc: 'Siddharth founded our initial tech assembly. He recently got funded for his autonomous medical drones project.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Aditi Chourasia',
      batch: 'Batch of 2017',
      achievement: 'Associate VP & Founder of AgriClean',
      desc: 'Aditi designed our organic waste cycle models. She now heads an eco-waste management venture in Bangalore.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    }
  ];

  const recentTriumphs = [
    { title: 'CBSE Regional topper class X', details: 'Apurva Shukla scored a perfect 99.6% aggregate.', year: '2025' },
    { title: 'Under-19 State Badminton Champion', details: 'Siddhesh Patel won the final singles tournament.', year: '2025' },
    { title: 'National Youth Parliament Award', details: 'Our student delegation won the premium debate trophy.', year: '2026' }
  ];

  return (
    <section id="achievements" className="py-24 bg-[#FAF6EE] relative overflow-hidden">
      <div className="absolute top-[30%] left-[-10%] w-[450px] h-[450px] bg-[#E6B325]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6B8E23]/10 border border-[#6B8E23]/25 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#E6B325] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#6B8E23] uppercase">
              Hall of Excellence
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#401F3E] tracking-tight mb-4">
            Triumphs That Classify Us
          </h2>
          <p className="text-sm sm:text-base text-[#401F3E]/70 font-normal leading-relaxed">
            Our student groups persistently outpace standards, bagging gold state medallions, securing elite research fellowships, and getting recognized globally.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex bg-white p-1.5 rounded-2xl border border-[#401F3E]/10 mb-12 max-w-md mx-auto">
          <button
            id="achievements-tab-metrics"
            onClick={() => setSelectedCategory('analytics')}
            className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              selectedCategory === 'analytics'
                ? 'bg-[#401F3E] text-white shadow-md'
                : 'text-[#401F3E]/60 hover:text-[#401F3E]'
            }`}
          >
            Metrics Core
          </button>
          <button
            id="achievements-tab-alumni"
            onClick={() => setSelectedCategory('alumni')}
            className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              selectedCategory === 'alumni'
                ? 'bg-[#401F3E] text-white shadow-md'
                : 'text-[#401F3E]/60 hover:text-[#401F3E]'
            }`}
          >
            Alumni Success
          </button>
          <button
            id="achievements-tab-recent"
            onClick={() => setSelectedCategory('competitions')}
            className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              selectedCategory === 'competitions'
                ? 'bg-[#401F3E] text-white shadow-md'
                : 'text-[#401F3E]/60 hover:text-[#401F3E]'
            }`}
          >
            Recent Laurels
          </button>
        </div>

        {/* Categories display */}
        <div className="min-h-[300px] text-left">
          {selectedCategory === 'analytics' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {SCHOOL_ACHIEVEMENTS.map((ach) => (
                <div
                  key={ach.id}
                  className="p-6 rounded-3xl bg-white border border-[#401F3E]/10 hover:border-[#6B8E23]/30 transition-all group overflow-hidden relative flex flex-col justify-between shadow-sm hover:shadow-md"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#E6B325]/10 to-transparent rounded-bl-3xl pointer-events-none group-hover:scale-110 transition-transform"></div>
                  
                  <div className="space-y-4">
                    <div className="p-3 bg-[#E6B325]/10 border border-[#E6B325]/20 text-[#E6B325] rounded-xl w-12 h-12 flex items-center justify-center">
                      <Trophy className="w-5 h-5" />
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-mono text-[#6B8E23] uppercase tracking-widest font-extrabold pb-1">
                        {ach.category} category
                      </h4>
                      <div className="text-3xl font-serif font-black text-[#401F3E] mt-1">
                        {ach.value}
                        <span className="text-lg text-[#E6B325]">{ach.suffix}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#401F3E]/75 font-normal leading-relaxed">
                      <strong className="font-bold text-[#401F3E]">{ach.title}</strong>: {ach.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#401F3E]/10 mt-6 flex items-center justify-between text-[11px] font-mono text-[#401F3E]/50">
                    <span>Olympiad/Board Grade</span>
                    <span className="text-[#6B8E23] font-bold uppercase tracking-wider">Verified</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {selectedCategory === 'alumni' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {alumniSpotlights.map((alu, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-[#401F3E]/10 backdrop-blur-md hover:border-[#6B8E23]/30 transition-all flex flex-col sm:flex-row gap-6 relative overflow-hidden shadow-sm"
                >
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-[#6B8E23]/30">
                      <img
                        src={alu.avatar}
                        alt={alu.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center filter grayscale"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 flex-grow">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded bg-[#E6B325]/10 text-[10px] font-mono font-bold text-[#E6B325] border border-[#E6B325]/20 uppercase">
                        {alu.batch}
                      </span>
                      <h4 className="text-base sm:text-lg font-serif font-black text-[#401F3E] mt-1">
                        {alu.name}
                      </h4>
                      <p className="text-xs font-bold text-[#6B8E23]">
                        {alu.achievement}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#401F3E]/75 font-normal leading-relaxed">
                      {alu.desc}
                    </p>

                    <div className="pt-2 flex items-center gap-1.5 text-xs text-[#401F3E] font-bold hover:text-[#6B8E23] cursor-pointer">
                      <span>Read Alumni Memoir</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {selectedCategory === 'competitions' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto space-y-4"
            >
              {recentTriumphs.map((tri, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-[#401F3E]/10 hover:border-[#6B8E23]/30 transition-all flex items-center justify-between gap-4 group shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-[#6B8E23]/10 text-[#6B8E23] rounded-xl">
                      <Award className="w-5 h-5 text-[#6B8E23]" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#401F3E] group-hover:text-[#6B8E23] transition-colors leading-none mb-1">
                        {tri.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#401F3E]/60 font-normal leading-normal">
                        {tri.details}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-[#401F3E]/60 bg-[#FAF6EE] border border-[#401F3E]/10 px-2.5 py-1 rounded-lg">
                    {tri.year}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
