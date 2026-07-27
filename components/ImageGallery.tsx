'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/motion';
import { AssetViewer } from '@/components/AssetViewer';
import type { AssetViewerItem } from '@/components/AssetViewer';
import type { ProjectAsset } from '@/lib/projects';

interface ImageGalleryProps {
  assets: ProjectAsset[];
  columns?: 2 | 3;
  title?: string;
}

export function ImageGallery({ assets, columns = 2, title }: ImageGalleryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const prefersReduced = usePrefersReducedMotion();
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  const gridClass = columns === 3
    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
    : 'grid grid-cols-1 md:grid-cols-2 gap-4';

  // Build lightbox items from assets
  const viewerItems: AssetViewerItem[] = assets.map((asset) => ({
    type: 'image' as const,
    src: asset.src,
    alt: asset.alt,
  }));

  return (
    <div ref={ref}>
      {title && (
        <div className="flex items-center gap-4 mb-6">
          <span className="mono-label text-electric-cyan">{title}</span>
          <div className="flex-1 hairline" />
        </div>
      )}

      <div className={gridClass}>
        {assets.map((asset, i) => (
          <motion.button
            key={asset.src}
            type="button"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden bg-deep-navy border border-hairline-dark group cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-electric-cyan focus-visible:outline-offset-2"
            onClick={() => setViewerIndex(i)}
            aria-label={`View full size: ${asset.alt}`}
          >
            <Image
              src={asset.src}
              alt={asset.alt}
              fill
              sizes={columns === 3
                ? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                : '(max-width: 768px) 100vw, 50vw'
              }
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Hover indicator */}
            <div className="absolute inset-0 bg-ink-navy/0 group-hover:bg-ink-navy/30 transition-colors duration-300 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-ink-navy/70 border border-hairline-dark flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-crisp-white">
                  <path d="M3 9h12M9 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      {viewerIndex !== null && (
        <AssetViewer
          items={viewerItems}
          initialIndex={viewerIndex}
          onClose={() => setViewerIndex(null)}
        />
      )}
    </div>
  );
}
