'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import Image from 'next/image';

// ─── Types ─────────────────────────────────────────────────────────

export type AssetViewerItem =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; title: string; poster?: string };

interface AssetViewerProps {
  items: AssetViewerItem[];
  initialIndex?: number;
  onClose: () => void;
}

// ─── Component ─────────────────────────────────────────────────────

export function AssetViewer({ items, initialIndex = 0, onClose }: AssetViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const currentItem = items[currentIndex];
  const hasMultiple = items.length > 1;

  // ─── Navigation ──────────────────────────────────────────────────

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  // ─── Focus trap & keyboard handling ──────────────────────────────

  useEffect(() => {
    // Store previously focused element to restore on close
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Focus the close button on open
    closeButtonRef.current?.focus();

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
      previousFocusRef.current?.focus();
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          if (hasMultiple) goNext();
          break;
        case 'ArrowLeft':
          if (hasMultiple) goPrev();
          break;
        case 'Tab': {
          // Simple focus trap — keep focus within the modal
          const modal = overlayRef.current;
          if (!modal) break;
          const focusable = modal.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
          break;
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, goNext, goPrev, hasMultiple]);

  // ─── Touch swipe support ─────────────────────────────────────────

  const touchStartX = useRef(0);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (!hasMultiple) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 60) {
      if (deltaX < 0) goNext();
      else goPrev();
    }
  }

  // ─── Render ──────────────────────────────────────────────────────

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.type === 'image' ? currentItem.alt : currentItem.title}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={(e) => {
        // Close on overlay background click (not on content)
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />

      {/* Close button */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-ink-navy/80 border border-hairline-dark text-crisp-white hover:bg-electric-cyan hover:text-ink-navy transition-colors"
        aria-label="Close viewer"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-current" strokeWidth="2" strokeLinecap="round">
          <path d="M5 5l10 10M15 5L5 15" />
        </svg>
      </button>

      {/* Navigation arrows */}
      {hasMultiple && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-ink-navy/80 border border-hairline-dark text-crisp-white hover:bg-electric-cyan hover:text-ink-navy transition-colors"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5l-5 5 5 5" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-ink-navy/80 border border-hairline-dark text-crisp-white hover:bg-electric-cyan hover:text-ink-navy transition-colors"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 5l5 5-5 5" />
            </svg>
          </button>
        </>
      )}

      {/* Content */}
      <div className="relative z-40 max-w-[90vw] max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        {currentItem.type === 'image' ? (
          <div className="relative max-w-[90vw] max-h-[85vh]">
            <img
              src={currentItem.src}
              alt={currentItem.alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              draggable={false}
            />
          </div>
        ) : (
          <div className="w-[90vw] max-w-5xl aspect-video bg-black rounded-lg overflow-hidden">
            <video
              src={currentItem.src}
              autoPlay
              controls
              playsInline
              poster={currentItem.poster}
              className="w-full h-full object-contain"
              aria-label={currentItem.title}
            />
          </div>
        )}
      </div>

      {/* Counter */}
      {hasMultiple && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-ink-navy/80 border border-hairline-dark rounded-full">
          <span className="font-mono text-technical text-cool-grey">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      )}
    </div>
  );
}
