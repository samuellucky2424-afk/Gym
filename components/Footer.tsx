
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 pt-16 md:pt-20 pb-8 md:pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 md:mb-16">
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#" className="flex flex-col mb-6 md:mb-8">
              <span className="text-3xl md:text-4xl font-black tracking-tighter text-emerald-600 leading-none">CINO</span>
              <span className="text-[10px] md:text-sm font-bold tracking-[0.4em] text-zinc-400">UNIVERSAL GYM</span>
            </a>
            <p className="text-zinc-500 max-w-sm mb-6 md:mb-8 leading-relaxed font-medium text-sm md:text-base">
              Transforming lives in Akahia, Nigeria. Join the most elite fitness community and experience the power of universal standards in health and wellness.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-emerald-600 hover:text-white transition-all min-h-[44px] min-w-[44px]"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs md:text-sm mb-6 md:mb-8">Navigation</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-4 gap-x-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-zinc-500 hover:text-emerald-500 transition-colors font-semibold text-sm md:text-base">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs md:text-sm mb-6 md:mb-8">Information</h4>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-zinc-600 text-[10px] font-black uppercase tracking-tighter">ADDRESS</span>
                <span className="text-zinc-400 text-xs md:text-sm font-semibold">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-zinc-600 text-[10px] font-black uppercase tracking-tighter">PHONE</span>
                <span className="text-zinc-400 text-xs md:text-sm font-semibold">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-zinc-600 text-[10px] font-black uppercase tracking-tighter">OPERATING HOURS</span>
                <span className="text-emerald-500 text-xs md:text-sm font-black tracking-widest uppercase">{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 md:pt-10 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs md:text-sm font-medium text-center sm:text-left">
            © {new Date().getFullYear()} Cino Universal Gym. All rights reserved. Built for Elite Performance.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:bg-zinc-800 hover:text-emerald-600 transition-all min-h-[44px] min-w-[44px]"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
