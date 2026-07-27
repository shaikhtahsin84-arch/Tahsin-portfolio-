import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: {
    default: 'md tahsin│ — AI Content Creator',
    template: '%s — md tahsin│',
  },
  description: 'AI content creator running the entire production process — concept, generation, edit, and final cut — as a single, tightly controlled discipline. From concept to final cut, powered entirely by AI.',
  keywords: ['AI content creator', 'AI production', 'Md Tahsin', 'portfolio', 'AI campaign', 'video production'],
  authors: [{ name: 'Md Tahsin' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'md tahsin│',
    title: 'md tahsin│ — AI Content Creator',
    description: 'From concept to final cut, powered entirely by AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body bg-ink-navy text-crisp-white antialiased">
        <SmoothScroll>
          <Nav />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
