import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <AnimatedSection className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images2.imgbox.com/07/fe/10jqPWBH_o.jpg" 
              alt="Speechless Brilliant Magic Lip Serum Product" 
              className="w-auto h-auto max-w-xs md:max-w-lg rounded-xl shadow-2xl transform md:rotate-[-3deg] hover:rotate-0 transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-800 mb-6">
              Rahasia di Balik Bibir Mempesona
            </h2>
            <p className="text-zinc-600 text-lg mb-4 leading-relaxed">
              Speechless Brilliant Magic Lip Serum dirancang khusus untuk Anda yang mendambakan kesempurnaan. Diformulasikan dengan teknologi canggih dan bahan-bahan premium, serum ini bekerja secara ajaib untuk merevitalisasi dan mempercantik bibir Anda.
            </p>
            <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
              Rasakan sensasi mewah dan lihat perubahan luar biasa hanya dalam 3 hari. Ini bukan sekadar perawatan bibir, ini adalah pernyataan gaya hidup Anda.
            </p>
             <a href="#cta" className="bg-[#D1B07C] text-white py-3 px-8 rounded-full hover:bg-opacity-90 shadow-lg transition-all duration-300 transform hover:scale-105">
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About;