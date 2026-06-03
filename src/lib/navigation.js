import { TEL_URL, TEL_SECONDARY_URL, WHATSAPP_URL, ADDRESS_SHORT } from './contact.js'

/**
 * Page-based navigation — each entry maps to src/Pages/{Page}.jsx
 */
export const NAV_PAGES = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Contact', path: '/contact' },
]

export const APPLY_PATH = '/admissions'

/** Routes that use the Stitch light theme (cream / olive gold) */
export const LIGHT_PAGE_PATHS = [
  '/about',
  '/why-nextgen',
  '/programs',
  '/residential-program',
  '/admissions',
  '/gallery',
  '/contact',
]

export function isLightPage(pathname) {
  return LIGHT_PAGE_PATHS.includes(pathname)
}

export const FOOTER_MISSION =
  'NextGen Academy, Green Fort City, Near AMU Fort, Aligarh — transforming Huffaz into academic leaders through faith with future education, Iman with excellence, and a residential path from Hifz to leadership.'

/** Shared footer link columns */
export const FOOTER_COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Programs', path: '/programs' },
      { label: 'Residential Program', path: '/residential-program' },
      { label: 'Gallery', path: '/gallery' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact Us', path: '/contact' },
      { label: 'Admissions', path: '/admissions' },
      { label: 'Call Us', path: TEL_URL, external: true },
      { label: 'WhatsApp', path: WHATSAPP_URL, external: true },
    ],
  },
  {
    title: 'Visit',
    links: [
      { label: ADDRESS_SHORT, path: '/contact#location' },
      { label: 'Why NextGen', path: '/why-nextgen' },
      { label: 'Privacy Policy', path: '#' },
      { label: 'Terms of Service', path: '#' },
    ],
  },
]
