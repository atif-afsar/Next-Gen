import { Link, useLocation } from 'react-router-dom'
import { FOOTER_COLUMNS, FOOTER_MISSION, isLightPage } from '../../lib/navigation.js'

function FooterLink({ path, label, variant }) {
  const linkClass =
    variant === 'light'
      ? 'inline-block py-1 text-sm text-[#5f5e5e] transition hover:text-[#7a5900] sm:py-0.5'
      : 'inline-block py-1 text-sm text-white/55 transition hover:text-gold sm:py-0.5'

  if (path === '#') {
    return (
      <a href="#" className={linkClass}>
        {label}
      </a>
    )
  }
  return (
    <Link to={path} className={linkClass}>
      {label}
    </Link>
  )
}

export default function Footer() {
  const { pathname } = useLocation()
  const light = isLightPage(pathname)
  const variant = light ? 'light' : 'dark'

  return (
    <footer
      className={
        light
          ? 'border-t border-[#d4c4ac]/20 bg-white py-10 sm:py-12 md:py-16'
          : 'border-t border-white/5 bg-[#0a0a0a] py-10 sm:py-12 md:py-16'
      }
    >
      <div className="container-narrow">
        <div className="flex flex-col gap-10 sm:gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-md lg:max-w-xs">
            <Link
              to="/"
              className={`font-serif text-xl font-medium sm:text-2xl ${
                light ? 'text-[#1b1c1c]' : 'text-gold'
              }`}
            >
              NextGen Academy
            </Link>
            <p
              className={`mt-3 text-sm leading-relaxed sm:mt-4 ${
                light ? 'text-[#5f5e5e]' : 'text-white/55'
              }`}
            >
              {FOOTER_MISSION}
            </p>
          </div>

          <nav
            className="grid w-full grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-10 lg:w-auto lg:max-w-xl lg:flex-1 lg:justify-end"
            aria-label="Footer"
          >
            {FOOTER_COLUMNS.map(({ title, links }, index) => (
              <div
                key={title}
                className={index === FOOTER_COLUMNS.length - 1 ? 'col-span-2 sm:col-span-1' : ''}
              >
                <h4
                  className={`text-[10px] font-semibold uppercase tracking-widest sm:text-xs ${
                    light ? 'text-[#7a5900]' : 'text-gold'
                  }`}
                >
                  {title}
                </h4>
                <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                  {links.map(({ label, path }) => (
                    <li key={label}>
                      <FooterLink path={path} label={label} variant={variant} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p
          className={`mt-8 border-t pt-6 text-center text-xs leading-relaxed sm:mt-10 sm:pt-8 sm:text-sm md:text-left lg:mt-12 ${
            light
              ? 'border-[#d4c4ac]/20 text-[#5f5e5e]/60'
              : 'border-white/5 text-white/40'
          }`}
        >
          © {new Date().getFullYear()} NextGen Academy. Excellence in Leadership and Faith.
        </p>
      </div>
    </footer>
  )
}
