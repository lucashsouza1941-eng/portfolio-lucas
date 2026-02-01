'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <motion.section
      id="contato"
      className="py-20 px-4 bg-background/50 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Contato
        </motion.h2>
        <motion.p
          className="text-foreground/90 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          [Links para LinkedIn, GitHub, e-mail, etc.]
        </motion.p>
      </div>
    </motion.section>
  );
}
