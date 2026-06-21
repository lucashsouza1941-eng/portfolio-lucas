'use client';

import { motion } from 'framer-motion';

type TechGroup = {
  group: string;
  items: { name: string; icon: string }[];
};

const techGroups: TechGroup[] = [
  {
    group: 'Front-end',
    items: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '🟦' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Framer Motion', icon: '🎞️' },
    ],
  },
  {
    group: 'Back-end',
    items: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express', icon: '🚂' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Prisma', icon: '🔺' },
      { name: 'Docker', icon: '🐳' },
    ],
  },
  {
    group: 'Ferramentas',
    items: [
      { name: 'Git', icon: '🌿' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Vercel', icon: '🔺' },
      { name: 'VS Code', icon: '💻' },
      { name: 'Figma', icon: '🎯' },
    ],
  },
];

const progressBars = [
  { name: 'React', value: 90 },
  { name: 'TypeScript', value: 80 },
  { name: 'Node.js', value: 75 },
  { name: 'Next.js', value: 85 },
  { name: 'PostgreSQL', value: 70 },
  { name: 'Docker', value: 60 },
];

export default function SkillsSection() {
  return (
    <section id="habilidades" className="bg-[#0d1117] py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">Habilidades</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Tecnologias e ferramentas
          </p>
        </motion.div>

        {/* Grid de tecnologias */}
        <div className="space-y-10">
          {techGroups.map((tg, gi) => (
            <motion.div
              key={tg.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
                {tg.group}
              </h3>
              <div className="grid grid-cols-4 gap-3 md:grid-cols-6 md:gap-4">
                {tg.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-colors hover:border-cyan-500/50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ y: -4 }}
                    style={{ transition: 'box-shadow 0.3s' }}
                  >
                    <span className="text-2xl transition-transform duration-200 group-hover:scale-125 md:text-3xl">
                      {item.icon}
                    </span>
                    <span className="text-center text-[11px] font-medium text-white/70 group-hover:text-cyan-300 md:text-xs">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Barras de progresso */}
        <div className="mt-16">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/60">
            Nível de proficiência
          </h3>
          <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {progressBars.map((bar, i) => (
              <motion.div
                key={bar.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-white/85">{bar.name}</span>
                  <span className="text-cyan-300">{bar.value}%</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.value}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 + i * 0.05 }}
                    style={{ boxShadow: '0 0 12px rgba(34,211,238,0.5)' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
