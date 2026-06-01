import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { APPLY_PATH, isLightPage, NAV_PAGES } from '../../lib/navigation.js'

const EASE_OUT = [0.16, 1, 0.3, 1]
const EASE_IN_OUT = [0.76, 0, 0.24, 1]

const menuVariants = {
  initial: { opacity: 0, y: -12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.35, ease: EASE_IN_OUT },
  },
}

const listVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
}

const linkVariants = {
  initial: { y: 24 },
  animate: {
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
  exit: {
    y: 12,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
}

export default function Navbar() {
  const { pathname } = useLocation()
  const light = isLightPage(pathname)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  function linkClassName({ isActive }) {
    if (light) {
      return `relative text-base font-medium tracking-wide transition-colors duration-300 hover:text-[#7a5900] ${
        isActive ? 'font-semibold text-[#7a5900]' : 'text-[#504533]'
      }`
    }
    return `relative text-base font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
      isActive ? 'text-gold' : 'text-white/80'
    }`
  }

  /** Hamburger + logo colors: match open mobile menu surface, not animated opacity */
  const barClass = light ? 'bg-[#1b1c1c]' : 'bg-white'
  const logoClass = light ? 'text-[#1b1c1c]' : 'text-gold'

  function mobileLinkClass(isActive) {
    if (light) {
      return isActive
        ? 'text-[#7a5900]'
        : 'text-[#1b1c1c]/75 hover:text-[#7a5900]'
    }
    return isActive ? 'text-gold' : 'text-white/90 hover:text-gold'
  }

  const headerClass = isOpen
    ? light
      ? 'max-md:border-[#d4c4ac]/30 max-md:bg-[#fcfaf7] max-md:shadow-none md:border-b md:border-[#d4c4ac]/30 md:bg-white/70 md:shadow-[0_10px_30px_rgba(26,26,26,0.04)] md:backdrop-blur-xl'
      : 'max-md:border-white/10 max-md:bg-[#0f0f0f] max-md:shadow-none md:border-b md:border-white/5 md:bg-[#0a0a0a]/80 md:backdrop-blur-md'
    : light
      ? 'border-b border-[#d4c4ac]/30 bg-white/70 shadow-[0_10px_30px_rgba(26,26,26,0.04)] backdrop-blur-xl'
      : 'border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md'

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: EASE_OUT }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${headerClass}`}
      >
        <nav className="container-narrow flex h-16 items-center justify-between md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
          >
            <Link
              to="/"
              className={`font-serif text-xl font-semibold tracking-wide md:text-2xl ${logoClass}`}
            >
              NextGen Academy
            </Link>
          </motion.div>

          <motion.ul
            className="hidden items-center gap-10 md:flex"
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
            }}
          >
            {NAV_PAGES.map(({ label, path }) => (
              <motion.li
                key={path}
                className="relative py-2"
                variants={{
                  initial: { opacity: 0, y: -8 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
                }}
              >
                <NavLink to={path} end={path === '/'} className={linkClassName}>
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <motion.div
                          layoutId="desktopActiveUnderline"
                          className={`absolute bottom-0 left-0 h-[2px] w-full ${
                            light ? 'bg-[#7a5900]' : 'bg-gold'
                          }`}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>

          <div className="flex items-center gap-4">
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.35, ease: EASE_OUT }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <NavLink
                to={APPLY_PATH}
                className={
                  light
                    ? 'inline-block rounded-lg bg-[#ffdea3] px-6 py-2.5 text-sm font-semibold text-[#1b1c1c] shadow-sm'
                    : 'inline-block rounded-full bg-gold px-5 py-2 text-sm font-semibold text-black hover:bg-[#e8c96a]'
                }
              >
                Apply Now
              </NavLink>
            </motion.div>

            <motion.button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full md:hidden"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              whileTap={{ scale: 0.92 }}
            >
              <div className="flex w-5 flex-col gap-1.5">
                <motion.span
                  animate={
                    isOpen
                      ? { rotate: 45, y: 5, width: '100%' }
                      : { rotate: 0, y: 0, width: '100%' }
                  }
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                  className={`block h-[1.5px] origin-center ${barClass}`}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`block h-[1.5px] w-full ${barClass}`}
                />
                <motion.span
                  animate={
                    isOpen
                      ? { rotate: -45, y: -5, width: '100%' }
                      : { rotate: 0, y: 0, width: '100%' }
                  }
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                  className={`block h-[1.5px] origin-center ${barClass}`}
                />
              </div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              key={light ? 'menu-light' : 'menu-dark'}
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`fixed inset-x-0 top-0 z-[45] flex h-[100dvh] w-full flex-col px-6 pb-8 pt-24 md:hidden ${
                light ? 'bg-[#fcfaf7]' : 'bg-[#0f0f0f]'
              }`}
            >
              <motion.ul
                variants={listVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-1 flex-col justify-center gap-2 py-6 sm:gap-3"
              >
                {NAV_PAGES.map(({ label, path }) => (
                  <motion.li key={path} variants={linkVariants} className="overflow-hidden">
                    <NavLink
                      to={path}
                      end={path === '/'}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block py-2 font-serif text-3xl font-medium tracking-wide sm:py-2.5 sm:text-4xl ${mobileLinkClass(isActive)}`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: 0.35, duration: 0.4, ease: EASE_OUT }}
                className="shrink-0 pt-4"
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <NavLink
                    to={APPLY_PATH}
                    className={`block w-full text-center font-semibold tracking-wide ${
                      light
                        ? 'rounded-lg bg-[#ffdea3] py-4 text-base text-[#1b1c1c]'
                        : 'rounded-full bg-gold py-3.5 text-base text-black'
                    }`}
                  >
                    Apply Now
                  </NavLink>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
