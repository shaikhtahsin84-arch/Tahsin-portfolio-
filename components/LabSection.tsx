'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const labExperiments = [
  {
    title: "WAN 2.2 Tests",
    tag: "AI VIDEO",
    description: "Testing state-of-the-art AI video models and their fitness for creative workflows.",
    thumbnail: "/images/brand/Logo-black.png", // placeholder
  },
  {
    title: "Spec TVC Pipeline",
    tag: "WORKFLOW",
    description: "A tongue-in-cheek AI experiment testing rapid iteration pipelines.",
    thumbnail: "/images/brand/Logo-black.png", // placeholder
  },
  {
    title: "Character Consistency",
    tag: "PROMPT R&D",
    description: "An experiment in reflection, capturing consistent traits across generated media.",
    thumbnail: "/images/brand/Logo-black.png", // placeholder
  },
];

export function LabSection() {
  return (
    <section id="lab" className="section-padding bg-bg-secondary" aria-label="From the Lab">
      <div className="container-wide">
        <div className="flex items-center gap-4 mb-12">
          <span className="mono-label text-electric-cyan">From the Lab</span>
          <div className="flex-1 hairline" />
        </div>
        
        <div className="mb-12">
          <h2 className="font-display text-4xl lg:text-5xl text-crisp-white tracking-tight">
            Creative Experiments & R&D
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {labExperiments.map((experiment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-bg-primary">
                <Image
                  src={experiment.thumbnail}
                  alt={experiment.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2 py-1 text-[10px] font-mono tracking-widest uppercase border border-hairline-dark rounded text-cool-grey">
                  {experiment.tag}
                </span>
              </div>
              <h3 className="font-display text-xl text-crisp-white mb-2 group-hover:text-electric-cyan transition-colors">
                {experiment.title}
              </h3>
              <p className="font-body text-sm text-cool-grey">
                {experiment.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
