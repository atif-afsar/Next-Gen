import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  BUTTON_HOVER,
  BUTTON_TAP,
  CARD_HOVER_LIFT,
  EASE_OUT,
  SECTION_REVEAL,
  STAGGER_CONTAINER,
  STAGGER_ITEM,
} from '../../lib/animations.js'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'
import { useMotionViewport } from '../../hooks/useMotionViewport.js'

/** Scroll-triggered section reveal — opacity 0→1, y 40→0 */
export function FadeInSection({
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
export function StaggerContainer({ children, className = '', as: Tag = 'div' }) {
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

/** Card with stagger reveal + hover lift */
export function AnimatedCard({
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

const BUTTON_LAYOUT = 'inline-flex items-center justify-center'

/** Button / link with scale hover & tap */
export function AnimatedButton({
  children,
  className = '',
  to,
  href,
  wrapperClassName = 'w-full sm:w-auto',
  layoutClass = BUTTON_LAYOUT,
  ...props
}) {
  const buttonClass = `${layoutClass} ${className}`.trim()
  const reduced = usePrefersReducedMotion()

  if (to) {
    const link = (
      <Link to={to} className={buttonClass} {...props}>
        {children}
      </Link>
    )

    if (reduced) return link

    return (
      <motion.div
        className={wrapperClassName}
        whileHover={BUTTON_HOVER}
        whileTap={BUTTON_TAP}
        transition={{ duration: 0.2, ease: EASE_OUT }}
      >
        {link}
      </motion.div>
    )
  }

  if (href) {
    if (reduced) {
      return (
        <a href={href} className={buttonClass} {...props}>
          {children}
        </a>
      )
    }

    return (
      <motion.a
        href={href}
        className={buttonClass}
        whileHover={BUTTON_HOVER}
        whileTap={BUTTON_TAP}
        transition={{ duration: 0.2, ease: EASE_OUT }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  if (reduced) {
    return (
      <button type="button" className={buttonClass} {...props}>
        {children}
      </button>
    )
  }

  return (
    <motion.button
      type="button"
      className={buttonClass}
      whileHover={BUTTON_HOVER}
      whileTap={BUTTON_TAP}
      transition={{ duration: 0.2, ease: EASE_OUT }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

/** Subtle underline reveal for highlighted phrases */
export function HighlightText({ children, className = '' }) {
  const reduced = usePrefersReducedMotion()
  const motionViewport = useMotionViewport()

  if (reduced) {
    return (
      <span className={`underline decoration-amber-deep decoration-2 underline-offset-2 ${className}`}>
        {children}
      </span>
    )
  }

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      variants={{
        hidden: { opacity: 0.9 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      {children}
      <motion.span
        className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-amber-deep"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={motionViewport}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
        style={{ originX: 0 }}
        aria-hidden
      />
    </motion.span>
  )
}

const KEY_PHRASES = [
  'Academic Leadership',
  'Islamic Scholarship',
  'Residential Program',
  'Vishwa Guru',
  'Iman',
]

/** Wraps known key phrases with subtle highlight animation */
export function RichTextWithHighlights({ text, className = '' }) {
  const pattern = new RegExp(
    `(${KEY_PHRASES.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'g'
  )
  const segments = text.split(pattern).filter(Boolean)

  return (
    <span className={className}>
      {segments.map((segment, index) =>
        KEY_PHRASES.includes(segment) ? (
          <HighlightText key={`${segment}-${index}`}>{segment}</HighlightText>
        ) : (
          <span key={`text-${index}`}>{segment}</span>
        )
      )}
    </span>
  )
}

/** Page-level fade on load / route change */
export function PageFade({ children, className = '' }) {
  const reduced = usePrefersReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  )
}
