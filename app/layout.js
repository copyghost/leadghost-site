import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'LeadGhost — Cold Outbound & GTM Systems',
  description: 'Cold email infrastructure, campaign strategy, and go-to-market systems that put meetings on your calendar. Not leads. Meetings.',
  openGraph: {
    title: 'LeadGhost — Cold Outbound & GTM Systems',
    description: 'Cold email infrastructure, campaign strategy, and go-to-market systems that put meetings on your calendar.',
    url: 'https://leadghost.co',
    siteName: 'LeadGhost',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="noise">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
