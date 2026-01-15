
import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Check, Loader2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-red-600 font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">READY TO START YOUR <br className="hidden sm:block" />JOURNEY?</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8 mb-12">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-1">Our Location</h4>
                  <p className="text-zinc-500 leading-relaxed text-sm md:text-base">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-1">Phone Number</h4>
                  <p className="text-zinc-500 text-sm md:text-base">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:gap-6 sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-1">Operating Hours</h4>
                  <p className="text-zinc-500 font-bold text-red-600 uppercase tracking-widest text-xs md:text-sm">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-800">
              <h4 className="text-white font-black uppercase tracking-widest text-xs md:text-sm mb-4">Quick Connect</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex-1 bg-red-600 text-white py-3 md:py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-red-700 transition-all min-h-[48px]"
                >
                  <Phone size={20} />
                  CALL NOW
                </a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  className="flex-1 bg-emerald-600 text-white py-3 md:py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-emerald-700 transition-all min-h-[48px]"
                >
                  <MessageSquare size={20} />
                  WHATSAPP
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 p-6 sm:p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden group">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center py-12 md:py-20 text-center animate-in zoom-in duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                  <Check className="text-emerald-500" size={32} />
                </div>
                <h4 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tighter uppercase">Message Received!</h4>
                <p className="text-zinc-500 text-sm md:text-base px-4">Oga, our team will call you sharp sharp to finalize your membership.</p>
              </div>
            ) : (
              <>
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[60px] rounded-full group-hover:bg-red-600/20 transition-all"></div>
                <h4 className="text-xl md:text-2xl font-black text-white mb-6 md:mb-8">SEND US A MESSAGE</h4>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] md:text-xs font-black text-zinc-500 uppercase tracking-widest">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all text-sm md:text-base"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] md:text-xs font-black text-zinc-500 uppercase tracking-widest">Phone Number</label>
                      <input
                        required
                        type="tel"
                        className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all text-sm md:text-base"
                        placeholder="+234..."
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-black text-zinc-500 uppercase tracking-widest">Select Program</label>
                    <div className="relative">
                      <select required className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all appearance-none text-sm md:text-base">
                        <option value="">Choose a Program</option>
                        <option>Weight Loss (SWEAT)</option>
                        <option>Bodybuilding</option>
                        <option>Personal Training</option>
                        <option>Online Coaching</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-black text-zinc-500 uppercase tracking-widest">Your Message</label>
                    <textarea
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 h-24 md:h-32 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all resize-none text-sm md:text-base"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 md:py-4 rounded-xl font-black tracking-widest text-base md:text-lg transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" /> : 'SEND MESSAGE'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
