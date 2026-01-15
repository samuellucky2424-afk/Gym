
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/95 backdrop-blur-sm py-4 shadow-xl border-b border-zinc-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-emerald-600 leading-none">CINO</span>
              <span className="text-xs font-bold tracking-[0.3em] text-zinc-400 uppercase">Universal Gym</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold hover:text-emerald-500 transition-colors uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={onJoinClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-2 group"
            >
              <Phone size={16} className="group-hover:animate-bounce" />
              JOIN NOW
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-100 hover:text-emerald-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden absolute w-full bg-zinc-950 border-b border-zinc-800 transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-lg font-bold hover:text-emerald-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4">
            <button
              onClick={() => {
                onJoinClick();
                setIsOpen(false);
              }}
              className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2"
            >
              <Phone size={20} />
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
