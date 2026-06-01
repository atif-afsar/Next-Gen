import { Link, NavLink, useLocation } from 'react-router-dom'
import { APPLY_PATH, isLightPage, NAV_PAGES } from '../../lib/navigation.js'

export default function Navbar() {
  const { pathname } = useLocation()
  const light = isLightPage(pathname)

  function linkClassName({ isActive }) {
    if (light) {
      return `text-sm font-medium tracking-wide transition-colors hover:text-[#7a5900] ${
        isActive
          ? 'border-b-2 border-[#7a5900] pb-1 font-semibold text-[#7a5900]'
          : 'text-[#504533]'
      }`
    }
    return `text-sm font-medium transition-colors hover:text-gold ${
      isActive ? 'text-gold' : 'text-white/80'
    }`
  }

  return (
    <header
      className={
        light
          ? 'fixed inset-x-0 top-0 z-50 border-b border-[#d4c4ac]/30 bg-white/70 shadow-[0_10px_30px_rgba(26,26,26,0.04)] backdrop-blur-xl'
          : 'fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md'
      }
    >
      <nav className="container-narrow flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className={`font-serif text-xl font-semibold tracking-wide md:text-2xl ${
            light ? 'text-[#1b1c1c]' : 'text-gold'
          }`}
        >
          NextGen Academy
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_PAGES.map(({ label, path }) => (
            <li key={path}>
              <NavLink to={path} end={path === '/'} className={linkClassName}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to={APPLY_PATH}
          className={
            light
              ? 'rounded-lg bg-[#ffdea3] px-6 py-2.5 text-sm font-semibold text-[#1b1c1c] shadow-sm transition hover:scale-105 active:scale-95'
              : 'rounded-full bg-gold px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#e8c96a]'
          }
        >
          Apply Now
        </NavLink>
      </nav>
    </header>
  )
}
