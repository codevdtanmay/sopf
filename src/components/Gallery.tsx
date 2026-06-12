import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image, Search, X, Fullscreen, Calendar, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'campus' | 'events' | 'celebrations' | 'activities'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'campus', label: 'Our Campus' },
    { value: 'events', label: 'Festivals & Events' },
    { value: 'celebrations', label: 'National Days' },
    { value: 'activities', label: 'Lab & Classroom' }
  ];

  return (
    <section id="gallery" className="py-24 bg-[#FAF6EE] relative overflow-hidden">
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#E6B325]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6B8E23]/10 border border-[#6B8E23]/25 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#E6B325] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#6B8E23] uppercase">
              Visual Archives
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#401F3E] tracking-tight mb-4">
            A Glimpse of the Sunshine
          </h2>
          <p className="text-sm sm:text-base text-[#401F3E]/75 font-normal leading-relaxed">
            Preserving milestones, artistic dramatic theater showcases, smart science project discoveries, and athletic leaps at Changotola.
          </p>
        </div>

        {/* Categories Tab Row */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`gallery-filter-${cat.value}`}
              onClick={() => setActiveCategory(cat.value as any)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-[#401F3E] border-[#401F3E] text-white shadow-xs'
                  : 'bg-white border-[#401F3E]/10 text-[#401F3E]/60 hover:text-[#401F3E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid of images */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="break-inside-avoid relative rounded-3xl overflow-hidden border border-[#401F3E]/10 bg-white group cursor-pointer shadow-sm text-left"
                id={`gallery-item-${item.id}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform scale-102 group-hover:scale-100 transition-transform duration-500"
                />

                {/* Hover Glass Veil */}
                <div className="absolute inset-0 bg-[#401F3E]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  {/* Glass Card content detail bottom */}
                  <div className="bg-white/95 backdrop-blur-md border border-[#401F3E]/15 p-4 rounded-2xl space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-md">
                    <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-[#6B8E23] uppercase">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.category} Category</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#401F3E] font-serif line-clamp-1">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#401F3E]/60 font-bold">
                      <Eye className="w-3.5 h-3.5 text-[#6B8E23]" />
                      <span>Maximize Image</span>
                    </div>
                  </div>
                </div>

                {/* Static indicator badge for display on mobile or tablets */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2 py-1 bg-white/85 backdrop-blur-xs border border-[#401F3E]/10 text-[9px] font-mono font-bold text-[#401F3E] uppercase rounded-lg opacity-80 group-hover:opacity-0 transition-opacity shadow-xs">
                  <Image className="w-3 h-3 text-[#E6B325]" />
                  <span>{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox full preview popup Modal */}
        <AnimatePresence>
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#401F3E]/60 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white border border-[#401F3E]/10 rounded-3xl shadow-xl relative flex flex-col text-left"
                id="gallery-modal-content"
              >
                <button
                  id="close-gallery-modal"
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-[#FAF6EE] hover:bg-[#F3ECE0] rounded-full text-[#401F3E]/60 hover:text-[#401F3E] transition-colors cursor-pointer z-10 shadow-xs"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Maximized Image display */}
                <div className="flex-grow overflow-hidden flex items-center justify-center bg-[#FAF6EE] p-2">
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-xs"
                  />
                </div>

                {/* Bottom descriptive bar */}
                <div className="p-6 bg-white border-t border-[#401F3E]/10">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-[#6B8E23]/10 border border-[#6B8E23]/20 text-[#6B8E23]">
                      {selectedImage.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#401F3E]/50 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Academic Archive • 2026
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-black text-[#401F3E] mt-2 leading-snug">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-[#401F3E]/70 font-normal mt-1">
                    An official high-resolution, unedited photograph captured by our school editorial club during events at Changotola campus.
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
