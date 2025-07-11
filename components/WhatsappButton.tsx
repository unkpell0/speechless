
import React from 'react';

interface WhatsAppButtonProps {
  isVisible: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ isVisible }) => {
  const phoneNumber = '6282130906022';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 invisible'
      } hover:scale-110`}
      aria-label="Hubungi kami di WhatsApp"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <svg
        className="h-8 w-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.01,2.001C6.486,2.001,2,6.486,2,12.01c0,1.704,0.437,3.309,1.212,4.72L2,22l5.426-1.411c1.354,0.688,2.87,1.103,4.484,1.103h0.1c5.524,0,10-4.476,10-10.001C22.01,6.486,17.534,2.001,12.01,2.001z M16.711,14.881c-0.21,0.49-1.206,0.916-1.636,0.956c-0.428,0.04-0.895,0.04-1.374-0.12c-0.479-0.16-1.017-0.36-1.916-1.12c-1.493-1.245-2.46-2.82-2.58-3.078c-0.12-0.258-0.979-1.305-0.979-2.479c0-1.173,0.612-1.747,0.832-1.967c0.22-0.22,0.479-0.259,0.658-0.259c0.18,0,0.359,0.002,0.521,0.002c0.2,0,0.438,0.098,0.658,0.457c0.22,0.36,0.737,1.798,0.797,1.938c0.06,0.14,0.1,0.319,0,0.479c-0.1,0.16-0.16,0.259-0.319,0.418c-0.16,0.16-0.35,0.38-0.49,0.519c-0.14,0.139-0.28,0.298-0.139,0.558c0.14,0.259,0.637,1.057,1.374,1.716c0.898,0.797,1.635,1.017,1.854,1.117c0.22,0.1,0.359,0.08,0.499-0.059c0.14-0.14,0.598-0.698,0.757-0.917c0.16-0.22,0.319-0.18,0.539-0.1c0.22,0.08,1.393,0.657,1.632,0.777c0.24,0.12,0.399,0.18,0.458,0.279C16.941,14.291,16.921,14.391,16.711,14.881z"></path>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
