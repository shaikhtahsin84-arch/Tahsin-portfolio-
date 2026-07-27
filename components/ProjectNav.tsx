'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/motion';
import type { Project } from '@/lib/projects';

interface ProjectNavProps {
  prev: Project | null;
  next: Project | null;
}

export function ProjectNav({ prev, next }: ProjectNavProps) {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <nav
      className="border-t border-hairline-dark"
      aria-label="Project navigation"
    >
      <div className="grid grid-cols-2">
        {/* Previous */}
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="group flex flex-col justify-center p-8 md:p-12 border-r border-hairline-dark hover:bg-deep-navy transition-colors duration-300 no-underline"
            aria-label={`Previous project: ${prev.name}`}
          >
            <span className="mono-label text-cool-grey mb-2">Previous</span>
            <span className="font-display text-h2 text-crisp-white group-hover:text-electric-cyan transition-colors duration-300">
              {prev.name}
            </span>
          </Link>
        ) : (
          <div className="border-r border-hairline-dark" />
        )}

        {/* Next */}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col justify-center items-end text-right p-8 md:p-12 hover:bg-deep-navy transition-colors duration-300 no-underline"
            aria-label={`Next project: ${next.name}`}
          >
            <span className="mono-label text-cool-grey mb-2">Next</span>
            <span className="font-display text-h2 text-crisp-white group-hover:text-electric-cyan transition-colors duration-300">
              {next.name}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
