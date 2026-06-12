import React, { useState } from 'react';
import SchoolCrest from './SchoolCrest';
import { Facebook, Twitter, Youtube, ArrowUp, Mail, Phone, MapPin, ExternalLink, Calendar, Check } from 'lucide-react';

export default function Footer() {
  const [downloadedPolicy, setDownloadedPolicy] = useState(false);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnchorClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const triggerPolicyDownload = () => {
    setDownloadedPolicy(true);
    setTimeout(() => {
      setDownloadedPolicy(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#401F3E] text-white border-t border-white/15 pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Crest emblem, Motto (Col span 4) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-full flex items-center justify-center">
                <SchoolCrest size={50} />
              </div>
              <div>
                <span className="block font-serif font-black text-sm tracking-wider text-white/80">
                  THE SCHOOL OF
                </span>
                <span className="block font-serif font-black text-xs text-[#E6B325] tracking-widest uppercase">
                  PANSY FLOWERS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed max-w-sm">
              Established in 2011 with the Sanskrit standard philosophy of <strong className="text-white">“ज्ञानं परमं ध्येयम्”</strong> (Knowledge is the ultimate destination). Over 20 years of moral academic benchmarks in Changotola.
            </p>

            <div className="space-y-1">
              <p className="text-[10px] font-mono text-white/40 font-bold uppercase tracking-wider">Our Sacred Motto</p>
              <p className="text-sm font-serif italic text-[#E6B325] font-bold">
                “Where Curiosity Blossoms Into Excellence”
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links (Col span 3) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest border-l-2 border-[#E6B325] pl-3">
              Jump Destinations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70 font-normal">
              {[
                { name: 'Primary Campus Home', href: '#home' },
                { name: 'Core Benchmarks', href: '#highlights' },
                { name: 'Principal Vision', href: '#principal' },
                { name: 'Laurels & Achievements', href: '#achievements' },
                { name: 'Admission Timeline', href: '#admissions' },
                { name: 'Latest Announcements', href: '#notices' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleAnchorClick(link.href)}
                    className="hover:text-[#E6B325] text-left transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-[#E6B325]">•</span>
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Coordinates list (Col span 3) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest border-l-2 border-[#E6B325] pl-3">
              Help Desk Channels
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70 font-normal">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">Main Bazar Road, Changotola, Balaghat, MP, 481116, India.</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white/40 flex-shrink-0" />
                <span>+91 76352 82211, +91 94254 36622</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white/40 flex-shrink-0" />
                <span className="break-all">info@pansyflowersschool.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Accreditations (Col span 2) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-widest border-l-2 border-[#E6B325] pl-3">
              Social Feeds
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 border border-white/10 hover:border-[#E6B325] rounded-xl text-white/75 hover:text-[#E6B325] transition-colors"
                title="Follow Facebook feed"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 border border-white/10 hover:border-[#E6B325] rounded-xl text-white/75 hover:text-[#E6B325] transition-colors"
                title="Follow Twitter feed"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 border border-white/10 hover:border-[#E6B325] rounded-xl text-white/75 hover:text-[#E6B325] transition-colors"
                title="Watch YouTube channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <p className="text-[10px] text-white/40 leading-normal font-mono font-semibold uppercase">
              District Code: Balaghat 09MPA <br />
              Registration: Since 2011
            </p>
          </div>

        </div>

        {/* Bottom Horizontal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/40 font-semibold tracking-wider">
          <p>© 2026 The School of Pansy Flowers. All Rights Reserved. Certified CBSE Affiliation.</p>
          <div className="flex items-center gap-4 relative">
            
            {downloadedPolicy && (
              <span className="absolute -top-8 right-20 bg-[#6B8E23] text-white px-2 py-1 rounded text-[9px] font-bold animate-fade-in flex items-center gap-1">
                <Check className="w-3 h-3" /> Policy Download Queued
              </span>
            )}

            <button
              onClick={triggerPolicyDownload}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Academic Policies
            </button>
            <button
              onClick={scrollUp}
              className="p-2 rounded bg-white/5 border border-white/10 hover:border-[#E6B325] text-white/75 hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              title="Scroll to crown peak"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
