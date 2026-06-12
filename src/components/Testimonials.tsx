import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, MessageSquare, Star } from 'lucide-react';
import { SCHOOL_TESTIMONIALS } from '../data';
import { TestimonialItem } from '../types';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [relationFilter, setRelationFilter] = useState<'all' | 'Parent' | 'Student' | 'Alumni'>('all');

  const filteredList = relationFilter === 'all'
    ? SCHOOL_TESTIMONIALS
    : SCHOOL_TESTIMONIALS.filter(t => t.relationship === relationFilter);

  // Safely select index
  const listToUse = filteredList.length > 0 ? filteredList : SCHOOL_TESTIMONIALS;
  const currentTestimonial = listToUse[activeIdx % listToUse.length] || SCHOOL_TESTIMONIALS[0];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % listToUse.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + listToUse.length) % listToUse.length);
  };

  const handleFilterClick = (filterVal: typeof relationFilter) => {
    setRelationFilter(filterVal);
    setActiveIdx(0); // Reset idx
  };

  return (
    <section id="testimonials" className="py-24 bg-[#FAF6EE] relative overflow-hidden">
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-[#E6B325]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6B8E23]/10 border border-[#6B8E23]/25 mb-4" id="testimonials-badge">
            <span className="h-2 w-2 rounded-full bg-[#E6B325] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#6B8E23] uppercase">
              Verbatim Testimony
            </span>
          </div>
          <h2 className="text-3xl sm:text-[45px] font-serif font-black text-[#401F3E] tracking-tight" id="testimonials-title">
            What Parents & Pupils Say
          </h2>
          <p className="text-sm sm:text-base text-[#401F3E]/70 font-normal leading-relaxed mt-3" id="testimonials-desc">
            Listen directly to the insights shared by prospective academic leaders, science research alumni scholars, and satisfied parent circles.
          </p>
        </div>

        {/* Filter categories pills row */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {['all', 'Parent', 'Student', 'Alumni'].map((filterVal) => (
            <button
              key={filterVal}
              id={`testimonial-filter-${filterVal}`}
              onClick={() => handleFilterClick(filterVal as any)}
              className={`px-4.5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                relationFilter === filterVal
                  ? 'bg-[#401F3E] border-[#401F3E] text-white shadow-sm'
                  : 'bg-white border-[#401F3E]/10 text-[#401F3E]/80 hover:bg-[#FAF6EE]'
              }`}
            >
              {filterVal === 'all' ? 'All Reviews' : `${filterVal}s`}
            </button>
          ))}
        </div>

        {/* glassmorphic Testimonial Slider Card */}
        <div className="max-w-4xl mx-auto relative px-4" id="testimonials-slider-box">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.35 }}
              className="relative rounded-3xl overflow-hidden border border-[#401F3E]/10 bg-white p-8 sm:p-14 shadow-sm min-h-[300px] flex flex-col justify-between text-left"
            >
              {/* Giant quote decorator */}
              <Quote className="absolute top-10 right-10 w-24 h-24 text-[#401F3E] opacity-5 pointer-events-none" />

              <div className="space-y-6 relative z-10 flex-grow flex flex-col justify-center">
                {/* Visual Stars Rating */}
                <div className="flex items-center gap-1 text-[#E6B325]">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-base sm:text-xl lg:text-2xl font-serif font-bold italic text-[#401F3E] leading-relaxed">
                  “{currentTestimonial.quote}”
                </blockquote>
              </div>

              {/* Profile Person details */}
              <div className="pt-8 border-t border-[#401F3E]/10 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#E6B325]/40">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-serif font-black text-[#401F3E]">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-[11px] font-mono font-medium text-[#401F3E]/60 mt-0.5">
                      {currentTestimonial.role}
                    </p>
                  </div>
                </div>

                {/* Relationship Tag badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-[#6B8E23]/10 border border-[#6B8E23]/25 text-[10px] font-mono font-bold text-[#6B8E23] uppercase tracking-widest sm:self-center">
                  Verified {currentTestimonial.relationship}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls (Chevron Left / Right) */}
          <div className="flex justify-center sm:justify-between items-center gap-4 mt-8 sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:inset-x-[-24px] sm:mt-0 relative z-20">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-[#401F3E]/10 text-[#401F3E] hover:bg-[#FAF6EE] transition-all shadow-xs cursor-pointer"
              title="Previous testimony"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-[#401F3E]/10 text-[#401F3E] hover:bg-[#FAF6EE] transition-all shadow-xs cursor-pointer"
              title="Next testimony"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-1.5 mt-6">
            {listToUse.map((_, idx) => (
              <button
                key={idx}
                id={`testimonial-dot-${idx}`}
                onClick={() => setActiveIdx(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeIdx % listToUse.length === idx
                    ? 'w-6 bg-[#401F3E]'
                    : 'w-1.5 bg-[#401F3E]/20 hover:bg-[#401F3E]/40'
                }`}
              ></button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
