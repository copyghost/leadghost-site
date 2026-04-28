import Link from 'next/link';

export const metadata = {
  title: 'Services — LeadGhost',
  description: 'Cold email infrastructure, campaign strategy, ABM systems, and GTM consulting. Full-stack outbound that puts meetings on your calendar.',
};

function ServiceBlock({ tag, title, description, features, tools }) {
  return (
    <div className="group p-8 lg:p-10 bg-ghost-card border border-ghost-border rounded-2xl hover-card">
      <span className="text-[10px] font-mono font-medium text-neon-dim uppercase tracking-widest">{tag}</span>
      <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mt-2">{title}</h3>
      <p className="text-ghost-light text-base leading-relaxed mt-4 max-w-2xl">{description}</p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-3">
            <svg className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
              <path d="M2 8l4 4L14 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm text-ghost-text">{f}</span>
          </div>
        ))}
      </div>

      {tools && (
        <div className="mt-8 pt-6 border-t border-ghost-border">
          <span className="text-[10px] font-mono text-ghost-text uppercase tracking-widest">Tools we use</span>
          <div className="flex flex-wrap gap-2 mt-3">
            {tools.map((t, i) => (
              <span key={i} className="px-3 py-1 text-xs font-mono text-ghost-light bg-ghost-dark border border-ghost-border rounded-md">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-grid">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-neon-green/[0.03] rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <span className="text-xs font-mono font-medium text-neon-green uppercase tracking-widest">Services</span>
          <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-white mt-3 leading-tight max-w-3xl">
            Everything between your ICP and a booked meeting.
          </h1>
          <p className="text-ghost-light text-lg mt-6 max-w-2xl">
            We don't hand you a list and wish you luck. We build the infrastructure, write the sequences, manage deliverability, and optimize until the calendar fills up.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 gradient-line opacity-40" />
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          <ServiceBlock
            tag="Infrastructure"
            title="Cold Email Infrastructure"
            description="The foundation everything else runs on. We set up, warm up, authenticate, and monitor your entire sending infrastructure — across Azure and Gmail — so your emails actually land in inboxes."
            features={[
              'Domain procurement & DNS configuration',
              'Inbox setup across Azure (M365) & Gmail',
              'SPF, DKIM, DMARC authentication',
              'Warmup management & graduation',
              'Sender reputation monitoring',
              'Real-time deliverability dashboards',
              'Account rotation & burn-rate modeling',
              'Infrastructure scaling playbooks',
            ]}
            tools={['Smartlead', 'Instantly', 'Google Workspace', 'Microsoft 365']}
          />

          <ServiceBlock
            tag="Campaigns"
            title="Campaign Strategy & Copywriting"
            description="Every sequence we write is grounded in real performance data from tens of thousands of sends. Prospect-first framing, custom variables over generic AI personalization, and 2-step architectures that outperform bloated drip sequences."
            features={[
              '2-step sequences (data-proven optimal)',
              '70–90 word emails (reply-rate sweet spot)',
              'Custom variable enrichment over AI fluff',
              'Spintax that varies meaning, not synonyms',
              'Prospect-first framing (delay product to Email 2)',
              'No links in Email 1 (protects sender reputation)',
              'First name in subject lines (proven lift)',
              'Industry-agnostic case study framing',
            ]}
            tools={['Smartlead', 'Clay', 'Apollo', 'Store Leads']}
          />

          <ServiceBlock
            tag="Systems"
            title="ABM System Builds"
            description="Full account-based marketing systems that coordinate email, LinkedIn, and cold calling into a single outreach machine. Built for teams that need to hit a defined list of accounts — not spray and pray."
            features={[
              'ICP definition & target account list building',
              'Multi-channel sequencing (email + LinkedIn + calls)',
              'LinkedIn automation via HeyReach',
              'AI cold calling integration',
              'Custom enrichment & signal-based targeting',
              'Reporting dashboards & pipeline attribution',
            ]}
            tools={['HeyReach', 'Smartlead', 'Clay', 'Sales Navigator', 'Apollo']}
          />

          <ServiceBlock
            tag="Strategy"
            title="GTM & Offer Development"
            description="Go-to-market consulting for teams that need more than campaigns — they need a strategy. ICP definition, pricing, offer structuring, competitive positioning, and the full framework to take something to market."
            features={[
              'Go-to-market strategy & positioning',
              'Offer structuring & pricing analysis',
              'ICP definition & TAM/SAM sizing',
              'Competitive analysis & differentiation',
              'Sales enablement collateral',
              'Website copy & messaging alignment',
            ]}
            tools={['HubSpot', 'Clay', 'BuiltWith', 'Sales Navigator']}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-ghost-dark border-t border-ghost-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white">
            Not sure what you need?
          </h2>
          <p className="text-ghost-light text-base mt-4">
            Book a call. We'll audit what you've got and tell you exactly what's broken before proposing anything.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 mt-8 text-base font-semibold text-ghost-black bg-neon-green rounded-lg hover:bg-neon-glow transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,232,90,0.3)]"
          >
            Book a Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}
