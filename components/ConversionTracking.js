'use client';

import { useEffect } from 'react';
import { BOOKING_ANCHOR } from '@/lib/config';
import { trackBookCall } from '@/lib/analytics';

// Fires the book_a_call conversion on a click of any CTA that jumps to the
// booking section (nav, hero, cards, close, footer — 7 of them), tagged with
// where it was clicked. Renders nothing.
// (contact_submit is fired by ContactForm itself, only on a successful send.)
export default function ConversionTracking() {
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest?.('a');
      if (!link || link.getAttribute('href') !== BOOKING_ANCHOR) return;
      const location = link.closest('nav')
        ? 'nav'
        : link.closest('footer')
          ? 'footer'
          : link.closest('#engagements')
            ? 'engagements'
            : 'hero';
      trackBookCall({ location });
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
