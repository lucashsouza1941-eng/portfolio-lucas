'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <motion.section
      id="sobre"
      className="py-20 px-4 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Sobre
        </motion.h2>
        <motion.p
          className="text-foreground/90 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          [Texto de apresentação sobre você, sua trajetória e objetivos.]
        </motion.p>
      </div>
    </motion.section>
  );
}
