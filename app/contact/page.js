'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Wire to form handler (Formspree, Netlify Forms, or custom API route)
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-grid">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-neon-green/[0.03] rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <span className="text-xs font-mono font-medium text-neon-green uppercase tracking-widest">Contact</span>
          <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-white mt-3 leading-tight max-w-3xl">
            Let&apos;s talk pipeline.
          </h1>
          <p className="text-ghost-light text-lg mt-6 max-w-2xl">
            Book a call or drop us a message. We'll respond within 24 hours — usually faster.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 gradient-line opacity-40" />
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — Form */}
            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6">Send a message</h2>

              {submitted ? (
                <div className="p-8 bg-ghost-card border border-neon-green/20 rounded-2xl glow-border text-center">
                  <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-neon-green" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-semibold">Message received.</h3>
                  <p className="text-ghost-text text-sm mt-2">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-5" role="form">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-ghost-text uppercase tracking-widest mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-ghost-card border border-ghost-border rounded-lg text-white text-sm focus:outline-none focus:border-neon-green/40 focus:ring-1 focus:ring-neon-green/20 transition-colors placeholder:text-ghost-muted"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-ghost-text uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-ghost-card border border-ghost-border rounded-lg text-white text-sm focus:outline-none focus:border-neon-green/40 focus:ring-1 focus:ring-neon-green/20 transition-colors placeholder:text-ghost-muted"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-mono text-ghost-text uppercase tracking-widest mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-ghost-card border border-ghost-border rounded-lg text-white text-sm focus:outline-none focus:border-neon-green/40 focus:ring-1 focus:ring-neon-green/20 transition-colors placeholder:text-ghost-muted"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-ghost-text uppercase tracking-widest mb-2">What do you need?</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-ghost-card border border-ghost-border rounded-lg text-white text-sm focus:outline-none focus:border-neon-green/40 focus:ring-1 focus:ring-neon-green/20 transition-colors placeholder:text-ghost-muted resize-none"
                      placeholder="Tell us about your outbound situation..."
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="w-full px-6 py-3.5 text-base font-semibold text-ghost-black bg-neon-green rounded-lg hover:bg-neon-glow transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,232,90,0.3)]"
                  >
                    Send Message
                  </button>
                </div>
              )}
            </div>

            {/* Right — Info + Calendly placeholder */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display font-bold text-2xl text-white mb-6">Book a call directly</h2>
                <div className="p-8 bg-ghost-card border border-ghost-border rounded-2xl">
                  {/* Calendly embed placeholder */}
                  <div className="w-full h-[480px] bg-ghost-dark border border-ghost-border/50 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-neon-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                      </div>
                      <p className="text-ghost-text text-sm">Calendly embed goes here</p>
                      <p className="text-ghost-muted text-xs mt-1">Replace with your Calendly inline widget</p>
                      <a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-4 text-neon-green text-sm font-medium hover:text-neon-glow transition-colors"
                      >
                        Open Calendly
                        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                          <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick contact */}
              <div className="p-6 bg-ghost-card border border-ghost-border rounded-2xl space-y-4">
                <h3 className="text-white font-semibold text-base">Or reach out directly</h3>
                <a href="mailto:micheal@leadghost.co" className="flex items-center gap-3 text-ghost-light hover:text-neon-green transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-ghost-dark border border-ghost-border flex items-center justify-center group-hover:border-neon-green/20 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="1" y="3" width="14" height="10" rx="1.5" />
                      <path d="M1 4l7 5 7-5" />
                    </svg>
                  </div>
                  <span className="text-sm">micheal@leadghost.co</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
