'use client';

import { useEffect } from 'react';
import { BOOKING_URL } from '@/lib/config';
import { trackBookCall, trackContactSubmit } from '@/lib/analytics';

// Wires the two conversions via event delegation, so it catches every booking
// CTA on the page (nav, hero, cards, close, footer — 7 of them) without
// touching each one, and any contact form that gets added later. Renders
// nothing.
export default function ConversionTracking() {
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest?.('a');
      if (!link || link.getAttribute('href') !== BOOKING_URL) return;
      const location = link.closest('nav')
        ? 'nav'
        : link.closest('footer')
          ? 'footer'
          : link.closest('#engagements')
            ? 'engagements'
            : 'hero';
      trackBookCall({ location });
    };

    const onSubmit = (event) => {
      if (event.target instanceof HTMLFormElement) trackContactSubmit();
    };

    document.addEventListener('click', onClick);
    document.addEventListener('submit', onSubmit, true);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('submit', onSubmit, true);
    };
  }, []);

  return null;
}
