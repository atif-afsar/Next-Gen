/** Shared motion constants — used by motion.jsx and animation components */

export const EASE_OUT = [0.16, 1, 0.3, 1]

export const EASE_SPRING = { type: 'spring', stiffness: 120, damping: 22 }

export const SECTION_REVEAL = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay, ease: EASE_OUT },
  }),
}

export const FADE_IN = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.55, delay, ease: EASE_OUT },
  }),
}

export const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay, ease: EASE_OUT },
  }),
}

export const SLIDE_FROM_LEFT = {
  hidden: { opacity: 0, x: -24 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
}

export const SLIDE_FROM_RIGHT = {
  hidden: { opacity: 0, x: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
}

export const STAGGER_CONTAINER = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0 },
  },
}

export const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
}

/** Page-load hero sequence — eyebrow → title → subtitle → CTAs */
export const HERO_LOAD_CONTAINER = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

export const HERO_LOAD_ITEM = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
}

export const BUTTON_HOVER = { scale: 1.03 }
export const BUTTON_TAP = { scale: 0.97 }
export const CARD_HOVER_LIFT = { y: -6 }
export const IMAGE_HOVER_SCALE = { scale: 1.04 }
