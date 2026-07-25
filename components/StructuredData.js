// Site-wide JSON-LD structured data.
//
// To extend: add another schema object to the `schemas` array below. For
// example, once the page has a real FAQ section, add an object like:
//   { '@context': 'https://schema.org', '@type': 'FAQPage',
//     mainEntity: [{ '@type': 'Question', name: '…',
//       acceptedAnswer: { '@type': 'Answer', text: '…' } }] }
// (No FAQPage is emitted today because the site has no FAQ section.)

const BASE_URL = 'https://leadghost.co';

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'LeadGhost',
  url: BASE_URL,
  email: 'micheal@leadghost.co',
  logo: `${BASE_URL}/logo.png`,
  description:
    'Cold outbound infrastructure, campaign strategy, and GTM systems that put you in conversation with the people who decide.',
};

const professionalService = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${BASE_URL}/#service`,
  name: 'LeadGhost',
  url: BASE_URL,
  image: `${BASE_URL}/og.png`,
  email: 'micheal@leadghost.co',
  description:
    'LeadGhost builds, tests, and automates cold outbound — deliverability infrastructure, managed campaigns, and go-to-market systems that reach decision makers directly.',
  provider: { '@id': `${BASE_URL}/#organization` },
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Engagements',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cold outbound infrastructure',
          description:
            'Domains, inboxes, warmup, DNS (SPF, DKIM, DMARC), and ongoing deliverability monitoring.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Campaign management',
          description:
            'List building and decision-maker targeting, copywriting and A/B testing, reply management and booking.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'GTM systems',
          description:
            'Multi-campaign, multi-market outbound with strategy, pipeline reporting, and forecasting.',
        },
      },
    ],
  },
};

const schemas = [organization, professionalService];

export default function StructuredData() {
  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema['@id'] ?? schema['@type']}
          type="application/ld+json"
          // JSON.stringify + escaping `<` guards against breaking out of the tag.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </>
  );
}
