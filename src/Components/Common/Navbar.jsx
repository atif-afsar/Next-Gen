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

/* Hash-aware active match — only the exact link (path + hash) highlights */
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
        const base = `group relative block whitespace-nowrap px-2 py-2 text-sm font-medium transition-colors duration-200 ${className}`
        if (light) {
          return `${base} ${isActive ? 'text-[#7a5900]' : 'text-[#504533] hover:text-[#7a5900]'}`
        }
        return `${base} ${isActive ? 'text-gold' : 'text-white/85 hover:text-gold'}`
      }}
    >
      {({ isActive }) => (
        <>
          {children}
          <span
            className={`absolute inset-x-2 bottom-0 h-0.5 origin-center rounded-full transition-transform duration-300 ease-out ${
              light ? 'bg-[#7a5900]' : 'bg-gold'
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
    ? `flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors ${
        active || open ? 'text-[#7a5900]' : 'text-[#504533] hover:text-[#7a5900]'
      }`
    : `flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors ${
        active || open ? 'text-gold' : 'text-white/85 hover:text-gold'
      }`

  const panelClass = light
    ? 'absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 rounded-xl border border-[#d4c4ac]/40 bg-white py-2 shadow-[0_12px_40px_rgba(26,26,26,0.12)]'
    : 'absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 rounded-xl border border-white/10 bg-[#141414] py-2 shadow-[0_12px_40px_rgba(0,0,0,0.45)]'

  const itemClass = light
    ? 'block px-4 py-2.5 text-sm text-[#504533] transition hover:bg-[#f3ecd9] hover:text-[#7a5900]'
    : 'block px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/5 hover:text-gold'

  const activeItemClass = light ? 'bg-[#ffdea3]/25 font-medium text-[#7a5900]' : 'bg-gold/10 font-medium text-gold'

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
          className={`absolute inset-x-2 bottom-0 h-0.5 rounded-full ${light ? 'bg-[#7a5900]' : 'bg-gold'}`}
          aria-hidden
        />
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: EASE_OUT }}
            className={panelClass}
            role="menu"
          >
            {NAV_PROGRAMS.map(({ label, path }) => {
              const isActive = isExactPathActive(path, pathname, hash)
              return (
                <Link
                  key={path}
                  to={path}
                  role="menuitem"
                  className={`${itemClass} ${isActive ? activeItemClass : ''}`}
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
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const barClass = light ? 'bg-[#1b1c1c]' : 'bg-white'

  function mobileLinkClass(isActive) {
    if (light) {
      return isActive
        ? 'border-[#7a5900] bg-[#ffdea3]/25 font-semibold text-[#7a5900]'
        : 'border-transparent text-[#1b1c1c]/80 hover:border-[#d4c4ac] hover:bg-white/60 hover:text-[#7a5900] active:bg-[#ffdea3]/20 active:text-[#7a5900]'
    }
    return isActive
      ? 'border-gold bg-gold/10 font-semibold text-gold'
      : 'border-transparent text-white/85 hover:border-white/15 hover:bg-white/5 hover:text-gold active:bg-gold/10 active:text-gold'
  }

  const headerClass = isOpen
    ? light
      ? 'max-lg:border-[#d4c4ac]/30 max-lg:bg-[#faf3e3] max-lg:shadow-none max-lg:backdrop-blur-none lg:border-b lg:border-[#d4c4ac]/30 lg:bg-white/70 lg:shadow-[0_10px_30px_rgba(26,26,26,0.04)] lg:backdrop-blur-xl'
      : 'max-lg:border-white/10 max-lg:bg-[#0f0f0f] max-lg:shadow-none max-lg:backdrop-blur-none lg:border-b lg:border-white/5 lg:bg-[#0a0a0a]/80 lg:backdrop-blur-md'
    : light
      ? 'border-b border-[#d4c4ac]/30 bg-white/70 shadow-[0_10px_30px_rgba(26,26,26,0.04)] backdrop-blur-xl'
      : 'border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md'

  return (
    <>
      <motion.header
        initial={reduced ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: EASE_OUT }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${headerClass}`}
      >
        <nav
          className="container-narrow grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3 md:h-[4.5rem] md:gap-4"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="NextGen Academy — Home"
            className={`group flex shrink-0 items-center gap-2 rounded-lg transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:gap-2.5 ${
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
                className="h-9 w-9 object-contain sm:h-10 sm:w-10"
                width={40}
                height={40}
                decoding="async"
              />
            </span>
            <span className="hidden min-w-0 flex-col justify-center gap-0.5 sm:flex sm:gap-1">
              <span
                className={`whitespace-nowrap font-serif text-[0.95rem] leading-none sm:text-base md:text-lg ${
                  light ? 'text-[#1b1c1c]' : 'text-white'
                }`}
              >
                <span className="font-semibold">NextGen</span>
                <span className={light ? 'text-[#7a5900]' : 'text-gold'}> Academy</span>
              </span>
              <span
                aria-hidden
                className={`h-px w-10 rounded-full sm:w-12 ${
                  light
                    ? 'bg-gradient-to-r from-[#7a5900]/55 to-transparent'
                    : 'bg-gradient-to-r from-gold/80 to-transparent'
                }`}
              />
            </span>
          </Link>

          {/* Desktop nav — lg+ */}
          <ul className="hidden items-center justify-center gap-0.5 lg:flex lg:gap-1">
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

          {/* Right: CTA + hamburger */}
          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <AnimatedButton
              to={APPLY_PATH}
              wrapperClassName="hidden lg:inline-flex"
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition sm:px-5 sm:py-2.5 sm:text-sm ${
                light
                  ? 'bg-[#ffdea3] text-[#1b1c1c] shadow-sm hover:bg-[#ffd088]'
                  : 'bg-gold text-black hover:bg-[#e8c96a]'
              }`}
            >
              Apply Now
            </AnimatedButton>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border transition active:scale-95 lg:hidden ${
                light
                  ? 'border-[#d4c4ac]/50 bg-white/80 text-[#1b1c1c]'
                  : 'border-white/15 bg-white/5 text-white'
              }`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <div className="flex w-5 flex-col justify-center gap-1.5">
                <span
                  className={`block h-0.5 w-5 origin-center transition-transform duration-200 ${barClass} ${
                    isOpen ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 transition-all duration-150 ${barClass} ${
                    isOpen ? 'scale-x-0 opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 origin-center transition-transform duration-200 ${barClass} ${
                    isOpen ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={isOpen ? 0 : -1}
          className={`absolute inset-0 bg-black/55 backdrop-blur-[2px] transition-opacity duration-200 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
      </div>

      {/* Mobile drawer */}
      <div
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
        className={`fixed inset-y-0 right-0 z-[45] flex w-full max-w-sm flex-col shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:hidden ${
          light ? 'bg-[#faf3e3]' : 'bg-[#0f0f0f]'
        } ${isOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full'}`}
      >
        {/* Drawer header */}
        <div
          className={`flex shrink-0 items-center justify-between border-b px-5 py-4 pt-[max(1rem,env(safe-area-inset-top))] ${
            light ? 'border-[#d4c4ac]/30' : 'border-white/10'
          }`}
        >
          <span className={`font-serif text-lg ${light ? 'text-[#1b1c1c]' : 'text-white'}`}>
            Menu
          </span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className={`flex h-9 w-9 items-center justify-center rounded-lg ${
              light ? 'text-[#504533] hover:bg-[#efe7d2]' : 'text-white/70 hover:bg-white/10'
            }`}
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Scrollable links */}
        <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-5" data-lenis-prevent>
          {NAV_MOBILE_GROUPS.map(({ title, links }) => (
            <div key={title} className="mb-6 last:mb-2">
              <p
                className={`mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                  light ? 'text-[#7a5900]' : 'text-gold'
                }`}
              >
                {title}
              </p>
              <ul className="space-y-1">
                {links.map(({ label, path }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      tabIndex={isOpen ? 0 : -1}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-lg border-l-2 px-3 py-3 text-[0.95rem] font-medium leading-snug transition-colors duration-150 ${mobileLinkClass(
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

        {/* Sticky CTA */}
        <div
          className={`shrink-0 border-t p-4 pb-[max(1rem,env(safe-area-inset-bottom))] ${
            light ? 'border-[#d4c4ac]/30 bg-[#faf3e3]' : 'border-white/10 bg-[#0f0f0f]'
          }`}
        >
          <NavLink
            to={APPLY_PATH}
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            className={`block w-full rounded-xl py-3.5 text-center text-sm font-semibold tracking-wide active:scale-[0.98] ${
              light ? 'bg-[#ffdea3] text-[#1b1c1c]' : 'bg-gold text-black'
            }`}
          >
            Apply Now
          </NavLink>
        </div>
      </div>
    </>
  )
}
