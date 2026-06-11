import { useCallback, useEffect, useRef, useState } from 'react'
import { SplineScene } from '../ui/SplineScene.jsx'
import { useMediaQuery } from '../../hooks/useMediaQuery.js'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'

const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)'
const SCROLL_IDLE_MS = 150

/**
 * @param {{ scene: string }} props
 */
export default function HeroSpline({ scene }) {
  const reducedMotion = usePrefersReducedMotion()
  const hasFinePointer = useMediaQuery(FINE_POINTER_QUERY)

  const containerRef = useRef(null)
  const splineAppRef = useRef(null)
  const scrollIdleTimerRef = useRef(null)

  const [isNearViewport, setIsNearViewport] = useState(true)
  const [hasMounted, setHasMounted] = useState(true)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (reducedMotion) return undefined

    const node = containerRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setIsNearViewport(entry.isIntersecting),
      { rootMargin: '120px 0px', threshold: 0.05 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [reducedMotion])

  useEffect(() => {
    if (isNearViewport) setHasMounted(true)
  }, [isNearViewport])

  const syncPlayback = useCallback(() => {
    const app = splineAppRef.current
    if (!app) return

    // Touch devices: keep ambient motion running while visible (no cursor interaction)
    const shouldPlay = hasFinePointer
      ? isNearViewport && (!isScrolling || isHovering)
      : isNearViewport

    if (shouldPlay && typeof app.play === 'function') app.play()
    else if (typeof app.stop === 'function') app.stop()
  }, [isNearViewport, isScrolling, isHovering, hasFinePointer])

  useEffect(() => {
    syncPlayback()
  }, [syncPlayback])

  useEffect(() => {
    if (reducedMotion || !hasFinePointer) return undefined

    const onScroll = () => {
      if (isHovering) return
      setIsScrolling(true)
      splineAppRef.current?.stop?.()

      clearTimeout(scrollIdleTimerRef.current)
      scrollIdleTimerRef.current = window.setTimeout(() => {
        setIsScrolling(false)
      }, SCROLL_IDLE_MS)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(scrollIdleTimerRef.current)
    }
  }, [reducedMotion, isHovering, hasFinePointer])

  const handleLoad = useCallback(
    (app) => {
      splineAppRef.current = app
      if (typeof app.play === 'function') app.play()
      syncPlayback()
    },
    [syncPlayback, hasFinePointer],
  )

  const handlePointerEnter = useCallback(() => {
    if (!hasFinePointer) return
    setIsHovering(true)
    splineAppRef.current?.play?.()
  }, [hasFinePointer])

  const handlePointerLeave = useCallback(() => {
    setIsHovering(false)
    syncPlayback()
  }, [syncPlayback])

  if (reducedMotion) {
    return (
      <div className="hero-spline-fallback" aria-hidden>
        <div className="hero-spline-fallback-ring" />
        <div className="hero-spline-fallback-core" />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`hero-spline-canvas-inner h-full w-full ${hasFinePointer ? '' : 'hero-spline-canvas-inner--ambient'}`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {hasMounted ? (
        <SplineScene
          scene={scene}
          className="hero-spline-scene"
          onLoad={handleLoad}
          renderOnDemand={hasFinePointer}
        />
      ) : (
        <div className="hero-spline-fallback hero-spline-fallback--loading" aria-hidden>
          <span className="spline-loader" />
        </div>
      )}
    </div>
  )
}
