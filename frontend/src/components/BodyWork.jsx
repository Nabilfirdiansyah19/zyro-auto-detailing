import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Paintbrush, Layers, Instagram, ExternalLink } from 'lucide-react';

const BodyWork = () => {
  const points = [
    {
      id: "01",
      title: "Repair",
      icon: Wrench,
      desc: "Memperbaiki bagian mobil yang penyok, berlubang, atau rusak akibat kecelakaan dengan presisi tinggi mengembalikan bentuk asli pabrikan.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "02",
      title: "Repaint",
      icon: Paintbrush,
      desc: "Pengecatan ulang sebagian atau seluruh bagian body mobil menggunakan sistem oven dan cat premium untuk hasil warna yang akurat dan tahan lama.",
      color: "from-magenta-500 to-purple-600"
    },
    {
      id: "03",
      title: "Peelable Paint",
      icon: Layers,
      desc: "Teknik terbaru pengecatan menggunakan cat khusus yang dapat dikelupas tanpa merusak cat asli. Solusi bagi yang ingin ganti warna tanpa permanen.",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* KIRI: Content Points */}
        <div className="w-full lg:w-1/2 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-16"
          >
            <h2 className="font-horizon text-5xl md:text-7xl text-white italic uppercase leading-none tracking-tighter">
              Body <br /> <span className="text-magenta-300 stroke-text">Work.</span>
            </h2>
            <div className="h-1 w-24 bg-magenta-300 mt-4" />
          </motion.div>

          <div className="space-y-16">
            {points.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative flex gap-8"
              >
                {/* Number Background */}
                <div className="absolute -left-12 -top-8 font-horizon text-8xl text-white/[0.03] pointer-events-none group-hover:text-white/[0.07] transition-colors">
                  {item.id}
                </div>

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg shadow-black/50`}>
                    <item.icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-horizon text-2xl text-white uppercase tracking-widest mb-4">
                    {item.title}
                  </h3>
                  <p className="font-garet text-gray-400 text-sm leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* KANAN: Instagram Video Embed Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full lg:w-1/2 relative"
        >
          {/* Decorative Frame */}
          <div className="absolute -inset-4 border-2 border-magenta-300/30 rounded-[3rem] rotate-2 pointer-events-none" />
          <div className="absolute -inset-4 border-2 border-white/10 rounded-[3rem] -rotate-2 pointer-events-none" />
          
          <div className="relative bg-[#111111] border border-white/10 rounded-[2.5rem] p-4 shadow-2xl overflow-hidden">
            {/* Header IG UI */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px]">
                  <div className="w-full h-full rounded-full bg-black border-2 border-black overflow-hidden">
                    <div className="w-full h-full bg-magenta-300" />
                  </div>
                </div>
                <span className="font-horizon text-[10px] text-white tracking-widest uppercase">Zyro.Autodetailing</span>
              </div>
              <Instagram size={18} className="text-white/20" />
            </div>

            {/* Video Container */}
            <div className="aspect-[9/16] w-full bg-black rounded-2xl overflow-hidden relative group">
              {/* Instagram Embed menggunakan Iframe khusus untuk post */}
              <iframe 
                src="https://www.instagram.com/p/DRcj9LwEx_z/embed" 
                className="w-full h-full border-0"
                allowTransparency="true"
                allowFullScreen="true"
                scrolling="no"
              ></iframe>
              
              {/* Overlay Link */}
              <a 
                href="https://www.instagram.com/p/DRcj9LwEx_z/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-sm"
              >
                <ExternalLink className="text-white mb-2" size={32} />
                <span className="font-horizon text-white text-[10px] tracking-[0.3em] uppercase">Watch on Instagram</span>
              </a>
            </div>

            {/* Footer IG UI */}
            <div className="p-4 flex flex-col gap-2">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-20 h-2 rounded-full bg-white/10" />
              </div>
              <div className="w-full h-2 rounded-full bg-white/5" />
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white text-black px-6 py-6 rounded-3xl shadow-2xl rotate-12 flex flex-col items-center">
            <span className="font-horizon text-2xl leading-none italic uppercase">Live</span>
            <span className="font-garet text-[8px] font-black uppercase tracking-widest text-magenta-500">Action</span>
          </div>
        </motion.div>

      </div>

      <style>{`
        .stroke-text { 
           -webkit-text-stroke: 1px rgba(255,255,255,0.2); 
        }
      `}</style>
    </div>
  );
};

export default BodyWork;