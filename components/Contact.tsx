
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
    <section id="contact" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-red-600 font-black text-sm uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
            <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tighter mb-8">READY TO START YOUR <br />JOURNEY?</h3>

            <div className="grid gap-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-zinc-500 leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Phone Number</h4>
                  <p className="text-zinc-500">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-red-600" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Operating Hours</h4>
                  <p className="text-zinc-500 font-bold text-emerald-500 uppercase tracking-widest">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 p-6 rounded-2xl border border-zinc-800">
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-4">Quick Connect</h4>
              <div className="flex gap-4">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex-1 bg-red-600 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-red-700 transition-all"
                >
                  <Phone size={20} />
                  CALL NOW
                </a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  className="flex-1 bg-emerald-600 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-emerald-700 transition-all"
                >
                  <MessageSquare size={20} />
                  WHATSAPP
                </a>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 p-8 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl relative overflow-hidden group">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                  <Check className="text-emerald-500" size={40} />
                </div>
                <h4 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase">Message Received!</h4>
                <p className="text-zinc-500">Oga, our team will call you sharp sharp to finalize your membership.</p>
              </div>
            ) : (
              <>
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[60px] rounded-full group-hover:bg-red-600/20 transition-all"></div>
                <h4 className="text-2xl font-black text-white mb-8">SEND US A MESSAGE</h4>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Phone Number</label>
                      <input
                        required
                        type="tel"
                        className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
                        placeholder="+234..."
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Select Program</label>
                    <select required className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all appearance-none">
                      <option value="">Choose a Program</option>
                      <option>Weight Loss (SWEAT)</option>
                      <option>Bodybuilding</option>
                      <option>Personal Training</option>
                      <option>Online Coaching</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Your Message</label>
                    <textarea
                      required
                      className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-4 py-3 h-32 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-black tracking-widest text-lg transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
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
