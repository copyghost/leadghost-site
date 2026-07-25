const BASE_URL = 'https://leadghost.co';

// Allow every crawler everything; disallow nothing; point to the sitemap.
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
