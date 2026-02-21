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

      {/* --- Global Background Image --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/80 lg:bg-black/70 z-10" />
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1920"
          alt="Auto Detailing Background"
          className="w-full h-full object-cover grayscale object-center"
        />
        {/* Tambahan gradasi gelap di kiri agar teks selalu terbaca jelas */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
      </div>

      {/* --- Left Content (Big Image/Logo) & Floating Card --- */}
      {/* Menggunakan ruang sebelah kiri untuk menampilkan gambar utama/logo secara menonjol */}
      <div className="w-full lg:w-1/2 flex justify-center items-center px-6 md:px-12 lg:px-16 pt-32 lg:pt-0 pb-32 lg:pb-0 z-10 min-h-[40vh] lg:min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-xs md:max-w-sm lg:max-w-md relative flex justify-center"
        >
          <img
            src={LogoImg} // Ganti dengan aset gambar yang lebih besar/relevan jika perlu
            alt="Hero Visual"
            className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(255,154,217,0.3)] pb-12" // pb-12 memberikan ruang ekstra di bawah gambar agar tidak tertutup semua
          />

          {/* --- Floating Card --- */}
          {/* Posisi absolute diikat pada container logo ini dengan posisi rata tengah bawah */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-[-20px] lg:bottom-[-30px] z-20 p-5 md:p-6 backdrop-blur-2xl bg-black/50 border border-white/10 rounded-[1.25rem] w-[260px] sm:w-[300px] lg:w-[340px] shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-magenta-300 font-garet font-black text-[8px] md:text-[9px] uppercase tracking-[0.3em] mb-1 text-center w-full">Pengalaman Profesional</p>
                <h3 className="text-white font-garet font-black italic text-base md:text-xl uppercase tracking-tighter leading-tight text-left w-full">
                  Lebih dari <br /> <span className="font-horizon text-2xl">15 Tahun.</span>
                </h3>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-[1px] w-full bg-white/10" />
              <p className="text-gray-400 font-garet text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] leading-relaxed text-center">
                Otomotif Mobil • Body Repair • Repaint
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* --- Right Content (Text & Info) --- */}
      {/* Semua konten dipindahkan ke kanan dan dibuat rata kanan (text-right, items-end) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-end text-right px-6 md:px-12 lg:px-16 pb-28 lg:pb-36 pt-12 lg:pt-24 z-10 min-h-[60vh] lg:min-h-screen">

        {/* --- Badge --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-end gap-2 mb-4"
        >
          <Sparkles size={14} className="text-magenta-300" />
          <span className="text-magenta-300 font-garet font-black tracking-[0.3em] text-[10px] md:text-[11px] uppercase italic">
            Auto Detailing
          </span>
        </motion.div>

        {/* --- Headline --- */}
        <motion.h1
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-[7rem] font-horizon text-white leading-[0.9] uppercase mb-6"
        >
          SHINE <br />
          <span className="text-magenta-300 font-horizon-outline stroke-text">AS YOU LIKE</span>
        </motion.h1>

        {/* --- Services Tags --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-end gap-2 md:gap-3 mb-8"
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

        {/* --- Key Points (Quality, Trust, Exceed) & Sponsor --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-end gap-8 md:gap-10 mt-6 w-full"
        >
          {/* 3 Objects */}
          <div className="flex flex-wrap justify-end gap-4 md:gap-6 w-full">

            {/* Item 1: Quality */}
            <div className="flex flex-col items-center justify-center text-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-5 w-[100px] md:w-[130px] lg:w-[140px] hover:bg-white/10 transition-colors">
              <Star size={20} className="text-magenta-300 mb-1" />
              <span className="text-white font-garet font-black text-[11px] md:text-xs uppercase tracking-widest italic leading-none mt-1">QUALITY</span>
              <span className="text-gray-400 font-garet text-[8px] md:text-[9px] uppercase tracking-wider font-bold">Over Money</span>
            </div>

            {/* Item 2: Trust */}
            <div className="flex flex-col items-center justify-center text-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-5 w-[100px] md:w-[130px] lg:w-[140px] hover:bg-white/10 transition-colors">
              <ShieldCheck size={20} className="text-magenta-300 mb-1" />
              <span className="text-white font-garet font-black text-[11px] md:text-xs uppercase tracking-widest italic leading-none mt-1">TRUST</span>
              <span className="text-gray-400 font-garet text-[8px] md:text-[9px] uppercase tracking-wider font-bold">Is Our Reward</span>
            </div>

            {/* Item 3: Exceed */}
            <div className="flex flex-col items-center justify-center text-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-5 w-[100px] md:w-[130px] lg:w-[140px] hover:bg-white/10 transition-colors">
              <Award size={20} className="text-magenta-300 mb-1" />
              <span className="text-white font-garet font-black text-[11px] md:text-xs uppercase tracking-widest italic leading-none mt-1">EXCEED</span>
              <span className="text-gray-400 font-garet text-[8px] md:text-[9px] uppercase tracking-wider font-bold">The Expectations</span>
            </div>

          </div>

          {/* Sponsor Layout */}
          <div className="mt-2 text-right">
            <p className="text-gray-500 font-garet text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold mb-4">Supported By</p>
            <div className="flex justify-end gap-4 md:gap-6 items-center">
              {/* Dummy Sponsor Logos - Ganti sumber src dengan logo sponsor dari assets nanti */}
              <div className="h-8 md:h-10 w-24 md:w-28 opacity-60 hover:opacity-100 transition-opacity flex justify-end items-center grayscale hover:grayscale-0">
                <img src={LogoImg} alt="Sponsor 1" className="h-full w-auto object-contain" />
              </div>
              <div className="h-8 md:h-10 w-24 md:w-28 opacity-60 hover:opacity-100 transition-opacity flex justify-end items-center grayscale hover:grayscale-0">
                <img src={LogoImg} alt="Sponsor 2" className="h-full w-auto object-contain" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>



      {/* --- Carousel Marquee di Bagian Bawah --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black/60 py-4 md:py-5 backdrop-blur-md z-30 border-t border-white/10 flex items-center">
        <div className="flex w-max animate-marquee gap-12 md:gap-16 lg:gap-20 items-center px-4">
          {/* Untuk efek infinite scroll yang mulus, array diduplikasi 4x agar menutupi layar lebar */}
          {[...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-24 md:w-32 lg:w-40 flex justify-center items-center">
              <img
                src={img}
                alt={`Carousel Asset ${i}`}
                className="h-10 md:h-12 lg:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer"
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
