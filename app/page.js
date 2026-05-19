'use client';
import { useState } from 'react';
import Link from 'next/link';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-grid overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-green/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-neon-green/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ghost-border bg-ghost-card/50 mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            <span className="text-xs font-mono text-ghost-text">Accepting new clients</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] tracking-tight animate-fade-up">
            Outbound Strategy to Engage{' '}
            <span className="text-neon-green glow-text">Every Prospect</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-ghost-black bg-neon-green rounded-lg hover:bg-neon-glow transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,232,90,0.3)]"
            >
              Schedule a Free Consultation
              <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 gradient-line opacity-40" />
    </section>
  );
}

function WhoWeAre() {
  return (
    <section className="relative py-24 lg:py-32 bg-ghost-dark border-y border-ghost-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-mono font-medium text-neon-green uppercase tracking-widest">Who We Are</span>
          <h2 className="font-display font-bold text-3xl lg:text-5xl text-white mt-4 leading-tight">
            leadghost builds, tests, and automates your company&apos;s cold email outbound process.
          </h2>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-ghost-black bg-neon-green rounded-lg hover:bg-neon-glow transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,232,90,0.3)]"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeHelp() {
  const audiences = [
    { label: 'Founders', icon: '01' },
    { label: 'Bootstrapped Owners', icon: '02' },
    { label: 'Venture-Backed Startups', icon: '03' },
    { label: 'Budding Agencies', icon: '04' },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-medium text-neon-green uppercase tracking-widest">Who We Help</span>
          <h2 className="font-display font-bold text-3xl lg:text-5xl text-white mt-4 leading-tight">
            founders, bootstrapped owners, venture-backed startups, budding agencies&mdash;we got your back.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((a) => (
            <div key={a.icon} className="hover-card p-6 lg:p-8 bg-ghost-card border border-ghost-border rounded-2xl text-center">
              <span className="font-mono text-4xl font-bold text-neon-green/20">{a.icon}</span>
              <h3 className="text-white font-semibold text-lg mt-3">{a.label}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-neon-green hover:text-neon-glow transition-colors link-hover"
          >
            Our Resources
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function HowWeHelp() {
  return (
    <section className="relative py-24 lg:py-32 bg-ghost-dark border-y border-ghost-border overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-neon-green/[0.03] rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-mono font-medium text-neon-green uppercase tracking-widest">How We Help</span>
            <h2 className="font-display font-bold text-3xl lg:text-5xl text-white mt-4 leading-tight">
              we build outbound systems that sell for you.
            </h2>
            <p className="text-ghost-light text-lg mt-6 leading-relaxed">
              we generate the opportunities,{' '}
              <span className="text-white font-semibold">you close the deal.</span>
            </p>
            <div className="mt-10">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-ghost-black bg-neon-green rounded-lg hover:bg-neon-glow transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,232,90,0.3)]"
              >
                Check Our Services
                <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="relative h-80 lg:h-[420px] rounded-2xl bg-ghost-card border border-ghost-border overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/[0.03] to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-neon-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-ghost-text text-sm">Add your team or stock image here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Micheal has been great to work with and I plan on collaborating with him again in the near future. He quickly ramped up on our industry and tone of voice, very adaptable and always delivers when he says he will.',
      role: 'CRO',
      company: 'SaaS',
    },
    {
      quote: "Very impressed with your workflow and the changes implemented to improve.\n\nI am loving your work to be quite honest....14 leads in 1 week!",
      role: 'CEO',
      company: 'Packaging Broker',
    },
    {
      quote: "I'm extremely happy with the response so far and I've had several quality meetings with interested parties...and we haven't even put a dent in the list!\n\nYou're really on top of it and it's obvious you're an expert. Working with you has been a breath of fresh air!",
      role: 'President',
      company: 'Investment Firm',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-medium text-neon-green uppercase tracking-widest">Who We&apos;ve Helped</span>
          <h2 className="font-display font-bold text-3xl lg:text-5xl text-white mt-4 leading-tight">
            Real results. Real words.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="hover-card p-6 lg:p-8 bg-ghost-card border border-ghost-border rounded-2xl flex flex-col">
              <svg className="w-8 h-8 text-neon-green/30 mb-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 7.05C7.28 7.56 4.5 10.73 4.5 14.5c0 1.93.78 3.68 2.05 4.95l.7-.7C6.1 17.6 5.5 16.11 5.5 14.5c0-2.94 2.06-5.4 4.82-6.03L11 7.05zM19.5 7.05c-3.72.51-6.5 3.68-6.5 7.45 0 1.93.78 3.68 2.05 4.95l.7-.7C14.6 17.6 14 16.11 14 14.5c0-2.94 2.06-5.4 4.82-6.03L19.5 7.05z" />
              </svg>
              <p className="text-ghost-light text-sm leading-relaxed flex-1 whitespace-pre-line">{t.quote}</p>
              <div className="mt-6 pt-4 border-t border-ghost-border">
                <span className="text-white font-semibold text-sm">{t.role}</span>
                <span className="text-ghost-text text-xs block mt-0.5">{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  const studies = [
    {
      tag: 'Production Company',
      title: 'From spam folders to 55-60% open rates',
      body: 'A video production company had a huge email delivery issue before coming to leadghost.\n\nOn average, they were seeing 7-15% open rates on their campaigns and knew they needed to escape the spam filters and promotions tab to talk directly with their prospects.\n\nUsing our cold email infrastructure, we immediately brought their open rates to 35-40%. Now, they average roughly 55-60%.',
      stats: [
        { value: '7-15%', label: 'Before', sub: 'Open Rate' },
        { value: '55-60%', label: 'After', sub: 'Open Rate' },
      ],
    },
    {
      tag: 'Private Equity',
      title: '43 meetings in 3 months. ~$74M in pipeline.',
      body: "A PE search fund teamed up with leadghost for three campaigns (and counting). We booked them 43 meetings in just three months (nearly $74M in pipeline value). Initially, we hit a snag with spam filters\u2014a common issue in financial emails. But together, we got creative, tweaking our messages so they'd land right where they needed to, without setting off any alarms.\n\nNow, our efforts are not just about sending emails. We're helping their sales team keep their pipeline full and even growing their email list with solid, interested businesses ready to sell. It's all about smart strategies and real teamwork.",
      stats: [
        { value: '43', label: 'Meetings', sub: 'In 3 Months' },
        { value: '~$74M', label: 'Pipeline', sub: 'Value Generated' },
      ],
    },
    {
      tag: 'Social Analytics Platform',
      title: '3-4 interested responses per day across 6 campaigns',
      body: 'A Social Media Analytics platform came to us looking for creative ways to approach their outbound motion to engage new prospects.\n\nTo address their needs, we set up a robust email delivery infrastructure and utilized our extensive internal databases to initiate six distinct campaigns simultaneously, each crafted with unique targeting parameters to reach a diverse set of potential prospects.\n\nThe outcome of this strategic approach was remarkable. Across all six campaigns, they experienced an average of 3-4 interested responses per day, demonstrating the effectiveness of tailored targeting and the potential for growth through carefully crafted outreach efforts.',
      stats: [
        { value: '6', label: 'Campaigns', sub: 'Simultaneous' },
        { value: '3-4/day', label: 'Responses', sub: 'Interested Leads' },
      ],
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-ghost-dark border-y border-ghost-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-medium text-neon-green uppercase tracking-widest">Our Clients</span>
          <h2 className="font-display font-bold text-3xl lg:text-5xl text-white mt-4 leading-tight">
            The proof is in the pipeline.
          </h2>
        </div>

        <div className="space-y-8">
          {studies.map((study, i) => (
            <div key={i} className="hover-card p-8 lg:p-10 bg-ghost-card border border-ghost-border rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-2">
                  <span className="text-[10px] font-mono font-medium text-neon-dim uppercase tracking-widest">{study.tag}</span>
                  <h3 className="font-display font-bold text-xl lg:text-2xl text-white mt-2">{study.title}</h3>
                  <div className="mt-4 space-y-3">
                    {study.body.split('\n\n').map((paragraph, j) => (
                      <p key={j} className="text-ghost-text text-sm leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row lg:flex-col gap-4 lg:gap-6 lg:justify-center">
                  {study.stats.map((stat, k) => (
                    <div key={k} className="flex-1 p-4 lg:p-5 bg-ghost-dark border border-ghost-border rounded-xl text-center">
                      <div className="font-display font-bold text-2xl lg:text-3xl text-neon-green glow-text">{stat.value}</div>
                      <div className="text-white font-medium text-xs mt-1">{stat.label}</div>
                      <div className="text-ghost-text text-[10px] font-mono uppercase tracking-wider mt-0.5">{stat.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-neon-green/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <span className="text-xs font-mono font-medium text-neon-green uppercase tracking-widest">Stay in the Loop</span>
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mt-4">
          outbound strategies delivered to your inbox
        </h2>
        <p className="text-ghost-light text-base mt-4">
          Subscribe to our weekly newsletter.
        </p>

        {subscribed ? (
          <div className="mt-8 p-6 bg-ghost-card border border-neon-green/20 rounded-xl glow-border">
            <p className="text-neon-green font-semibold">You&apos;re in. Check your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 bg-ghost-card border border-ghost-border rounded-lg text-white text-sm focus:outline-none focus:border-neon-green/40 focus:ring-1 focus:ring-neon-green/20 transition-colors placeholder:text-ghost-muted"
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm font-semibold text-ghost-black bg-neon-green rounded-lg hover:bg-neon-glow transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,232,90,0.25)]"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <WhoWeHelp />
      <HowWeHelp />
      <TestimonialsSection />
      <CaseStudiesSection />
      <NewsletterSection />
    </>
  );
}
