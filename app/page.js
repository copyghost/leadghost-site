import Link from 'next/link';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-grid overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-green/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-neon-green/[0.03] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 relative z-10">
        <div className="max-w-4xl">
          {/* Status tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ghost-border bg-ghost-card/50 mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            <span className="text-xs font-mono text-ghost-text">Accepting new clients for Q3</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] tracking-tight animate-fade-up">
            Your pipeline
            <br />
            is{' '}
            <span className="text-neon-green glow-text">haunted.</span>
          </h1>

          {/* Sub */}
          <p className="mt-6 lg:mt-8 text-lg lg:text-xl text-ghost-light leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Cold outbound infrastructure, campaign strategy, and GTM systems
            that put meetings on your calendar. Not leads.{' '}
            <span className="text-white font-medium">Meetings.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-ghost-black bg-neon-green rounded-lg hover:bg-neon-glow transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,232,90,0.3)]"
            >
              Book a Strategy Call
              <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-ghost-light bg-ghost-card border border-ghost-border rounded-lg hover:border-ghost-muted hover:text-white transition-all duration-200"
            >
              See What We Build
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 gradient-line opacity-40" />
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: '2-Step', label: 'Sequence Architecture', sub: 'Data-proven optimal length' },
    { value: '70–90', label: 'Word Sweet Spot', sub: 'Per email for max replies' },
    { value: '3.2×', label: 'Custom Var Lift', sub: 'vs. generic AI personalization' },
    { value: 'M–Th', label: 'Optimal Send Days', sub: 'From 50K+ campaign analysis' },
  ];

  return (
    <section className="relative bg-ghost-dark border-y border-ghost-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <div className="font-display font-bold text-3xl lg:text-4xl text-neon-green glow-text">
                {stat.value}
              </div>
              <div className="text-white font-medium text-sm mt-1">{stat.label}</div>
              <div className="text-ghost-text text-xs mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const services = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E85A" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 8h20" />
          <path d="M7 12h4M7 16h6" />
        </svg>
      ),
      title: 'Cold Email Infrastructure',
      desc: 'Domain procurement, inbox setup, warmup management, sender rotation, and deliverability monitoring. The plumbing that makes everything else work.',
      tag: 'Infrastructure',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E85A" strokeWidth="1.5">
          <path d="M12 20V10M6 20V4M18 20v-6" strokeLinecap="round" />
        </svg>
      ),
      title: 'Campaign Strategy & Copy',
      desc: 'Prospect-first sequences built on real performance data. 2-step architecture, custom variables, spintax that varies meaning — not just synonyms.',
      tag: 'Campaigns',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E85A" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" strokeLinecap="round" />
        </svg>
      ),
      title: 'ABM System Builds',
      desc: 'Full account-based outreach systems: targeting, list building, multi-channel sequencing, and reporting. LinkedIn + email + AI cold calling.',
      tag: 'Systems',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E85A" strokeWidth="1.5">
          <path d="M2 12l5 5L22 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'GTM & Offer Development',
      desc: 'Go-to-market strategy, offer structuring, ICP definition, pricing analysis, and competitive positioning. From thesis to live campaign.',
      tag: 'Strategy',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-medium text-neon-green uppercase tracking-widest">What We Build</span>
          <h2 className="font-display font-bold text-3xl lg:text-5xl text-white mt-3 leading-tight">
            Full-stack outbound.<br />Not just another agency.
          </h2>
          <p className="text-ghost-light text-base lg:text-lg mt-4 leading-relaxed">
            Most agencies hand you a list and a template. We build the infrastructure, write the copy, manage deliverability, and optimize until it works.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              className="hover-card group relative p-6 lg:p-8 bg-ghost-card border border-ghost-border rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neon-green/[0.06] border border-neon-green/10 flex items-center justify-center group-hover:bg-neon-green/10 transition-colors">
                  {svc.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-medium text-neon-dim uppercase tracking-widest">{svc.tag}</span>
                  <h3 className="text-white font-semibold text-lg mt-1">{svc.title}</h3>
                  <p className="text-ghost-text text-sm leading-relaxed mt-2">{svc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-neon-green hover:text-neon-glow transition-colors link-hover"
          >
            View all services
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Diagnose',
      desc: 'We audit your current outbound stack — infrastructure, copy, targeting, deliverability. No prescribing until we know what\u2019s broken.',
    },
    {
      num: '02',
      title: 'Architect',
      desc: 'Build or rebuild your infrastructure: domains, inboxes, warmup, authentication. Simultaneously, we define ICPs, build lists, and write sequences.',
    },
    {
      num: '03',
      title: 'Launch & Optimize',
      desc: 'Campaigns go live with 2-step sequences, custom variables, and real-time monitoring. We iterate on data, not guesses.',
    },
    {
      num: '04',
      title: 'Scale',
      desc: 'Once the system converts, we scale volume, add channels (LinkedIn, cold calling), and expand into new ICPs.',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-ghost-dark border-y border-ghost-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-medium text-neon-green uppercase tracking-widest">How It Works</span>
          <h2 className="font-display font-bold text-3xl lg:text-5xl text-white mt-3 leading-tight">
            Diagnose first.<br />Then build.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative p-6 rounded-2xl bg-ghost-card/50 border border-ghost-border hover-card">
              <span className="font-mono text-4xl font-bold text-neon-green/20">{step.num}</span>
              <h3 className="text-white font-semibold text-lg mt-3">{step.title}</h3>
              <p className="text-ghost-text text-sm leading-relaxed mt-2">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-ghost-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentiatorSection() {
  const points = [
    { label: 'Most agencies send', ghost: 'We diagnose first', detail: 'Campaign audits before any copy is written' },
    { label: 'They use AI templates', ghost: 'We use custom variables', detail: '3.2× higher reply rates from real signal data' },
    { label: 'They sell 5-step sequences', ghost: 'We run 2-step sequences', detail: 'Proven by 50K+ sends — major drop-off after Step 3' },
    { label: 'They track opens', ghost: 'We track deliverability', detail: 'Sender reputation, domain health, inbox placement' },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-medium text-neon-green uppercase tracking-widest">Why LeadGhost</span>
          <h2 className="font-display font-bold text-3xl lg:text-5xl text-white mt-3 leading-tight">
            Data over dogma.
          </h2>
          <p className="text-ghost-light text-base lg:text-lg mt-4 leading-relaxed">
            Every decision we make is grounded in real campaign performance data — not best practices from 2019 blog posts.
          </p>
        </div>

        <div className="space-y-3">
          {points.map((pt, i) => (
            <div key={i} className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-0 p-5 lg:p-6 bg-ghost-card border border-ghost-border rounded-xl hover-card">
              <div className="md:w-1/3">
                <span className="text-ghost-text text-sm line-through decoration-ghost-muted">{pt.label}</span>
              </div>
              <div className="md:w-1/3">
                <span className="text-neon-green font-semibold text-base">{pt.ghost}</span>
              </div>
              <div className="md:w-1/3">
                <span className="text-ghost-light text-sm">{pt.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-neon-green/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-display font-bold text-4xl lg:text-6xl text-white leading-tight">
          Ready to haunt<br />your competitors' pipeline?
        </h2>
        <p className="text-ghost-light text-lg mt-6 max-w-xl mx-auto">
          Let's audit your current outbound setup and build a system that actually converts. No pitch decks. Just strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-ghost-black bg-neon-green rounded-lg hover:bg-neon-glow transition-all duration-200 hover:shadow-[0_0_40px_rgba(0,232,90,0.3)]"
          >
            Book a Strategy Call
            <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a
            href="mailto:micheal@leadghost.co"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-ghost-light bg-ghost-card border border-ghost-border rounded-lg hover:border-ghost-muted hover:text-white transition-all duration-200"
          >
            micheal@leadghost.co
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
      <ProcessSection />
      <DifferentiatorSection />
      <CTASection />
    </>
  );
}
