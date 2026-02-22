import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Quote, PenTool } from 'lucide-react';

const GiftCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="owner-note" className="py-20 bg-[#000000] overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <span className="text-[#ff9ad9] font-signature uppercase text-3xl tracking-[0.5em] mb-4">Personal Memo</span>
          <div className="h-[3px] w-8 bg-[#ff9ad9] mb-4" />
          <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter">
            OWNER'S <br /> <span className="text-[#ff9ad9] font-horizon-outline stroke-text">NOTES.</span>
          </h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 flex justify-center items-start">
        {/* 
          KONTAINER 3D 
          - Hapus 'aspect-ratio' agar tidak terkunci ukurannya
          - Gunakan h-auto agar menyesuaikan konten
        */}
        <div className="relative w-full max-w-[800px] perspective-1500">
          
          {/* Inner Wrapper */}
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            animate={{ rotateY: isOpen ? 180 : 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="w-full h-full relative preserve-3d cursor-pointer group"
          >
            {/* --- FRONT: ENVELOPE STATE --- */}
            {/* 
              Tambahkan 'min-h-[400px]' agar envelope tidak terlalu pendek 
              dan tetap proporsional saat tertutup
            */}
            <div 
              className="absolute inset-0 backface-hidden bg-[#0a0a0a] border border-white/10 rounded-[1rem] flex flex-col items-center justify-center overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(255,154,217,0.05)] hover:shadow-[0_0_40px_rgba(255,154,217,0.15)] hover:border-[#ff9ad9]/30 min-h-[500px]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff9ad9]/10 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
              
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="z-10 flex flex-col items-center"
              >
                <Mail className="text-[#ff9ad9] mb-6 drop-shadow-[0_0_10px_rgba(255,154,217,0.2)] group-hover:drop-shadow-[0_0_15px_rgba(255,154,217,0.5)] transition-all duration-300" size={64} strokeWidth={0.5} />
                <span className="text-white font-black italic uppercase tracking-[0.6em] text-[14px]">Open Message</span>
              </motion.div>

              <div className="absolute top-10 right-10 text-[#ff9ad9]/20"><Sparkles size={40} /></div>
            </div>

            {/* --- BACK: THE LETTER (AUTO HEIGHT) --- */}
            {/* 
              PERUBAHAN UTAMA:
              1. Hapus 'absolute inset-0' agar tidak menempel fixed height
              2. Gunakan 'relative' dan 'h-auto' 
              3. Hapus 'overflow-y-auto' karena tidak perlu scroll lagi
              4. Tambahkan 'min-h-full' untuk memastikan cover depan tetap tertutupi jika konten pendek
            */}
            <div 
              className="relative backface-hidden rotate-y-180 bg-[#111111] border border-[#ff9ad9]/20 rounded-[1rem] shadow-[0_0_50px_rgba(255,154,217,0.1)] min-h-full h-auto"
            >
              {/* Wrapper Konten dengan Padding Simetris */}
              <div className="relative w-full p-8 md:p-16 flex flex-col items-center">
                
                {/* Center Glow Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff9ad9]/5 blur-[100px] rounded-full pointer-events-none" />

                {/* --- HEADER --- */}
                <div className="flex flex-col items-center gap-3 z-10 mb-10">
                  <PenTool size={20} className="text-[#ff9ad9] drop-shadow-[0_0_8px_rgba(255,154,217,0.4)]" />
                  <span className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.3em]">Zyro Director's Desk</span>
                </div>

                {/* --- CONTENT (CENTERED) --- */}
                <div className="flex flex-col items-center justify-center z-10 w-full max-w-2xl my-4">
                  <Quote className="text-white/5 mb-6" size={50} />
                  
                  <h3 className="text-white font-black italic uppercase text-2xl md:text-3xl lg:text-4xl tracking-tighter mb-8 leading-tight drop-shadow-md text-center">
                    "Shine As<br /> You Like."
                  </h3>
                  
                  <div className="space-y-6 text-center">
                    <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed italic">
                    Zyro lahir dari filosofi kata "zero" atau nol, titik mula sebagaimana didefinisikan KBBI. Makna yang  kami wujudkan dalam automotive detailing, berdedikasi tinggi untuk mengembalikan body ke kondisi murninya; bebas dari swirl, goresan, dan sisa overspray yang menutupi jati diri kilau asli kendaraan anda.
                    </p>
                    <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed italic">
                      Komitmen kami adalah memberikan standar proteksi yang melampaui ekspektasi industri. Selamat menikmati pengalaman berkendara dengan kemilau yang berbeda.
                    </p>
                  </div>
                </div>

                {/* --- FOOTER --- */}
                <div className="flex flex-col items-center z-10 mt-12">
                  <span className="text-[#ff9ad9] font-horizon text-xl italic tracking-tighter drop-shadow-[0_0_10px_rgba(255,154,217,0.3)] mb-1">Zyro</span>
                  <span className="text-[#ffffff] font-horizon text-md italic uppercase">The Director</span>
                  <span className="text-gray-600 font-bold text-[9px] uppercase tracking-[0.4em] mt-2 mb-4">Official Private Note</span>
                  
                  <span className="text-[#ffffff]/40 font-black text-[9px] uppercase tracking-[0.2em] transition-all group-hover:text-[#ff9ad9]">
                    Tap anywhere to close
                  </span>
                </div>

                {/* Texture Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS Stylesheet */}
      <style>{`
        .perspective-1500 {
          perspective: 1500px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .stroke-text { 
           -webkit-text-stroke: 1px rgba(255,255,255,0.2); 
        }
      `}</style>
    </section>
  );
};

export default GiftCard;