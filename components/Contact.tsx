'use client';

import { useState, FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { usePrefersReducedMotion } from '@/lib/motion';

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const prefersReduced = usePrefersReducedMotion();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '', company: '' });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Honeypot check
    if (formData.company) {
      setStatus('sent');
      return;
    }

    // Client-side validation
    if (!formData.name || !formData.email || formData.message.length < 10) {
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name} on your portfolio`,
          from_name: 'Portfolio Contact Form'
        }),
      });

      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '', company: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputStyles = 'w-full bg-deep-navy border border-hairline-dark rounded-lg px-4 py-3 text-crisp-white font-body text-body placeholder:text-cool-grey/50 focus:border-electric-cyan focus:outline-none transition-colors duration-200';

  return (
    <section id="contact" className="section-padding" aria-label="Contact" ref={ref}>
      <div className="container-wide max-w-2xl">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="mono-label text-electric-cyan">Contact</span>
            <div className="flex-1 hairline" />
          </div>

          <h2 className="font-display text-display-l text-crisp-white mb-4">
            Let&apos;s work together<span className="cursor-mark">│</span>
          </h2>
          <p className="text-cool-grey mb-10 leading-relaxed">
            Open to both full-time and freelance opportunities. Drop a message and I&apos;ll get back to you.
          </p>

          {status === 'sent' ? (
            <div className="p-8 rounded-lg border border-electric-cyan/30 bg-electric-cyan/5 text-center">
              <p className="font-display text-h2 text-electric-cyan mb-2">Message sent.</p>
              <p className="text-cool-grey">I&apos;ll be in touch.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="caption block mb-2">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputStyles}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="caption block mb-2">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputStyles}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="caption block mb-2">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputStyles} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Honeypot — hidden from real users */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="absolute left-[-9999px]"
                aria-hidden="true"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-lg bg-electric-cyan text-ink-navy font-display font-semibold text-lg hover:bg-crisp-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-cyan"
              >
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
