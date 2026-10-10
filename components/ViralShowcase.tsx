'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { usePrefersReducedMotion } from '@/lib/motion';

interface ViralItem {
  id: string;
  title: string;
  views: string;
  category: string;
  src: string;
  poster: string;
  aspect: '9:16' | '16:9';
  description: string;
  badge?: string;
}

const viralVideos: ViralItem[] = [
  {
    id: 'viral-1m',
    title: 'Viral Reel — 1 Million+ Views',
    views: '1,000,000+ Views',
    category: 'DaVinci Resolve Edit',
    src: '/videos/viral-video-1m.mp4',
    poster: '/images/instagram/viral-video-thumb.jpg',
    aspect: '9:16',
    badge: '1M+ Viral Hit',
    description: 'Breakthrough viral reel crossing over 1 Million organic views on Instagram. Precision edited, paced, and sound-designed in DaVinci Resolve for peak audience retention.',
  },
  {
    id: 'big-budget',
    title: 'Big Budget Commercial Breakdown',
    views: '10,000+ Views',
    category: 'DaVinci Resolve Edit',
    src: '/videos/instagram-big-budget.mp4',
    poster: '/images/instagram/big-budget-thumb.jpg',
    aspect: '16:9',
    badge: 'Editorial Reel',
    description: 'Human-edited video essay crafted in DaVinci Resolve analyzing high-production commercial formats and visual direction.',
  },
  {
    id: 'master-in-one',
    title: 'Master In One — Pacing Study',
    views: '10,000+ Views',
    category: 'DaVinci Resolve Edit',
    src: '/videos/instagram-master-in-one.mp4',
    poster: '/images/instagram/master-in-one-thumb.jpg',
    aspect: '9:16',
    description: 'Short-form reel cut and color-graded in DaVinci Resolve exploring dynamic visual flow and musical beat timing.',
  },
  {
    id: 'more-money',
    title: 'Production & Media Edit',
    views: '10,000+ Views',
    category: 'DaVinci Resolve Edit',
    src: '/videos/instagram-more-money.mp4',
    poster: '/images/instagram/more-money-thumb.jpg',
    aspect: '9:16',
    description: 'Fast-paced narrative edit crafted in DaVinci Resolve focusing on crisp cuts and engaging storytelling.',
  },
  {
    id: 'reliable',
    title: 'Editorial Craft & Match Cuts',
    views: '10,000+ Views',
    category: 'DaVinci Resolve Edit',
    src: '/videos/instagram-reliable.mp4',
    poster: '/images/instagram/reliable-thumb.jpg',
    aspect: '9:16',
    description: 'Dynamic video edit showcasing match-cuts and audio sync in DaVinci Resolve.',
  },
];

