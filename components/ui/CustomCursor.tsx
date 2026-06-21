'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Só ativa em dispositivos com mouse fino e sem preferência por menos movimento
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion) return;

    document.documentElement.classList.add('custom-cursor-active');

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(Boolean(target.closest('a, button, input, textarea, [role="button"]')));
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ x, y }}
      aria-hidden
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400 bg-cyan-400/20"
        animate={{
          width: hovering ? 44 : 20,
          height: hovering ? 44 : 20,
          opacity: hovering ? 0.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ boxShadow: '0 0 12px rgba(34,211,238,0.6)' }}
      />
    </motion.div>
  );
}
