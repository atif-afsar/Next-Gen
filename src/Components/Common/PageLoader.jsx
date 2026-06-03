import { useEffect, useRef } from 'react'
import { getLoaderFillMs } from '../../hooks/usePageLoader.js'
import './page-loader.css'

export default function PageLoader({ exiting, onFillComplete }) {
  const fillRef = useRef(null)

  useEffect(() => {
    const el = fillRef.current
    if (!el || !onFillComplete) return

    const fillMs = getLoaderFillMs()
    el.closest('.page-loader')?.style.setProperty('--loader-duration', `${fillMs}ms`)

    const handleDone = () => {
      el.style.willChange = 'auto'
      onFillComplete()
    }

    el.addEventListener('animationend', handleDone, { once: true })
    const fallback = window.setTimeout(handleDone, fillMs + 40)

    return () => {
      el.removeEventListener('animationend', handleDone)
      window.clearTimeout(fallback)
    }
  }, [onFillComplete])

  return (
    <div
      className={`page-loader ${exiting ? 'page-loader--exit' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading NextGen Academy"
    >
      <p className="page-loader__text">NextGen Academy</p>
      <div className="page-loader__line" aria-hidden>
        <div ref={fillRef} className="page-loader__line-fill" />
      </div>
    </div>
  )
}
