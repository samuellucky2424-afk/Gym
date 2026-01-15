
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex flex-col mb-8">
              <span className="text-4xl font-black tracking-tighter text-red-600 leading-none">CINO</span>
              <span className="text-sm font-bold tracking-[0.4em] text-zinc-400">UNIVERSAL GYM</span>
            </a>
            <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed font-medium">
              Transforming lives in Akahia, Nigeria. Join the most elite fitness community and experience the power of universal standards in health and wellness.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Navigation</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-zinc-500 hover:text-red-600 transition-colors font-semibold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Information</h4>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-zinc-600 text-xs font-black uppercase tracking-tighter">ADDRESS</span>
                <span className="text-zinc-400 text-sm font-semibold">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-zinc-600 text-xs font-black uppercase tracking-tighter">PHONE</span>
                <span className="text-zinc-400 text-sm font-semibold">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-zinc-600 text-xs font-black uppercase tracking-tighter">OPERATING HOURS</span>
                <span className="text-emerald-500 text-sm font-black tracking-widest uppercase">{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-sm font-medium">
            © {new Date().getFullYear()} Cino Universal Gym. All rights reserved. Built for Elite Performance.
          </p>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:bg-zinc-800 hover:text-red-600 transition-all"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
