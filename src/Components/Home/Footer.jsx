import { IconArrowRight } from './icons.jsx'

const ecosystemLinks = ['Vision & Philosophy', 'Impact Stories', 'Faculty', 'Campus Life']
const resourceLinks = ['Admissions Guide', 'Curriculum PDF', 'Scholarships', 'FAQ']

const socials = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-16">
      <div className="container-narrow">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-xl font-semibold text-gold">NextGen Academy</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Engineering future leaders through the union of Quranic excellence and world-class
              academics.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs font-medium uppercase tracking-wider text-white/50 transition hover:text-gold"
                  aria-label={label}
                >
                  {label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Ecosystem</h4>
            <ul className="mt-4 space-y-2">
              {ecosystemLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/55 transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Resources</h4>
            <ul className="mt-4 space-y-2">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/55 transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Join Us</h4>
            <p className="mt-4 text-sm text-white/55">Stay updated with admissions and events.</p>
            <form
              className="mt-4 flex overflow-hidden rounded-full border border-white/15"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-gold px-4 text-black transition hover:bg-[#e8c96a]"
                aria-label="Subscribe"
              >
                <IconArrowRight />
              </button>
            </form>
          </div>
        </div>

        <p className="mt-14 border-t border-white/5 pt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} NextGen Academy. Engineering Future Leaders. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  )
}
