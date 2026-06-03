import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { APPLY_PATH, isLightPage, NAV_PAGES } from '../../lib/navigation.js'
import logo from '../../assets/image.png'

const EASE_OUT = [0.16, 1, 0.3, 1]

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

  /** Hamburger colors: match open mobile menu surface */
  const barClass = light ? 'bg-[#1b1c1c]' : 'bg-white'

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
      ? 'max-md:border-[#d4c4ac]/30 max-md:bg-[#fcfaf7] max-md:shadow-none max-md:backdrop-blur-none md:border-b md:border-[#d4c4ac]/30 md:bg-white/70 md:shadow-[0_10px_30px_rgba(26,26,26,0.04)] md:backdrop-blur-xl'
      : 'max-md:border-white/10 max-md:bg-[#0f0f0f] max-md:shadow-none max-md:backdrop-blur-none md:border-b md:border-white/5 md:bg-[#0a0a0a]/80 md:backdrop-blur-md'
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
              aria-label="NextGen Academy — Home"
              className={`group flex shrink-0 items-center gap-2.5 rounded-lg transition-opacity duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:gap-3 ${
                light ? 'focus-visible:outline-[#7a5900]' : 'focus-visible:outline-gold'
              }`}
            >
              <span
                className={
                  light
                    ? 'flex shrink-0 items-center'
                    : 'flex shrink-0 items-center rounded-lg bg-white px-1.5 py-1 shadow-[0_2px_14px_rgba(0,0,0,0.35)]'
                }
              >
                <img
                  src={logo}
                  alt=""
                  aria-hidden
                  className="h-9 w-9 object-contain object-top sm:h-10 sm:w-10"
                  width={40}
                  height={40}
                  decoding="async"
                />
              </span>
              <span className="flex min-w-0 flex-col leading-none">
                <span
                  className={`font-serif text-base font-semibold tracking-wide sm:text-lg md:text-xl ${
                    light ? 'text-[#1b1c1c]' : 'text-white'
                  }`}
                >
                  NextGen
                </span>
                <span
                  className={`mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] sm:text-[10px] sm:tracking-[0.22em] md:text-[11px] ${
                    light ? 'text-[#7a5900]' : 'text-gold'
                  }`}
                >
                  Academy
                </span>
              </span>
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

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full active:scale-95 md:hidden"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <div className="flex w-5 flex-col justify-center gap-1.5">
                <span
                  className={`block h-[1.5px] w-5 origin-center transition-transform duration-200 ease-out will-change-transform ${barClass} ${
                    isOpen ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 transition-[opacity,transform] duration-150 ease-out ${barClass} ${
                    isOpen ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 origin-center transition-transform duration-200 ease-out will-change-transform ${barClass} ${
                    isOpen ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu — CSS only (no mount/unmount) for smooth open/close */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={isOpen ? 0 : -1}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ease-out ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
      </div>

      <div
        aria-hidden={!isOpen}
        inert={!isOpen ? '' : undefined}
        className={`fixed inset-x-0 top-0 z-[45] flex h-[100dvh] w-full flex-col overscroll-contain px-6 pb-8 pt-24 transition-[opacity,visibility] duration-200 ease-out will-change-[opacity] md:hidden ${
          light ? 'bg-[#fcfaf7]' : 'bg-[#0f0f0f]'
        } ${isOpen ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'}`}
        style={{ transform: 'translateZ(0)' }}
      >
        <ul
          className={`flex flex-1 flex-col justify-center gap-2 py-6 transition-opacity duration-200 ease-out sm:gap-3 ${
            isOpen ? 'opacity-100 delay-75' : 'opacity-0 delay-0'
          }`}
        >
          {NAV_PAGES.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 font-serif text-3xl font-medium tracking-wide transition-colors duration-150 sm:py-2.5 sm:text-4xl ${mobileLinkClass(isActive)}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div
          className={`shrink-0 pt-4 transition-opacity duration-200 ease-out ${
            isOpen ? 'opacity-100 delay-100' : 'opacity-0 delay-0'
          }`}
        >
          <NavLink
            to={APPLY_PATH}
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            className={`block w-full text-center font-semibold tracking-wide active:scale-[0.98] ${
              light
                ? 'rounded-lg bg-[#ffdea3] py-4 text-base text-[#1b1c1c]'
                : 'rounded-full bg-gold py-3.5 text-base text-black'
            }`}
          >
            Apply Now
          </NavLink>
        </div>
      </div>
    </>
  )
}
