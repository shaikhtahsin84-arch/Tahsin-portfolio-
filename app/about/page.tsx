import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Md Tahsin',
  description: 'Md Tahsin — AI Content Creator & Creative Technologist based in New Delhi. End-to-end AI advertising, video editing, and generative workflows.',
};

const experience = [
  {
    role: 'Freelance AI Content Creator',
    company: 'Self-Employed',
    period: '9 months',
    highlights: [
      'Independently handle AI-generated video and image content end-to-end — concept, scripting, AI generation, and post-production for brand campaigns.',
      'Build commercial campaigns and film concepts with Google Flow, Freepik, Higgsfield, and Kling, finished in Premiere Pro and DaVinci Resolve.',
      'Self-taught the full production pipeline and built AI Fusion (@aibyfusion), a personal content brand with 10K+ followers and 1M+ views.',
    ],
  },
  {
    role: 'AI Image Generation Support',
    company: 'Hairan Studio',
    period: 'Client Engagement',
    highlights: [
      'Support Hairan Studio, an AI-native creative studio, with basic AI image generation for brand and product visuals.',
      'Turned creative briefs into robust prompt architectures and delivered finished broadcast-grade visuals.',
    ],
  },
  {
    role: 'Video Editor',
    company: 'Freelance',
    period: '3 months',
    highlights: [
      'Hands-on freelance video editing experience, the foundational starting point that led into AI-generated advertising production.',
      'Edited video in Premiere Pro, After Effects, and DaVinci Resolve, building the pacing, rhythm, and color grading skills now powering AI ad workflows.',
    ],
  },
];

const toolCategories = [
  {
    category: 'Generative AI & Video Models',
    items: ['Google Flow (Veo 3.1)', 'Kling', 'Wan', 'Nano Banana', 'Freepik', 'Higgsfield', 'Midjourney', 'Topaz Video AI', 'ElevenLabs', 'Suno'],
  },
  {
    category: 'Post-Production & Video Editing',
    items: ['DaVinci Resolve (Color & Fairlight)', 'Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Photoshop'],
  },
  {
    category: 'Reasoning & Script Development',
    items: ['Claude', 'ChatGPT'],
  },
];

const skills = [
  {
    title: 'Generative AI',
    desc: 'Text-to-video, image-to-video, prompt engineering, multimodal AI workflows, AI workflow automation.',
  },
  {
    title: 'Film & Visual Craft',
    desc: 'AI filmmaking, brand films, creative direction, art direction, concept development, storyboarding, post-production, colour grading, sound design, visual storytelling.',
  },
];

