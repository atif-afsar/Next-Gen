import {
  SITE_URL,
  SITE_NAME,
  TAGLINE,
  DEFAULT_DESCRIPTION,
  ADDRESS,
  GEO,
  PHONES,
  LOGO_URL,
  OG_IMAGE,
  FAQ_ITEMS,
} from './seo.js'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ['NextGen Academy Aligarh', 'Islamic Mission School NextGen Academy'],
    url: SITE_URL,
    logo: LOGO_URL,
    image: OG_IMAGE,
    description: DEFAULT_DESCRIPTION,
    slogan: TAGLINE,
    telephone: PHONES.map((p) => `+91-${p.raw}`),
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: 'Aligarh',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Islamic Mission School (IMS)',
    },
  }
}

export function schoolSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'School',
    '@id': `${SITE_URL}/#school`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    telephone: `+91-${PHONES[0].raw}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    educationalLevel: 'Grades 5–8 (ages 10–14)',
    knowsAbout: [
      'Academic Leadership Program',
      'Islamic Scholarship',
      'Hifz Plus program',
      'STEM and robotics',
      'Residential education',
    ],
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: OG_IMAGE,
    url: SITE_URL,
    telephone: PHONES.map((p) => `+91-${p.raw}`),
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
  }
}

/** @param {{ name: string; path: string }[]} items */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
    })),
  }
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/contact?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}
