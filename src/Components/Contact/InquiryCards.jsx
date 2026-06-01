import { motion, RevealStagger, RevealItem } from './motion.jsx'

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
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container-narrow">
        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
          {cards.map(({ icon, iconBg, iconColor, title, description, link, href }) => (
            <RevealItem
              key={title}
              as="article"
              className="contact-card group p-6 sm:p-8"
            >
              <motion.div whileHover={{ y: -6 }} className="h-full">
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-lg sm:mb-6 sm:h-12 sm:w-12 ${iconBg}`}
                >
                  <span className={`material-symbols-outlined text-xl sm:text-2xl ${iconColor}`}>
                    {icon}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#1b1c1c] sm:text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#504533] sm:mt-3 sm:text-base">
                  {description}
                </p>
                <a
                  href={href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7a5900] group-hover:underline sm:mt-6"
                >
                  {link}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
