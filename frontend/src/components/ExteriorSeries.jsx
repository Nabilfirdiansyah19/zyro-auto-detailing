import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ThermometerSnowflake, CheckCircle2, Camera } from 'lucide-react';
import Riben from '../assets/logo/riben.webp';
import ProMaster from '../assets/logo/ProMaster.webp';
import CPF1 from '../assets/logo/Cpf1.webp';
import Llumar from '../assets/logo/Llumar.webp';
import ThreeM from '../assets/logo/3mAuto.webp';
import foto1 from '../assets/exterior/foto1.jpg';
import foto2 from '../assets/exterior/foto2.jpg';
import foto3 from '../assets/exterior/foto3.jpg';

const ExteriorSeries = () => {
  const packages = [
    {
      name: "Riben",
      accent: "#9CA3AF",
      glow: "shadow-gray-500/40",
      image: Riben,
      desc: "Kaca film Riben merupakan tipe paling umum dengan tampilan gelap elegan yang meredam panas, silau, dan sinar UV. Tersedia kegelapan 40%, 60%, dan 80%. Sudah termasuk pemasangan full set.",
      pricing: [
        { cat: "Kecil", price: "Rp 600.000" },
        { cat: "Medium", price: "Rp 700.000" },
        { cat: "Besar", price: "Rp 800.000" }
      ]
    },
    {
      name: "ProMaster",
      accent: "#FFFFFF",
      glow: "shadow-white/20",
      image: ProMaster,
      desc: "Hadir dengan teknologi canggih yang mampu mengurangi panas hingga ±70% dan menolak sinar UV berbahaya. Menjaga suhu kabin tetap sejuk dengan material premium yang tahan lama.",
      pricing: [
        { cat: "Kecil", price: "Rp 950.000" },
        { cat: "Medium", price: "Rp 1.100.000" },
        { cat: "Besar", price: "Rp 1.250.000" }
      ]
    },
    {
      name: "3M Heat Protection",
      accent: "#EF4444",
      glow: "shadow-red-600/40",
      image: ThreeM,
      desc: "Dirancang dengan teknologi penolak panas tinggi yang mampu mengurangi paparan sinar inframerah dan UV hingga 99%, menjaga kabin tetap dingin tanpa mengorbankan visibilitas.",
      pricing: [
        { cat: "Kecil", price: "Rp 1.350.000" },
        { cat: "Medium", price: "Rp 1.500.000" },
        { cat: "Besar", price: "Rp 1.700.000" }
      ]
    },
    {
      name: "CPF1 Auto Film",
      accent: "#FFFFFF",
      glow: "shadow-white/20",
      image: CPF1,
      desc: "Pilihan premium dengan teknologi nano ceramic terbaru untuk menolak panas hingga lebih dari 80%. Memberikan perlindungan UV maksimal dan tampilan mewah yang presisi.",
      pricing: [
        { cat: "Kecil", price: "Rp 1.750.000" },
        { cat: "Medium", price: "Rp 1.900.000" },
        { cat: "Besar", price: "Rp 2.100.000" }
      ]
    },
    {
      name: "Llumar Super Black",
      accent: "#4B5563",
      glow: "shadow-gray-700/60",
      image: Llumar,
      desc: "Seri tertinggi dengan warna hitam pekat bebas refleksi, menolak panas dan UV hingga 99%. Menetapkan standar baru dalam kenyamanan dan gaya premium pada kendaraan Anda.",
      pricing: [
        { cat: "Kecil", price: "Rp 3.500.000" },
        { cat: "Medium", price: "Rp 4.000.000" },
        { cat: "Besar", price: "Rp 4.400.000" }
      ]
    }
  ];

  const exteriorGallery = [{ url: foto1 }, { url: foto2 }, { url: foto3 }];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`bg-[#0D0D0D] border-2 rounded-[2.5rem] p-7 flex flex-col items-center relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 ${pkg.glow}`}
            style={{ borderColor: pkg.accent }}
          >
            <div 
              className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-6 border-2 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex-shrink-0"
              style={{ borderColor: pkg.accent }}
            >
              <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            <h3 className="font-horizon text-2xl md:text-3xl text-white uppercase italic tracking-tighter text-center mb-4 leading-none">
              <span style={{ color: pkg.accent }}>{pkg.name.split(' ')[0]}</span> <br />
              {pkg.name.split(' ').slice(1).join(' ')}
            </h3>
            
            <p className="font-garet text-white text-[12px] leading-relaxed text-center mb-8 opacity-90 px-2">
              {pkg.desc}
            </p>

            <div className="mt-auto w-full space-y-3 pt-6 border-t border-white/10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle2 size={12} style={{ color: pkg.accent }} />
                <span className="font-horizon text-[9px] text-white/50 uppercase tracking-[0.3em]">Full Set Pricing</span>
              </div>

              {pkg.pricing.map((p, i) => (
                <div key={i} className="flex justify-between items-center bg-white/5 px-5 py-3.5 rounded-2xl border border-white/10">
                  <span className="font-horizon text-[10px] text-gray-300 uppercase tracking-widest">{p.cat}</span>
                  <span className="font-horizon text-base md:text-lg text-white font-bold tracking-tight">{p.price}</span>
                </div>
              ))}
            </div>

            <div 
              className="absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] opacity-20 rounded-full"
              style={{ backgroundColor: pkg.accent }}
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-20 md:mt-32 mb-10 md:mb-20">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-[1px] w-8 md:w-12 bg-white/20"></span>
            <Camera className="text-white/80" size={20} />
            <span className="h-[1px] w-8 md:w-12 bg-white/20"></span>
          </div>
          <h3 className="font-horizon text-3xl md:text-4xl text-white uppercase italic tracking-tighter text-center">Exterior Gallery</h3>
        </div>

       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-auto md:h-[750px]">
        {exteriorGallery.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[3rem] border border-white/10 group shadow-2xl aspect-square md:aspect-auto
              ${i === 0 ? 'col-span-2 md:col-span-2 md:row-span-2' : ''} 
              ${i === 1 ? 'col-span-1 md:col-span-2 md:row-span-1' : ''}
              ${i === 2 ? 'col-span-1 md:col-span-2 md:row-span-1' : ''}`}
          >
            <img 
              src={img.url} 
              alt="Exterior" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" 
            />
         
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ExteriorSeries;