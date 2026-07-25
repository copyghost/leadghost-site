import { Source_Serif_4 } from 'next/font/google';
import './broadsheet.css';
import './globals.css';

// Self-hosted at build time — no external font request at runtime.
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-source-serif',
});

export const metadata = {
  metadataBase: new URL('https://leadghost.co'),
  title: 'LeadGhost — Conversations with decision makers',
  description:
    'LeadGhost builds, tests, and automates cold outbound that reaches the person who can actually say yes. Owners, founders, partners — for operators selling a service and acquirers sourcing their next deal.',
  openGraph: {
    title: 'LeadGhost — Conversations with decision makers',
    description:
      'Cold outbound infrastructure, campaign strategy, and GTM systems that put you in conversation with the people who decide.',
    url: 'https://leadghost.co',
    siteName: 'LeadGhost',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeadGhost — Conversations with decision makers',
    description:
      'Cold outbound infrastructure, campaign strategy, and GTM systems that put you in conversation with the people who decide.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sourceSerif.variable}>
      <body>{children}</body>
    </html>
  );
}
