'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/projects';

interface Props {
  project: Project;
  prev: Project | null;
  next: Project | null;
}

export function CaseStudyContent({ project, prev, next }: Props) {
  // Tabs for Kesar Bhog (Version A / Version B)
  const [activeVersionTab, setActiveVersionTab] = useState<number>(0);

  // Main film audio state
  const [isFilmSoundOn, setIsFilmSoundOn] = useState<boolean>(false);
  const filmVideoRef = useRef<HTMLVideoElement>(null);

  const toggleFilmSound = () => {
    if (!filmVideoRef.current) return;
    filmVideoRef.current.muted = !filmVideoRef.current.muted;
    setIsFilmSoundOn(!filmVideoRef.current.muted);
  };

  const primaryVideo =
    project.heroVideo ||
    (project.videos && project.videos.length > 0 ? project.videos[0].src : null);

  const primaryPoster =
    project.heroImage ||
    project.thumbnail ||
    (project.videos && project.videos.length > 0 ? project.videos[0].poster : undefined);

  const projectVideos =
    project.slug === 'nike' && project.videoVariants
      ? project.videoVariants
      : project.videos || [];

  return (
    <article className="min-h-screen bg-bg-primary text-crisp-white">
      {/* ─── 1. FULL-BLEED IMMERSIVE HERO (Matching Saklain / Neevi AI) ─── */}
      <section className="relative h-[85svh] lg:h-[100svh] w-full overflow-hidden bg-black">
        {primaryVideo ? (
          <>
            {project.ratio === '9:16' && (
              <video
                src={primaryVideo}
                muted
                loop
                playsInline
                autoPlay
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover blur-3xl opacity-25 scale-105"
              />
            )}
            <video
              src={primaryVideo}
              poster={primaryPoster}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              className={project.ratio === '9:16' ? 'relative z-10 h-full w-full object-contain mx-auto' : 'h-full w-full object-cover'}
            />
          </>
        ) : (
          <div className="relative h-full w-full">
            <Image
              src={primaryPoster || project.thumbnail}
              alt={project.name}
              fill
              priority
              className={project.ratio === '9:16' ? 'object-contain' : 'object-cover'}
            />
          </div>
        )}

        {/* Ambient Film Gradient Scrim */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-black/40" />

        {/* Top/Bottom Floating Badges */}
        <div className="absolute bottom-8 left-6 md:left-12 lg:left-16 right-6 md:right-12 lg:right-16 flex items-end justify-between z-20 pointer-events-none">
          <div className="pointer-events-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 font-mono text-xs text-electric-cyan uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-pulse" />
              0{project.order} / 10 · {project.brand}
            </span>
          </div>

          <a
            href="#project-details"
            className="pointer-events-auto flex items-center gap-2 font-mono text-xs text-cool-grey hover:text-crisp-white transition-colors bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 no-underline"
          >
            <span>Scroll for breakdown</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="stroke-current">
              <path d="M6 2v8m-3-3 3 3 3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* ─── 2. PROJECT OVERVIEW & EDITORIAL METADATA GRID ─── */}
      <section id="project-details" className="px-6 py-20 md:px-12 lg:px-16" aria-label="Project Information">
        <div className="mx-auto w-full max-w-[1600px]">
          {/* Index & Year Pill */}
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-xs text-electric-cyan uppercase tracking-widest font-semibold">
              Project 0{project.order}
            </span>
            <span className="text-cool-grey font-mono text-xs">·</span>
            <span className="text-cool-grey font-mono text-xs uppercase tracking-wider">
              Client: {project.brand}
            </span>
          </div>

          {/* Giant Editorial Title */}
          <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] text-crisp-white font-black uppercase tracking-tight mb-8">
            {project.name}
            <span className="cursor-mark text-electric-cyan font-light">│</span>
          </h1>

          <p className="font-display text-xl md:text-2xl text-electric-cyan max-w-4xl mb-12 leading-relaxed">
            {project.hook}
          </p>

          {/* 5-Column Technical Meta Data-List */}
          <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5 border-t border-hairline-dark pt-8">
            <div className="border-t border-hairline-dark/70 pt-4">
              <dt className="font-mono text-[10px] text-cool-grey uppercase tracking-widest block mb-1">Year</dt>
              <dd className="font-mono text-[12px] leading-relaxed text-crisp-white">
                {project.year || '2026'}
              </dd>
            </div>
            <div className="border-t border-hairline-dark/70 pt-4">
              <dt className="font-mono text-[10px] text-cool-grey uppercase tracking-widest block mb-1">Role</dt>
              <dd className="font-mono text-[12px] leading-relaxed text-crisp-white">
                {project.role || 'Concept, Generative AI, Video Edit & Post'}
              </dd>
            </div>
            <div className="border-t border-hairline-dark/70 pt-4">
              <dt className="font-mono text-[10px] text-cool-grey uppercase tracking-widest block mb-1">Tools</dt>
              <dd className="font-mono text-[12px] leading-relaxed text-crisp-white">
                {project.tools || 'Veo 3.1 · Kling · DaVinci Resolve · Photoshop'}
              </dd>
            </div>
            <div className="border-t border-hairline-dark/70 pt-4">
              <dt className="font-mono text-[10px] text-cool-grey uppercase tracking-widest block mb-1">Production</dt>
              <dd className="font-mono text-[12px] leading-relaxed text-crisp-white">
                {project.production || 'Fully AI'}
              </dd>
            </div>
            <div className="border-t border-hairline-dark/70 pt-4">
              <dt className="font-mono text-[10px] text-cool-grey uppercase tracking-widest block mb-1">Credit</dt>
              <dd className="font-mono text-[12px] leading-relaxed text-crisp-white">
                {project.credit || `${project.brand} · Direct`}
              </dd>
            </div>
          </dl>

          {/* 2-Column Editorial Breakdown: Brief & Process */}
          <div className="mt-14 grid gap-10 md:grid-cols-2 border-t border-hairline-dark pt-10">
            <div>
              <span className="font-mono text-[11px] text-electric-cyan uppercase tracking-wider block mb-3 font-semibold">
                Campaign Brief &amp; Context
              </span>
              <p className="text-cool-grey text-base md:text-lg leading-relaxed font-body">
                {project.briefSummary}
              </p>
            </div>
            <div>
              <span className="font-mono text-[11px] text-electric-cyan uppercase tracking-wider block mb-3 font-semibold">
                AI Generation &amp; Post-Production Pipeline
              </span>
              <p className="text-cool-grey text-base md:text-lg leading-relaxed font-body">
                {project.workflow ||
                  'Prompt architectures engineered for identity permanence and camera momentum. Stitched, paced, and color-graded in DaVinci Resolve with custom Fairlight sound design.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. CINEMATIC MAIN FILM VIEWER WITH SOUND TOGGLE ─── */}
      {primaryVideo && (
        <section className="px-6 py-12 md:px-12 lg:px-16" aria-label="Main Film Presentation">
          <div className="mx-auto w-full max-w-[1600px] mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="mono-label text-electric-cyan">Final Output Film</span>
              <span className="text-cool-grey font-mono text-xs">·</span>
              <span className="text-cool-grey font-mono text-xs">
                {project.ratio === '9:16' ? '9:16 Vertical Cut' : '16:9 Master Cut'}
              </span>
            </div>
            <span className="font-mono text-xs text-cool-grey hidden sm:inline">
              Cinematic Audio Available
            </span>
          </div>

          <div className="relative min-h-[60svh] lg:h-[95svh] w-full overflow-hidden rounded-2xl bg-black border border-hairline-dark flex items-center justify-center">
            {project.ratio === '9:16' && (
              <video
                src={primaryVideo}
                muted
                loop
                playsInline
                autoPlay
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover blur-3xl opacity-25 scale-105"
              />
            )}
            <video
              ref={filmVideoRef}
              src={primaryVideo}
              poster={primaryPoster}
              muted={!isFilmSoundOn}
              loop
              playsInline
              autoPlay
              controls
              className="relative z-10 h-full w-full object-contain"
            />

            {/* Sound Toggle Control (Saklain style) */}
            <button
              type="button"
              onClick={toggleFilmSound}
              aria-pressed={isFilmSoundOn}
              className="absolute bottom-6 right-6 md:right-8 z-30 font-mono flex items-center gap-2.5 text-xs text-crisp-white bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 hover:border-electric-cyan hover:text-electric-cyan transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-electric-cyan" />
              {isFilmSoundOn ? 'Sound On' : 'Sound Off'}
            </button>
          </div>
        </section>
      )}

      {/* ─── 4. FINAL OUTPUTS ─── */}

      {/* A. KESAR BHOG: Version A vs Version B */}
      {project.slug === 'kesar-bhog' && project.versions && (
        <section className="px-6 py-16 md:px-12 lg:px-16" aria-label="Campaign Executions">
          <div className="mx-auto w-full max-w-[1600px]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-hairline-dark pb-6">
              <div>
                <span className="mono-label text-electric-cyan block mb-1">Dual Execution Study</span>
                <h3 className="font-display text-2xl text-crisp-white font-bold">Select Campaign Variant</h3>
              </div>
              <div className="flex gap-3">
                {project.versions.map((ver, idx) => (
                  <button
                    key={ver.label}
                    onClick={() => setActiveVersionTab(idx)}
                    className={`px-6 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                      activeVersionTab === idx
                        ? 'bg-electric-cyan text-ink-navy font-bold shadow-lg shadow-electric-cyan/20'
                        : 'bg-deep-navy text-cool-grey hover:text-crisp-white border border-hairline-dark'
                    }`}
                  >
                    {ver.label}
                  </button>
                ))}
              </div>
            </div>

            {project.versions[activeVersionTab]?.videos.length > 0 && (
              <div className="pt-8">
                <h4 className="mono-label text-electric-cyan mb-6">
                  {project.versions[activeVersionTab].label} — Final Output Film
                </h4>
                <div className="max-w-md mx-auto aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-hairline-dark">
                  <video
                    src={project.versions[activeVersionTab].videos[0].src}
                    poster={project.versions[activeVersionTab].videos[0].poster}
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* B. NIKE: Final Video Spots Only */}
      {project.slug === 'nike' && project.videoVariants && (
        <section className="px-6 py-16 md:px-12 lg:px-16" aria-label="Final Output Films">
          <div className="mx-auto w-full max-w-[1600px]">
            <div className="flex items-center gap-4 mb-8">
              <span className="mono-label text-electric-cyan">Final Output Films</span>
              <div className="flex-1 hairline" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.videoVariants.map((vid) => (
                <div key={vid.src} className="flex flex-col gap-3">
                  <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-hairline-dark">
                    <video src={vid.src} poster={vid.poster} controls playsInline className="w-full h-full object-cover" />
                  </div>
                  <span className="font-mono text-xs text-cool-grey">{vid.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* C. GENERAL PROJECTS: Final Output Films Only */}
      {project.slug !== 'kesar-bhog' && project.slug !== 'nike' && projectVideos.length > 1 && (
        <section className="px-6 py-16 md:px-12 lg:px-16" aria-label="Final Output Films">
          <div className="mx-auto w-full max-w-[1600px]">
            <div className="flex items-center gap-4 mb-8">
              <span className="mono-label text-electric-cyan">Final Output Films</span>
              <div className="flex-1 hairline" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {projectVideos.map((vid) => (
                <div key={vid.src} className="flex flex-col gap-3">
                  <div className={`rounded-2xl overflow-hidden bg-black border border-hairline-dark ${vid.ratio === '16:9' ? 'aspect-video' : 'aspect-[9/16]'}`}>
                    <video src={vid.src} poster={vid.poster} controls playsInline className="w-full h-full object-cover" />
                  </div>
                  <span className="font-mono text-xs text-crisp-white font-medium">{vid.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── 5. NEXT PROJECT TEASER (Matching Saklain / Neevi AI) ─── */}
      {next && (
        <div className="border-t border-hairline-dark mt-24">
          <div className="px-6 pt-20 pb-8 md:px-12 lg:px-16">
            <div className="mx-auto w-full max-w-[1600px] flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-widest text-cool-grey">
                Next Project
              </p>
              <span className="font-mono text-xs text-electric-cyan">
                0{next.order} / 10
              </span>
            </div>
          </div>

          <section className="relative h-[65svh] lg:h-[80svh] w-full overflow-hidden group bg-black">
            {next.heroVideo ? (
              <video
                src={next.heroVideo}
                poster={next.heroImage || next.thumbnail}
                muted
                loop
                playsInline
                autoPlay
                preload="none"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              <Image
                src={next.heroImage || next.thumbnail}
                alt={next.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            )}

            {/* Dark film scrim overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Clickable Full-Card Link */}
            <Link
              href={`/work/${next.slug}`}
              className="absolute inset-0 flex flex-col justify-end px-6 pb-16 md:px-12 lg:px-16 no-underline z-20"
            >
              <div className="mx-auto w-full max-w-[1600px]">
                <p className="font-mono text-xs text-electric-cyan mb-3 uppercase tracking-wider flex items-center gap-2">
                  <span>0{next.order} / 10</span>
                  <span>·</span>
                  <span>{next.brand}</span>
                </p>

                <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-crisp-white font-black uppercase tracking-tight group-hover:text-electric-cyan transition-colors">
                  {next.name} ↗
                </h2>

                <p className="text-cool-grey text-base md:text-lg max-w-2xl mt-4 font-body">
                  {next.hook}
                </p>
              </div>
            </Link>
          </section>
        </div>
      )}
    </article>
  );
}
