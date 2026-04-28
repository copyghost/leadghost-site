import Link from 'next/link';

export const metadata = {
  title: 'About — LeadGhost',
  description: 'Built by a practitioner, not a slide deck. LeadGhost is a cold outbound and GTM agency run by Micheal Smith.',
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-grid">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-neon-green/[0.03] rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <span className="text-xs font-mono font-medium text-neon-green uppercase tracking-widest">About</span>
          <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-white mt-3 leading-tight max-w-3xl">
            Built by a practitioner.<br />Not a slide deck.
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 gradient-line opacity-40" />
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left — narrative */}
            <div className="space-y-6">
              <p className="text-ghost-light text-lg leading-relaxed">
                LeadGhost exists because most cold outbound is broken — and the agencies selling it don't know why.
              </p>
              <p className="text-ghost-text text-base leading-relaxed">
                They send 5-step sequences with generic AI personalization, track open rates instead of deliverability, and blame the list when campaigns underperform. The problem isn't the list. It's everything else.
              </p>
              <p className="text-ghost-text text-base leading-relaxed">
                I'm Micheal Smith. I built LeadGhost after spending years in the trenches — running campaigns across industries, analyzing tens of thousands of sends, and diagnosing why most outbound fails at a mechanical level. Not from a theory perspective. From looking at the data.
              </p>
              <p className="text-ghost-text text-base leading-relaxed">
                Before outbound, I was a certified sommelier working in the beverage industry. That background taught me something that carries over: the difference between someone who talks about the craft and someone who's done the work. In wine, you can't fake a palate. In outbound, you can't fake deliverability data.
              </p>
              <p className="text-ghost-text text-base leading-relaxed">
                Every principle we operate on — 2-step sequences, 70–90 word emails, custom variables over AI personalization, prospect-first framing, no links in Email 1 — comes from real campaign analysis. Not blog posts. Not courses. Data.
              </p>
            </div>

            {/* Right — principles */}
            <div>
              <h3 className="text-xs font-mono font-medium text-neon-green uppercase tracking-widest mb-8">Operating Principles</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Diagnose before prescribing',
                    desc: 'We audit your existing setup before recommending anything. If your infrastructure is solid, we say so. If it\'s not, we tell you exactly what\'s broken.',
                  },
                  {
                    title: 'Data over dogma',
                    desc: 'Our playbook comes from analyzing real campaign performance across tens of thousands of sends. When the data says something works, we do it — even if conventional wisdom disagrees.',
                  },
                  {
                    title: 'Specificity over generality',
                    desc: 'Custom variables that reference real business signals outperform generic AI-generated personalization by 3×+. We build the enrichment to make that possible.',
                  },
                  {
                    title: 'Infrastructure is the product',
                    desc: 'The best copy in the world doesn\'t matter if your emails land in spam. We manage deliverability as a first-class concern, not an afterthought.',
                  },
                  {
                    title: 'Meetings, not leads',
                    desc: 'We don\'t count "leads generated." We care about meetings booked and pipeline created. Everything we build is optimized for that outcome.',
                  },
                ].map((p, i) => (
                  <div key={i} className="p-5 bg-ghost-card border border-ghost-border rounded-xl hover-card">
                    <h4 className="text-white font-semibold text-base">{p.title}</h4>
                    <p className="text-ghost-text text-sm leading-relaxed mt-2">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 lg:py-24 bg-ghost-dark border-y border-ghost-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-white mb-10">Our Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Smartlead', cat: 'Sequencing' },
              { name: 'Instantly', cat: 'Sequencing' },
              { name: 'HeyReach', cat: 'LinkedIn' },
              { name: 'Clay', cat: 'Enrichment' },
              { name: 'Apollo', cat: 'Data' },
              { name: 'Sales Navigator', cat: 'Targeting' },
              { name: 'Store Leads', cat: 'Data' },
              { name: 'BuiltWith', cat: 'Technographics' },
              { name: 'HubSpot', cat: 'CRM' },
              { name: 'Azure / M365', cat: 'Infrastructure' },
              { name: 'Google Workspace', cat: 'Infrastructure' },
              { name: 'Apps Script', cat: 'Automation' },
            ].map((tool, i) => (
              <div key={i} className="p-4 bg-ghost-card/50 border border-ghost-border rounded-xl text-center hover-card">
                <div className="text-white text-sm font-medium">{tool.name}</div>
                <div className="text-ghost-text text-[10px] font-mono uppercase tracking-wider mt-1">{tool.cat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white">
            Want to work together?
          </h2>
          <p className="text-ghost-light text-base mt-4">
            No pitch decks. Just a conversation about what you're building and how we can help.
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
