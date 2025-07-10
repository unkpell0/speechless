
import React from 'react';
import AnimatedSection from './AnimatedSection';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 md:py-32 bg-gradient-to-r from-[#C8A2C8] to-[#A288A6]">
      <AnimatedSection className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
          Miliki Bibir Impian Anda Sekarang
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
          Jangan tunda lagi untuk merasakan transformasi luar biasa. Pesan sekarang dan biarkan bibir Anda berbicara.
        </p>
        <a href="#" className="bg-white text-[#B76E79] py-4 px-10 rounded-full hover:bg-gray-100 shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-bold">
          Beli Sekarang Juga
        </a>
      </AnimatedSection>
    </section>
  );
};

export default CTA;
