import { motion } from 'motion/react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'

export const EASE_OUT = [0.16, 1, 0.3, 1]

const INSTANT = { duration: 0 }
export const EASE_SPRING = { type: 'spring', stiffness: 120, damping: 22 }

export const viewport = { once: true, amount: 0.2, margin: '0px 0px -60px 0px' }

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: EASE_OUT },
  }),
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.55, delay, ease: EASE_OUT },
  }),
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay, ease: EASE_OUT },
  }),
}

export const slideFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
}

export const slideFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
}

/** Scroll-triggered section wrapper */
export function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delay = 0,
  id,
  ...props
}) {
  const reduced = usePrefersReducedMotion()
  const Component = Tag === 'section' ? motion.section : motion.div
  return (
    <Component
      id={id}
      className={className}
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? undefined : 'visible'}
      viewport={viewport}
      variants={reduced ? undefined : fadeUp}
      custom={delay}
      transition={reduced ? INSTANT : undefined}
      {...props}
    >
      {children}
    </Component>
  )
}

/** Stagger children on scroll */
export function RevealStagger({ children, className = '', as: Tag = 'div' }) {
  const Component = Tag === 'ul' ? motion.ul : Tag === 'div' ? motion.div : motion.div
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer}
    >
      {children}
    </Component>
  )
}

export function RevealItem({ children, className = '', as: Tag = 'div' }) {
  const Component =
    Tag === 'li' ? motion.li : Tag === 'article' ? motion.article : motion.div
  return (
    <Component className={className} variants={staggerItem}>
      {children}
    </Component>
  )
}

export { motion }
