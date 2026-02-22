import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Settings, Info, CheckCircle2 } from 'lucide-react';
import Ferrari from '../assets/logo/Ferrari.webp';

const InteriorSeries = () => {
  const packages = [
    {
      name: "Ferrari",
      accent: "border-red-600",
      glow: "shadow-red-600/40",
      textColor: "text-red-500",
      brandColor: "#dc2626", // Red 600
      image: Ferrari,
      desc: "Jok Permanen dengan material basic fabric leather yang fungsional dan ekonomis.",
      features: [
        "Ketebalan busa 0.5 cm",
        "Material basic fabric leather",
        "FREE Consule head",
        "FREE Doortrim Re-trim",
        "Daya tahan bahan 2 tahun"
      ],
      pricing: [
        { label: "2 Baris Jok", price: "Rp 3.500.000" },
        { label: "3 Baris Jok", price: "Rp 4.100.000" }
      ],
      note: "Motif Design: Serat Kayu / Kulit Jeruk"
    },
    {
      name: "Cherokee",
      accent: "border-white",
      glow: "shadow-white/20",
      textColor: "text-white",
      brandColor: "#ffffff",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800",
      desc: "Material soft fabric leather yang lebih empuk dan tahan lama untuk harian.",
      features: [
        "Ketebalan busa 0.6 cm",
        "Material soft fabric leather",
        "FREE Consule head",
        "FREE Doortrim Re-trim",
        "Daya tahan bahan 3–5 tahun"
      ],
      pricing: [
        { label: "2 Baris Jok", price: "Rp 4.000.000" },
        { label: "3 Baris Jok", price: "Rp 4.500.000" }
      ],
      note: "Motif Design: Serat Kayu / Kulit Jeruk"
    },
    {
      name: "MBtech",
      accent: "border-[#8B4513]",
      glow: "shadow-[#8B4513]/40",
      textColor: "text-[#D2B48C]",
      brandColor: "#8B4513", // Saddle Brown
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800",
      desc: "Premium quality synthetic leather dengan standar kenyamanan dan durabilitas tinggi.",
      features: [
        "Ketebalan busa 0.8 cm",
        "Anti gores & Anti jamur",
        "UV Protection (Tahan Panas)",
        "FREE Doortrim Re-trim",
        "Daya tahan bahan 7–10 tahun"
      ],
      pricing: [
        { label: "2 Baris Jok", price: "Rp 4.500.000" }, // Asumsi harga
        { label: "3 Baris Jok", price: "Rp 5.000.000" }
      ],
      note: "Motif Design: Nappa / Serat Kayu / Kulit Jeruk"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Grid Utama */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`bg-[#111111] border-2 ${pkg.accent} rounded-[2.5rem] p-7 flex flex-col relative overflow-hidden group hover:scale-[1.02] transition-all duration-500 ${pkg.glow}`}
          >
            {/* Image Section with Colored Overlay Accent */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 border border-white/10">
              <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              {/* Overlay warna transparan di atas gambar untuk memperkuat identitas */}
              <div className={`absolute inset-0 opacity-20`} style={{ backgroundColor: pkg.brandColor }}></div>
              <div className={`absolute bottom-3 left-3 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20`}>
                <span className={`font-horizon text-[10px] uppercase tracking-[0.2em] text-white`}>Premium Material</span>
              </div>
            </div>

            {/* Title - Sangat Terang (White) */}
            <h3 className="font-horizon text-4xl text-white uppercase italic tracking-tighter mb-1">
              {pkg.name}
            </h3>
            <div className={`h-1 w-12 mb-4`} style={{ backgroundColor: pkg.brandColor }}></div>

            {/* Deskripsi - Putih Terang */}
            <p className="font-garet text-white text-[12px] leading-relaxed mb-8 opacity-90">
              {pkg.desc}
            </p>

            {/* List Fitur - Icon berwarna */}
            <div className="space-y-3.5 mb-10">
              {pkg.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} style={{ color: pkg.brandColor }} className="mt-0.5 flex-shrink-0" />
                  <span className="font-garet text-white text-[12px] font-medium tracking-wide leading-tight uppercase">{feat}</span>
                </div>
              ))}
            </div>

            {/* Pricing Section - Kontras & Jelas */}
            <div className="mt-auto pt-6 border-t border-white/20">
              <div className="space-y-3">
                {pkg.pricing.map((p, i) => (
                  <div key={i} className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors">
                    <span className="font-horizon text-[10px] text-gray-300 uppercase tracking-widest">{p.label}</span>
                    <span className="font-horizon text-base text-white">{p.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex items-center gap-2 px-1">
                <Info size={14} style={{ color: pkg.brandColor }} />
                <p className="font-garet text-[10px] font-bold text-gray-400 uppercase">
                  {pkg.note}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Package Banner - Dibuat Jauh Lebih Kontras */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="relative bg-[#1A1A1A] border-2 border-magenta-300 rounded-[2.5rem] p-8 overflow-hidden shadow-[0_0_40px_rgba(255,154,217,0.15)]"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 rounded-2xl bg-magenta-300 flex items-center justify-center shadow-[0_0_30px_rgba(255,154,217,0.4)]">
              <Settings className="text-white animate-[spin_10s_linear_infinite]" size={40} />
            </div>
            <div>
              <h4 className="font-horizon text-white text-xl uppercase tracking-widest mb-1">Additional Package</h4>
              <p className="font-have-heart text-magenta-300 text-4xl">STEERING AND SHIFT KNOB RE TRIM</p>
            </div>
          </div>
          
          <div className="flex items-center gap-10">
            <div className="text-right">
              <p className="font-horizon text-white text-4xl tracking-tighter leading-none">Rp 800.000</p>
              <p className="font-garet text-[11px] text-magenta-300 font-black uppercase tracking-[0.4em] mt-2 italic">Special Price</p>
            </div>
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center hover:bg-magenta-300 transition-all cursor-pointer group/btn">
              <ChevronRight className="text-black group-hover/btn:text-white transition-colors" size={30} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InteriorSeries;