export default function AboutPage() {
  return (
    <article className="pt-32 pb-24">
      {/* Header */}
      <section className="section-padding pb-0" aria-label="Introduction">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="mono-label text-electric-cyan">Profile</span>
            <span className="text-cool-grey font-mono text-xs uppercase tracking-wider">· Curriculum Vitae</span>
          </div>

          <h1 className="font-display text-display-xl text-crisp-white mb-4">
            Md Tahsin<span className="cursor-mark">│</span>
          </h1>

          <p className="font-display text-2xl md:text-3xl text-electric-cyan mb-2 font-semibold">
            AI Content Creator &amp; Creative Technologist
          </p>

          <p className="text-cool-grey text-sm mb-6 font-mono">
            New Delhi, India · <a href="mailto:shaikhtahsin84@gmail.com" className="text-crisp-white hover:text-electric-cyan transition-colors">shaikhtahsin84@gmail.com</a> · <a href="tel:+918406939132" className="text-crisp-white hover:text-electric-cyan transition-colors">+91 8406939132</a>
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="https://www.instagram.com/aibyfusion/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-navy border border-electric-cyan/40 text-electric-cyan text-xs font-mono font-medium hover:bg-electric-cyan hover:text-ink-navy transition-all no-underline"
            >
              <span>Instagram (@aibyfusion)</span>
              <span className="px-1.5 py-0.5 rounded bg-electric-cyan/20 text-[10px] font-bold">10K Followers ↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/md-tahsin-03949b334"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-navy border border-hairline-dark text-cool-grey hover:text-crisp-white hover:border-hairline-light text-xs font-mono transition-all no-underline"
            >
              <span>LinkedIn Profile ↗</span>
            </a>
          </div>

          <blockquote className="border-l-2 border-electric-cyan pl-6 my-10 py-1">
            <p className="font-display text-xl md:text-2xl text-crisp-white italic leading-relaxed">
              &ldquo;From concept to final cut, powered entirely by AI.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Bio Summary */}
      <section className="section-padding-sm" aria-label="Biography">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="mono-label text-electric-cyan">Summary</span>
            <div className="flex-1 hairline" />
          </div>
          <p className="text-crisp-white text-lg leading-relaxed mb-4">
            AI Content Creator with 9 months of freelance experience building end-to-end, AI-generated advertising — from concept and script to a fully polished, campaign-ready final cut.
          </p>
          <p className="text-cool-grey text-base leading-relaxed">
            Self-taught across a full AI production pipeline (Google Flow, Freepik, Higgsfield, Photoshop, After Effects, Premiere Pro, DaVinci Resolve), with hands-on client-facing work at Hairan Studio, 3 months of freelance video editing, and a personal content brand, AI Fusion (@aibyfusion), focused on AI tools, ad creation, and high-retention social reels.
          </p>
        </div>
      </section>

      <div className="container-wide max-w-4xl px-6 md:px-12"><div className="hairline" /></div>

      {/* Experience Section */}
      <section className="section-padding-sm" aria-label="Experience">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label text-electric-cyan">Work Experience</span>
            <div className="flex-1 hairline" />
          </div>

          <div className="space-y-8">
            {experience.map((item) => (
              <div
                key={item.role + item.company}
                className="p-6 md:p-8 rounded-2xl bg-deep-navy/60 border border-hairline-dark hover:border-hairline-light transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display text-xl text-crisp-white font-bold">{item.role}</h3>
                    <span className="text-electric-cyan font-mono text-sm">{item.company}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cool-grey font-mono text-xs shrink-0 self-start sm:self-auto">
                    {item.period}
                  </span>
                </div>
                <ul className="space-y-2.5 text-cool-grey text-sm md:text-base leading-relaxed">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan mt-2 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-wide max-w-4xl px-6 md:px-12"><div className="hairline" /></div>

      {/* Tools & Software */}
      <section className="section-padding-sm" aria-label="Tools and software">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label text-electric-cyan">Tools &amp; Software Arsenal</span>
            <div className="flex-1 hairline" />
          </div>

          <div className="space-y-6">
            {toolCategories.map((cat) => (
              <div key={cat.category} className="p-6 rounded-xl bg-deep-navy/40 border border-hairline-dark">
                <span className="font-mono text-xs uppercase tracking-wider text-electric-cyan block mb-4">
                  {cat.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((tool) => (
                    <span
                      key={tool}
                      className="px-3.5 py-1.5 rounded-lg bg-deep-navy border border-hairline-dark text-crisp-white font-mono text-xs hover:border-electric-cyan/40 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-wide max-w-4xl px-6 md:px-12"><div className="hairline" /></div>

      {/* Skills & Disciplines */}
      <section className="section-padding-sm" aria-label="Skills">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label text-electric-cyan">Skills &amp; Capabilities</span>
            <div className="flex-1 hairline" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((s) => (
              <div key={s.title} className="p-6 rounded-xl bg-deep-navy/40 border border-hairline-dark">
                <h4 className="font-display text-lg text-crisp-white font-semibold mb-2">{s.title}</h4>
                <p className="text-cool-grey text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-wide max-w-4xl px-6 md:px-12"><div className="hairline" /></div>

      {/* Education & Certifications */}
      <section className="section-padding-sm" aria-label="Education & Certifications">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label text-electric-cyan">Education &amp; Certifications</span>
            <div className="flex-1 hairline" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Certified Video Editing Course */}
            <div className="p-6 rounded-xl border border-electric-cyan/30 bg-deep-navy/60">
              <span className="mono-label text-[10px] text-electric-cyan block mb-2">USA Certification</span>
              <h4 className="font-display font-bold text-crisp-white text-base mb-1">
                Certified Video Editing Course
              </h4>
              <p className="text-cool-grey text-xs">Through Editing School — from USA</p>
            </div>

            {/* University Degree */}
            <div className="p-6 rounded-xl border border-hairline-dark bg-deep-navy/40">
              <span className="mono-label text-[10px] text-cool-grey block mb-2">Higher Education</span>
              <h4 className="font-display font-bold text-crisp-white text-base mb-1">
                Bachelor of Arts in Journalism &amp; Digital Media (BAFJDM)
              </h4>
              <p className="text-cool-grey text-xs">IGNOU</p>
            </div>

            {/* Claude 101 */}
            <div className="p-6 rounded-xl border border-hairline-dark bg-deep-navy/40">
              <span className="mono-label text-[10px] text-cool-grey block mb-2">AI Architecture</span>
              <h4 className="font-display font-bold text-crisp-white text-base mb-1">
                Claude 101
              </h4>
              <p className="text-cool-grey text-xs">Anthropic Certified</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-wide max-w-4xl px-6 md:px-12"><div className="hairline" /></div>

      {/* Availability & Languages */}
      <section className="section-padding-sm" aria-label="Availability">
        <div className="container-wide max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="mono-label text-electric-cyan">Availability &amp; Languages</span>
            <div className="flex-1 hairline" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-deep-navy/40 border border-hairline-dark">
              <h4 className="font-display text-base text-crisp-white font-semibold mb-2">Open For Opportunities</h4>
              <p className="text-cool-grey text-sm leading-relaxed mb-4">
                Open to full-time roles and freelance/project-based work in AI content creation, AI advertising production, and digital media.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-electric-cyan hover:text-crisp-white transition-colors"
              >
                Get in touch →
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-deep-navy/40 border border-hairline-dark">
              <h4 className="font-display text-base text-crisp-white font-semibold mb-2">Spoken &amp; Written Languages</h4>
              <ul className="space-y-1.5 text-sm text-cool-grey font-mono">
                <li><strong className="text-crisp-white">English:</strong> Professional Working Proficiency</li>
                <li><strong className="text-crisp-white">Hindi:</strong> Native Speaker</li>
                <li><strong className="text-crisp-white">Urdu:</strong> Fluent</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
