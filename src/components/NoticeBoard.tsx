import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, Search, Calendar, ChevronRight, FileText, X, AlertOctagon, Check } from 'lucide-react';
import { SCHOOL_NOTICES } from '../data';
import { NoticeItem } from '../types';

export default function NoticeBoard() {
  const [filter, setFilter] = useState<'all' | 'academic' | 'event' | 'holiday' | 'admission'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [downloadedNoticeId, setDownloadedNoticeId] = useState<string | null>(null);

  const filteredNotices = SCHOOL_NOTICES.filter((notice) => {
    const matchesFilter = filter === 'all' || notice.category === filter;
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'event': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'holiday': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'admission': return 'bg-amber-50 text-amber-700 border-amber-200';
      default: return 'bg-[#FAF6EE] text-[#401F3E]/70 border-[#401F3E]/10';
    }
  };

  const handleDownloadNotice = (noticeId: string) => {
    setDownloadedNoticeId(noticeId);
    setTimeout(() => {
      setDownloadedNoticeId(null);
    }, 3000);
  };

  return (
    <section id="notices" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-[#E6B325]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B8E23]/10 border border-[#6B8E23]/20">
              <Bell className="w-4 h-4 text-[#6B8E23] animate-bounce" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#6B8E23] uppercase">
                Dynamic Bulletins
              </span>
            </div>
            <h2 className="text-3xl sm:text-[45px] font-serif font-black text-[#401F3E] tracking-tight">
              Notice Board & Updates
            </h2>
            <p className="text-sm sm:text-base text-[#401F3E]/70 font-normal leading-relaxed">
              Stay updated with live academic parameters, seasonal vacation listings, district football bulletins, and admissions interaction milestones.
            </p>
          </div>

          {/* Search bar inputs */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search active notices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-[#401F3E]/10 rounded-xl text-xs text-[#401F3E] placeholder-[#401F3E]/40 focus:outline-none focus:border-[#6B8E23] transition-colors shadow-xs"
            />
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-[#401F3E]/50" />
          </div>
        </div>

        {/* Filter categories tabs row */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[#401F3E]/10 pb-6">
          {['all', 'academic', 'event', 'holiday', 'admission'].map((cat) => (
            <button
              key={cat}
              id={`notice-filter-${cat}`}
              onClick={() => setFilter(cat as any)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-[#401F3E] border-[#401F3E] text-white shadow-xs'
                  : 'bg-white border-[#401F3E]/10 text-[#401F3E]/60 hover:text-[#401F3E]'
              }`}
            >
              {cat === 'all' ? 'All Bulletins' : `${cat}s`}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredNotices.map((notice) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={notice.id}
                onClick={() => setSelectedNotice(notice)}
                className={`p-6 rounded-2xl border bg-white hover:bg-[#FAF6EE] border-[#401F3E]/10 hover:border-[#6B8E23]/30 transition-all cursor-pointer relative group flex flex-col justify-between min-h-[220px] text-left shadow-sm ${
                  notice.isImportant ? 'ring-1 ring-red-350 bg-red-50/20' : ''
                }`}
                id={`notice-card-${notice.id}`}
              >
                {/* Important alert badge on card top */}
                {notice.isImportant && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-50 border border-red-200 text-[9px] font-mono font-bold text-red-700">
                    <AlertOctagon className="w-3 h-3 text-red-650" />
                    <span>CRITICAL</span>
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase border ${getCategoryColor(notice.category)}`}>
                      {notice.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#401F3E]/50 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {notice.date}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-black text-[#401F3E] group-hover:text-[#6B8E23] transition-colors line-clamp-2 leading-snug">
                    {notice.title}
                  </h3>

                  <p className="text-xs text-[#401F3E]/70 leading-relaxed line-clamp-3 font-normal">
                    {notice.content}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#401F3E]/10 mt-4 flex items-center justify-between text-xs font-bold text-[#401F3E]/50 group-hover:text-[#6B8E23] transition-colors">
                  <span>View Full Details</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredNotices.length === 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20 bg-[#FAF6EE] border border-[#401F3E]/10 rounded-3xl">
              <p className="text-[#401F3E]/50 text-sm font-normal">No active bulletins match your search metrics.</p>
            </div>
          )}
        </div>

        {/* Modal Notice Detail Lightbox */}
        <AnimatePresence>
          {selectedNotice && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#401F3E]/40 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-xl bg-white border border-[#401F3E]/10 p-6 sm:p-8 rounded-3xl shadow-xl relative text-left"
                id="notice-modal-content"
              >
                <button
                  id="close-notice-modal"
                  onClick={() => {
                    setSelectedNotice(null);
                    setDownloadedNoticeId(null);
                  }}
                  className="absolute top-4 right-4 p-2 bg-[#FAF6EE] hover:bg-[#F3ECE0] rounded-full text-[#401F3E]/60 hover:text-[#401F3E] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase border ${getCategoryColor(selectedNotice.category)}`}>
                      {selectedNotice.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#401F3E]/60 flex items-center gap-1 pb-0.5">
                      <Calendar className="w-3.5 h-3.5 text-[#401F3E]/40" />
                      {selectedNotice.date}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-black text-[#401F3E] tracking-tight leading-tight">
                    {selectedNotice.title}
                  </h3>

                  <div className="h-[1px] bg-[#401F3E]/10 w-full my-2"></div>

                  <p className="text-sm text-[#401F3E]/75 leading-relaxed font-normal whitespace-pre-line">
                    {selectedNotice.content}
                  </p>

                  <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#401F3E]/10 flex items-center justify-between gap-3 mt-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#6B8E23]" />
                      <div>
                        <p className="text-xs font-bold text-[#401F3E] uppercase tracking-wide">Official PDF Circular</p>
                        <p className="text-[10px] text-[#401F3E]/55 font-mono mt-0.5">PSF-CN-2026-REG0{selectedNotice.id.split('-')[1]}.pdf</p>
                      </div>
                    </div>
                    
                    <button
                      id="download-notice-pdf"
                      disabled={downloadedNoticeId === selectedNotice.id}
                      onClick={() => handleDownloadNotice(selectedNotice.id)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold text-white transition-all cursor-pointer shadow-xs flex items-center gap-1 ${
                        downloadedNoticeId === selectedNotice.id
                          ? 'bg-[#6B8E23]'
                          : 'bg-[#401F3E] hover:bg-[#401F3E]/90'
                      }`}
                    >
                      {downloadedNoticeId === selectedNotice.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> Exported
                        </>
                      ) : (
                        'Export'
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
