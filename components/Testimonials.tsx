
import React from 'react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    quote: "Bibirku belum pernah terasa selembut dan secerah ini. Produk ini benar-benar ajaib! Wajib dimiliki oleh setiap wanita yang peduli penampilan.",
    name: "Amanda Larasati",
    title: "Socialita, Jakarta",
  },
  {
    quote: "Awalnya skeptis, tapi hasilnya melebihi ekspektasi. Garis halus di bibirku berkurang drastis. Sangat merekomendasikannya!",
    name: "Dewi Putri",
    title: "Pengusaha Fashion",
  },
   {
    quote: "Kemasan yang mewah dan hasil yang luar biasa. Speechless lip serum menjadi bagian tak terpisahkan dari ritual kecantikanku setiap hari.",
    name: "Jessica Wijaya",
    title: "Public Figure",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-24 bg-[#F8F3F3]">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-800 mb-4">Apa Kata Mereka</h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-16">Kisah nyata dari para pelanggan setia kami.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col justify-between">
                <p className="text-zinc-600 italic mb-6 text-center">"{testimonial.quote}"</p>
                <div className="text-center">
                  <p className="font-bold text-zinc-800">{testimonial.name}</p>
                  <p className="text-sm text-[#D1B07C] font-semibold">{testimonial.title}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;