'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpenDetails }: ProjectCardProps) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
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
      <div className="p-5">
        <h3 className="text-lg font-bold text-white md:text-xl">{project.title}</h3>
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
        <motion.button
          type="button"
          className="mt-4 w-full rounded-xl border border-blue-500/50 bg-blue-500/20 py-2.5 text-sm font-medium text-blue-300 transition-colors hover:bg-blue-500/30"
          onClick={() => onOpenDetails(project)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Ver mais detalhes
        </motion.button>
      </div>
    </motion.article>
  );
}
