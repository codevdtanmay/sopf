import React from 'react';
import { motion } from 'motion/react';
import { Quote, Sparkles, Send, Award } from 'lucide-react';

export default function PrincipalMessage() {
  return (
    <section id="principal" className="py-24 bg-[#FAF6EE] overflow-hidden relative">
      {/* Decorative floral elements backgrounds */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-[#E6B325]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-left">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6B325]/10 border border-[#E6B325]/25 mb-4">
              <Award className="w-4 h-4 text-[#E6B325]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#E6B325] uppercase">
                Leadership Word
              </span>
            </div>
            <h2 className="text-3xl sm:text-[45px] font-serif font-black text-[#401F3E] tracking-tight">
              From Our Principal’s Desk
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#E6B325] to-[#FAF6EE] mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Glass-card Layout for Natural Tones */}
          <div className="relative rounded-3xl overflow-hidden border border-[#401F3E]/10 bg-white p-6 sm:p-12 shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#E6B325]/5 to-transparent rounded-bl-full pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Portrait container */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#E6B325]/30 shadow-md">
                  {/* Portrait of respected lady principal */}
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                    alt="Dr. Meera J. Shrivastava, Principal"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#401F3E]/20 via-transparent to-transparent opacity-45"></div>
                </div>

                <div className="mt-6 space-y-1">
                  <h3 className="text-lg sm:text-xl font-serif font-black text-[#401F3E]">
                    Dr. Meera J. Shrivastava
                  </h3>
                  <p className="text-[11px] font-mono font-bold text-[#E6B325] uppercase tracking-widest">
                    M.A., Ph.D. in Education (BHU)
                  </p>
                  <p className="text-xs text-[#401F3E]/60 font-medium">
                    Principal, Since 2014
                  </p>
                </div>
              </div>

              {/* Message block */}
              <div className="lg:col-span-8 space-y-6 relative">
                {/* Large quote element background */}
                <Quote className="absolute -top-10 -left-6 w-20 h-20 text-[#401F3E]/5 opacity-40 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  {/* Inspirational quote header */}
                  <p className="text-lg md:text-xl font-serif font-semibold italic text-[#401F3E] leading-relaxed pl-4 border-l-2 border-[#E6B325]">
                    “The function of intelligence is to teach one to think intensively and to think critically. Character building is the ultimate goal of true education.”
                  </p>

                  <div className="text-xs sm:text-sm text-[#401F3E]/80 font-normal leading-relaxed space-y-4 pt-4">
                    <p>
                      Dear Parents, Seekers, and Students,
                    </p>
                    <p>
                      Welcome to <strong className="font-semibold text-[#401F3E]">The School of Pansy Flowers</strong>. As educators, our primary duty is not just feeding facts to our pupils, but triggering their raw dormant spark of natural curiosity. If a child enters our gates with a million questions, it is our duty to return them with two million, along with the systematic skills to solve them.
                    </p>
                    <p>
                      Each child at Pansy Flowers represents a unique seedling. Under our care, we provide the essential soils of strict discipline, state-of-the-art computational exposure, and classical performative arts to ensure their personality blossoms into majestic leaders ready to navigate global citizenship.
                    </p>
                    <p>
                      We look forward to partnering with parents who believe in empowering children with moral depth, extreme critical questioning capabilities, and emotional kindness.
                    </p>
                  </div>
                </div>

                {/* Signature area with a luxury sign-off */}
                <div className="pt-6 border-t border-[#401F3E]/10 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-mono font-bold text-[#401F3E]/40 uppercase tracking-wider">
                      Warm Regards & Vision,
                    </p>
                    <p className="text-sm font-serif font-black text-[#401F3E]">
                      Meera Shrivastava
                    </p>
                  </div>

                  {/* Elegant mock signature script */}
                  <div className="relative">
                    <span className="font-serif italic font-bold text-[#E6B325] text-2xl tracking-widest opacity-85 select-none font-signature">
                      M. Shrivastava
                    </span>
                    <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#E6B325]/30"></div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
