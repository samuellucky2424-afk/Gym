
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Trainers from './components/Trainers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import Modal from './components/Modal';
import { PROGRAMS, CONTACT_INFO } from './constants';
import { Check, Loader2 } from 'lucide-react';
import { Program } from './types';

const App: React.FC = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setIsJoinModalOpen(false);
        setSubmitted(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 overflow-x-hidden selection:bg-emerald-600 selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] nigerian-pattern"></div>
      
      <Navbar onJoinClick={() => setIsJoinModalOpen(true)} />
      
      <main>
        <Hero onJoinClick={() => setIsJoinModalOpen(true)} />
        <About />
        <Programs onProgramClick={(prog) => setSelectedProgram(prog)} />
        <Gallery />
        <Trainers />
        <Contact />
      </main>

      <Footer />
      <AIAssistant />

      {/* Join Modal */}
      <Modal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
        title="Start Your Journey"
      >
        {submitted ? (
          <div className="py-12 text-center">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-emerald-500" size={40} />
            </div>
            <h4 className="text-2xl font-black text-white mb-2 tracking-tighter">YOU'RE ON THE LIST!</h4>
            <p className="text-zinc-500">Oga, our team will call you sharp sharp to finalize your membership.</p>
          </div>
        ) : (
          <form onSubmit={handleJoinSubmit} className="space-y-6">
            <div className="grid gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Full Name</label>
                <input required type="text" className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3 focus:border-emerald-600 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Phone Number</label>
                <input required type="tel" className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3 focus:border-emerald-600 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Goal</label>
                <select className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-xl px-4 py-3 focus:border-emerald-600 outline-none">
                  <option>Weight Loss</option>
                  <option>Muscle Gain</option>
                  <option>General Fitness</option>
                </select>
              </div>
            </div>
            <button 
              disabled={isSubmitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-black tracking-widest text-lg transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? <Loader2 className="animate-spin" /> : 'CONFIRM JOIN'}
            </button>
          </form>
        )}
      </Modal>

      {/* Program Details Modal */}
      <Modal 
        isOpen={!!selectedProgram} 
        onClose={() => setSelectedProgram(null)} 
        title={selectedProgram?.title}
      >
        <div className="space-y-8">
          <img 
            src={selectedProgram?.image} 
            className="w-full h-64 object-cover rounded-2xl border border-zinc-800" 
            alt={selectedProgram?.title}
          />
          <div>
            <h4 className="text-emerald-600 font-black uppercase tracking-widest text-sm mb-2">Program Overview</h4>
            <p className="text-zinc-300 leading-relaxed text-lg">
              {selectedProgram?.longDescription}
            </p>
          </div>
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-4">What You'll Achieve</h4>
            <div className="grid gap-3">
              {selectedProgram?.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-zinc-400">
                  <div className="w-5 h-5 bg-emerald-500/10 rounded flex items-center justify-center">
                    <Check size={14} className="text-emerald-500" />
                  </div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={() => {
              setSelectedProgram(null);
              setIsJoinModalOpen(true);
            }}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-black tracking-widest transition-all"
          >
            JOIN THIS PROGRAM
          </button>
        </div>
      </Modal>

      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 md:bottom-6 md:right-24"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-4.7 8.38 8.38 0 0 1 3.8.9L21 11.5z"></path></svg>
      </a>
    </div>
  );
};

export default App;
