const navLinks = [
  { label: 'Mission', href: '#mission' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Admissions', href: '#admissions' },
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <nav className="container-narrow flex h-16 items-center justify-between md:h-20">
        <a href="#" className="font-serif text-xl font-semibold tracking-wide text-gold md:text-2xl">
          NextGen Academy
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#admissions"
          className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#e8c96a]"
        >
          Apply Now
        </a>
      </nav>
    </header>
  )
}
