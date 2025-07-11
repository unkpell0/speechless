
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import QNA from './components/QNA';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#FFFBF7] text-zinc-800 antialiased">
      <Header />
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
    </div>
  );
};

export default App;
