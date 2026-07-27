'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/motion';

interface VideoEmbedProps {
  src: string;
  poster?: string;
  title: string;
  ratio?: '16:9' | '9:16';
}

export function VideoEmbed({ src, poster, title, ratio = '16:9' }: VideoEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const prefersReduced = usePrefersReducedMotion();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);

  // Lazy-load: only render <video> DOM when scrolled near (within 200px margin)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect(); // only need to trigger once
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const aspectClass = ratio === '9:16' ? 'aspect-[9/16] md:w-[450px] md:mx-auto' : 'aspect-video';

  return (
    <motion.div
      ref={ref}
      initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative w-full rounded-lg overflow-hidden bg-deep-navy border border-hairline-dark shadow-xl ${ratio === '9:16' ? 'md:max-w-md md:mx-auto' : ''}`}
    >
      <div className={`relative ${ratio === '9:16' ? 'aspect-[9/16]' : 'aspect-video'} bg-black`}>
        {isNearViewport ? (
          <video
            className="w-full h-full object-cover"
            controls
            preload="none"
            poster={poster}
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            aria-label={title}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          /* Placeholder before lazy-load triggers */
          <div className="w-full h-full flex items-center justify-center bg-deep-navy">
            {poster && (
              <img src={poster} alt={title} className="w-full h-full object-cover opacity-60" />
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-ink-navy/80 border border-hairline-dark flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-electric-cyan ml-1">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Video title bar */}
      <div className="px-4 py-3 border-t border-hairline-dark flex items-center justify-between bg-ink-navy">
        <div className="flex items-center gap-3">
          <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-electric-cyan animate-pulse' : 'bg-cool-grey'}`} />
          <span className="font-mono text-technical uppercase tracking-wider text-cool-grey">{title}</span>
        </div>
        <span className="font-mono text-[10px] text-cool-grey/60 uppercase">HD Video</span>
      </div>
    </motion.div>
  );
}
