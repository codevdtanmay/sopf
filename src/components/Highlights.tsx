import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Users, FlaskConical, Trophy, Palette, Compass, ShieldAlert, Cpu } from 'lucide-react';
import { SCHOOL_HIGHLIGHTS } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap: GraduationCap,
  Users: Users,
  FlaskConical: FlaskConical,
  Trophy: Trophy,
  Palette: Palette,
  Compass: Compass,
  ShieldAlert: ShieldAlert,
  Cpu: Cpu,
};

export default function Highlights() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  // We will staggered load or fade in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="highlights" className="py-24 bg-[#FAF6EE] overflow-hidden relative">
      {/* Decorative subtle ambient lights backdrops */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#6B8E23]/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#E6B325]/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B8E23]/10 border border-[#6B8E23]/20 mb-4"
          >
            <span className="h-2 w-2 rounded-full bg-[#E6B325] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#6B8E23] uppercase">
              Distinctive Benchmarks
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif font-bold text-[#401F3E] tracking-tight mb-4"
          >
            Pillars of Holistic Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#401F3E]/70 font-normal leading-relaxed"
          >
            Delighting minds with exceptional physical infrastructure, veteran mentorship structures, and future-forward design learning paradigms in Changotola.
          </motion.p>
        </div>

        {/* Bento Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SCHOOL_HIGHLIGHTS.map((highlight, index) => {
            const IconComponent = iconMap[highlight.iconName] || GraduationCap;
            
            // To make the grid interesting and look like high-end Apple layout, we can designate some cards to span columns
            // Card 0 (academic) and Card 2 (labs) can span 2 cols on tablet or desktop
            const isLarge = index === 0 || index === 2;
            const spanClass = isLarge
              ? 'md:col-span-2 lg:col-span-2'
              : 'md:col-span-1 lg:col-span-1';

            return (
              <motion.div
                key={highlight.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(highlight.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-3xl overflow-hidden border border-[#401F3E]/10 bg-white hover:border-[#401F3E]/20 transition-all duration-500 h-[280px] flex flex-col justify-end p-6 shadow-sm hover:shadow-md ${spanClass}`}
                id={`highlight-card-${highlight.id}`}
              >
                {/* Background Image that fades in on hover */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center scale-102 group-hover:scale-100 transition-transform duration-700 opacity-6 group-hover:opacity-[0.14] filter grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent"></div>
                </div>

                {/* Animated colored highlight bar on the top edge */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#E6B325]/30 to-transparent group-hover:via-[#E6B325] opacity-60"></div>

                {/* Floating Content */}
                <div className="relative z-10 w-full">
                  {/* Icon Area */}
                  <div className="flex justify-between items-start mb-4">
                    <motion.div
                      animate={{
                        y: hoveredIndex === highlight.id ? -3 : 0,
                        scale: hoveredIndex === highlight.id ? 1.02 : 1
                      }}
                      className="p-3 rounded-2xl bg-[#6B8E23]/10 border border-[#6B8E23]/10 text-[#6B8E23] group-hover:text-[#401F3E] group-hover:bg-[#E6B325]/20 group-hover:border-[#E6B325]/20 transition-all shadow-sm"
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.div>
                    
                    {/* Index or tag */}
                    <span className="text-[10px] font-mono text-[#401F3E]/40 group-hover:text-natural-olive font-extrabold uppercase transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-black text-[#401F3E] transition-colors mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#401F3E]/70 leading-relaxed font-normal group-hover:text-[#401F3E] transition-all">
                    {highlight.description}
                  </p>
                </div>

                {/* Micro interaction glow */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-[#E6B325]/5 blur-2xl group-hover:bg-[#E6B325]/10 transition-all duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
