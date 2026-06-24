const SITE_NAME = 'Style & Shine Lounge'

const BASE_KEYWORDS =
  'Style and Shine Lounge, SS Lounge, Samina Khan, beauty salon Mumbai, salon Andheri West, makeup artist Mumbai, bridal makeup Mumbai'

export const PAGE_SEO = {
  '/': {
    title: `${SITE_NAME} | Beauty Salon in Andheri West, Mumbai`,
    description:
      'Style & Shine Lounge by Samina Khan — premium beauty salon in Andheri West, Mumbai. Hair styling, professional makeup, bridal makeovers, nail art, and skin care. Book your appointment today.',
    keywords: `${BASE_KEYWORDS}, hair spa Mumbai, nail art Andheri, bridal makeover Mumbai, party makeup, beauty lounge`,
  },
  '/about': {
    title: `About Us | ${SITE_NAME} by Samina Khan`,
    description:
      'Learn about Style & Shine Lounge by Samina Khan — your destination for beauty, fashion, and confidence in Andheri West, Mumbai. Premium treatments with skin-safe products.',
    keywords: `${BASE_KEYWORDS}, about Samina Khan, beauty salon Andheri, premium beauty services Mumbai`,
  },
  '/services': {
    title: `Our Services | ${SITE_NAME} — Hair, Makeup & Bridal`,
    description:
      'Explore premium beauty services at Style & Shine Lounge: hair styling & spa, professional makeup, bridal & party makeovers, nail art, skin care, and facial treatments in Mumbai.',
    keywords: `${BASE_KEYWORDS}, hair styling Mumbai, professional makeup, bridal makeup, nail care, facial treatment, skin care salon`,
  },
  '/blogs': {
    title: `Beauty Blog | ${SITE_NAME} — Tips & Style Guides`,
    description:
      'Read beauty tips, styling guides, and expert insights from Style & Shine Lounge. Discover daily makeup inspiration, skincare advice, and hair care secrets.',
    keywords: `${BASE_KEYWORDS}, beauty blog, makeup tips, skincare tips, hair care guide, beauty inspiration`,
  },
  '/contact': {
    title: `Contact & Book Appointment | ${SITE_NAME}`,
    description:
      'Get in touch with Style & Shine Lounge in Andheri West, Mumbai. Book appointments for makeup, hair styling, bridal services, and beauty treatments. Call or message us today.',
    keywords: `${BASE_KEYWORDS}, book beauty appointment Mumbai, salon contact Andheri West, beauty booking`,
  },
  blogPost: {
    title: `Chic & Glam: Daily Beauty Inspiration | ${SITE_NAME} Blog`,
    description:
      'Expert beauty tips for everyday glam — makeup, skincare, and long-lasting looks from the team at Style & Shine Lounge by Samina Khan in Mumbai.',
    keywords: `${BASE_KEYWORDS}, daily makeup tips, skincare routine, long lasting makeup, beauty inspiration blog`,
  },
}

export function getPageSeo(pathname) {
  if (pathname.startsWith('/blogs/') && pathname !== '/blogs') {
    return PAGE_SEO.blogPost
  }

  return PAGE_SEO[pathname] ?? PAGE_SEO['/']
}
