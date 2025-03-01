const SEO = {
  defaultTitle: 'Blog Client',
  titleTemplate: '%s | Blog Client',
  description: 'Blog client built with Next.js',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://your-domain.com',
    siteName: 'Blog Client',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog Client',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
};

export default SEO; 