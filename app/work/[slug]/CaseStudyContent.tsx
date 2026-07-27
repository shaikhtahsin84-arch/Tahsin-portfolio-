'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImageGallery } from '@/components/ImageGallery';
import { VideoEmbed } from '@/components/VideoEmbed';
import { ProjectNav } from '@/components/ProjectNav';
import { AssetViewer } from '@/components/AssetViewer';
import type { AssetViewerItem } from '@/components/AssetViewer';
import type { Project } from '@/lib/projects';

interface Props {
  project: Project;
  prev: Project | null;
  next: Project | null;
}

export function CaseStudyContent({ project, prev, next }: Props) {
  // Tabs for Kesar Bhog (Version A / Version B)
  const [activeVersionTab, setActiveVersionTab] = useState<number>(0);

  // Tabs for Nike (Carousel / Static / Video)
  const [activeNikeTab, setActiveNikeTab] = useState<'carousel' | 'static' | 'video'>('carousel');
  const [activeNikeVariant, setActiveNikeVariant] = useState<number>(0);

  // Lightbox state for video ads
  const [videoViewerItem, setVideoViewerItem] = useState<AssetViewerItem[] | null>(null);

  return (
    <article className="pt-32">
      {/* Hero Header */}
      <section className="section-padding pb-12" aria-label="Project Hero">
        <div className="container-wide">
          <div className="flex items-center gap-4 mb-6">
            <span className="mono-label text-electric-cyan">Project 0{project.order}</span>
            <span className="text-cool-grey">/</span>
            <span className="mono-label text-cool-grey">{project.brand}</span>
          </div>

          <h1 className="font-display text-display-xl text-crisp-white mb-6">
            {project.name}<span className="cursor-mark">│</span>
          </h1>

          <p className="font-display text-h2 text-electric-cyan max-w-3xl mb-8 leading-snug">
            {project.hook}
          </p>
        </div>
      </section>

      {/* Main Hero Image */}
      <section className="px-6 md:px-12 lg:px-20 mb-16">
        <div className="container-wide">
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-deep-navy border border-hairline-dark">
            <Image
              src={project.heroImage || project.thumbnail}
              alt={`${project.name} campaign hero image`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Context / Brief Summary */}
      <section className="section-padding-sm" aria-label="Campaign Brief">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="mono-label text-electric-cyan">Campaign Brief &amp; Context</span>
            <div className="flex-1 hairline" />
          </div>
          <div className="p-8 rounded-xl bg-deep-navy/60 border border-hairline-dark">
            <p className="text-crisp-white text-lg leading-relaxed">
              {project.briefSummary}
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT TYPE 1: KESAR BHOG (Two Executions - A & B) */}
      {project.slug === 'kesar-bhog' && project.versions && (
        <section className="section-padding-sm" aria-label="Campaign Executions">
          <div className="container-wide max-w-6xl">
            <div className="flex items-center justify-between gap-4 mb-8">
              <span className="mono-label text-electric-cyan">Executions</span>
              <div className="flex gap-2">
                {project.versions.map((ver, idx) => (
                  <button
                    key={ver.label}
                    onClick={() => setActiveVersionTab(idx)}
                    className={`px-6 py-2.5 rounded-full font-mono text-technical uppercase tracking-wider transition-all duration-300 ${
                      activeVersionTab === idx
                        ? 'bg-electric-cyan text-ink-navy font-semibold'
                        : 'bg-deep-navy text-cool-grey hover:text-crisp-white border border-hairline-dark'
                    }`}
                  >
                    {ver.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Execution Content */}
            {project.versions[activeVersionTab] && (
              <div className="space-y-12">
                <div>
                  <h3 className="mono-label text-cool-grey mb-6">
                    {project.versions[activeVersionTab].label} — Asset Development &amp; Character Sheets
                  </h3>
                  <ImageGallery assets={project.versions[activeVersionTab].assets} columns={3} />
                </div>

                <div className="pt-8">
                  <h3 className="mono-label text-electric-cyan mb-6">
                    {project.versions[activeVersionTab].label} — Final Output Film
                  </h3>
                  {project.versions[activeVersionTab].videos.map((vid) => (
                    <VideoEmbed key={vid.src} src={vid.src} poster={vid.poster} title={vid.title} ratio="9:16" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* PROJECT TYPE 2: NIKE (Concept Assets + 3 Format Tabs) */}
      {project.slug === 'nike' && (
        <>
          {/* Concept Development */}
          {project.conceptAssets && (
            <section className="section-padding-sm" aria-label="Concept Development">
              <div className="container-wide max-w-6xl">
                <div className="flex items-center gap-4 mb-8">
                  <span className="mono-label text-electric-cyan">01. Concept Development</span>
                  <div className="flex-1 hairline" />
                </div>
                <ImageGallery assets={project.conceptAssets} columns={2} />
              </div>
            </section>
          )}

          {/* Format Tabs (Carousel Ads, Static Ads, Video Ads) */}
          <section className="section-padding-sm" aria-label="Campaign Formats">
            <div className="container-wide max-w-6xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="mono-label text-electric-cyan">02. Format Deliverables</span>
                <div className="flex-1 hairline" />
              </div>

              {/* Format selection tabs */}
              <div className="flex flex-wrap gap-3 mb-10 border-b border-hairline-dark pb-4">
                <button
                  onClick={() => { setActiveNikeTab('carousel'); setActiveNikeVariant(0); }}
                  className={`px-6 py-3 rounded-lg font-mono text-technical uppercase tracking-wider transition-all duration-300 ${
                    activeNikeTab === 'carousel'
                      ? 'bg-electric-cyan text-ink-navy font-semibold'
                      : 'bg-deep-navy text-cool-grey hover:text-crisp-white border border-hairline-dark'
                  }`}
                >
                  Carousel Ads (3 Variants)
                </button>
                <button
                  onClick={() => { setActiveNikeTab('static'); setActiveNikeVariant(0); }}
                  className={`px-6 py-3 rounded-lg font-mono text-technical uppercase tracking-wider transition-all duration-300 ${
                    activeNikeTab === 'static'
                      ? 'bg-electric-cyan text-ink-navy font-semibold'
                      : 'bg-deep-navy text-cool-grey hover:text-crisp-white border border-hairline-dark'
                  }`}
                >
                  Static Ads (3 Variants)
                </button>
                <button
                  onClick={() => { setActiveNikeTab('video'); setActiveNikeVariant(0); }}
                  className={`px-6 py-3 rounded-lg font-mono text-technical uppercase tracking-wider transition-all duration-300 ${
                    activeNikeTab === 'video'
                      ? 'bg-electric-cyan text-ink-navy font-semibold'
                      : 'bg-deep-navy text-cool-grey hover:text-crisp-white border border-hairline-dark'
                  }`}
                >
                  Video Ads (3 Executions)
                </button>
              </div>

              {/* Tab 1: Carousel Ads — uses ImageGallery which now has built-in lightbox */}
              {activeNikeTab === 'carousel' && project.carouselVariants && (
                <div>
                  <div className="flex gap-2 mb-6">
                    {project.carouselVariants.map((v, i) => (
                      <button
                        key={v.label}
                        onClick={() => setActiveNikeVariant(i)}
                        className={`px-4 py-2 rounded-md font-mono text-xs uppercase ${
                          activeNikeVariant === i
                            ? 'bg-crisp-white text-ink-navy font-semibold'
                            : 'bg-deep-navy/80 text-cool-grey border border-hairline-dark hover:text-crisp-white'
                        }`}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                  <ImageGallery assets={project.carouselVariants[activeNikeVariant].images} columns={3} />
                </div>
              )}

              {/* Tab 2: Static Ads — uses ImageGallery which now has built-in lightbox */}
              {activeNikeTab === 'static' && project.staticVariants && (
                <div>
                  <div className="flex gap-2 mb-6">
                    {project.staticVariants.map((v, i) => (
                      <button
                        key={v.label}
                        onClick={() => setActiveNikeVariant(i)}
                        className={`px-4 py-2 rounded-md font-mono text-xs uppercase ${
                          activeNikeVariant === i
                            ? 'bg-crisp-white text-ink-navy font-semibold'
                            : 'bg-deep-navy/80 text-cool-grey border border-hairline-dark hover:text-crisp-white'
                        }`}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                  <ImageGallery assets={project.staticVariants[activeNikeVariant].images} columns={3} />
                </div>
              )}

              {/* Tab 3: Video Ads — inline player + click-to-lightbox */}
              {activeNikeTab === 'video' && project.videoVariants && (
                <div className="space-y-8">
                  {project.videoVariants.map((vid) => (
                    <div key={vid.src}>
                      <VideoEmbed src={vid.src} poster={vid.poster} title={vid.title} ratio="9:16" />
                      <button
                        onClick={() =>
                          setVideoViewerItem([
                            { type: 'video', src: vid.src, title: vid.title, poster: vid.poster },
                          ])
                        }
                        className="mt-3 px-4 py-2 rounded-md bg-deep-navy border border-hairline-dark text-cool-grey hover:text-crisp-white hover:border-electric-cyan/30 font-mono text-xs uppercase tracking-wider transition-all duration-300"
                      >
                        ↗ Open full screen
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* PROJECT TYPE 3 & 4: MAMA EARTH & VOLTAS (Standard Single Execution) */}
      {project.slug !== 'kesar-bhog' && project.slug !== 'nike' && (
        <>
          {/* Supporting Assets — ImageGallery now has built-in lightbox */}
          {project.assets && (
            <section className="section-padding-sm" aria-label="Supporting Assets">
              <div className="container-wide max-w-6xl">
                <div className="flex items-center gap-4 mb-8">
                  <span className="mono-label text-electric-cyan">Character &amp; Production Assets</span>
                  <div className="flex-1 hairline" />
                </div>
                <ImageGallery assets={project.assets} columns={3} />
              </div>
            </section>
          )}

          {/* Final Video Output */}
          {project.videos && project.videos.length > 0 && (
            <section className="section-padding-sm" aria-label="Final Video Output">
              <div className="container-wide max-w-5xl">
                <div className="flex items-center gap-4 mb-8">
                  <span className="mono-label text-electric-cyan">Final Output Film</span>
                  <div className="flex-1 hairline" />
                </div>
                {project.videos.map((vid) => (
                  <VideoEmbed key={vid.src} src={vid.src} poster={vid.poster} title={vid.title} ratio={project.slug === 'mama-earth' ? '9:16' : '16:9'} />
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {/* Video Lightbox (shared) */}
      {videoViewerItem && (
        <AssetViewer
          items={videoViewerItem}
          initialIndex={0}
          onClose={() => setVideoViewerItem(null)}
        />
      )}

      <div className="mt-20">
        <ProjectNav prev={prev} next={next} />
      </div>
    </article>
  );
}
