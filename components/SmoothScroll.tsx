'use client';

import { ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/lib/motion';

export function SmoothScroll({ children }: { children: ReactNode }) {
  const prefersReduced = usePrefersReducedMotion();

  // Lenis is optional — if not installed or reduced motion preferred, render children directly
  if (prefersReduced) return <>{children}</>;

  // For now we use native smooth scrolling via CSS
  // Lenis can be added once `lenis/react` is installed
  return <>{children}</>;
}
