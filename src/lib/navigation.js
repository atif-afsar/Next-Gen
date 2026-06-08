import { TEL_URL, TEL_SECONDARY_URL, WHATSAPP_URL, ADDRESS_SHORT } from './contact.js'

/** Full list — mobile menu & footer */
export const NAV_PAGES = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Vision & Mission', path: '/about#vision-mission' },
  { label: 'Academic Leadership Program', path: '/programs' },
  { label: 'Islamic Scholarship', path: '/programs#islamic-scholarship' },
  { label: 'Residential Program', path: '/residential-program' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Hifz Plus', path: '/admissions#hifz-plus' },
  { label: 'Contact', path: '/contact' },
]

/** Desktop top-level links */
export const NAV_PRIMARY = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
]

/** Desktop "Programs" dropdown */
export const NAV_PROGRAMS = [
  { label: 'Vision & Mission', path: '/about#vision-mission' },
  { label: 'Academic Leadership Program', path: '/programs' },
  { label: 'Islamic Scholarship', path: '/programs#islamic-scholarship' },
  { label: 'Residential Program', path: '/residential-program' },
  { label: 'Hifz Plus', path: '/admissions#hifz-plus' },
]

export const NAV_SECONDARY = [
  { label: 'Admissions', path: '/admissions' },
  { label: 'Contact', path: '/contact' },
]

/** Mobile drawer — grouped for readability */
export const NAV_MOBILE_GROUPS = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
    ],
  },
  {
    title: 'Programs',
    links: NAV_PROGRAMS,
  },
  {
    title: 'Admissions',
    links: [
      { label: 'Admissions', path: '/admissions' },
      { label: 'Hifz Plus', path: '/admissions#hifz-plus' },
    ],
  },
  {
    title: 'Connect',
    links: [{ label: 'Contact', path: '/contact' }],
  },
]

export const APPLY_PATH = '/admissions'

/** Routes that use the Stitch light theme (cream / olive gold) */
export const LIGHT_PAGE_PATHS = [
  '/',
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

export function isProgramsNavActive(pathname) {
  return NAV_PROGRAMS.some(({ path }) => pathname === path.split('#')[0])
}

export const FOOTER_MISSION =
  'NextGen Academy — A sister organization of Islamic Mission School. Building Academic Leadership for New India.'

/** Shared footer link columns */
export const FOOTER_COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Vision & Mission', path: '/about#vision-mission' },
      { label: 'Academic Leadership Program', path: '/programs' },
      { label: 'Islamic Scholarship', path: '/programs#islamic-scholarship' },
      { label: 'Residential Program', path: '/residential-program' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { label: 'Admissions', path: '/admissions' },
      { label: 'Hifz Plus', path: '/admissions#hifz-plus' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Call Us', path: TEL_URL, external: true },
      { label: 'WhatsApp', path: WHATSAPP_URL, external: true },
      { label: ADDRESS_SHORT, path: '/contact#location' },
      { label: 'Privacy Policy', path: '#' },
      { label: 'Terms of Service', path: '#' },
    ],
  },
]
