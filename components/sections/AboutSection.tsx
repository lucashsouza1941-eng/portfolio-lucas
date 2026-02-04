'use client';

import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Experiência',
    value: '2+ anos',
    description: 'Desenvolvendo aplicações web e APIs',
  },
  {
    title: 'Foco',
    value: 'Full-Stack',
    description: 'Front-end, back-end e DevOps',
  },
  {
    title: 'Stack',
    value: 'React · Node',
    description: 'TypeScript, Next.js, bancos de dados',
  },
];

const values = [
  'Código limpo e manutenível',
  'UX e performance em primeiro lugar',
  'Aprendizado contínuo e boas práticas',
];

export default function AboutSection() {
  return (
    <motion.section
      id="sobre"
      className="py-24 px-4 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">Sobre mim</h2>
          <p className="mt-2 text-blue-400 text-sm font-medium tracking-widest uppercase">
            Quem sou e no que acredito
          </p>
        </motion.div>

        <motion.div
          className="space-y-6 text-white/85 leading-relaxed text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>
            Sou um desenvolvedor júnior apaixonado por tecnologia e em constante busca por conhecimento. Cada linha de código que escrevo é uma oportunidade de aprender algo novo e me superar. Minha jornada na programação começou por curiosidade, mas rapidamente se transformou em uma verdadeira paixão.
          </p>
          <p>
            Estou determinado a construir uma carreira sólida na área de desenvolvimento, trazendo energia, dedicação e vontade de crescer. Acredito que a primeira oportunidade é apenas o começo de uma trajetória de muito aprendizado e contribuições significativas.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <p className="text-blue-400 text-xs font-semibold tracking-wider uppercase">
                {h.title}
              </p>
              <p className="mt-2 text-xl font-bold text-white md:text-2xl">{h.value}</p>
              <p className="mt-1 text-sm text-white/60">{h.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">No que acredito</h3>
          <ul className="space-y-3">
            {values.map((v, i) => (
              <li key={v}>
                <motion.div
                  className="flex items-center gap-3 text-white/85"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.35 + i * 0.05 }}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden />
                  {v}
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
