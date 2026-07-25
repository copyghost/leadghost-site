const BASE_URL = 'https://leadghost.co';

// Single-page site — the home route is the only real URL.
export default function sitemap() {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
