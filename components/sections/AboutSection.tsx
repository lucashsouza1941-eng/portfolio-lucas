'use client';

import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Experiência',
    value: 'Júnior',
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
    <section id="sobre" className="bg-[#0d1117] py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">Sobre mim</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Quem sou e no que acredito
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Coluna texto */}
          <motion.div
            className="space-y-6 text-base leading-relaxed text-white/85 md:text-lg"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p>
              Sou um desenvolvedor júnior apaixonado por tecnologia e em constante busca por
              conhecimento. Cada linha de código que escrevo é uma oportunidade de aprender algo novo
              e me superar. Minha jornada na programação começou por curiosidade, mas rapidamente se
              transformou em uma verdadeira paixão.
            </p>
            <p>
              Estou determinado a construir uma carreira sólida na área de desenvolvimento, trazendo
              energia, dedicação e vontade de crescer. Acredito que a primeira oportunidade é apenas
              o começo de uma trajetória de muito aprendizado e contribuições significativas.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="mb-4 text-lg font-semibold text-white">No que acredito</h3>
              <ul className="space-y-3">
                {values.map((v, i) => (
                  <li key={v}>
                    <motion.div
                      className="flex items-center gap-3 text-white/85"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden />
                      {v}
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Coluna cards de stats */}
          <motion.div
            className="grid content-start gap-6 sm:grid-cols-2 lg:grid-cols-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {highlights.map((h) => (
              <motion.div
                key={h.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {h.title}
                </p>
                <p className="mt-2 text-xl font-bold text-white md:text-2xl">{h.value}</p>
                <p className="mt-1 text-sm text-white/60">{h.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
