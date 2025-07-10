
import React from 'react';
import AnimatedSection from './AnimatedSection';

const images = [
  'https://i.postimg.cc/6pDskLdV/IMG-20250709-WA0021.jpg',
  'https://i.postimg.cc/xC2wCfpc/IMG-20250709-WA0024.jpg',
  'https://i.postimg.cc/VNnymrRx/IMG-20250709-WA0025.jpg',
  'https://i.postimg.cc/NMkW23Zb/IMG-20250709-WA0026.jpg',
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-800 mb-4">Galeri Kecantikan</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-16">Lihat lebih dekat pesona Speechless Brilliant Magic Lip Serum.</p>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <AnimatedSection key={index}>
              <div className="overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1 group">
                <img 
                  src={src} 
                  alt={`Gallery Image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;