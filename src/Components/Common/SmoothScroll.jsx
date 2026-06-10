import { ReactLenis } from 'lenis/react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'

const LENIS_OPTIONS = {
  lerp: 0.09,
  duration: 1.15,
  smoothWheel: true,
  touchMultiplier: 1.15,
  wheelMultiplier: 0.92,
  prevent: (node) => Boolean(node.closest('[data-lenis-prevent]')),
}

export default function SmoothScroll({ children }) {
  const reduced = usePrefersReducedMotion()

  if (reduced) return children

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  )
}
