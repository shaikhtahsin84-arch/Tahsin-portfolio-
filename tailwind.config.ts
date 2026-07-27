import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ink-navy': '#0A1128',
        'deep-navy': '#131B36',
        'electric-cyan': '#2FE1FF',
        'crisp-white': '#FFFFFF',
        'cool-grey': '#7C8798',
        'hairline-light': '#E4E8F0',
        'hairline-dark': '#1F2940',
        'bg-primary': '#0A1128',
        'bg-secondary': '#131B36',
        'bg-card': '#131B36',
        'bg-card-hover': '#1A2447',
      },
      fontFamily: {
        display: ['var(--font-clash-display)', 'sans-serif'],
        body: ['var(--font-general-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 10vw, 5rem)', { lineHeight: '1.05', fontWeight: '700' }],
        'display-l': ['clamp(2rem, 5vw, 2.5rem)', { lineHeight: '1.1', fontWeight: '600' }],
        'h1': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['1.5rem', { lineHeight: '1.25', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.8125rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.04em' }],
        'technical': ['0.75rem', { lineHeight: '1.4', fontWeight: '400', letterSpacing: '0.04em' }],
      },
      gridTemplateColumns: {
        'bento': 'repeat(6, 1fr)',
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
