import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      setErrorText('Please fill in all mandatory parameters before submitting.');
      return;
    }
    setErrorText('');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      // Reset
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative ambient backdrop light */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#E6B325]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6B8E23]/10 border border-[#6B8E23]/25 mb-4">
            <span className="h-2 w-2 rounded-full bg-[#E6B325] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#6B8E23] uppercase">
              Interact With Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#401F3E] tracking-tight mb-4">
            Connect With Our Desk
          </h2>
          <p className="text-sm sm:text-base text-[#401F3E]/70 font-normal leading-relaxed">
            Our campus administrative desk operates Monday to Friday, 9:00 AM to 4:00 PM IST. Reach out to coordinate onboarding interactions or schedule visits.
          </p>
        </div>

        {/* Contact form and details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-container">
          
          {/* Left Block: Contact Info and Map (Col span 5) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6 text-left">
              <span className="text-[10px] font-mono font-extrabold text-[#6B8E23] uppercase tracking-widest">
                Official Coordinates
              </span>
              
              {/* Address detail */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#401F3E]/10 hover:border-[#6B8E23]/30 transition-all shadow-sm">
                <div className="p-3 bg-[#6B8E23]/10 text-[#6B8E23] border border-[#6B8E23]/20 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#401F3E] font-serif">Campus Address</h4>
                  <p className="text-xs sm:text-sm text-[#401F3E]/75 font-normal mt-1 leading-relaxed">
                    Main Bazar Road, Changotola, Balaghat, <br />
                    Madhya Pradesh 481116, India.
                  </p>
                </div>
              </div>

              {/* Phone detail */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#401F3E]/10 hover:border-[#6B8E23]/30 transition-all shadow-sm">
                <div className="p-3 bg-[#6B8E23]/10 text-[#6B8E23] border border-[#6B8E23]/20 rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#401F3E] font-serif">Administrative Phone</h4>
                  <p className="text-xs sm:text-sm text-[#401F3E]/75 font-normal mt-1 tracking-wide">
                    +91 76352 82211 <br />
                    +91 94254 36622
                  </p>
                </div>
              </div>

              {/* Email detail */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#401F3E]/10 hover:border-[#6B8E23]/30 transition-all shadow-sm">
                <div className="p-3 bg-[#6B8E23]/10 text-[#6B8E23] border border-[#6B8E23]/20 rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#401F3E] font-serif">Direct Email Desk</h4>
                  <p className="text-xs sm:text-sm text-[#401F3E]/70 font-normal mt-1">
                    info@pansyflowersschool.com <br />
                    admissions@pansyflowersschool.com
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Interactive Map Placeholder (Ultra-high polish vector design) */}
            <div className="relative rounded-3xl overflow-hidden border border-[#401F3E]/10 h-[220px] bg-[#FAF6EE] flex flex-col justify-center items-center p-6 text-center shadow-sm group">
              {/* grid background representing blueprint map */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(64,31,62,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(64,31,62,0.015)_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
              
              {/* Decorative abstract roads lines */}
              <svg className="absolute inset-0 w-full h-full stroke-[#401F3E] opacity-10 pointer-events-none" fill="none" strokeWidth="2">
                <path d="M-50,80 Q100,50 350,150 T800,20" />
                <path d="M120,-30 L120,250" />
                <path d="M220,-30 Q250,110 180,250" />
              </svg>

              {/* Map pin */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 p-4 bg-[#E6B325]/15 text-[#E6B325] border border-[#E6B325]/30 rounded-full shadow-md mb-3 flex items-center justify-center w-12 h-12"
              >
                <MapPin className="w-6 h-6" />
                {/* pulsing dot */}
                <span className="absolute inset-0 rounded-full bg-[#E6B325]/20 scale-150 animate-ping"></span>
              </motion.div>

              <div className="relative z-10 space-y-1">
                <h4 className="text-xs font-mono font-bold text-[#401F3E] uppercase tracking-wider">Changotola Headquarters</h4>
                <p className="text-[10px] text-[#401F3E]/50 font-mono">Coordinates: 21.9482° N, 80.3702° E</p>
                <a
                  href="https://maps.google.com/?q=Changotola+Balaghat+Madhya+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3.5 py-1.5 bg-white border border-[#401F3E]/10 rounded-lg text-[9px] font-mono text-[#E6B325] font-extrabold tracking-widest hover:bg-[#FAF6EE] transition-colors shadow-xs"
                >
                  Direct Google Maps Link
                </a>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Form (Col span 7) */}
          <div className="lg:col-span-12 xl:col-span-7 bg-white border border-[#401F3E]/10 p-6 sm:p-10 rounded-3xl flex flex-col justify-center text-left shadow-sm">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <CheckCircle2 className="w-16 h-16 text-[#6B8E23] mx-auto" />
                <h3 className="text-xl font-serif font-black text-[#401F3E]">Inquiry Logged</h3>
                <p className="text-xs sm:text-sm text-[#401F3E]/70 max-w-md mx-auto leading-relaxed">
                  Your communication dispatch has been recorded successfully. Our desk clerks will respond to your queries back within 24 operational hours.
                </p>
                <button
                  id="contact-suc-reset"
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-[#401F3E] hover:bg-[#401F3E]/90 text-xs font-mono font-bold text-white rounded-lg transition-colors cursor-pointer"
                >
                  New Message Dispatch
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="desk-query-form">
                <div className="space-y-1 mb-4">
                  <span className="text-[10px] font-mono font-bold text-[#6B8E23] uppercase tracking-widest">
                    Operational Dispatch
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#401F3E]">Direct Desk Channel</h3>
                  <p className="text-xs text-[#401F3E]/50 font-normal">Fields designated with stars are mandatory.</p>
                </div>

                {errorText && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>{errorText}</span>
                  </div>
                )}

                <div className="space-y-3 font-sans">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#401F3E]/60 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Dr. Amitabh Sen"
                      className="w-full bg-[#FAF6EE] border border-[#401F3E]/10 focus:border-[#6B8E23] rounded-xl px-4 py-3 text-xs text-[#401F3E] placeholder-[#401F3E]/40 outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#401F3E]/60 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. parent@gmail.com"
                        className="w-full bg-[#FAF6EE] border border-[#401F3E]/10 focus:border-[#6B8E23] rounded-xl px-4 py-3 text-xs text-[#401F3E] placeholder-[#401F3E]/40 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-[#401F3E]/60 mb-1">Mobile Contact *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98XXX XXXXX"
                        className="w-full bg-[#FAF6EE] border border-[#401F3E]/10 focus:border-[#6B8E23] rounded-xl px-4 py-3 text-xs text-[#401F3E] placeholder-[#401F3E]/40 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-[#401F3E]/60 mb-1">Detailed Inquiry Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your doubts, admission seek queries, curriculum levels or other operations..."
                      className="w-full bg-[#FAF6EE] border border-[#401F3E]/10 focus:border-[#6B8E23] rounded-xl px-4 py-3 text-xs text-[#401F3E] placeholder-[#401F3E]/40 outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  id="query-submit-btn"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-[#401F3E] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-[#401F3E]/95 disabled:bg-[#401F3E]/80 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitting ? 'Transmitting inquiry...' : 'Transmit Query'} <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
