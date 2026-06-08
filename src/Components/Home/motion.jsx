import { motion } from 'motion/react'
import {
  EASE_OUT,
  EASE_SPRING,
  SECTION_REVEAL,
  FADE_IN,
  SCALE_IN,
  SLIDE_FROM_LEFT,
  SLIDE_FROM_RIGHT,
  STAGGER_CONTAINER,
  STAGGER_ITEM,
  HERO_LOAD_CONTAINER,
  HERO_LOAD_ITEM,
  CARD_HOVER_LIFT,
} from '../../lib/animations.js'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'
import { useMotionViewport } from '../../hooks/useMotionViewport.js'

export {
  EASE_OUT,
  EASE_SPRING,
  STAGGER_CONTAINER as staggerContainer,
  STAGGER_ITEM as staggerItem,
  HERO_LOAD_CONTAINER as heroLoadContainer,
  HERO_LOAD_ITEM as heroLoadItem,
  SECTION_REVEAL as fadeUp,
  FADE_IN as fadeIn,
  SCALE_IN as scaleIn,
  SLIDE_FROM_LEFT as slideFromLeft,
  SLIDE_FROM_RIGHT as slideFromRight,
  motion,
}

export {
  FadeInSection,
  StaggerContainer,
  AnimatedCard,
  AnimatedButton,
  HighlightText,
  RichTextWithHighlights,
  PageFade,
} from '../Common/animations.jsx'

/** @deprecated use useMotionViewport() */
export const viewport = { once: true, amount: 0.15, margin: '0px 0px -24px 0px' }

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
      variants={SECTION_REVEAL}
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
      variants={STAGGER_CONTAINER}
    >
      {children}
    </Component>
  )
}

export function RevealItem({
  children,
  className = '',
  as: Tag = 'div',
  hoverLift = true,
}) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    const Plain =
      Tag === 'li' ? 'li' : Tag === 'article' ? 'article' : 'div'
    return <Plain className={className}>{children}</Plain>
  }

  const Component =
    Tag === 'li' ? motion.li : Tag === 'article' ? motion.article : motion.div

  return (
    <Component
      className={`${hoverLift ? 'premium-card-hover' : ''} ${className}`.trim()}
      variants={STAGGER_ITEM}
      whileHover={hoverLift ? CARD_HOVER_LIFT : undefined}
      transition={{ duration: 0.25, ease: EASE_OUT }}
    >
      {children}
    </Component>
  )
}
