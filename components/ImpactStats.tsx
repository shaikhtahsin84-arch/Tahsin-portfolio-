'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  {
    value: '1M+',
    label: 'Viral Reel Views',
    description: 'Breakthrough viral hit on Instagram reels.',
  },
  {
    value: '10K+',
    label: 'Instagram Followers',
    description: 'Dedicated audience on @aibyfusion.',
  },
  {
    value: '10K',
    label: 'Avg. Reel Reach',
    description: 'Consistent reach across DaVinci Resolve edits.',
  },
  {
    value: '100%',
    label: 'End-to-End Execution',
    description: 'From concept prompt to final polished cut.',
  },
];

export function ImpactStats() {
  const containerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="section-padding" aria-label="Impact and statistics">
      <div className="container-wide">
        <div className="flex items-center gap-4 mb-12">
          <span className="mono-label text-electric-cyan">Impact</span>
          <div className="flex-1 hairline" />
        </div>

        <motion.div
          ref={containerRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-panel p-8 rounded-2xl flex flex-col group relative overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-hairline-dark transition-colors duration-300 group-hover:bg-electric-cyan" />
              
              <div className="font-display font-bold text-5xl lg:text-6xl text-crisp-white tracking-tighter mb-4">
                {stat.value}
              </div>
              <h3 className="font-body text-lg font-medium text-crisp-white mb-2">
                {stat.label}
              </h3>
              <p className="font-body text-sm text-cool-grey leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
