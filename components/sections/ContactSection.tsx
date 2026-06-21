'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';

const socialLinks = [
  {
    name: 'LinkedIn',
    // TODO: troque pelo seu usuário real do LinkedIn
    href: 'https://www.linkedin.com/in/lucashsouza',
    icon: <LinkedinIcon className="h-5 w-5" />,
  },
  {
    name: 'GitHub',
    // TODO: troque pelo seu usuário real do GitHub
    href: 'https://github.com/lucashsouza',
    icon: <GithubIcon className="h-5 w-5" />,
  },
  {
    name: 'E-mail',
    href: 'mailto:lucashsouza.1941@gmail.com',
    icon: <Mail className="h-5 w-5" />,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5511978457176',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500';

// Crie um formulário grátis em https://formspree.io e cole o endpoint
// em .env.local como NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');

    try {
      if (!FORMSPREE_ENDPOINT) {
        throw new Error('NEXT_PUBLIC_FORMSPREE_ENDPOINT não configurado');
      }
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error('Falha no envio');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="bg-[#0a0a0a] py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">Contato</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Vamos conversar
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Info + redes */}
          <motion.div
            className="space-y-8 lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="mb-4 text-lg font-semibold text-white">Informações</h3>
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
                    <Mail className="h-4 w-4" />
                  </span>
                  <a
                    href="mailto:lucashsouza.1941@gmail.com"
                    className="text-white/80 transition-colors hover:text-cyan-400"
                  >
                    lucashsouza.1941@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
                    <MapPin className="h-4 w-4" />
                  </span>
                  São Paulo
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
                    <Clock className="h-4 w-4" />
                  </span>
                  Disponível para projetos
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Redes</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-cyan-500/50 hover:bg-cyan-500/15 hover:text-cyan-400"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-white/90">
                    Nome
                  </label>
                  <input id="contact-name" name="name" type="text" required className={inputClass} placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-white/90">
                    E-mail
                  </label>
                  <input id="contact-email" name="email" type="email" required className={inputClass} placeholder="seu@email.com" />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-white/90">
                  Assunto
                </label>
                <input id="contact-subject" name="subject" type="text" className={inputClass} placeholder="Projeto, oportunidade..." />
              </div>
              <div className="mt-5">
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-white/90">
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  className={`${inputClass} min-h-[120px] resize-y`}
                  placeholder="Conte um pouco sobre o que você precisa..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 w-full rounded-xl bg-cyan-500 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto md:min-w-[160px]"
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                style={{ boxShadow: '0 0 24px rgba(34,211,238,0.3)' }}
              >
                {status === 'sending' && 'Enviando...'}
                {status === 'sent' && 'Mensagem enviada!'}
                {status === 'error' && 'Erro. Tente novamente'}
                {status === 'idle' && 'Enviar mensagem'}
              </motion.button>

              <p aria-live="polite" className="mt-4 text-sm">
                {status === 'sent' && (
                  <span className="text-green-400">
                    Obrigado! Sua mensagem foi enviada. Retorno em breve.
                  </span>
                )}
                {status === 'error' && (
                  <span className="text-red-400">
                    Não foi possível enviar. Tente novamente ou escreva para{' '}
                    <a href="mailto:lucashsouza.1941@gmail.com" className="underline hover:text-cyan-400">
                      lucashsouza.1941@gmail.com
                    </a>
                    .
                  </span>
                )}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
