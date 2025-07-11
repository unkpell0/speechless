
import React from 'react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    quote: "Lip serum ini warnanya nyesuaiin kulitmu, bikin bibir tampak sehat, plump, dan tetap nyaman seharian. Trust me, karena aku sangat aware banget soal apapun soal bibir.",
    name: "Citra Ruli",
    title: "Master of Ceremony",
    image: "https://images2.imgbox.com/f7/f2/60WU7Rp8_o.jpg",
  },
  {
    quote: "Demi apaaaaa ini bagus bgt 🥹❤️ Bikin bibir plumpy abis! WAJIB COBA GUYS!",
    name: "Emily Young",
    title: "CEO EMYOUNG",
    image: "https://images2.imgbox.com/cf/f9/ZaZRQPxF_o.jpg",
  },
   {
    quote: "Aku tuh awalnya ragu, tapi setelah cobain lip serum ini, bibir aku langsung lembab dan warnanya balik lagi, gak ada drama pecah-pecah lagi seharian!",
    name: "Fanny Margaretha",
    title: "Public figure",
    image: "https://images2.imgbox.com/89/6d/Mex9a5E0_o.jpg",
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
              <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col text-center">
                <img
                  src={testimonial.image}
                  alt={`Foto ${testimonial.name}`}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-[#FDEFEF] shadow-lg"
                />
                <blockquote className="flex-grow">
                  <p className="text-zinc-600 italic mb-6">"{testimonial.quote}"</p>
                </blockquote>
                <footer className="mt-auto">
                  <p className="font-bold text-zinc-800">{testimonial.name}</p>
                  <p className="text-sm text-[#D1B07C] font-semibold">{testimonial.title}</p>
                </footer>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;