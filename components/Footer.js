import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ghost-black border-t border-ghost-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="#00E85A" strokeWidth="1.5" fill="none" />
                  <circle cx="8" cy="8" r="2" fill="#00E85A" opacity="0.6" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Lead<span className="text-neon-green">Ghost</span>
              </span>
            </Link>
            <p className="text-ghost-text text-sm leading-relaxed max-w-sm">
              Cold outbound infrastructure, campaign strategy, and GTM systems that actually put meetings on your calendar.
            </p>
            <p className="text-ghost-muted text-xs mt-6">
              &copy; {new Date().getFullYear()} LeadGhost. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-mono font-medium text-ghost-text uppercase tracking-widest mb-4">Navigate</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ghost-light hover:text-neon-green transition-colors link-hover w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono font-medium text-ghost-text uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:micheal@leadghost.co" className="text-sm text-ghost-light hover:text-neon-green transition-colors link-hover w-fit">
                micheal@leadghost.co
              </a>
              <Link href="/contact" className="text-sm text-ghost-light hover:text-neon-green transition-colors link-hover w-fit">
                Book a Call
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="gradient-line mt-12 opacity-30" />
      </div>
    </footer>
  );
}
