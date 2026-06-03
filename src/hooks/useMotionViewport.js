import { useEffect, useState } from 'react'

const MOBILE_QUERY = '(max-width: 767px)'

/** Looser intersection on small screens so whileInView reliably fires */
export function getMotionViewport(isMobile) {
  if (isMobile) {
    return { once: true, amount: 0.08, margin: '0px 0px 0px 0px' }
  }
  return { once: true, amount: 0.15, margin: '0px 0px -24px 0px' }
}

export function useMotionViewport() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_QUERY).matches : false
  )

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY)
    const onChange = () => setIsMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return getMotionViewport(isMobile)
}
