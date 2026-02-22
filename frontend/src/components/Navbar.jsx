import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo/logo1.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Know Us', id: 'about-us-1' },
    { name: 'Our Stories', id: 'about-us-2' },
    { name: 'Our Services', id: 'our-service' },
    { name: 'FAQs', id: 'faq' },
    { name: 'Find Us', id: 'footer' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-12 transition-all duration-500 ${
        isScrolled
          // DIUBAH: Menghapus backdrop-blur-lg dan mengganti bg-black/80 menjadi bg-black solid
          ? 'bg-black py-4 shadow-2xl' 
          : 'bg-black py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">

        {/* Logo Section */}
        <div className="flex flex-col justify-center items-start group cursor-pointer relative z-[110]">
          <img
            src={logo} 
            alt="Zyro Logo"
            className="h-8 md:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-white/80 text-sm font-bold tracking-wider hover:text-fuchsia-500 transition-all uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center text-white p-2 -mr-2"
          style={{ WebkitTapHighlightColor: 'transparent' }}
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Side-Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              // DIUBAH: Menghapus backdrop-blur-md
              className="fixed inset-0 bg-black/90 z-[150] md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[85vw] max-w-sm bg-[#050505] border-l border-white/10 z-[160] flex flex-col p-10 md:hidden shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
            >
              <div className="flex flex-col h-full justify-center space-y-8">
                {links.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black text-white hover:text-fuchsia-600 transition-colors uppercase italic tracking-tighter"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 pt-12 border-t border-white/10"
                >
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] leading-loose">
                    Zyro <br /> Autodetailing
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;