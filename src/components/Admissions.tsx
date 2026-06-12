import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Calendar, CheckSquare, FileCheck, Clock, X, HeartHandshake, CheckCircle } from 'lucide-react';
import { ADMISSION_PROCESS, REQUIRED_DOCUMENTS, IMPORTANT_DATES } from '../data';

export default function Admissions() {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showVisitModal, setShowVisitModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formDataError, setFormDataError] = useState('');

  // Form states
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [childGrade, setChildGrade] = useState('Nursery');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [visitTime, setVisitTime] = useState('10:00 AM');

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !childName || !phone || !email) {
      setFormDataError('Please fill in all mandatory parameters.');
      return;
    }
    setFormDataError('');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !phone || !visitDate) {
      setFormDataError('Please select date and fill in necessary fields.');
      return;
    }
    setFormDataError('');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleClose = () => {
    setShowApplyModal(false);
    setShowVisitModal(false);
    setSubmitted(false);
    setFormDataError('');
    setParentName('');
    setChildName('');
    setPhone('');
    setEmail('');
    setVisitDate('');
  };

  return (
    <section id="admissions" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative floral background */}
      <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] bg-[#E6B325]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6B8E23]/10 border border-[#6B8E23]/25 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#E6B325] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#6B8E23] uppercase">
              Admissions Portal
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#401F3E] tracking-tight mb-4">
            Begin Your Child’s Journey
          </h2>
          <p className="text-sm sm:text-base text-[#401F3E]/75 font-normal leading-relaxed">
            Choose a school of high standards, strict values, deep intellect, and compassionate peer groups. Explore our admission timeline for academic Session 2026-27.
          </p>
        </div>

        {/* MultiGrid Section: Process Flow (Left) & Detailed Requirements (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
          
          {/* Left Block: Admission Process Flow (Col span 7) */}
          <div className="lg:col-span-12 xl:col-span-7 bg-white border border-[#401F3E]/10 p-6 sm:p-10 rounded-3xl shadow-sm space-y-8 flex flex-col justify-between text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#6B8E23] uppercase tracking-widest">Procedural Benchmarks</span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#401F3E]">How to Apply</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ADMISSION_PROCESS.map((proc, index) => (
                <div key={index} className="p-4 bg-[#FAF6EE] border border-[#401F3E]/5 rounded-2xl relative overflow-hidden group hover:border-[#6B8E23]/30 transition-all">
                  <span className="text-3xl font-mono font-extrabold text-[#401F3E]/10 group-hover:text-[#6B8E23]/15 transition-colors absolute top-2 right-4">
                    {proc.step}
                  </span>
                  <div className="relative z-10 space-y-2">
                    <h4 className="text-sm font-bold text-[#401F3E] font-serif group-hover:text-[#6B8E23] transition-colors">{proc.title}</h4>
                    <p className="text-xs text-[#401F3E]/75 font-normal leading-relaxed">{proc.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs trigger tools */}
            <div className="pt-6 border-t border-[#401F3E]/10 flex flex-col sm:flex-row gap-4">
              <button
                id="btn-apply-modal-trigger"
                onClick={() => { setFormDataError(''); setShowApplyModal(true); }}
                className="flex-[#401F3E] flex-1 py-4 rounded-xl bg-[#401F3E] text-white font-bold text-xs sm:text-sm uppercase tracking-wider text-center transition-all hover:bg-[#401F3E]/95 active:scale-98 shadow-xs cursor-pointer text-center"
              >
                Begin Registration
              </button>
              <button
                id="btn-visit-modal-trigger"
                onClick={() => { setFormDataError(''); setShowVisitModal(true); }}
                className="flex-1 py-4 rounded-xl bg-white border border-[#401F3E]/15 hover:bg-[#FAF6EE] text-[#401F3E] font-bold text-xs sm:text-sm uppercase tracking-wider text-center transition-all cursor-pointer text-center"
              >
                Schedule Campus Visit
              </button>
            </div>
          </div>

          {/* Right Block: Required Documents & Key Dates (Col span 5) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6 flex flex-col justify-between text-left">
            {/* Required Documents Capsule */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#401F3E]/10 shadow-sm flex-grow flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2 text-[#6B8E23] mb-2">
                <FileCheck className="w-5 h-5 text-[#6B8E23]" />
                <span className="text-sm font-bold text-[#401F3E] font-serif">Eligibility & Required Documents</span>
              </div>
              <ul className="space-y-2.5">
                {REQUIRED_DOCUMENTS.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#401F3E]/85 font-normal leading-relaxed">
                    <CheckSquare className="w-4 h-4 text-[#E6B325] flex-shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] font-mono text-[#401F3E]/50 font-bold uppercase tracking-wider pt-2">
                * Note: Scanned high-resolution formats are required for registrations.
              </p>
            </div>

            {/* Important Dates schedule */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF6EE] border border-[#401F3E]/10 flex-grow flex flex-col justify-center space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-[#6B8E23] mb-2">
                <Clock className="w-5 h-5 animate-pulse text-[#E6B325]" />
                <span className="text-sm font-bold text-[#401F3E] font-serif">Critical Calendar Milestones</span>
              </div>
              <div className="space-y-3">
                {IMPORTANT_DATES.map((dateItem, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#401F3E]/10 hover:border-[#6B8E23]/30 transition-all shadow-xs">
                    <div>
                      <p className="text-xs font-bold text-[#401F3E]">{dateItem.event}</p>
                      <p className="text-[10px] text-[#401F3E]/50 font-mono mt-0.5">{dateItem.date}</p>
                    </div>
                    
                    <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded border ${
                      dateItem.badge === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                      dateItem.badge === 'Deadline' ? 'bg-red-50 text-red-750 border-red-200' :
                      'bg-[#FAF6EE] border-[#401F3E]/10 text-[#401F3E]/60'
                    }`}>
                      {dateItem.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Admissions conversion popup Modal */}
        <AnimatePresence>
          {showApplyModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-lg bg-white border border-[#401F3E]/20 p-6 sm:p-8 rounded-3xl shadow-2xl relative text-left"
                id="apply-registration-form-modal"
              >
                <button
                  id="close-apply-modal"
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 bg-[#FAF6EE] hover:bg-[#FAF6EE]/80 rounded-full text-[#401F3E]/70 hover:text-[#401F3E] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {!submitted ? (
                  <form onSubmit={handleApplySubmit} className="space-y-4">
                    <div className="text-center space-y-1 mb-4">
                      <GraduationCap className="w-8 h-8 text-[#E6B325] mx-auto" />
                      <h3 className="text-xl font-serif font-black text-[#401F3E]">Student Registration Interest</h3>
                      <p className="text-xs text-[#401F3E]/60">Session 2026-27 • Institutional Intake</p>
                    </div>

                    {formDataError && (
                      <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-100 text-center font-normal">
                        {formDataError}
                      </div>
                    )}

                    <div className="space-y-3 font-sans">
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-[#401F3E]/60 mb-1">Parent/Guardian Name *</label>
                        <input
                          type="text"
                          required
                          value={parentName}
                          onChange={(e) => setParentName(e.target.value)}
                          placeholder="e.g. Dr. Rajesh K. Nair"
                          className="w-full bg-[#FAF6EE] border border-[#401F3E]/10 focus:border-[#401F3E] rounded-xl px-4 py-3 text-xs text-[#401F3E] placeholder-[#401F3E]/30 outline-none transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-wider text-[#401F3E]/60 mb-1">Student Pupil Name *</label>
                          <input
                            type="text"
                            required
                            value={childName}
                            onChange={(e) => setChildName(e.target.value)}
                            placeholder="e.g. Aarav Nair"
                            className="w-full bg-[#FAF6EE] border border-[#401F3E]/10 focus:border-[#401F3E] rounded-xl px-4 py-3 text-xs text-[#401F3E] placeholder-[#401F3E]/30 outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-wider text-[#401F3E]/60 mb-1">Grade Seeking *</label>
                          <select
                            value={childGrade}
                            onChange={(e) => setChildGrade(e.target.value)}
                            className="w-full bg-[#FAF6EE] border border-[#401F3E]/10 focus:border-[#401F3E] rounded-xl px-3 py-3 text-xs text-[#401F3E]/80 outline-none transition-colors"
                          >
                            <option>Nursery / Pre-Primary</option>
                            <option>Class I - III</option>
                            <option>Class IV - VIII</option>
                            <option>Class IX - X</option>
                            <option>Class XI (Science)</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-wider text-[#401F3E]/60 mb-1">Contact Phone *</label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full bg-[#FAF6EE] border border-[#401F3E]/10 focus:border-[#401F3E] rounded-xl px-4 py-3 text-xs text-[#401F3E] placeholder-[#401F3E]/30 outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-wider text-[#401F3E]/60 mb-1">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="parent@example.com"
                            className="w-full bg-[#FAF6EE] border border-[#401F3E]/10 focus:border-[#401F3E] rounded-xl px-4 py-3 text-xs text-[#401F3E] placeholder-[#401F3E]/30 outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      id="apply-modal-submit"
                      disabled={submitting}
                      className="w-full py-4 bg-[#401F3E] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all hover:bg-[#401F3E]/90 active:scale-98 relative flex items-center justify-center cursor-pointer text-center"
                    >
                      {submitting ? 'Validating Application...' : 'Submit Admission Request'}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-6 space-y-4"
                  >
                    <CheckCircle className="w-16 h-16 text-[#6B8E23] mx-auto" />
                    <h3 className="text-xl font-serif font-black text-[#401F3E]">Application Received</h3>
                    <p className="text-xs text-[#401F3E]/80 max-w-sm mx-auto leading-relaxed">
                      Thank you for submitting your child’s details. Our desk counselor will coordinate back on the provided phone <strong className="text-[#401F3E] font-bold">{phone}</strong> within 3 business days regarding the scheduling of consultation trials.
                    </p>
                    <button
                      id="apply-modal-success-close"
                      onClick={handleClose}
                      className="px-6 py-2.5 bg-[#401F3E] hover:bg-[#401F3E]/90 text-xs font-mono font-bold text-white rounded-lg transition-colors cursor-pointer text-center"
                    >
                      Return to Admissions
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )}

          {/* Campus Visit scheduling popup Modal */}
          {showVisitModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-lg bg-white border border-[#401F3E]/20 p-6 sm:p-8 rounded-3xl shadow-2xl relative text-left"
                id="schedule-campus-visit-modal"
              >
                <button
                  id="close-visit-modal"
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 bg-[#FAF6EE] hover:bg-[#FAF6EE]/80 rounded-full text-[#401F3E]/70 hover:text-[#401F3E] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {!submitted ? (
                  <form onSubmit={handleVisitSubmit} className="space-y-4">
                    <div className="text-center space-y-1 mb-4">
                      <HeartHandshake className="w-8 h-8 text-[#E6B325] mx-auto" />
                      <h3 className="text-xl font-serif font-black text-[#401F3E]">Schedule a Campus Visit</h3>
                      <p className="text-xs text-[#401F3E]/60">Experience our smart learning labs & lush environment</p>
                    </div>

                    {formDataError && (
                      <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-100 text-center font-normal">
                        {formDataError}
                      </div>
                    )}

                    <div className="space-y-3 font-sans">
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-[#401F3E]/60 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={parentName}
                          onChange={(e) => setParentName(e.target.value)}
                          placeholder="e.g. Dr. Rajesh K. Nair"
                          className="w-full bg-[#FAF6EE] border border-[#401F3E]/10 focus:border-[#401F3E] rounded-xl px-4 py-3 text-xs text-[#401F3E] placeholder-[#401F3E]/30 outline-none transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-wider text-[#401F3E]/60 mb-1">Select Date *</label>
                          <input
                            type="date"
                            required
                            value={visitDate}
                            onChange={(e) => setVisitDate(e.target.value)}
                            className="w-full bg-[#FAF6EE] border border-[#401F3E]/10 focus:border-[#401F3E] rounded-xl px-3 py-3 text-xs text-[#401F3E]/85 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono uppercase tracking-wider text-[#401F3E]/60 mb-1">Preferred Time *</label>
                          <select
                            value={visitTime}
                            onChange={(e) => setVisitTime(e.target.value)}
                            className="w-full bg-[#FAF6EE] border border-[#401F3E]/10 focus:border-[#401F3E] rounded-xl px-3 py-3 text-xs text-[#401F3E]/80 outline-none"
                          >
                            <option>10:00 AM - 11:30 AM</option>
                            <option>11:30 AM - 1:00 PM</option>
                            <option>3:00 PM - 4:30 PM (Athletics display)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-wider text-[#401F3E]/60 mb-1">Mobile Contact Phone *</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-[#FAF6EE] border border-[#401F3E]/10 focus:border-[#401F3E] rounded-xl px-4 py-3 text-xs text-[#401F3E] placeholder-[#401F3E]/30 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      id="visit-modal-submit"
                      disabled={submitting}
                      className="w-full py-4 bg-[#6B8E23] hover:bg-[#6B8E23]/90 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all active:scale-98 flex items-center justify-center cursor-pointer text-center"
                    >
                      {submitting ? 'Reserving Appointment...' : 'Submit Visitation Request'}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-6 space-y-4"
                  >
                    <CheckCircle className="w-16 h-16 text-[#6B8E23] mx-auto" />
                    <h3 className="text-xl font-serif font-black text-[#401F3E]">Visitation Reserved</h3>
                    <p className="text-xs text-[#401F3E]/80 max-w-sm mx-auto leading-relaxed">
                      We have noted your visit reservation for <strong className="text-[#401F3E] font-bold">{visitDate} ({visitTime})</strong>. A gate authorization digital passcode will be dispatched to <strong className="text-[#401F3E] font-bold">{phone}</strong>. Welcome to Changotola.
                    </p>
                    <button
                      id="visit-modal-success-close"
                      onClick={handleClose}
                      className="px-6 py-2.5 bg-[#401F3E] hover:bg-[#401F3E]/90 text-xs font-mono font-bold text-white rounded-lg transition-colors cursor-pointer text-center"
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
