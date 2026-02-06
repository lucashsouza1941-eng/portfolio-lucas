'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#hero', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contato', label: 'Contato' },
];

const SCROLL_THRESHOLD = 80;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY < SCROLL_THRESHOLD) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY.current) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-20 px-4 pt-4 md:px-6 md:pt-5"
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -120,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <nav className="max-w-5xl mx-auto rounded-2xl bg-transparent px-5 py-3 md:px-8 md:py-3.5">
        <div className="flex items-center">
          <div className="flex-1 md:hidden" />
          <ul className="hidden md:flex items-center justify-center gap-0.5 flex-1">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <motion.a
                  href={link.href}
                  className="group relative block px-4 py-2.5 text-[15px] md:text-base font-bold text-white/80 rounded-xl transition-colors duration-200"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10 transition-all duration-200 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9),0_0_12px_rgba(34,211,238,0.6)]">
                    {link.label}
                  </span>
                  <span
                    className="absolute inset-0 rounded-xl bg-cyan-500/20 opacity-0 shadow-[0_0_10px_rgba(34,211,238,0.7),0_0_25px_rgba(34,211,238,0.5),0_0_40px_rgba(34,211,238,0.3)] transition-opacity duration-200 group-hover:opacity-100"
                  />
                </motion.a>
              </li>
            ))}
          </ul>
          <div className="flex-1 flex justify-end md:hidden">
            <motion.button
            type="button"
            className="md:hidden p-2.5 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="md:hidden flex flex-col gap-0.5 pt-3 mt-3 border-t border-white/8"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ delay: 0.03 * i, duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="block px-4 py-2.5 text-base font-bold text-white/80 rounded-xl transition-all duration-200 hover:text-white hover:bg-cyan-500/10 hover:shadow-[0_0_10px_rgba(34,211,238,0.7),0_0_25px_rgba(34,211,238,0.5)] hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
