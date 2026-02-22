import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ShieldCheck } from 'lucide-react';
import glossLogo from '../assets/logo/Gloss.webp';
import dailyShieldLogo from '../assets/logo/DailyShield.webp';
import primeLogo from '../assets/logo/Prime.webp';
import vintageLogo from '../assets/logo/Vintage.webp';
import prestigeLogo from '../assets/logo/Prestige.webp';

const CoatingPackage = () => {
  const packages = [
    {
      name: "Zyro Gloss",
      accent: "#38BDF8",
      warranty: "1 Year Warranty",
      maint: "2x Maintenance",
      logo: glossLogo, 
      desc: "Pilihan ideal untuk LCGC yang ingin upgrade perlindungan dengan sentuhan graphene coating 8H 1-layer yang praktis namun tetap memberi kilap tajam dan proteksi hingga satu tahun tanpa overbudget.",
      stats: [
        { label: "Gloss", val: "B" },
        { label: "Tahan Kusam", val: "B" },
        { label: "Tahan Menguning", val: "B" },
        { label: "Pelindung Noda", val: "B+" },
        { label: "Hydrophobic", val: "B" }
      ]
    },
    {
      name: "Zyro Daily Shield",
      accent: "#4ADE80",
      warranty: "2 Years Warranty",
      maint: "4x Maintenance",
      logo: dailyShieldLogo,
      desc: "Solusi paling pas untuk mobil harian yang butuh perlindungan serius dengan 2-layer nano ceramic coating 9H bergaransi dua tahun agar cat tetap aman, mudah dibersihkan, dan selalu terlihat fresh di segala kondisi.",
      stats: [
        { label: "Gloss", val: "B+" },
        { label: "Tahan Kusam", val: "B+" },
        { label: "Tahan Menguning", val: "B+" },
        { label: "Pelindung Noda", val: "B+" },
        { label: "Hydrophobic", val: "A" }
      ]
    },
    {
      name: "Zyro Prime",
      accent: "#EF4444",
      warranty: "3 Years Warranty",
      maint: "5x Maintenance",
      logo: primeLogo,
      desc: "Untuk kamu yang mengejar efek wet look lebih dalam dan elegan, 3-layer nano ceramic coating 9H+ dipadukan perlindungan anti karat undercarriage memberi tampilan premium sekaligus proteksi menyeluruh.",
      stats: [
        { label: "Gloss", val: "A" },
        { label: "Tahan Kusam", val: "A" },
        { label: "Tahan Menguning", val: "A" },
        { label: "Pelindung Noda", val: "A" },
        { label: "Hydrophobic", val: "A+" }
      ]
    },
    {
      name: "Zyro Vintage",
      accent: "#9CA3AF",
      warranty: "4 Years Warranty",
      maint: "6x Maintenance",
      logo: vintageLogo,
      desc: "Pilihan tepat menjaga mobil klasik tetap berkarakter dan berkelas dengan empat layer diamond coating 10H serta perlindungan anti karat undercarriage agar nilai estetika dan historisnya tetap terjaga sempurna.",
      stats: [
        { label: "Gloss", val: "A+" },
        { label: "Tahan Kusam", val: "A+" },
        { label: "Tahan Menguning", val: "A+" },
        { label: "Pelindung Noda", val: "A+" },
        { label: "Hydrophobic", val: "A+" }
      ]
    },
    {
      name: "Zyro Prestige",
      accent: "#F97316",
      warranty: "5 Years Warranty",
      maint: "7x Maintenance",
      logo: prestigeLogo,
      desc: "Dirancang bagi mobil mewah yang menuntut standar tertinggi, empat layer diamond coating 10H dengan tambahan anti karat undercarriage menghadirkan kilap eksklusif dan perlindungan maksimal tanpa kompromi.",
      stats: [
        { label: "Gloss", val: "A+" },
        { label: "Tahan Kusam", val: "A+" },
        { label: "Tahan Menguning", val: "A+" },
        { label: "Pelindung Noda", val: "A+" },
        { label: "Hydrophobic", val: "A+" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            className="relative bg-[#0F0F0F] border-2 rounded-[2.5rem] p-7 flex flex-col group transition-all duration-500 hover:bg-[#151515]"
            style={{ borderColor: pkg.accent }}
          >
            {/* Top Row: Logo Besar & Judul Tegas */}
            <div className="flex gap-6 items-center mb-6">
              <div className="w-24 h-24 rounded-full border-2 shrink-0 overflow-hidden shadow-2xl" style={{ borderColor: pkg.accent }}>
                <img src={pkg.logo} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="space-y-2">
                <h3 className="font-horizon text-2xl text-white uppercase italic leading-tight">
                  {pkg.name.split(' ')[0]} <br />
                  <span style={{ color: pkg.accent }}>{pkg.name.split(' ').slice(1).join(' ')}</span>
                </h3>
                <div className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg inline-block">
                   <p className="font-horizon text-[8px] text-white tracking-[0.2em]">{pkg.warranty}</p>
                   <p className="font-garet text-[7px] text-white/40 uppercase mt-0.5">{pkg.maint}</p>
                </div>
              </div>
            </div>

            {/* Deskripsi: Font Besar & Jelas, tapi Padding diperketat */}
            <p className="font-garet text-white text-[11px] leading-relaxed mb-6 opacity-90 border-l-2 pl-4" style={{ borderColor: `${pkg.accent}44` }}>
              {pkg.desc}
            </p>

            {/* Performance Stats: 2-Kolom Horizontal List */}
            <div className="mt-auto pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {pkg.stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-1">
                    <span className="font-garet text-[9px] text-white/50 uppercase tracking-wide whitespace-nowrap">{stat.label}</span>
                    <span className="font-horizon text-xs text-white" style={{ color: pkg.accent }}>{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Glow Subtle */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 blur-[80px] opacity-10 rounded-full pointer-events-none" style={{ backgroundColor: pkg.accent }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoatingPackage;