import { motion } from 'motion/react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'
import { useMotionViewport } from '../../hooks/useMotionViewport.js'

export const EASE_OUT = [0.16, 1, 0.3, 1]

const INSTANT = { duration: 0 }
export const EASE_SPRING = { type: 'spring', stiffness: 120, damping: 22 }

/** @deprecated use useMotionViewport() — kept for imports that pass viewport to motion.div */
export const viewport = { once: true, amount: 0.15, margin: '0px 0px -24px 0px' }

/* Hidden states keep opacity: 1 so content stays visible if whileInView never fires (common on mobile) */
export const fadeUp = {
  hidden: { opacity: 1, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: EASE_OUT },
  }),
}

export const fadeIn = {
  hidden: { opacity: 1 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.55, delay, ease: EASE_OUT },
  }),
}

export const scaleIn = {
  hidden: { opacity: 1, scale: 0.97 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, delay, ease: EASE_OUT },
  }),
}

export const slideFromLeft = {
  hidden: { opacity: 1, x: -24 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  }),
}

export const slideFromRight = {
  hidden: { opacity: 1, x: 24 },
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
  hidden: { opacity: 1, y: 20 },
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
  const motionViewport = useMotionViewport()
  const Component = Tag === 'section' ? motion.section : motion.div

  if (reduced) {
    const Plain = Tag === 'section' ? 'section' : 'div'
    return (
      <Plain id={id} className={className} {...props}>
        {children}
      </Plain>
    )
  }

  return (
    <Component
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      variants={fadeUp}
      custom={delay}
      {...props}
    >
      {children}
    </Component>
  )
}

/** Stagger children on scroll */
export function RevealStagger({ children, className = '', as: Tag = 'div' }) {
  const reduced = usePrefersReducedMotion()
  const motionViewport = useMotionViewport()

  if (reduced) {
    const Plain = Tag === 'ul' ? 'ul' : 'div'
    return <Plain className={className}>{children}</Plain>
  }

  const Component = Tag === 'ul' ? motion.ul : motion.div
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      variants={staggerContainer}
    >
      {children}
    </Component>
  )
}

export function RevealItem({ children, className = '', as: Tag = 'div' }) {
  const reduced = usePrefersReducedMotion()
  if (reduced) {
    const Plain =
      Tag === 'li' ? 'li' : Tag === 'article' ? 'article' : 'div'
    return <Plain className={className}>{children}</Plain>
  }

  const Component =
    Tag === 'li' ? motion.li : Tag === 'article' ? motion.article : motion.div
  return (
    <Component className={className} variants={staggerItem}>
      {children}
    </Component>
  )
}

export { motion }
