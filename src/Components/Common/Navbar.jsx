import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { AnimatedButton } from './animations.jsx'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'
import {
  APPLY_PATH,
  isLightPage,
  isProgramsNavActive,
  NAV_MOBILE_GROUPS,
  NAV_PRIMARY,
  NAV_PROGRAMS,
  NAV_SECONDARY,
} from '../../lib/navigation.js'
import logo from '../../assets/image.png'

const EASE_OUT = [0.16, 1, 0.3, 1]

function isExactPathActive(path, pathname, hash) {
  const [base, linkHash = ''] = path.split('#')
  if (pathname !== base) return false
  const currentHash = hash.replace('#', '')
  return linkHash === currentHash
}

function NavItem({ to, end, children, light, className = '' }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => {
        const base = `group relative block whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors duration-200 ${className}`
        if (light) {
          return `${base} ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}`
        }
        return `${base} ${isActive ? 'text-gold' : 'text-white/80 hover:text-gold'}`
      }}
    >
      {({ isActive }) => (
        <>
          {children}
          <span
            className={`absolute inset-x-3 bottom-0 h-0.5 origin-center rounded-full transition-transform duration-300 ease-out will-change-transform ${
              light ? 'bg-white' : 'bg-gold'
            } ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
            aria-hidden
          />
        </>
      )}
    </NavLink>
  )
}

function ProgramsDropdown({ light, pathname, hash, onNavigate }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const active = isProgramsNavActive(pathname)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    function handleClick(e) {
      if (!ref.current?.contains(e.target)) setOpen(false)
    }
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const triggerClass = light
    ? `flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
        active || open ? 'text-white' : 'text-white/80 hover:text-white'
      }`
    : `flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
        active || open ? 'text-gold' : 'text-white/80 hover:text-gold'
      }`

  return (
    <li ref={ref} className="relative">
      <button
        type="button"
        className={triggerClass}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        Programs
        <span
          className={`material-symbols-outlined text-base transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden
        >
          expand_more
        </span>
      </button>
      {(active || open) && (
        <span
          className={`absolute inset-x-3 bottom-0 h-0.5 rounded-full ${light ? 'bg-white' : 'bg-gold'}`}
          aria-hidden
        />
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: EASE_OUT }}
            className={`absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 rounded-xl border py-2 shadow-xl will-change-transform ${
              light 
                ? 'border-[#d4c4ac]/40 bg-white shadow-[0_12px_40px_rgba(26,26,26,0.12)]' 
                : 'border-white/10 bg-[#141414] shadow-[0_12px_40px_rgba(0,0,0,0.45)]'
            }`}
            role="menu"
          >
            {NAV_PROGRAMS.map(({ label, path }) => {
              const isActive = isExactPathActive(path, pathname, hash)
              return (
                <Link
                  key={path}
                  to={path}
                  role="menuitem"
                  className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                    light
                      ? `${isActive ? 'bg-[#ffdea3]/25 font-medium text-[#7a5900]' : 'text-[#504533] hover:bg-[#f3ecd9] hover:text-[#7a5900]'}`
                      : `${isActive ? 'bg-gold/10 font-medium text-gold' : 'text-white/80 hover:bg-white/5 hover:text-gold'}`
                  }`}
                  onClick={() => {
                    setOpen(false)
                    onNavigate?.()
                  }}
                >
                  {label}
                </Link>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default function Navbar() {
  const { pathname, hash } = useLocation()
  const light = isLightPage(pathname)
  const reduced = usePrefersReducedMotion()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  function mobileLinkClass(isActive) {
    if (light) {
      return isActive
        ? 'border-[#7a5900] bg-[#ffdea3]/25 font-semibold text-[#7a5900]'
        : 'border-transparent text-[#1b1c1c]/80 active:bg-[#ffdea3]/20'
    }
    return isActive
      ? 'border-gold bg-gold/10 font-semibold text-gold'
      : 'border-transparent text-white/85 active:bg-gold/10'
  }

  const headerClass = light
    ? 'border-b border-white/15 bg-primary shadow-[0_10px_30px_rgba(122,89,0,0.15)]'
    : 'border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md'

  return (
    <>
      <motion.header
        initial={reduced ? false : { y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: EASE_OUT }}
        className={`fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-200 md:h-20 ${headerClass}`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          
          {/* Brand/Logo Area */}
          <Link
            to="/"
            aria-label="NextGen Academy — Home"
            className="flex items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <div className={`flex shrink-0 items-center rounded-lg bg-white p-1.5 ${light ? 'shadow-md' : 'shadow-lg'}`}>
              <img src={logo} alt="" className="h-8 w-8 object-contain sm:h-9 sm:w-9" width={36} height={36} />
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="truncate font-serif text-sm font-semibold tracking-tight text-white sm:text-base md:text-lg">
                NextGen<span className={light ? 'text-white/90' : 'text-gold'}> Academy</span>
              </span>
              <span className={`h-0.5 w-6 rounded-full sm:w-8 ${light ? 'bg-white/50' : 'bg-gold/60'}`} />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 lg:flex">
            <ul className="flex items-center gap-1">
              {NAV_PRIMARY.map(({ label, path }) => (
                <li key={path}>
                  <NavItem to={path} end={path === '/'} light={light}>
                    {label}
                  </NavItem>
                </li>
              ))}
              <ProgramsDropdown light={light} pathname={pathname} hash={hash} />
              {NAV_SECONDARY.map(({ label, path }) => (
                <li key={path}>
                  <NavItem to={path} light={light}>
                    {label}
                  </NavItem>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Call / Menu Buttons */}
          <div className="flex items-center gap-4">
            <AnimatedButton
              to={APPLY_PATH}
              wrapperClassName="hidden lg:inline-flex"
              className={`rounded-full px-5 py-2 text-sm font-semibold tracking-wide shadow-sm transition-transform active:scale-[0.98] ${
                light ? 'bg-white text-[#1b1c1c] hover:bg-white/90' : 'bg-gold text-black hover:bg-[#e8c96a]'
              }`}
            >
              Apply Now
            </AnimatedButton>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors will-change-transform active:scale-95 lg:hidden ${
                light ? 'border-white/20 bg-white/10 text-white' : 'border-white/15 bg-white/5 text-white'
              }`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <div className="relative flex h-5 w-5 flex-col justify-center gap-1.5">
                <span className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${isOpen ? 'absolute translate-y-0 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 bg-white transition-opacity duration-150 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-white transition-transform duration-200 ${isOpen ? 'absolute translate-y-0 -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Optimized Native Mobile Menu Stack */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[4px] lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Side Sheet Panel Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col shadow-2xl will-change-transform lg:hidden ${
                light ? 'bg-[#faf3e3]' : 'bg-[#0f0f0f]'
              }`}
            >
              {/* Menu Sheet Top Header Container */}
              <div className={`flex shrink-0 items-center justify-between border-b px-5 py-4 pt-[max(1rem,env(safe-area-inset-top))] ${
                light ? 'border-[#d4c4ac]/30' : 'border-white/10'
              }`}>
                <span className={`font-serif text-lg font-medium ${light ? 'text-[#1b1c1c]' : 'text-white'}`}>Menu</span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                    light ? 'text-[#504533] hover:bg-[#efe7d2]' : 'text-white/70 hover:bg-white/10'
                  }`}
                  aria-label="Close menu"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>

              {/* Scrollable Nav Link Listing Context */}
              <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-6">
                {NAV_MOBILE_GROUPS.map(({ title, links }) => (
                  <div key={title} className="mb-6 last:mb-2">
                    <p className={`mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.2em] ${light ? 'text-[#7a5900]' : 'text-gold'}`}>
                      {title}
                    </p>
                    <ul className="space-y-1">
                      {links.map(({ label, path }) => (
                        <li key={path}>
                          <Link
                            to={path}
                            onClick={() => setIsOpen(false)}
                            className={`block rounded-xl border-l-4 px-4 py-3 text-base font-medium transition-colors duration-150 ${mobileLinkClass(
                              isExactPathActive(path, pathname, hash)
                            )}`}
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>

              {/* Fixed Base Control Element Anchor */}
              <div className={`shrink-0 border-t p-4 pb-[max(1rem,env(safe-area-inset-bottom))] ${
                light ? 'border-[#d4c4ac]/30 bg-[#faf3e3]' : 'border-white/10 bg-[#0f0f0f]'
              }`}>
                <NavLink
                  to={APPLY_PATH}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full rounded-xl py-3.5 text-center text-sm font-semibold tracking-wide transition-transform active:scale-[0.98] ${
                    light ? 'bg-[#ffdea3] text-[#1b1c1c]' : 'bg-gold text-black'
                  }`}
                >
                  Apply Now
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}