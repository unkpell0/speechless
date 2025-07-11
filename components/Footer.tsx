import React from 'react';

const Footer: React.FC = () => {
  const phoneNumber = '6282130906022';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <footer className="bg-zinc-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center">
          
          <div className="mb-8">
            <a href="#" className="text-3xl font-bold font-serif text-white">
              Speechless
            </a>
            <p className="text-zinc-400 mt-2">Brilliant Magic Lip Serum</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors">Tentang</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">Kontak</a>
            <a href="#qna" className="text-zinc-400 hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="flex space-x-6 mb-8">
            <a href="https://www.instagram.com/speechless.id_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-zinc-400 hover:text-white transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path></svg>
            </a>
            <a href="https://www.tiktok.com/@speechless.id_" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-zinc-400 hover:text-white transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>

          <div className="text-center text-zinc-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Speechless Beauty. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;