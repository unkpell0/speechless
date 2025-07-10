
import React from 'react';
import AnimatedSection from './AnimatedSection';

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#D1B07C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l-3 3m14 10l-3-3m-1-11l-3 3m-3 11l-3 3" />
      </svg>
    ),
    title: 'Mencerahkan Bibir',
    description: 'Mengembalikan warna pink alami bibir Anda, mengurangi pigmentasi gelap secara efektif.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#D1B07C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l.477 2.387a2 2 0 001.806.547a2 2 0 001.806-.547l2.387-.477a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-.477-2.387zM12 12a3 3 0 100-6 3 3 0 000 6z" transform="scale(0.7) translate(5, 5)" />
      </svg>
    ),
    title: 'Hidrasi Intensif',
    description: 'Memberikan kelembapan mendalam yang tahan lama, menjadikan bibir terasa kenyal dan sehat.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#D1B07C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Anti-Penuaan Dini',
    description: 'Menyamarkan garis-garis halus dan kerutan di bibir, membuatnya tampak lebih muda dan halus.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 md:py-24 bg-[#F8F3F3]">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-800 mb-4">Keajaiban dalam Setiap Olesan</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-16">Serum kami memberikan hasil nyata yang dapat Anda lihat dan rasakan.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-center items-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-3">{benefit.title}</h3>
                <p className="text-zinc-600">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;