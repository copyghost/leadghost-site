import { Source_Serif_4 } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import StructuredData from '@/components/StructuredData';
import ConversionTracking from '@/components/ConversionTracking';
import './broadsheet.css';
import './globals.css';

// Self-hosted at build time — no external font request at runtime.
const sourceSerif = Source_Serif_4({
  subsets: ['latin'], // subset the font
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  display: 'swap', // swap: show fallback immediately, no invisible-text delay
  preload: true, // preload the primary font
  adjustFontFallback: true, // metric-matched fallback to minimize swap-induced CLS
  variable: '--font-source-serif',
});

const SITE_URL = 'https://leadghost.co';
const DEFAULT_TITLE = 'LeadGhost — Conversations with decision makers, not leads';
// Pulled from the hero subhead, trimmed to a search-friendly length.
const DESCRIPTION =
  'Cold outbound that reaches the person who can actually say yes — owners, founders, partners. Built, tested, and automated to put you in real conversations.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | LeadGhost',
  },
  description: DESCRIPTION,
  applicationName: 'LeadGhost',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'LeadGhost',
    title: DEFAULT_TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'LeadGhost — Conversations with decision makers. Not leads in a spreadsheet.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DESCRIPTION,
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sourceSerif.variable}>
      <body>
        <StructuredData />
        {children}
        <ConversionTracking />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
