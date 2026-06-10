import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'

const NAV_SCROLL_OFFSET = -88

/** Scroll to top on route change, or to hash target when present */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const timer = window.setTimeout(() => {
        const target = document.getElementById(id)
        if (!target) return
        if (lenis) {
          lenis.scrollTo(target, { offset: NAV_SCROLL_OFFSET, duration: 1.15 })
        } else {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      return () => window.clearTimeout(timer)
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash, lenis])

  return null
}
