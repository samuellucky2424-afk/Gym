
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';

interface NavbarProps {
  onJoinClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-zinc-950/95 backdrop-blur-sm py-3 md:py-4 shadow-xl border-b border-zinc-800' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-auto">
          <div className="flex items-center shrink-0">
            <a href="#" className="flex flex-col">
              <span className="text-xl md:text-2xl font-black tracking-tighter text-emerald-600 leading-none">CINO</span>
              <span className="text-[8px] md:text-xs font-bold tracking-[0.3em] text-zinc-400 uppercase">Universal Gym</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs xl:text-sm font-semibold hover:text-emerald-500 transition-colors uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onJoinClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-black text-xs transition-all flex items-center gap-2 group min-h-[44px]"
            >
              <Phone size={14} className="group-hover:animate-bounce" />
              JOIN NOW
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-100 hover:text-emerald-600 transition-all p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden absolute w-full bg-zinc-950/98 backdrop-blur-xl border-b border-zinc-800 transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[100vh] opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
        <div className="px-6 pt-4 pb-12 space-y-4 h-[calc(100vh-80px)] overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-4 text-2xl font-black text-white hover:text-emerald-500 transition-colors border-b border-zinc-900 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-8">
            <button
              onClick={() => {
                onJoinClick();
                setIsOpen(false);
              }}
              className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-black text-xl flex justify-center items-center gap-3 shadow-xl shadow-emerald-600/20 active:scale-95 transition-transform"
            >
              <Phone size={24} />
              START NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
