import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Star, Award } from 'lucide-react';

import BgImage from '../assets/gallery/bg.jpeg';
import LogoImg from '../assets/logo/logo1.webp';

// Carousel Images
import CarouselImg1 from '../assets/logo/logo-t/1.png';
// ... (import lainnya tetap sama)

const Hero = () => {
  const carouselImages = [CarouselImg1, /* ... images lainnya */];
  const services = ['Coating Package', 'Interior Series', 'Exterior Series', 'Body Work'];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      
      {/* --- Background (Tetap Absolute) --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/80 lg:bg-black/70 z-10" />
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2 }}
          src={BgImage}
          alt="Background"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-r lg:from-black lg:via-black/40 z-10" />
      </div>

      {/* --- Main Content Wrapper --- */}
      {/* Menggunakan flex-grow agar konten utama mengambil ruang yang tersedia di atas marquee */}
      <div className="relative z-20 flex-grow flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 pt-28 pb-10 lg:py-0">
        
        {/* LEFT: Logo & Floating Card */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mb-16 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full max-w-[280px] md:max-w-sm lg:max-w-md"
          >
            <img
              src={LogoImg}
              alt="Zyro Logo"
              className="w-full h-auto drop-shadow-[0_0_30px_rgba(220,38,38,0.2)]"
            />

            {/* Floating Card - Dibuat lebih proporsional */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-full max-w-[320px] p-5 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl"
            >
              <div className="text-center">
                <p className="text-fuchsia-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-1">Expert Experience</p>
                <h3 className="text-white font-black italic text-lg md:text-xl uppercase leading-tight">
                  More Than <span className="text-2xl block not-italic font-serif">15 YEARS.</span>
                </h3>
                <div className="h-[1px] w-full bg-white/10 my-3" />
                <p className="text-gray-400 text-[9px] font-medium uppercase tracking-widest">
                  Body Repair • Repaint • Detailing
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT: Text Info */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles size={16} className="text-fuchsia-500" />
            <span className="text-fuchsia-400 font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase italic">
              Premium Auto Detailing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] uppercase mb-8"
          >
            SHINE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 opacity-80" 
                  style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
              AS YOU LIKE
            </span>
          </motion.h1>

          {/* Badges */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 mt-4">
            <InfoBadge icon={<Star size={18}/>} title="QUALITY" sub="Over Money" />
            <InfoBadge icon={<ShieldCheck size={18}/>} title="TRUST" sub="Is Our Reward" />
            <InfoBadge icon={<Award size={18}/>} title="EXCEED" sub="Expectation" />
          </div>
        </div>
      </div>

      {/* --- Marquee Carousel (Relative ke Flexbox) --- */}
      <div className="relative w-full bg-black/40 border-t border-white/5 backdrop-blur-md py-6 md:py-8 mt-auto">
        <div className="flex w-max animate-marquee gap-12 items-center">
          {[...carouselImages, ...carouselImages].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Brand"
              className="h-10 md:h-14 lg:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

// Sub-component agar kode lebih bersih
const InfoBadge = ({ icon, title, sub }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-xl min-w-[100px] md:min-w-[120px] backdrop-blur-sm">
    <div className="text-fuchsia-500 mb-2">{icon}</div>
    <span className="text-white font-bold text-[10px] tracking-widest">{title}</span>
    <span className="text-gray-500 text-[8px] uppercase font-medium">{sub}</span>
  </div>
);

export default Hero;