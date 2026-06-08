import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
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

  const pageContent = reduced ? (
    <Outlet />
  ) : (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: EASE_OUT }}
      >
        <Outlet />
      </motion.main>
    </AnimatePresence>
  )

  return (
    <div
      className={
        light
          ? 'min-h-screen bg-[#fbf9f8] text-[#1b1c1c]'
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
