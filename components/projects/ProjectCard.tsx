'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpenDetails }: ProjectCardProps) {
  return (
    <motion.article
      layout
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ scale: 1.03 }}
      style={{ transition: 'box-shadow 0.3s' }}
    >
      {/* Glow ciano no hover via classe */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 30px rgba(34,211,238,0.25)' }} />

      {project.featured && (
        <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full border border-cyan-400/40 bg-cyan-500/20 px-2.5 py-1 text-xs font-semibold text-cyan-200 backdrop-blur-md">
          <Star className="h-3 w-3 fill-cyan-300 text-cyan-300" />
          Em destaque
        </span>
      )}

      <div className="relative aspect-video w-full overflow-hidden bg-white/5">
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-white md:text-xl">{project.title}</h3>
          <span className="shrink-0 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-cyan-300">
            {project.category}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-white/70">{project.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/15 bg-white/5 px-2 py-1 text-xs font-medium text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botões GitHub + Demo */}
        <div className="mt-4 flex gap-2">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 py-2 text-xs font-medium text-white/80 transition-colors hover:border-cyan-500/50 hover:text-cyan-300"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-cyan-500/40 bg-cyan-500/15 py-2 text-xs font-medium text-cyan-300 transition-colors hover:bg-cyan-500/25"
            >
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          )}
        </div>

        <motion.button
          type="button"
          className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10"
          onClick={() => onOpenDetails(project)}
          whileTap={{ scale: 0.98 }}
        >
          Ver mais detalhes
        </motion.button>
      </div>
    </motion.article>
  );
}
