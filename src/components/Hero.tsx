import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass, Sparkles, BookOpen, Stars, Code2, Calculator, Binary } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onApplyClick: () => void;
}

export default function Hero({ onExploreClick, onApplyClick }: HeroProps) {
  const stats = [
    { value: '1200+', label: 'Enrolled Pupils', desc: 'Holistic growth seekers' },
    { value: '75+', label: 'Elite Mentors', desc: 'From top-tier universities' },
    { value: '20+', label: 'Years of Trust', desc: 'Since initial footprints' },
    { value: '100%', label: 'Board Triumph', desc: 'Academic excellence' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FDFBF7] pt-24 pb-12"
    >
      {/* Background Graphic with elegant, subtle organic gradient layout */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.12 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80"
          alt="The School of Pansy Flowers Campus"
          className="w-full h-full object-cover object-center filter grayscale"
          referrerPolicy="no-referrer"
        />
        {/* Soft luxurious gradients for Natural Tones warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-transparent to-[#FDFBF7]/35"></div>
        
        {/* Soft, beautiful grid pattern to maintain high-end blueprint feel */}
        <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(to_bottom,rgba(64,31,62,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(64,31,62,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"></div>
      </div>

      {/* Floating elements stylized for Organic Natural Tones guidelines */}
      <div className="absolute inset-0 pointer-events-none z-10 select-none">
        {/* Left Floating Box: Coding at Early Age */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-[22%] left-[4%] lg:left-[8%] hidden md:flex items-center gap-3 bg-[#FAF6EE]/90 backdrop-blur-md border border-[#401F3E]/10 p-3.5 rounded-2xl bg-white shadow-md"
        >
          <div className="p-2.5 bg-[#401F3E]/10 rounded-xl text-[#401F3E]">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-[#6B8E23] uppercase tracking-widest font-extrabold pb-0.5">Early Coding</p>
            <p className="text-xs font-bold text-[#401F3E]">Scratch & Python Logic</p>
          </div>
        </motion.div>

        {/* Left Lower Floating Box: Vedic Maths */}
        <motion.div
          animate={{
            y: [0, 8, 0],
            rotate: [1, -2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-[52%] left-[3%] lg:left-[6%] hidden md:flex items-center gap-3 bg-[#FAF6EE]/90 backdrop-blur-md border border-[#401F3E]/10 p-3.5 rounded-2xl bg-white shadow-md"
        >
          <div className="p-2.5 bg-[#E6B325]/15 rounded-xl text-[#E6B325]">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-[#401F3E]/60 uppercase tracking-widest font-extrabold pb-0.5">Vedic Maths</p>
            <p className="text-xs font-bold text-[#401F3E]">Speed Mental Math</p>
          </div>
        </motion.div>

        {/* Right Floating Compass element */}
        <motion.div
          animate={{
            y: [-8, 8, -8],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-[32%] right-[8%] hidden md:flex items-center gap-3 bg-[#FAF6EE]/90 backdrop-blur-md border border-[#401F3E]/10 p-3.5 rounded-2xl bg-white shadow-md"
        >
          <div className="p-2.5 bg-[#6B8E23]/15 rounded-xl text-[#6B8E23]">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-[#6B8E23] uppercase tracking-widest font-extrabold pb-0.5">Future Skills</p>
            <p className="text-xs font-bold text-[#401F3E]">Next-Gen Robotics</p>
          </div>
        </motion.div>

        {/* Right Lower Floating Box: Abacus training */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [-1, 2, -1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-[58%] right-[6%] hidden md:flex items-center gap-3 bg-[#FAF6EE]/90 backdrop-blur-md border border-[#401F3E]/10 p-3.5 rounded-2xl bg-white shadow-md"
        >
          <div className="p-2.5 bg-[#6B8E23]/10 rounded-xl text-[#6B8E23]">
            <Binary className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-mono text-[#E6B325] font-extrabold uppercase tracking-widest pb-0.5">Abacus Method</p>
            <p className="text-xs font-bold text-[#401F3E]">Mental Agility Mastery</p>
          </div>
        </motion.div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 flex-grow flex flex-col justify-center">
        <div className="max-w-4xl text-left">
          {/* Animated Slogan Title tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-2 mb-6"
          >
            <Stars className="w-4 h-4 text-[#E6B325] fill-[#E6B325]/30" />
            <span className="text-xs sm:text-sm font-sans font-extrabold tracking-widest text-[#401F3E] uppercase">
              The School of Pansy Flowers
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#E6B325]"></span>
            <span className="text-[10px] sm:text-xs font-mono font-bold text-[#6B8E23] tracking-wider uppercase">
              “ज्ञानं परमं ध्येयम्”
            </span>
          </motion.div>

          {/* Headline Reveal */}
          <h1 className="text-4xl sm:text-6xl lg:text-7.5xl font-serif text-[#401F3E] tracking-tight leading-[1.08] mb-6">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="block font-black"
            >
              Empowering Young Minds
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block font-normal italic text-[#6B8E23]"
            >
              To Shape Tomorrow
            </motion.span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg text-[#401F3E]/70 max-w-2xl font-normal leading-relaxed mb-10"
          >
            An international sanctuary of learning, combining rigorous academic standards with creative exploration. We empower students to develop deep critical insights and transform potential into excellence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16"
          >
            <button
              id="hero-apply-btn"
              onClick={onApplyClick}
              className="px-8 py-4 rounded-full bg-[#401F3E] hover:bg-black text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#401F3E]/15 hover:shadow-[#401F3E]/30 hover:scale-[1.02] active:scale-95 transition-all text-center cursor-pointer flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="hero-explore-btn"
              onClick={onExploreClick}
              className="px-8 py-4 rounded-full border-2 border-[#401F3E] text-[#401F3E] hover:bg-[#401F3E] hover:text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 text-center cursor-pointer flex items-center justify-center gap-2"
            >
              Explore Campus
            </button>
          </motion.div>
        </div>

        {/* Animated Statistics - Natural Tones Grid */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-[#401F3E]/5"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="border-l-3 border-[#E6B325] pl-5 py-2 relative group"
            >
              <p className="text-3xl sm:text-4xl font-serif font-black text-[#401F3E] mb-1">
                {stat.value}
              </p>
              <p className="text-xs font-bold text-[#6B8E23] tracking-wider uppercase">
                {stat.label}
              </p>
              <p className="text-[10px] text-[#401F3E]/60 font-mono mt-0.5">
                {stat.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Wave Wave Divider suited for Natural palette */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] text-[#FAF6EE] fill-current">
          <path d="M0,0 C150,90 350,120 600,100 C850,80 1050,110 1200,80 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
