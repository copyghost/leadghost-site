'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BOOKING_ANCHOR, CTA } from '@/lib/config';

const LINKS = [
  { href: '#approach', label: 'Approach' },
  { href: '#proof', label: 'Proof' },
  { href: '#engagements', label: 'Engagements' },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <nav
      className="nav site-nav"
      style={{ paddingInline: 'max(var(--edge), calc((100% - 1200px)/2 + var(--edge)))' }}
    >
      <a
        className="nav-brand"
        href="/"
        aria-label="LeadGhost home"
        style={{ display: 'inline-flex', alignItems: 'center' }}
      >
        <Image
          src="/logo.png"
          alt="LeadGhost"
          width={521}
          height={136}
          priority
          style={{ height: '50px', width: 'auto' }}
        />
      </a>

      {/* Desktop links */}
      <div className="nav-desktop">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} style={{ whiteSpace: 'nowrap' }}>
            {l.label}
          </a>
        ))}
        <a className="btn btn-primary" href={BOOKING_ANCHOR}>
          {CTA}
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="nav-mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <>
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </>
          ) : (
            <>
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile" id="nav-mobile-menu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-primary" href={BOOKING_ANCHOR} onClick={() => setOpen(false)}>
            {CTA}
          </a>
        </div>
      )}
    </nav>
  );
}
