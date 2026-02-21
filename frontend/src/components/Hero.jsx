import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, ShieldCheck, Star, Award } from 'lucide-react';

// Import logo sesuai struktur folder src kamu
import LogoImg from '../assets/logo/logo1.webp';

// Import gambar untuk carousel (Sesuaikan dengan gambar asli yang lebih banyak di folder assets)
import CarouselImg1 from '../assets/logo/logo1.webp';
import CarouselImg2 from '../assets/logo/logo1.webp';
import CarouselImg3 from '../assets/logo/logo1.webp';
import CarouselImg4 from '../assets/logo/logo1.webp';
import CarouselImg5 from '../assets/logo/logo1.webp';

const Hero = () => {
  // Data gambar carousel (Bisa ditambah/diganti sesuai dengan variabel impor di atas)
  const carouselImages = [CarouselImg1, CarouselImg2, CarouselImg3, CarouselImg4, CarouselImg5];

  // Daftar layanan baru
  const services = ['Coating', 'Detailing', 'Wax & Salon', 'Repaint'];

  return (
    <section className="relative min-h-screen bg-[#000000] overflow-hidden flex flex-col lg:flex-row">

      {/* --- Left Content (Text) --- */}
      {/* padding top ditambahkan untuk memastikan konten tidak tertutup fixed navbar */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-32 pb-16 lg:py-32 z-10 min-h-[60vh] lg:min-h-screen">

        {/* --- LOGO --- */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 md:mb-10"
        >
          <img
            src={LogoImg}
            alt="Logo"
            className="h-12 md:h-20 lg:h-24 w-auto object-contain object-left drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          />
        </motion.div>

        {/* --- Badge --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 mb-4"
        >
          <Sparkles size={14} className="text-magenta-300" />
          <span className="text-magenta-300 font-black tracking-[0.3em] text-[10px] md:text-[11px] uppercase italic">
            Auto Detailing
          </span>
        </motion.div>

        {/* --- Headline --- */}
        <motion.h1
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-[6rem] font-black text-white leading-[0.9] italic uppercase tracking-tighter mb-6"
        >
          SHINE <br />
          <span className="text-transparent stroke-text">AS YOU LIKE</span>
        </motion.h1>

        {/* --- Services Tags --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2 md:gap-3 mb-8"
        >
          {services.map((service, index) => (
            <span
              key={index}
              className="px-4 py-2 border border-white/10 bg-white/5 rounded-full text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest backdrop-blur-sm"
            >
              {service}
            </span>
          ))}
        </motion.div>

        {/* --- Deskripsi ---
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 max-w-md text-[11px] md:text-sm font-medium mb-8 leading-relaxed italic border-l-4 border-magenta-300 pl-4 uppercase tracking-wider"
        >
          Layanan profesional untuk mengembalikan dan melindungi estetika kendaraan Anda. Presisi tingkat tinggi pada setiap detail.
        </motion.p> */}

        {/* --- Key Points (Quality, Trust, Exceed) & Sponsor --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col gap-8 md:gap-10 mt-6"
        >
          {/* 3 Objects */}
          <div className="flex gap-6 md:gap-12">

            {/* Item 1: Quality */}
            <div className="flex flex-col gap-2">
              <Star size={18} className="text-magenta-300 mb-1" />
              <span className="text-white font-black text-[12px] md:text-sm uppercase tracking-widest italic leading-none">QUALITY</span>
              <span className="text-gray-400 text-[9px] md:text-[10px] uppercase tracking-wider font-bold">Standard Pabrik Terbaru</span>
            </div>

            {/* Item 2: Trust */}
            <div className="flex flex-col gap-2">
              <ShieldCheck size={18} className="text-magenta-300 mb-1" />
              <span className="text-white font-black text-[12px] md:text-sm uppercase tracking-widest italic leading-none">TRUST</span>
              <span className="text-gray-400 text-[9px] md:text-[10px] uppercase tracking-wider font-bold">Terpercaya Sepanjang Masa</span>
            </div>

            {/* Item 3: Exceed */}
            <div className="flex flex-col gap-2">
              <Award size={18} className="text-magenta-300 mb-1" />
              <span className="text-white font-black text-[12px] md:text-sm uppercase tracking-widest italic leading-none">EXCEED</span>
              <span className="text-gray-400 text-[9px] md:text-[10px] uppercase tracking-wider font-bold">Melampaui Ekspektasi Anda</span>
            </div>

          </div>

          {/* Sponsor Layout */}
          <div className="mt-2">
            <p className="text-gray-500 text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold mb-4">Supported By</p>
            <div className="flex gap-4 md:gap-6 items-center">
              {/* Dummy Sponsor Logos - Ganti sumber src dengan logo sponsor dari assets nanti */}
              <div className="h-8 md:h-10 w-24 md:w-28 opacity-60 hover:opacity-100 transition-opacity flex justify-start items-center grayscale hover:grayscale-0">
                <img src={LogoImg} alt="Sponsor 1" className="h-full w-auto object-contain" />
              </div>
              <div className="h-8 md:h-10 w-24 md:w-28 opacity-60 hover:opacity-100 transition-opacity flex justify-start items-center grayscale hover:grayscale-0">
                <img src={LogoImg} alt="Sponsor 2" className="h-full w-auto object-contain" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Button ---
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button className="px-8 py-4 md:px-10 md:py-5 bg-white text-black font-black uppercase text-[11px] md:text-[12px] tracking-[0.4em] hover:bg-magenta-300 hover:text-white transition-all flex items-center gap-4 active:scale-95 shadow-2xl">
            Book Service <ChevronRight size={18} />
          </button>
        </motion.div> */}
      </div>

      {/* --- Right Content (Visual) --- */}
      <div className="w-full lg:w-1/2 relative flex flex-col h-[50vh] lg:h-screen">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Gradient Overlay untuk transisi halus antara kiri dan kanan */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#000000] via-[#000000]/60 to-transparent z-10" />

          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1200"
            alt="Auto Detailing Service"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        {/* Floating Card - Diselaraskan agar proporsional dengan kolom kiri */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 md:bottom-12 lg:bottom-1/4 left-6 right-6 lg:left-[-40px] lg:right-auto z-20
                     p-5 md:p-6 backdrop-blur-2xl bg-black/40 border border-white/10 rounded-[1.25rem]
                     max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-magenta-300 font-black text-[8px] md:text-[9px] uppercase tracking-[0.3em] mb-1">Pengalaman Profesional</p>
              <h3 className="text-white font-black italic text-base md:text-xl uppercase tracking-tighter leading-tight">
                Lebih dari <br /> 15 Tahun.
              </h3>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-[1px] w-full bg-white/10" />
            <p className="text-gray-400 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] leading-relaxed">
              Otomotif Mobil • Body Repair • Repaint
            </p>
          </div>
        </motion.div>
      </div>

      {/* --- Carousel Marquee di Bagian Bawah --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black/60 py-6 md:py-8 backdrop-blur-md z-30 border-t border-white/10 flex items-center">
        <div className="flex w-max animate-marquee gap-16 md:gap-24 lg:gap-32 items-center px-8">
          {/* Untuk efek infinite scroll yang mulus, array diduplikasi 4x agar menutupi layar lebar */}
          {[...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-32 md:w-48 lg:w-56 flex justify-center items-center">
              <img
                src={img}
                alt={`Carousel Asset ${i}`}
                className="h-16 md:h-20 lg:h-24 w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stroke-text { 
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.3); 
        }
        @media (min-width: 1024px) {
          .stroke-text { -webkit-text-stroke: 2px rgba(255,255,255,0.5); }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); } /* Bergerak sejauh 1/4 karena mapping 4x */
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Hero;
