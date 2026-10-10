'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { usePrefersReducedMotion } from '@/lib/motion';

export type Project = {
  id: string;
  title: string;
  slug: string;
  client: string;
  thumbnail: string;
  ratio: '16:9' | '9:16' | '1:1';
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const prefersReduced = usePrefersReducedMotion();

  const isLandscape = project.ratio === '16:9';
  const spanClass = isLandscape
    ? 'col-span-1 md:col-span-2'
    : 'col-span-1';

  const aspectClass = isLandscape ? 'aspect-video' : 'aspect-[9/16]';

  return (
    <motion.div
      initial={prefersReduced ? {} : { opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={spanClass}
    >
      <Link
        ref={ref}
        href={`/work/${project.slug}`}
        className={`group relative block w-full ${aspectClass} rounded-2xl overflow-hidden bg-deep-navy border border-hairline-dark hover:border-electric-cyan/30 transition-all duration-500 no-underline`}
        aria-label={`View ${project.title} case study`}
      >
        {/* Thumbnail image — no video autoplay */}
        <Image
          src={project.thumbnail}
          alt={`${project.title} — ${project.client}`}
          fill
          sizes={isLandscape ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          loading={index < 2 ? 'eager' : 'lazy'}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-navy via-ink-navy/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

        {/* Aspect ratio badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-2.5 py-1 bg-ink-navy/70 backdrop-blur-sm rounded-md text-[10px] font-mono tracking-widest uppercase border border-hairline-dark text-cool-grey">
            {project.ratio}
          </span>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-8">
          <div>
            <span className="px-3 py-1 bg-ink-navy/50 backdrop-blur-md rounded-full text-xs font-mono tracking-widest uppercase border border-hairline-dark text-crisp-white">
              {project.client}
            </span>
          </div>

          <div>
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-crisp-white mb-3 group-hover:text-electric-cyan transition-colors duration-300">
              {project.title}
            </h3>

            <div className="flex items-center gap-2 text-crisp-white/80 group-hover:text-electric-cyan transition-all duration-300">
              <span className="text-sm font-body font-medium uppercase tracking-widest">View Case Study</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="stroke-current transform group-hover:translate-x-1 transition-transform">
                <path d="M3 8h10M9 4l4 4-4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="container-wide">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-display-l font-display font-semibold text-crisp-white tracking-tight mb-2">
            My Work
          </h2>
          <p className="text-cool-grey font-body">
            Some of my favorite campaigns.
          </p>
        </div>
        <div className="flex-1 hairline hidden md:block ml-8" />
      </div>

      {/* Bento grid: landscape cards span 2 cols, portrait cards span 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 [grid-auto-flow:dense]">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
