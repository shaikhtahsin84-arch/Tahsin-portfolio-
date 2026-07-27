import { Hero } from '@/components/Hero';
import { ProjectGrid } from '@/components/ProjectGrid';
import { ImpactStats } from '@/components/ImpactStats';
import { Contact } from '@/components/Contact';
import Link from 'next/link';

const projects = [
  {
    id: 'nike',
    title: 'Nike — Air Jordan',
    slug: 'nike',
    client: 'Air Jordan',
    thumbnail: '/images/nike/assets/product-sheet.png',
    ratio: '16:9' as const,
  },
  {
    id: 'voltas',
    title: 'Voltas',
    slug: 'voltas',
    client: 'Voltas (Tata)',
    thumbnail: '/images/voltas/ac.jpeg',
    ratio: '16:9' as const,
  },
  {
    id: 'mama-earth',
    title: 'Mama Earth',
    slug: 'mama-earth',
    client: 'Mamaearth',
    thumbnail: '/images/mama-earth/mama-earth.png',
    ratio: '9:16' as const,
  },
  {
    id: 'kesar-bhog',
    title: 'Kesar Bhog',
    slug: 'kesar-bhog',
    client: "Kwality Wall's",
    thumbnail: '/images/kesar-bhog/a/product-sheet.png',
    ratio: '9:16' as const,
  },
];

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        
        {/* Featured Work Grid */}
        <section id="work" className="section-padding bg-bg-primary">
          <ProjectGrid projects={projects} />
        </section>
        
        {/* Impact Stats */}
        <ImpactStats />

        {/* About Preview */}
        <section className="section-padding bg-bg-secondary" aria-label="About preview">
          <div className="container-wide">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="mono-label text-electric-cyan">About</span>
                <div className="flex-1 hairline" />
              </div>

              <p className="font-display text-h1 text-crisp-white leading-snug mb-6">
                I run the entire production process — concept, generation, edit, and final cut — as a single, tightly controlled discipline<span className="cursor-mark">│</span>
              </p>

              <p className="text-cool-grey text-lg leading-relaxed mb-8">
                I&apos;m genuinely passionate about AI content creation and digital media. I often spend hours refining a single AI prompt because I believe the smallest details create the biggest visual impact.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-body font-medium text-electric-cyan hover:text-crisp-white transition-colors duration-200 group no-underline"
              >
                More about me
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="stroke-current transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact */}
        <Contact />
      </main>
    </>
  );
}
