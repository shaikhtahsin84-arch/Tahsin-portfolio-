import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Md Tahsin — 18-year-old AI content creator based in New Delhi. Full end-to-end AI production, from concept to final cut.',
};

const tools = [
  'Claude / ChatGPT',
  'Google Flow (Veo 3.1) / Runway',
  'Higgsfield / Freepik',
  'Photoshop / DaVinci Resolve',
];

const projects = [
  { name: 'Voltas AC', desc: 'AI-generated brand campaign' },
  { name: 'Air Jordan (Nike)', desc: 'AI-generated shoe campaign' },
  { name: 'Mama Earth Skin Care', desc: 'AI-generated brand campaign' },
  { name: 'Kesar Bhog Ice Cream', desc: 'AI-generated brand campaign' },
];

export default function AboutPage() {
  return (
    <article className="pt-32">
      {/* Header */}
      <section className="section-padding pb-0" aria-label="Introduction">
        <div className="container-wide max-w-3xl">
          <span className="mono-label text-electric-cyan block mb-6">About</span>
          <h1 className="font-display text-display-xl text-crisp-white mb-6">
            Md Tahsin<span className="cursor-mark">│</span>
          </h1>
          <p className="font-display text-h2 text-cool-grey mb-2">
            AI Content Creator
          </p>
          <p className="text-cool-grey text-sm mb-8">
            18 · New Delhi, Saket, India
          </p>

          <blockquote className="border-l-2 border-electric-cyan pl-6 my-10">
            <p className="font-body text-xl text-crisp-white italic leading-relaxed">
              &ldquo;From concept to final cut, powered entirely by AI.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding-sm" aria-label="Biography">
        <div className="container-wide max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label text-electric-cyan">Who I Am</span>
            <div className="flex-1 hairline" />
          </div>
          <p className="text-crisp-white text-lg leading-relaxed mb-6">
            I&apos;m genuinely passionate about AI content creation and digital media. I&apos;m someone who learns fast, adapts quickly, and puts in the work — I often spend hours refining a single AI prompt because I believe the smallest details create the biggest visual impact.
          </p>
        </div>
      </section>

      <div className="container-wide max-w-3xl px-6 md:px-12 lg:px-20"><div className="hairline" /></div>

      {/* Strength */}
      <section className="section-padding-sm" aria-label="Strengths">
        <div className="container-wide max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label text-electric-cyan">Core Strength</span>
            <div className="flex-1 hairline" />
          </div>
          <p className="text-crisp-white text-lg leading-relaxed">
            End-to-end execution: I can take a project from concept to a polished, campaign-ready final product using AI.
          </p>
        </div>
      </section>

      <div className="container-wide max-w-3xl px-6 md:px-12 lg:px-20"><div className="hairline" /></div>

      {/* Tools */}
      <section className="section-padding-sm" aria-label="Tools and software">
        <div className="container-wide max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label text-electric-cyan">Tools &amp; Software</span>
            <div className="flex-1 hairline" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools.map((tool) => (
              <div
                key={tool}
                className="p-4 rounded-lg border border-hairline-dark bg-deep-navy/50 hover:border-electric-cyan/30 transition-colors duration-300"
              >
                <span className="font-mono text-technical uppercase tracking-wider text-electric-cyan block mb-1">
                  {tool.split(' / ')[0]}
                </span>
                {tool.includes('/') && (
                  <span className="text-cool-grey text-sm">
                    {tool.split(' / ').slice(1).join(' / ')}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-wide max-w-3xl px-6 md:px-12 lg:px-20"><div className="hairline" /></div>

      {/* Portfolio Projects */}
      <section className="section-padding-sm" aria-label="Portfolio projects">
        <div className="container-wide max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label text-electric-cyan">Portfolio Projects</span>
            <div className="flex-1 hairline" />
          </div>
          <p className="text-cool-grey text-sm mb-6 italic">
            Self-directed campaigns built to demonstrate end-to-end AI production capability (spec/portfolio work, not paid client engagements):
          </p>
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex items-start gap-4 p-4 rounded-lg border border-hairline-dark bg-deep-navy/50"
              >
                <span className="w-2 h-2 rounded-full bg-electric-cyan mt-2 shrink-0" />
                <div>
                  <span className="font-display font-semibold text-crisp-white">{project.name}</span>
                  <span className="text-cool-grey text-sm block">{project.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-wide max-w-3xl px-6 md:px-12 lg:px-20"><div className="hairline" /></div>

      {/* Education */}
      <section className="section-padding-sm" aria-label="Education">
        <div className="container-wide max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label text-electric-cyan">Education</span>
            <div className="flex-1 hairline" />
          </div>
          <div className="p-4 rounded-lg border border-hairline-dark bg-deep-navy/50">
            <span className="font-display font-semibold text-crisp-white block mb-1">
              30-Hour Video Editing Course
            </span>
            <span className="text-cool-grey text-sm">Editing Skool (USA-based)</span>
          </div>
        </div>
      </section>

      <div className="container-wide max-w-3xl px-6 md:px-12 lg:px-20"><div className="hairline" /></div>

      {/* Career Goal */}
      <section className="section-padding-sm" aria-label="Career goal">
        <div className="container-wide max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label text-electric-cyan">Career Goal</span>
            <div className="flex-1 hairline" />
          </div>
          <p className="text-crisp-white text-lg leading-relaxed">
            Looking to join a top brand&apos;s AI content team. Open to both full-time and freelance opportunities.
          </p>
        </div>
      </section>
    </article>
  );
}
