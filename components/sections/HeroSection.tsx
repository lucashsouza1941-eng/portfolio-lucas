'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, animate } from 'framer-motion';
import { Mail, Download, ArrowDown } from 'lucide-react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stackTags = ['React', 'Next.js', 'Node.js', 'TypeScript'];

const roles = ['Developer Full-Stack', 'React Developer', 'Node.js Developer'];

/** Efeito typewriter alternando entre os cargos. */
function useTypewriter(words: string[], typingSpeed = 90, deletingSpeed = 45, pause = 1600) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const atEnd = !deleting && text === current;
    const atStart = deleting && text === '';
    const delay = atEnd ? pause : deleting ? deletingSpeed : typingSpeed;

    const timeout = setTimeout(() => {
      if (atEnd) {
        setDeleting(true);
      } else if (atStart) {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

/** Contador que anima de 0 até `to` quando entra na viewport. */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 10, suffix: '+', label: 'Projetos' },
  { value: 2, suffix: '+', label: 'Anos' },
  { value: null, raw: '∞', label: 'Café' },
] as const;

export default function HeroSection() {
  const role = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-20"
    >
      <AnimatedBackground />

      <motion.div
        className="mx-auto w-full max-w-3xl text-center text-white"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Badge disponível */}
        <motion.div className="mb-6 flex justify-center" variants={item}>
          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-1.5 text-xs font-medium text-green-300 md:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Disponível para projetos
          </span>
        </motion.div>

        <motion.div className="mb-8 flex justify-center" variants={item}>
          <Image
            src="/images/foto-perfil.png"
            alt="Lucas - Desenvolvedor"
            width={160}
            height={160}
            className="rounded-full object-cover ring-2 ring-cyan-400/30 ring-offset-2 ring-offset-[#0a0a0a]"
            priority
          />
        </motion.div>

        <motion.p
          className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400 md:text-base"
          variants={item}
        >
          Olá, eu sou
        </motion.p>

        <motion.h1
          className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
          variants={item}
        >
          Lucas
        </motion.h1>

        {/* Cargo com typewriter */}
        <motion.p className="mt-3 text-xl text-white/90 md:text-2xl" variants={item}>
          <span className="text-cyan-300">{role}</span>
          <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-cyan-400 align-middle" style={{ height: '1.1em' }} />
        </motion.p>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          variants={item}
        >
          Construo aplicações web modernas, do front ao back, com foco em
          experiência do usuário e código limpo.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
          variants={item}
        >
          <span className="text-sm text-white/50">Stack:</span>
          {stackTags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md md:text-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          variants={item}
        >
          <motion.a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-cyan-400"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{ boxShadow: '0 0 24px rgba(34,211,238,0.35)' }}
          >
            <Mail className="h-4 w-4" />
            Entrar em contato
          </motion.a>
          <motion.a
            href="/cv-lucas.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="h-4 w-4" />
            Download CV
          </motion.a>
        </motion.div>

        {/* Contadores */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          variants={item}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-cyan-300 md:text-4xl">
                {s.value === null ? s.raw : <Counter to={s.value} suffix={s.suffix} />}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/50 md:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#sobre"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-cyan-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-label="Rolar para a seção Sobre"
      >
        <span className="text-xs font-medium uppercase tracking-wider">Rolar</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
