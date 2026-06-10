import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { isLightPage } from '../../lib/navigation.js'
import { EASE_OUT } from '../../lib/animations.js'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import FloatingContact from './FloatingContact.jsx'
import ScrollToHash from './ScrollToHash.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  const light = isLightPage(pathname)
  const reduced = usePrefersReducedMotion()

  /* No exit animation / mode="wait" — pages must render instantly on navigation */
  const pageContent = reduced ? (
    <main>
      <Outlet />
    </main>
  ) : (
    <motion.main
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: EASE_OUT }}
    >
      <Outlet />
    </motion.main>
  )

  return (
    <div
      className={
        light
          ? 'min-h-screen bg-[#faf3e3] text-[#1b1c1c]'
          : 'min-h-screen bg-[#0a0a0a] text-white'
      }
    >
      <ScrollToHash />
      <Navbar />
      {pageContent}
      <Footer />
      <FloatingContact />
    </div>
  )
}