export function ViralShowcase() {
  const [activeItem, setActiveItem] = useState<ViralItem>(viralVideos[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const prefersReduced = usePrefersReducedMotion();

  // Reset video playback when switching selected reel
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [activeItem]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section
      ref={sectionRef}
      id="viral-videos"
      className="section-padding bg-bg-secondary relative overflow-hidden"
      aria-label="Instagram Video Editing Lab"
    >
      {/* Background radial accent glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-electric-cyan/5 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="mono-label text-electric-cyan">Video Editing &amp; Social Reach</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-mono font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-electric-cyan animate-ping" />
                DaVinci Resolve Edits (Non-AI)
              </span>
            </div>
            <h2 className="text-display-l font-display font-bold text-crisp-white tracking-tight">
              Instagram Reels &amp; Editorial Edits<span className="cursor-mark">│</span>
            </h2>
            <p className="text-cool-grey font-body text-base md:text-lg max-w-2xl mt-3">
              These reels are hand-crafted and edited in <strong className="text-crisp-white">DaVinci Resolve</strong> (human video editing, not AI-generated). Highlighting pacing, audio design, and audience retention — with <strong className="text-electric-cyan">1 Million+ views</strong> on the breakthrough hit and 10k views across editorial releases.
            </p>
          </div>

          {/* Social Proof Stats Bar */}
          <div className="flex flex-wrap items-center gap-6 p-4 rounded-xl bg-ink-navy/70 border border-hairline-dark backdrop-blur-md">
            <div>
              <div className="font-display font-bold text-2xl md:text-3xl text-crisp-white tracking-tight">
                1M+
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-cool-grey">
                Viral Reel Peak
              </div>
            </div>
            <div className="h-8 w-px bg-hairline-dark" />
            <a
              href="https://www.instagram.com/aibyfusion/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline group"
            >
              <div className="font-display font-bold text-2xl md:text-3xl text-electric-cyan tracking-tight group-hover:underline">
                10K+
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-cool-grey">
                Instagram Followers ↗
              </div>
            </a>
            <div className="h-8 w-px bg-hairline-dark" />
            <div>
              <div className="font-display font-bold text-2xl md:text-3xl text-crisp-white tracking-tight">
                10K
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-cool-grey">
                Avg. Reel Views
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Spotlight Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Main Player */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-center"
          >
            <div className="w-full max-w-lg relative rounded-2xl overflow-hidden bg-ink-navy border border-hairline-dark shadow-2xl group">
              {/* Aspect Ratio Container */}
              <div
                onClick={togglePlay}
                className={`relative cursor-pointer ${
                  activeItem.aspect === '16:9' ? 'aspect-video' : 'aspect-[9/16]'
                } w-full bg-black flex items-center justify-center`}
              >
                <video
                  ref={videoRef}
                  src={activeItem.src}
                  poster={activeItem.poster}
                  playsInline
                  loop
                  muted={isMuted}
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-cover"
                />

                {/* Ambient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-ink-navy/80 backdrop-blur-md border border-electric-cyan/40 text-electric-cyan font-mono text-xs font-semibold tracking-wider uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />
                    {activeItem.badge || 'Viral Content'}
                  </span>

                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-ink-navy/80 border border-hairline-dark text-crisp-white hover:text-electric-cyan pointer-events-auto transition-colors"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Center Play/Pause Indicator on hover/pause */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30 backdrop-blur-[2px]">
                    <div className="w-20 h-20 rounded-full bg-electric-cyan/90 text-bg-primary flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Bottom Video Meta Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-crisp-white font-display font-semibold text-base md:text-lg">
                      @aibyfusion
                    </span>
                    <span className="text-electric-cyan text-xs">✓ 10K Community</span>
                  </div>
                  <h3 className="text-crisp-white font-body font-medium text-sm md:text-base leading-snug drop-shadow-md">
                    {activeItem.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2 text-cool-grey text-xs font-mono">
                    <span className="text-electric-cyan font-bold">{activeItem.views}</span>
                    <span>•</span>
                    <span>{activeItem.category}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Control Bar */}
              <div className="p-4 bg-ink-navy border-t border-hairline-dark flex items-center justify-between">
                <button
                  onClick={togglePlay}
                  className="inline-flex items-center gap-2 text-crisp-white hover:text-electric-cyan font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  {isPlaying ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                      Pause Reel
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Play Reel
                    </>
                  )}
                </button>

                <span className="font-mono text-xs text-electric-cyan">
                  {activeItem.views}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Playlist / Reel Selector */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-3"
          >
            <div className="mb-2">
              <span className="font-mono text-xs text-cool-grey uppercase tracking-widest block">
                Select Video to Watch ({viralVideos.length})
              </span>
            </div>

            {viralVideos.map((item) => {
              const isCurrent = item.id === activeItem.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                    isCurrent
                      ? 'bg-deep-navy/90 border-electric-cyan shadow-lg shadow-electric-cyan/5'
                      : 'bg-deep-navy/40 border-hairline-dark hover:border-hairline-light hover:bg-deep-navy/70'
                  }`}
                >
                  {/* Thumbnail with aspect badge */}
                  <div className="relative w-20 h-24 rounded-lg overflow-hidden shrink-0 bg-ink-navy border border-hairline-dark">
                    <Image
                      src={item.poster}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    {isCurrent && (
                      <div className="absolute inset-0 flex items-center justify-center bg-electric-cyan/20">
                        <span className="w-2.5 h-2.5 rounded-full bg-electric-cyan animate-ping" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-electric-cyan">
                        {item.category}
                      </span>
                      {item.badge && (
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase bg-electric-cyan/20 text-electric-cyan">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h4 className={`font-display text-base font-semibold leading-snug truncate ${
                      isCurrent ? 'text-crisp-white' : 'text-crisp-white/80'
                    }`}>
                      {item.title}
                    </h4>

                    <p className="text-cool-grey text-xs line-clamp-1 mt-1 font-body">
                      {item.description}
                    </p>

                    <div className="mt-2 flex items-center gap-2 font-mono text-[11px] text-electric-cyan font-medium">
                      <span>{item.views}</span>
                      <span className="text-cool-grey">•</span>
                      <span className="text-cool-grey">{item.aspect}</span>
                    </div>
                  </div>

                  {/* Active Arrow indicator */}
                  <div className="shrink-0 text-cool-grey">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`stroke-current transition-transform duration-200 ${
                        isCurrent ? 'text-electric-cyan translate-x-1' : ''
                      }`}
                    >
                      <path d="M6 12l4-4-4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
