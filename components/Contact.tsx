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
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'f7933732-7984-40b5-8fa1-11517b4f6581';
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Inquiry from ${formData.name}`,
          from_name: 'Md Tahsin Portfolio Contact',
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success !== false) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '', company: '' });
        return;
      }

      // Fallback: try local server route
      const fallbackRes = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (fallbackRes.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '', company: '' });
      } else {
        setStatus('error');
      }
    } catch {
      // Offline / network fallback
      try {
        const fallbackRes = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });

        if (fallbackRes.ok) {
          setStatus('sent');
          setFormData({ name: '', email: '', message: '', company: '' });
          return;
        }
      } catch {}

      setStatus('error');
    }
  }

  const [copied, setCopied] = useState(false);
  function handleCopyEmail() {
    navigator.clipboard.writeText('shaikhtahsin84@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  const inputStyles = 'w-full bg-deep-navy border border-hairline-dark rounded-lg px-4 py-3 text-crisp-white font-body text-body placeholder:text-cool-grey/50 focus:border-electric-cyan focus:outline-none transition-colors duration-200';

  return (
    <section id="contact" className="section-padding" aria-label="Contact" ref={ref}>
      <div className="container-wide max-w-4xl">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="mono-label text-electric-cyan">Contact</span>
            <div className="flex-1 hairline" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left info column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-display-l text-crisp-white mb-4">
                  Let&apos;s build together<span className="cursor-mark">│</span>
                </h2>
                <p className="text-cool-grey mb-8 leading-relaxed">
                  Open to full-time roles, creative collaborations, and brand campaigns. Drop a note here or reach out directly across any channel.
                </p>

                {/* Direct Contact Cards */}
                <div className="space-y-4 mb-8">
                  {/* Email */}
                  <div className="p-4 rounded-xl bg-deep-navy/80 border border-hairline-dark flex items-center justify-between gap-4">
                    <div className="overflow-hidden">
                      <span className="mono-label text-[10px] text-cool-grey block mb-1">Direct Email</span>
                      <a
                        href="mailto:shaikhtahsin84@gmail.com"
                        className="text-crisp-white hover:text-electric-cyan text-sm font-mono truncate block no-underline transition-colors"
                      >
                        shaikhtahsin84@gmail.com
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="shrink-0 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-electric-cyan hover:bg-electric-cyan hover:text-ink-navy transition-all"
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/aibyfusion/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-deep-navy/80 border border-hairline-dark flex items-center justify-between gap-4 hover:border-electric-cyan/50 transition-all no-underline group"
                  >
                    <div>
                      <span className="mono-label text-[10px] text-cool-grey block mb-1">Instagram (@aibyfusion)</span>
                      <span className="text-crisp-white group-hover:text-electric-cyan text-sm font-semibold transition-colors">
                        AI Fusion
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-electric-cyan/15 text-electric-cyan font-mono text-xs font-bold uppercase tracking-wider">
                      10K+ Followers ↗
                    </span>
                  </a>

                  {/* Phone / Location */}
                  <div className="p-4 rounded-xl bg-deep-navy/80 border border-hairline-dark flex items-center justify-between gap-4">
                    <div>
                      <span className="mono-label text-[10px] text-cool-grey block mb-1">Location &amp; Phone</span>
                      <p className="text-crisp-white text-xs font-mono">
                        New Delhi, India · <a href="tel:+918406939132" className="text-electric-cyan no-underline hover:underline">+91 8406939132</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              {status === 'sent' ? (
                <div className="p-10 rounded-2xl border border-electric-cyan/40 bg-electric-cyan/10 text-center flex flex-col items-center justify-center min-h-[360px]">
                  <div className="w-12 h-12 rounded-full bg-electric-cyan/20 flex items-center justify-center text-electric-cyan text-xl mb-4 font-bold">
                    ✓
                  </div>
                  <h3 className="font-display text-2xl text-crisp-white mb-2 font-bold">Message Delivered</h3>
                  <p className="text-cool-grey text-sm mb-6 max-w-sm">
                    Thank you! Your inquiry has been sent to Tahsin. Expect a reply within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="px-5 py-2.5 rounded-full border border-electric-cyan text-electric-cyan text-xs font-mono uppercase tracking-wider hover:bg-electric-cyan hover:text-ink-navy transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5 p-8 rounded-2xl bg-deep-navy/50 border border-hairline-dark">
                  <div>
                    <label htmlFor="contact-name" className="caption block mb-2 text-cool-grey">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputStyles}
                      placeholder="e.g. Alex Rivera"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="caption block mb-2 text-cool-grey">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputStyles}
                      placeholder="alex@brand.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="caption block mb-2 text-cool-grey">Project Details / Message</label>
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
                      placeholder="Tell me about the campaign, timeline, deliverables..."
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
                    className="w-full py-4 rounded-xl bg-electric-cyan text-ink-navy font-display font-semibold text-base hover:bg-crisp-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-cyan shadow-lg shadow-electric-cyan/10"
                  >
                    {status === 'sending' ? 'Transmitting Message...' : 'Send Message ↗'}
                  </button>

                  {status === 'error' && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-center">
                      <p className="text-red-400 text-sm mb-2">Notice: Form gateway took too long.</p>
                      <a
                        href={`mailto:shaikhtahsin84@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(formData.name || 'Visitor')}&body=${encodeURIComponent(formData.message || '')}`}
                        className="inline-block px-4 py-2 rounded-md bg-electric-cyan text-ink-navy font-mono text-xs font-semibold uppercase tracking-wider hover:bg-crisp-white transition-all no-underline"
                      >
                        Click to Open in Mail App ↗
                      </a>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
