
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import QNA from './components/QNA';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#FFFBF7] text-zinc-800 antialiased">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Gallery />
        <Testimonials />
        <QNA />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton isVisible={!isMenuOpen} />
    </div>
  );
};

export default App;