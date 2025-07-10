import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Manfaat', href: '#benefits' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Testimoni', href: '#testimonials' },
  ];
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold font-serif text-zinc-800">
            Speechless
          </a>
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-zinc-600 hover:text-[#B76E79] transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </nav>
          <a href="#cta" className="hidden lg:inline-block bg-[#D1B07C] text-white py-2 px-6 rounded-full hover:bg-opacity-90 shadow-lg transition-all duration-300 transform hover:scale-105">
            Beli Sekarang
          </a>
          <button 
            className="lg:hidden text-zinc-800"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Buka menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'visible' : 'invisible'}`}
        aria-hidden={!isMenuOpen}
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Sidebar Panel */}
        <div
          id="mobile-menu"
          className={`relative ml-auto h-full w-full max-w-xs bg-white shadow-xl flex flex-col
                      transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between p-6 border-b border-zinc-200">
             <span className="text-xl font-bold font-serif text-zinc-800">Menu</span>
             <button 
                onClick={() => setIsMenuOpen(false)}
                aria-label="Tutup menu"
                className="p-1 -mr-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
             </button>
          </div>
          
          <nav className="flex-grow p-6">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={handleLinkClick} 
                    className="text-lg text-zinc-800 hover:text-[#B76E79] transition-colors duration-300 block py-3"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-6 border-t border-zinc-200">
              <a 
                href="#cta" 
                onClick={handleLinkClick} 
                className="w-full block bg-gradient-to-r from-[#C8A2C8] to-[#A288A6] text-white text-center py-3 px-8 rounded-full hover:bg-opacity-90 shadow-lg transition-all duration-300 transform hover:scale-105 font-bold"
              >
                  Beli Sekarang
              </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
