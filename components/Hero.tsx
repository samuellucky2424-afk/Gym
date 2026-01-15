
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface HeroProps {
  onJoinClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=2000"
          alt="Gym background"
          className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_10s_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent hidden md:block"></div>
        <div className="absolute inset-0 bg-zinc-950/40 md:hidden"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-3xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 mx-auto md:mx-0">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-black text-emerald-500 uppercase tracking-widest">{CONTACT_INFO.hours}</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.1] md:leading-[0.9]">
            UNLEASH YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">INNER BEAST</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 md:mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed px-4 md:px-0">
            Premium fitness guidance in the heart of Edo State. Expert coaching, world-class equipment, and a 24/7 community that pushes you beyond limits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 px-4 md:px-0">
            <button
              onClick={onJoinClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-black text-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-600/20 min-h-[56px]"
            >
              START TRAINING
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#gallery"
              className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-xl font-black text-lg transition-all flex items-center justify-center gap-2 min-h-[56px]"
            >
              <Play size={20} fill="white" />
              OUR FACILITY
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 md:flex md:items-center md:gap-8 border-t border-zinc-800/50 pt-8 max-w-lg mx-auto md:mx-0">
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-black text-white">500+</p>
              <p className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest">Members</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-zinc-800"></div>
            <div className="text-center md:text-left border-x border-zinc-800 md:border-none px-4 md:px-0">
              <p className="text-2xl md:text-3xl font-black text-white">10+</p>
              <p className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest">Coaches</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-zinc-800"></div>
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-black text-white">24/7</p>
              <p className="text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest">Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
