
import React from 'react';
import { Target, Shield, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-red-600/20 rounded-2xl blur-2xl group-hover:bg-red-600/30 transition-all"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] border border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&q=80&w=800"
                alt="Gym session"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-zinc-950/90 backdrop-blur-md p-6 rounded-xl border border-zinc-800">
                <p className="text-zinc-400 italic font-medium leading-relaxed">
                  "At Cino Universal Gym, we don't just build muscles; we build confidence and discipline that transcends the gym floor."
                </p>
                <p className="text-white font-bold mt-4">— Cino Universal Management</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-red-600 font-black text-sm uppercase tracking-[0.3em] mb-4">The Universal Standard</h2>
            <h3 className="text-4xl sm:text-5xl font-black text-white mb-8 tracking-tighter">WE ARE MORE THAN JUST <br />A FITNESS CENTER</h3>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Cino Universal Gym is a professional fitness center with the sole purpose of helping members achieve their fitness goals through structured training, wellness programs, and expert guidance. Based in Akahia, we've become the gold standard for physical transformation.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: Target,
                  title: "Structured Training",
                  desc: "Programs built on science-backed methodology to ensure every rep counts."
                },
                {
                  icon: Shield,
                  title: "Safe Environment",
                  desc: "State-of-the-art facilities with a focus on form, safety, and proper execution."
                },
                {
                  icon: Users,
                  title: "Expert Guidance",
                  desc: "Professional trainers who are invested in your personal growth journey."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center border border-red-600/20">
                    <item.icon className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
