const cards = [
  {
    icon: 'school',
    iconBg: 'bg-[#ffdea3]',
    iconColor: 'text-[#7a5900]',
    title: 'Admissions Inquiry',
    description:
      'Explore the path to enrollment. Our advisory team provides personalized guidance for prospective leaders.',
    link: 'Contact Admissions',
    href: 'mailto:admissions@nextgen.edu',
  },
  {
    icon: 'handshake',
    iconBg: 'bg-[#ffdcc4]',
    iconColor: 'text-[#8f4d2e]',
    title: 'Global Partnerships',
    description:
      'We collaborate with world-class institutions and industries to redefine the boundaries of academic innovation.',
    link: 'Partner With Us',
    href: '#partnerships',
  },
  {
    icon: 'public',
    iconBg: 'bg-[#e5e2e1]',
    iconColor: 'text-[#504533]',
    title: 'Media & Press',
    description:
      'Access our latest insights, leadership reports, and media resources for global educational commentary.',
    link: 'Press Kit',
    href: '#press',
  },
]

export default function InquiryCards() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-narrow grid gap-6 md:grid-cols-3">
        {cards.map(({ icon, iconBg, iconColor, title, description, link, href }) => (
          <article
            key={title}
            className="contact-card group p-8 transition duration-300 hover:-translate-y-1"
          >
            <div
              className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${iconBg}`}
            >
              <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
            </div>
            <h3 className="font-serif text-2xl text-[#1b1c1c]">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#504533] md:text-base">
              {description}
            </p>
            <a
              href={href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7a5900] group-hover:underline"
            >
              {link}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
