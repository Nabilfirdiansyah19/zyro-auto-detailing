import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ThermometerSnowflake, CheckCircle2 } from 'lucide-react';
import Riben from '../assets/logo/Riben.webp';
import ProMaster from '../assets/logo/ProMaster.webp';
import CPF1 from '../assets/logo/Cpf1.webp';
import Llumar from '../assets/logo/Llumar.webp';
import ThreeM from '../assets/logo/3mAuto.webp';

const ExteriorSeries = () => {
  const packages = [
    {
      name: "Riben",
      accent: "#9CA3AF", // Abu-abu
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
      accent: "#FFFFFF", // Putih
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
      accent: "#EF4444", // Merah
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
      accent: "#FFFFFF", // Putih
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
      accent: "#4B5563", // Hitam/Abu
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`bg-[#0D0D0D] border-2 rounded-[2.5rem] p-7 flex flex-col items-center relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 ${pkg.glow}`}
            style={{ borderColor: pkg.accent }}
          >
            {/* Logo Bulet - Diameter Sedang (Proposional) */}
            <div 
              className="relative w-36 h-36 rounded-full overflow-hidden mb-6 border-2 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex-shrink-0"
              style={{ borderColor: pkg.accent }}
            >
              <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent" />
            </div>

            {/* Judul - Putih Terang */}
            <h3 className="font-horizon text-3xl text-white uppercase italic tracking-tighter text-center mb-4 leading-none">
              <span style={{ color: pkg.accent }}>{pkg.name.split(' ')[0]}</span> <br />
              {pkg.name.split(' ').slice(1).join(' ')}
            </h3>
            
            {/* Deskripsi - Putih Terang & Lengkap */}
            <p className="font-garet text-white text-[12px] leading-relaxed text-center mb-8 opacity-90 px-2">
              {pkg.desc}
            </p>

            {/* Pricing Section - Jelas, Font Gede, Putih */}
            <div className="mt-auto w-full space-y-3 pt-6 border-t border-white/10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle2 size={12} style={{ color: pkg.accent }} />
                <span className="font-horizon text-[9px] text-white/50 uppercase tracking-[0.3em]">Full Set Pricing</span>
              </div>

              {pkg.pricing.map((p, i) => (
                <div key={i} className="flex justify-between items-center bg-white/5 px-5 py-3.5 rounded-2xl border border-white/10 group-hover:bg-white/10 transition-all">
                  <span className="font-horizon text-[10px] text-gray-300 uppercase tracking-widest">{p.cat}</span>
                  <span className="font-horizon text-lg text-white font-bold tracking-tight">{p.price}</span>
                </div>
              ))}

              <div className="mt-6 flex items-center justify-center gap-2 opacity-40">
                <ThermometerSnowflake size={14} style={{ color: pkg.accent }} />
                <p className="font-garet text-[9px] text-white uppercase tracking-widest italic">Heat Rejection System</p>
              </div>
            </div>

            {/* Gradient Glow di dalam card */}
            <div 
              className="absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] opacity-20 rounded-full"
              style={{ backgroundColor: pkg.accent }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExteriorSeries;