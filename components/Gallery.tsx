
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-black text-sm uppercase tracking-[0.3em] mb-4">Inside the Universal</h2>
          <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tighter">OUR FACILITY</h3>
          <p className="text-zinc-500 mt-4 max-w-xl mx-auto font-medium">
            Take a look at where champions are made. Modern equipment, clean spaces, and a focused atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div 
              key={i} 
              className={`relative group overflow-hidden rounded-2xl border border-zinc-800 ${
                i === 0 || i === 4 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img 
                src={img} 
                alt={`Facility view ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
