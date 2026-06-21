'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectModal from '@/components/projects/ProjectModal';
import type { Project, ProjectCategory } from '@/data/projects';

type Filter = 'Todos' | ProjectCategory;

const filters: Filter[] = ['Todos', 'Front-end', 'Back-end', 'Full-Stack'];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<Filter>('Todos');

  const visibleProjects = useMemo(
    () =>
      activeFilter === 'Todos'
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="projetos" className="bg-[#0a0a0a] py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">Projetos</h2>
          <p className="mt-2 text-sm font-medium uppercase tracking-widest text-cyan-400">
            O que já construí
          </p>
        </motion.div>

        {/* Barra de filtros */}
        <motion.div
          className="mb-12 flex flex-wrap items-center justify-center gap-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {filters.map((filter) => {
            const active = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'text-[#0a0a0a]'
                    : 'border border-white/15 bg-white/5 text-white/70 hover:text-white'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-cyan-400"
                    style={{ boxShadow: '0 0 20px rgba(34,211,238,0.4)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </motion.div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenDetails={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
