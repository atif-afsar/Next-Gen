import { Link, useLocation } from 'react-router-dom'
import { FOOTER_COLUMNS, FOOTER_MISSION, isLightPage } from '../../lib/navigation.js'
import { PHONE_DISPLAY, TEL_URL, WHATSAPP_URL, ADDRESS_SHORT } from '../../lib/contact.js'
import { PhoneIcon, WhatsAppIcon } from './ContactIcons.jsx'
import logo from '../../assets/image.png'

function FooterLink({ path, label, variant, external }) {
  const linkClass =
    variant === 'light'
      ? 'text-sm text-[#5f5e5e] transition-colors hover:text-[#7a5900]'
      : 'text-sm text-white/55 transition-colors hover:text-gold'

  if (path === '#') {
    return (
      <a href="#" className={linkClass}>
        {label}
      </a>
    )
  }
  if (external || path.startsWith('tel:') || path.startsWith('http')) {
    return (
      <a
        href={path}
        className={linkClass}
        {...(path.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
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

function FooterColumn({ title, links, variant, light }) {
  return (
    <div>
      <h4
        className={`text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs ${
          light ? 'text-[#7a5900]' : 'text-gold'
        }`}
      >
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map(({ label, path, external }) => (
          <li key={label}>
            <FooterLink path={path} label={label} variant={variant} external={external} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const { pathname } = useLocation()
  const light = isLightPage(pathname)
  const variant = light ? 'light' : 'dark'

  const borderClass = light ? 'border-[#d4c4ac]/20' : 'border-white/5'
  const mutedClass = light ? 'text-[#5f5e5e]' : 'text-white/55'
  const copyrightClass = light ? 'text-[#5f5e5e]/60' : 'text-white/40'

  const callChipClass = light
    ? 'border-[#d4c4ac]/40 bg-[#fcfaf7] text-[#1b1c1c] hover:border-[#7a5900]/50 hover:bg-[#ffdea3]/30'
    : 'border-white/10 bg-white/5 text-white/90 hover:border-gold/40 hover:bg-gold/10'

  const waChipClass = light
    ? 'border-[#b8e6c8]/60 bg-[#f0fdf4] text-[#128C7E] hover:border-[#25D366]/50'
    : 'border-[#25D366]/25 bg-[#25D366]/10 text-[#5dde88] hover:border-[#25D366]/50'

  return (
    <footer
      className={
        light
          ? `border-t ${borderClass} bg-white pb-24 pt-12 sm:pb-14 sm:pt-14 md:pb-16 md:pt-16`
          : `border-t ${borderClass} bg-[#0a0a0a] pb-24 pt-12 sm:pb-14 sm:pt-14 md:pb-16 md:pt-16`
      }
    >
      <div className="container-narrow">
        <div
          className={`grid grid-cols-1 gap-10 border-b pb-10 sm:gap-12 sm:pb-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-12 lg:gap-x-10 lg:pb-14 xl:gap-x-14 ${borderClass}`}
        >
          {/* Brand + contact */}
          <div className="flex flex-col md:col-span-1 lg:col-span-5">
            <Link
              to="/"
              aria-label="NextGen Academy — Home"
              className={`inline-block w-fit transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                light ? 'focus-visible:outline-[#7a5900]' : 'focus-visible:outline-gold'
              }`}
            >
              <span
                className={
                  light ? 'inline-block' : 'inline-block rounded-xl bg-white px-3 py-2.5 shadow-lg'
                }
              >
                <img
                  src={logo}
                  alt="NextGen Academy"
                  className="h-14 w-auto max-w-[9.5rem] object-contain object-left sm:h-16 sm:max-w-[10.5rem]"
                  width={168}
                  height={64}
                  decoding="async"
                />
              </span>
            </Link>

            <p className={`mt-4 max-w-sm text-sm leading-relaxed ${mutedClass}`}>{FOOTER_MISSION}</p>
            <p className={`mt-3 text-sm ${mutedClass}`}>
              <span className="sr-only">Address: </span>
              {ADDRESS_SHORT}
            </p>

            <div className="mt-6">
              <p
                className={`mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs ${
                  light ? 'text-[#7a5900]' : 'text-gold'
                }`}
              >
                Reach us
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                <a
                  href={TEL_URL}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition-all ${callChipClass}`}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full ${
                      light ? 'bg-[#ffdea3] text-[#7a5900]' : 'bg-gold/20 text-gold'
                    }`}
                  >
                    <PhoneIcon className="h-3.5 w-3.5" />
                  </span>
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition-all ${waChipClass}`}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                  </span>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <nav
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10 md:col-span-1 lg:col-span-7 lg:gap-12"
            aria-label="Footer navigation"
          >
            {FOOTER_COLUMNS.map((column) => (
              <FooterColumn key={column.title} {...column} variant={variant} light={light} />
            ))}
          </nav>
        </div>

        <p
          className={`mt-8 text-center text-xs leading-relaxed sm:mt-10 sm:text-sm lg:text-left ${copyrightClass}`}
        >
          © {new Date().getFullYear()} NextGen Academy, Aligarh. Building the Architects of Tomorrow.
        </p>
      </div>
    </footer>
  )
}
