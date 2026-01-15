
import React from 'react';
import { PROGRAMS } from '../constants';
import IconRenderer from './IconRenderer';
import { Program } from '../types';

interface ProgramsProps {
  onProgramClick: (program: Program) => void;
}

const Programs: React.FC<ProgramsProps> = ({ onProgramClick }) => {
  return (
    <section id="programs" className="py-16 md:py-24 bg-zinc-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-emerald-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-emerald-600 font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4">Our Disciplines</h2>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter">TRANSFORM YOURSELF</h3>
          <p className="text-zinc-500 max-w-2xl mx-auto mt-4 text-base md:text-lg font-medium px-4">
            Choose from our specialized programs designed for every fitness level and objective.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="group relative bg-zinc-950 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="aspect-video overflow-hidden shrink-0">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
              </div>

              <div className="p-6 relative flex flex-col flex-grow">
                <div className="absolute -top-10 left-6 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30">
                  <IconRenderer name={program.icon} className="text-white" />
                </div>
                <h4 className="text-xl font-black text-white mt-4 mb-2 group-hover:text-red-600 transition-colors uppercase tracking-tight">
                  {program.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
                  {program.description}
                </p>
                <button 
                  onClick={() => onProgramClick(program)}
                  className="text-xs font-black text-white/50 group-hover:text-red-600 uppercase tracking-widest transition-colors flex items-center gap-2 mt-auto min-h-[44px]"
                >
                  LEARN MORE <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
