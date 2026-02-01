'use client';

import { motion } from 'framer-motion';

const blobVariants = {
  animate: (i: number) => ({
    x: [0, 30, -20, 0],
    y: [0, -25, 15, 0],
    scale: [1, 1.1, 1.05, 1],
    transition: {
      duration: 8 + i * 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
};

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Gradiente azul animado (topo) */}
      <motion.div
        className="absolute inset-0 opacity-90"
        animate={{
          background: [
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37, 99, 235, 0.5), transparent 50%)',
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.45), transparent 50%)',
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37, 99, 235, 0.5), transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-0 opacity-80"
        animate={{
          background: [
            'radial-gradient(ellipse 60% 40% at 80% 60%, rgba(30, 64, 175, 0.35), transparent 50%)',
            'radial-gradient(ellipse 60% 40% at 20% 80%, rgba(59, 130, 246, 0.3), transparent 50%)',
            'radial-gradient(ellipse 60% 40% at 80% 60%, rgba(30, 64, 175, 0.35), transparent 50%)',
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Blobs flutuantes (azuis) */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          custom={i}
          variants={blobVariants}
          animate="animate"
          className="absolute rounded-full mix-blend-screen opacity-40 dark:opacity-35 filter blur-3xl"
          style={{
            width: 300 + i * 80,
            height: 300 + i * 80,
            left: `${20 + i * 25}%`,
            top: `${30 + i * 20}%`,
            background:
              i === 0
                ? 'rgba(37, 99, 235, 0.5)'
                : i === 1
                  ? 'rgba(59, 130, 246, 0.45)'
                  : 'rgba(30, 64, 175, 0.4)',
          }}
        />
      ))}
      {/* Grid sutil */}
      <div className="animated-bg-grid-dark absolute inset-0 opacity-100" />
    </div>
  );
}
