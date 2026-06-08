/** NextGen Academy — centralized SEO & brand constants */

export const SITE_URL = 'https://nextgenacademy.org.in'
export const SITE_NAME = 'NextGen Academy'
export const TAGLINE = 'Building Academic Leadership for New India'
export const CORE_MESSAGE = 'Where minds graduate with honors, and hearts graduate with Iman.'

export const DEFAULT_DESCRIPTION =
  'NextGen Academy empowers young learners to become compassionate academic leaders, ethical educators, and community scholars — a sister organization of Islamic Mission School in Aligarh, combining ICSE excellence, Islamic scholarship, STEM, and residential education for Grades 5–8.'

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
    title: `${SITE_NAME} | ${TAGLINE}`,
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
    title: `Academic Leadership Program | ${SITE_NAME}`,
    description:
      'The NextGen Academic Leadership Program develops future Academic Leaders and Scholars of Islam — a transformative integrated pathway from middle school through postgraduate study.',
    keywords:
      'Hifz plus academic program, NextGen Academy Hifz program, STEM Islamic school, leadership academy for Huffaz, Islamic academic leadership program',
  },
  admissions: {
    path: '/admissions',
    title: `Admissions | ${SITE_NAME} — Grades 5–8, Ages 10–14`,
    description:
      'Apply to NextGen Academy for Grades 5th to 8th (ages 10–14). Includes Hifz Plus support for Hifz-completed students. Near Fort, Fort Enclave Colony, Aligarh. Call 7037511306 or 9955570749.',
    keywords:
      'NextGen Academy admissions, Islamic residential school admissions Aligarh, Hifz completed students school enrollment',
  },
  residential: {
    path: '/residential-program',
    title: `Residential Program | ${SITE_NAME} — Grades 6–8`,
    description:
      'A home away from home for Grades 6–8 — a nurturing 24/7 learning environment built on four pillars: Intellect, Spirit, Character, and Leadership.',
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
      'NextGen Academy is a sister organization of Islamic Mission School (IMS), empowering young learners to become compassionate academic leaders, ethical educators, and community scholars through integrated academic and Islamic education.',
  },
  {
    question: 'Where is NextGen Academy located?',
    answer:
      'NextGen Academy is at Near Fort, Fort Enclave Colony, Aligarh, UP, India — easily accessible for families across Aligarh and the region.',
  },
  {
    question: 'Is NextGen Academy connected to Islamic Mission School (IMS)?',
    answer:
      'Yes. NextGen Academy is a sister organization of Islamic Mission School (IMS), a value-based ICSE school founded in 2008, carrying forward its legacy of academic excellence and strong ethical character.',
  },
  {
    question: 'Who is the residential program for?',
    answer:
      'Our fully residential program serves students in Grades 6–8, providing a nurturing 24/7 learning environment built on four pillars: Intellect, Spirit, Character, and Leadership.',
  },
  {
    question: 'What is the Hifz Plus program?',
    answer:
      'Hifz Plus supports Hifz-completed students aged 10–14 with academic age-grade alignment through screening, diagnostic evaluation, and a family interview — honoring their spiritual achievement while accelerating academic reintegration.',
  },
  {
    question: 'How do I apply for admissions?',
    answer:
      'Admissions are open for Grades 5th to 8th (ages 10–14). Contact our admissions team at 7037511306 or 9955570749, or visit our Admissions page to begin your application.',
  },
]
