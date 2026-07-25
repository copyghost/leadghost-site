// Lightweight conversion-event helper on top of Vercel Analytics.
// `track` is a no-op when analytics isn't available (e.g. local dev, or before
// Web Analytics is enabled in the Vercel dashboard), so these are safe to call
// anywhere. Add more named helpers here as you add conversions.
import { track } from '@vercel/analytics';

// Conversion 1: someone clicks a "Book a call" CTA.
export function trackBookCall(props) {
  track('book_a_call', props);
}

// Conversion 2: a contact form is submitted.
export function trackContactSubmit(props) {
  track('contact_submit', props);
}
