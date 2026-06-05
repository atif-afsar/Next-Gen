/** NextGen Academy — centralized SEO & brand constants */

export const SITE_URL = 'https://nextgenacademy.org.in'
export const SITE_NAME = 'NextGen Academy'
export const TAGLINE = 'Building the Architects of Tomorrow'
export const CORE_MESSAGE = 'Transforming Huffaz into Academic Leaders'

export const DEFAULT_DESCRIPTION =
  'NextGen Academy is a premium Islamic academic leadership and residential academy in Aligarh, designed for students from Grade 5 through graduation, especially Hifz-completed students, combining academic excellence, Islamic values, leadership development, STEM, robotics, and residential schooling.'

export const KEYWORDS = [
  'NextGen Academy',
  'NextGen Academy Aligarh',
  'Islamic residential school in Aligarh',
  'Hifz plus academic program',
  'Hifz completed students school',
  'Islamic academic leadership program',
  'residential school for Muslim students',
  'Islamic Mission School Aligarh',
  'IMS sister organization',
  'STEM Islamic school',
  'leadership academy for Huffaz',
  'NextGen Academy Hifz program',
  'NextGen Academy residential school',
  'Hifz plus academic program Aligarh',
].join(', ')

export const ADDRESS = {
  street: 'Near Fort, Fort Enclave Colony',
  locality: 'Aligarh',
  region: 'UP',
  postalCode: '202002',
  country: 'India',
  formatted: 'Near Fort, Fort Enclave Colony, Aligarh, UP, India',
}

export const GEO = {
  latitude: 27.8974,
  longitude: 78.088,
}

export const PHONES = [
  { raw: '7037511306', display: '+91 70375 11306' },
  { raw: '9955570749', display: '+91 99555 70749' },
]

export const OG_IMAGE = `${SITE_URL}/images/hero-bg.png`
export const LOGO_URL = `${SITE_URL}/favicon.png`

/** @typedef {'home'|'about'|'programs'|'admissions'|'residential'|'gallery'|'contact'|'whyNextGen'} PageKey */

/** @type {Record<PageKey, { path: string; title: string; description: string; keywords?: string }>} */
export const PAGE_SEO = {
  home: {
    path: '/',
    title: `${SITE_NAME} | ${TAGLINE} — Islamic Residential School Aligarh`,
    description: DEFAULT_DESCRIPTION,
    keywords: KEYWORDS,
  },
  about: {
    path: '/about',
    title: `About ${SITE_NAME} Aligarh | Islamic Mission School Heritage`,
    description:
      'Discover NextGen Academy in Aligarh — the evolution of Islamic Mission School (IMS), uniting Iman with academic excellence for Huffaz and young leaders at Near Fort, Fort Enclave Colony.',
    keywords:
      'NextGen Academy Aligarh, Islamic Mission School NextGen Academy, about NextGen Academy, IMS sister organization, Islamic academic leadership Aligarh',
  },
  programs: {
    path: '/programs',
    title: `Programs | ${SITE_NAME} — Hifz Plus Academic, STEM & Leadership`,
    description:
      'Explore the Hifz plus academic program at NextGen Academy Aligarh: a Grade 5 through graduation curriculum with STEM, robotics, Islamic scholarship, and leadership for Hifz-completed students.',
    keywords:
      'Hifz plus academic program, NextGen Academy Hifz program, STEM Islamic school, leadership academy for Huffaz, Islamic academic leadership program',
  },
  admissions: {
    path: '/admissions',
    title: `Admissions | ${SITE_NAME} Aligarh — Enroll Grade 5 Through Graduation`,
    description:
      'Apply to NextGen Academy, Near Fort, Fort Enclave Colony, Aligarh. Admissions for Hifz-completed and aspiring Huffaz in our residential Islamic leadership school. Call 7037511306 or 9955570749.',
    keywords:
      'NextGen Academy admissions, Islamic residential school admissions Aligarh, Hifz completed students school enrollment',
  },
  residential: {
    path: '/residential-program',
    title: `Residential Program | ${SITE_NAME} — Islamic Boarding School Aligarh`,
    description:
      'NextGen Academy residential program in Aligarh offers a safe, disciplined, faith-centered boarding environment where character, innovation, and the Hifz-to-leadership journey flourish.',
    keywords:
      'NextGen Academy residential school, Islamic residential school in Aligarh, residential school for Muslim students Aligarh',
  },
  gallery: {
    path: '/gallery',
    title: `Gallery | ${SITE_NAME} Campus — Aligarh`,
    description:
      'View life at NextGen Academy, Near Fort, Fort Enclave Colony, Aligarh — campus, classrooms, residential facilities, and student life at our Islamic leadership academy.',
    keywords: 'NextGen Academy campus, Islamic school Aligarh photos, NextGen Academy gallery',
  },
  contact: {
    path: '/contact',
    title: `Contact ${SITE_NAME} Aligarh | Admissions & Campus Visit`,
    description:
      'Contact NextGen Academy at Near Fort, Fort Enclave Colony, Aligarh. Call 7037511306 or 9955570749 for admissions, campus tours, and Hifz plus academic program enquiries.',
    keywords:
      'NextGen Academy contact, NextGen Academy Aligarh phone, Islamic residential school Aligarh contact',
  },
  whyNextGen: {
    path: '/why-nextgen',
    title: `Why ${SITE_NAME}? | Faith-Powered Academic Leadership Aligarh`,
    description:
      'Why families choose NextGen Academy Aligarh: faith with future education, Iman with academic excellence, and a residential path from Hifz to leadership.',
    keywords:
      'Why NextGen Academy, Islamic academic leadership Aligarh, Hifz to leadership, premium Islamic school Aligarh',
  },
}

export function canonicalUrl(path) {
  const base = SITE_URL.replace(/\/$/, '')
  const p = path.startsWith('/') ? path : `/${path}`
  return `${base}${p === '/' ? '' : p}`
}

export const FAQ_ITEMS = [
  {
    question: 'What is NextGen Academy?',
    answer:
      'NextGen Academy is a premium Islamic academic leadership and residential academy in Aligarh for students from Grade 5 through graduation, especially those who have completed Hifz, combining rigorous academics, Islamic values, STEM, robotics, and leadership development.',
  },
  {
    question: 'Where is NextGen Academy located?',
    answer:
      'NextGen Academy is at Near Fort, Fort Enclave Colony, Aligarh, UP, India — easily accessible for families across Aligarh and the region.',
  },
  {
    question: 'Is NextGen Academy connected to Islamic Mission School (IMS)?',
    answer:
      'Yes. NextGen Academy builds on the legacy of Islamic Mission School (IMS) as a sister evolution — honoring decades of faith-based education while preparing Huffaz for academic and leadership excellence.',
  },
  {
    question: 'Who is the residential program for?',
    answer:
      'Our residential program serves Muslim students seeking a disciplined, values-driven boarding environment in Aligarh, with structured study, character development, and support for the Hifz plus academic journey.',
  },
  {
    question: 'How do I apply for admissions?',
    answer:
      'Contact our admissions team at 7037511306 or 9955570749 by phone or WhatsApp, or visit our Contact page to start your application and schedule a campus visit.',
  },
]
