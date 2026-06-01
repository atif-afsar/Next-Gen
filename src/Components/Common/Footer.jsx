import { Link, useLocation } from 'react-router-dom'
import { FOOTER_COLUMNS, FOOTER_MISSION, isLightPage } from '../../lib/navigation.js'

function FooterLink({ path, label, variant }) {
  const linkClass =
    variant === 'light'
      ? 'text-sm text-[#5f5e5e] transition hover:text-[#7a5900]'
      : 'text-sm text-white/55 transition hover:text-gold'

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
          ? 'border-t border-[#d4c4ac]/20 bg-white py-16'
          : 'border-t border-white/5 bg-[#0a0a0a] py-16'
      }
    >
      <div className="container-narrow">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Link
              to="/"
              className={`font-serif text-2xl font-medium ${
                light ? 'text-[#1b1c1c]' : 'text-gold'
              }`}
            >
              NextGen Academy
            </Link>
            <p
              className={`mt-4 text-sm leading-relaxed ${
                light ? 'text-[#5f5e5e]' : 'text-white/55'
              }`}
            >
              {FOOTER_MISSION}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12">
            {FOOTER_COLUMNS.map(({ title, links }) => (
              <div key={title}>
                <h4
                  className={`text-xs font-semibold uppercase tracking-widest ${
                    light ? 'text-[#7a5900]' : 'text-gold'
                  }`}
                >
                  {title}
                </h4>
                <ul className="mt-4 space-y-2">
                  {links.map(({ label, path }) => (
                    <li key={label}>
                      <FooterLink path={path} label={label} variant={variant} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p
          className={`mt-12 border-t pt-8 text-center text-sm md:text-left ${
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
