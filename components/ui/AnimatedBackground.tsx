'use client';

import { motion } from 'framer-motion';

/**
 * Fundo holográfico de tecnologia.
 * É `absolute` para ficar contido apenas na seção pai (Hero), e não vazar
 * para as demais seções, que usam fundos sólidos alternados.
 */
export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Imagem de fundo baseada no tema de IA/tecnologia */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/fundo-tecnologia.png)',
        }}
      />
      {/* Overlay escuro para legibilidade do texto */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0a0a0a]"
        aria-hidden
      />
      {/* Gradiente sutil para reforçar o tema cyan/azul */}
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(34, 211, 238, 0.15), transparent 60%)',
        }}
      />
      {/* Grid sutil */}
      <div className="animated-bg-grid-dark absolute inset-0 opacity-80" />
    </div>
  );
}
