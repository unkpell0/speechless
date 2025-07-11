
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const qnaData = [
  {
    question: "Lip serum ini awet nggak sih dipakenya?",
    answer: "Awet kok Bu! Cukup dioles, lalu didiamkan sebentar. Nanti warnanya bakal keluar lebih bagus dan tahan lama, tergantung juga dari aktivitas harian kita."
  },
  {
    question: "Bisa nggak sih lip serum ini dicampur sama lip cream?",
    answer: "Bisa banget! Kalau mau warna yang lebih soft, tinggal campur dengan lip cream warna muda. Kalau mau yang lebih bold, bisa mix sama coklat, merah, atau warna lainnya."
  },
  {
    question: "Bener bisa bantu mencerahkan dan melembabkan bibir?",
    answer: "Betul Bu, kalau dipakai rutin bisa bantu mencerahkan bibir yang kusam dan juga melembabkan bibir yang sering kering, apalagi karena pemakaian lipstik matte atau kebiasaan merokok."
  },
  {
    question: "Aman nggak sih produknya?",
    answer: "Aman Bu, produk ini sudah BPOM jadi insya Allah aman digunakan sehari-hari."
  },
  {
    question: "Warna Brilliant Magic Lip Serum itu kayak warna dasarnya ya, Bu?",
    answer: "Sekilas sih di botol kelihatan putih ya Bu, tapi begitu dioles ke bibir, keluar warna yang cukup terang dan cantik. Nah, kalau mau hasilnya kelihatan lebih soft, cukup pakai sedikit aja. Tapi kalau mau di-mix, bisa banget! Bisa dicampur sama lip cream warna nude muda buat look yang natural, atau warna bold seperti coklat/merah juga oke banget.\nYang paling penting, fungsi utamanya tetap sebagai lip care — untuk merawat dan menyehatkan bibir. Tapi bonusnya… dia magic, bisa keluar warna juga 😍✨"
  }
];

const AccordionItem: React.FC<{
  item: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-zinc-200 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-zinc-800 flex items-start">
           <span className="text-purple-400 mr-3 mt-1 text-xl leading-none">🟣</span>
           <span>{item.question}</span>
        </h3>
        <span className="text-zinc-500 transform transition-transform duration-300">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
            </svg>
          )}
        </span>
      </button>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.5s ease-in-out'
        }}
      >
        <div className="overflow-hidden">
            <p className="text-zinc-600 pt-4 pl-9 whitespace-pre-line">
              {item.answer}
            </p>
        </div>
      </div>
    </div>
  );
};

const QNA: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="qna" className="py-20 md:py-24 bg-[#FFFBF7]">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-800 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-16">
            Temukan jawaban untuk pertanyaan Anda di sini.
          </p>
        </AnimatedSection>
        <AnimatedSection className="max-w-4xl mx-auto">
          {qnaData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default QNA;
