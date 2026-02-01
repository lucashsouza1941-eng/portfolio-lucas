'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 relative"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="text-center">
        <motion.h1
          className="text-4xl font-bold md:text-6xl"
          variants={item}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Portfolio do Lucas
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-foreground/80 md:text-xl"
          variants={item}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Desenvolvedor • [Sua área de atuação]
        </motion.p>
      </div>
    </motion.section>
  );
}
