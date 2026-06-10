/** NextGen Academy image registry */

/** About page */
export const ABOUT_HERO_CAMPUS = '/images/about-hero-campus.jpg'
export const ABOUT_HERITAGE = '/images/brochure/ims-glimpse-9.jpg'
export const ABOUT_PILLAR_INTELLECTUAL = '/images/brochure/graduate-vision.jpg'
export const ABOUT_PILLAR_SPIRITUAL = '/images/brochure/islamic-scholarship.jpg'
export const ABOUT_PILLAR_LEADERSHIP = '/images/brochure/graduate-identity.jpg'

/** Contact page — light mode */
export const CONTACT_HERO = '/images/contact-hero.jpg'
export const CONTACT_CAMPUS = '/images/contact-campus.jpg'

/** Home page — light curriculum bento (Stitch fa8c439b) */
export const HOME_CURRICULUM_STEM = '/images/brochure/faith-skills.jpg'
export const HOME_CURRICULUM_PHILOSOPHY = '/images/brochure/vision.jpg'
export const HOME_ABOUT_HERITAGE = '/images/brochure/mission.jpg'
export const ABOUT_PAGE_HERO = '/images/brochure/minds-hearts.jpg'

/** Glimpses of IMS — real campus photos from the prospectus */
export const IMS_GLIMPSES = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/brochure/ims-glimpse-${i + 1}.jpg`,
  alt: `Glimpses of IMS — campus life photo ${i + 1}`,
}))
