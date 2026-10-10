'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/motion';

/**
 * Check if the user is on a slow connection or has data-saver enabled.
 * Returns true if video should NOT be loaded.
 */
function shouldSkipVideo(): boolean {
  if (typeof navigator === 'undefined') return false;
  const conn = (navigator as any).connection;
  if (!conn) return false;
  if (conn.saveData) return true;
  if (conn.effectiveType === '2g' || conn.effectiveType === 'slow-2g' || conn.effectiveType === '3g') return true;
  return false;
}

export function Hero() {
  const prefersReduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [loadVideo, setLoadVideo] = useState(false);

  // Decide whether to load video on mount (client only)
  useEffect(() => {
    setLoadVideo(!shouldSkipVideo() && !prefersReduced);
  }, [prefersReduced]);

  // IntersectionObserver: pause video when hero scrolls out of view, resume when it re-enters
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { /* autoplay blocked — silent fail */ });
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [loadVideo]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex flex-col justify-center section-padding pt-32 overflow-hidden"
      aria-label="Hero"
    >
      {/* Video Background */}
      {loadVideo ? (
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/voltas/living-room.png"
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src="/videos/voltas.mp4" type="video/mp4" />
          </video>
          {/* Dark gradient scrim for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(10,17,40,0.55) 0%, rgba(10,17,40,0.85) 100%)',
            }}
          />
        </div>
      ) : (
        /* Static fallback for slow connections / reduced motion */
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/voltas/living-room.png')" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(10,17,40,0.7) 0%, rgba(10,17,40,0.92) 100%)',
            }}
          />
        </div>
      )}

      <div className="container-wide relative z-10">
        {/* Role label & Viral badge */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          <span className="mono-label text-electric-cyan">FULL END-TO-END AI PRODUCTION</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-mono font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-pulse" />
            1M+ Viral Video Views
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-display-xl font-display font-bold leading-[1.05] tracking-tight text-crisp-white mb-8 max-w-5xl"
        >
          From concept to final cut, powered entirely by AI<span className="cursor-mark text-display-xl">│</span>
        </motion.h1>

        {/* Action Button */}
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-6"
        >
          <a href="#work" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-crisp-white text-bg-primary rounded-full font-body font-semibold hover:bg-electric-cyan transition-colors duration-300 group no-underline">
            View the Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="stroke-current transition-transform duration-200 group-hover:translate-x-1">
              <path d="M2.5 7h9m-4-4 4 4-4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/aibyfusion/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-electric-cyan/60 text-electric-cyan rounded-full font-body font-semibold hover:bg-electric-cyan hover:text-bg-primary transition-colors duration-300 group no-underline"
          >
            <span>Instagram (@aibyfusion)</span>
            <span className="px-2 py-0.5 rounded-full bg-electric-cyan/20 text-xs font-mono font-bold">10K</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="stroke-current transition-transform duration-200 group-hover:translate-x-1">
              <path d="M4 10l6-6M6 4h4v4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
