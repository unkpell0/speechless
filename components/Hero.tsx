
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center pt-24 bg-gradient-to-b from-[#FDEFEF] to-[#FFFBF7]">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif text-zinc-800 tracking-tight leading-tight max-w-4xl mx-auto">
            Keajaiban Bibir dalam 3 Hari
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto">
            Temukan kembali pesona alami bibir Anda dengan Speechless Brilliant Magic Lip Serum.
          </p>
          <a href="#cta" className="mt-10 inline-block bg-gradient-to-r from-[#C8A2C8] to-[#A288A6] text-white py-4 px-10 rounded-full hover:bg-opacity-90 shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-bold">
            Temukan Keajaibannya
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;