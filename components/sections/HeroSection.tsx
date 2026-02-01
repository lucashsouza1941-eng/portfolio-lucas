'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stackTags = ['React', 'Next.js', 'Node.js', 'TypeScript'];

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-20 relative"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="text-center max-w-3xl mx-auto w-full text-white">
        <motion.p
          className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4 md:text-base"
          variants={item}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Olá, eu sou
        </motion.p>
        <motion.h1
          className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
          variants={item}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Lucas
        </motion.h1>
        <motion.p
          className="mt-3 text-xl text-white/90 md:text-2xl"
          variants={item}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Developer Full-Stack
        </motion.p>
        <motion.p
          className="mt-6 text-base max-w-xl mx-auto md:text-lg leading-relaxed text-white/70"
          variants={item}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Construo aplicações web modernas, do front ao back, com foco em
          experiência do usuário e código limpo.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
          variants={item}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="text-white/50 text-sm">Stack:</span>
          {stackTags.map((tag, i) => (
            <motion.span
              key={tag}
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 md:text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.06, duration: 0.3 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          className="mt-6 text-sm text-white/50 md:text-base"
          variants={item}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          São Paulo · Disponível para projetos e oportunidades
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          variants={item}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.a
            href="#contato"
            className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Entrar em contato
          </motion.a>
          <motion.a
            href="#projetos"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver projetos
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        aria-label="Rolar para a seção Sobre"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Rolar</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.span>
      </motion.a>
    </motion.section>
  );
}
