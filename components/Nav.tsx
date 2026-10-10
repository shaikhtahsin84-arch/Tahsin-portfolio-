'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/#work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

const instagramUrl = 'https://www.instagram.com/aibyfusion/';

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-ink-navy/80 border-b border-hairline-dark"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-wide flex items-center justify-between h-20 px-6 md:px-12 lg:px-20">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display font-bold text-xl tracking-[-0.02em] text-crisp-white hover:text-crisp-white no-underline"
          aria-label="md tahsin — home"
        >
          md tahsin<span className="cursor-mark text-electric-cyan">│</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 mr-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-[13px] font-medium tracking-[0.05em] text-cool-grey hover:text-crisp-white transition-colors duration-200 no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-electric-cyan/40 text-electric-cyan rounded-full font-body text-[13px] font-medium hover:bg-electric-cyan hover:text-ink-navy transition-all duration-300 no-underline"
          >
            <span>Instagram</span>
            <span className="px-1.5 py-0.5 rounded-full bg-electric-cyan/20 text-[10px] font-mono font-bold">10K</span>
          </a>
          <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-crisp-white text-bg-primary rounded-full font-body text-[13px] font-semibold hover:bg-electric-cyan transition-colors duration-300 group no-underline">
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="stroke-current transition-transform duration-200 group-hover:translate-x-1">
              <path d="M2.5 7h9m-4-4 4 4-4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] w-7 group"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className={`h-[2px] w-full bg-crisp-white transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`h-[2px] w-full bg-crisp-white transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`h-[2px] w-full bg-crisp-white transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden bg-deep-navy border-t border-hairline-dark"
          >
            <ul className="flex flex-col py-6 px-6">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 font-display text-h2 text-crisp-white hover:text-electric-cyan transition-colors no-underline"
                  >
                    <span className="mono-label mr-3">0{i + 1}</span>
                    {link.label}
                  </Link>
                  {i < navLinks.length - 1 && <div className="hairline" />}
                </li>
              ))}
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 font-display text-h2 text-crisp-white hover:text-electric-cyan transition-colors no-underline"
                >
                  <span className="mono-label mr-3">04</span>
                  Instagram (@aibyfusion · 10K) ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
