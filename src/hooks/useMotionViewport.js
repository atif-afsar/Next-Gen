import { useEffect, useState } from 'react'

const MOBILE_QUERY = '(max-width: 767px)'

/* Positive bottom margin pre-triggers reveals before elements enter the
   viewport, so content is already visible when the user scrolls to it */
export function getMotionViewport(isMobile) {
  if (isMobile) {
    return { once: true, amount: 0, margin: '0px 0px 25% 0px' }
  }
  return { once: true, amount: 0.05, margin: '0px 0px 15% 0px' }
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
