
import React from 'react';
import { TRAINERS } from '../constants';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-16 md:py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="text-emerald-600 font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4">Elite Coaching</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter">MEET THE EXPERTS</h3>
          </div>
          <p className="text-zinc-500 max-w-sm font-medium text-sm md:text-base">
            Our certified professionals are here to push your boundaries and ensure you train smarter, not just harder.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {TRAINERS.map((trainer) => (
            <div key={trainer.id} className="group relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-800">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-4">
                    <a href="#" className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-emerald-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                      <Instagram size={18} />
                    </a>
                    <a href="#" className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-emerald-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-emerald-600 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <h4 className="text-xl md:text-2xl font-black text-white mb-1 group-hover:text-emerald-600 transition-colors">{trainer.name}</h4>
                <p className="text-emerald-600 font-bold text-xs md:text-sm uppercase tracking-widest">{trainer.role}</p>
                <p className="text-zinc-500 text-xs md:text-sm mt-2 font-medium">{trainer.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
