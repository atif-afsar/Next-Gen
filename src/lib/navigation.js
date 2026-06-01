/**
 * Page-based navigation — each entry maps to src/Pages/{Page}.jsx
 * and src/Components/{Page}/
 */
export const NAV_PAGES = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Why NextGen', path: '/why-nextgen' },
  { label: 'Contact', path: '/contact' },
]

export const APPLY_PATH = '/contact'

/** Routes that use the Stitch light theme (cream / olive gold) */
export const LIGHT_PAGE_PATHS = ['/why-nextgen', '/contact']

export function isLightPage(pathname) {
  return LIGHT_PAGE_PATHS.includes(pathname)
}

export const FOOTER_MISSION =
  'Cultivating the visionaries and stewards of tomorrow through rigorous faith-based leadership.'

/** Shared footer link columns — used on every page */
export const FOOTER_COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Why NextGen', path: '/why-nextgen' },
      { label: 'Curriculum', path: '/why-nextgen#curriculum' },
    ],
  },
  {
    title: 'People',
    links: [
      { label: 'Faculty', path: '#' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Admissions', path: '/contact#apply' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', path: '#' },
      { label: 'Terms of Service', path: '#' },
    ],
  },
]
