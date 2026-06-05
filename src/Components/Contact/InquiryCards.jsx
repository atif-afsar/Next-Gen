import { Link } from 'react-router-dom'
import { WHATSAPP_URL, MAP_URL } from '../../lib/contact.js'
import { motion, RevealStagger, RevealItem } from './motion.jsx'

const cards = [
  {
    icon: 'school',
    iconBg: 'bg-[#ffdea3]',
    iconColor: 'text-[#7a5900]',
    title: 'Admissions & Enrollment',
    description:
      'Submit the application enquiry form on this page, or visit Admissions for eligibility and the full process.',
    link: 'Go to application form',
    to: '/contact#apply',
    external: false,
  },
  {
    icon: 'event',
    iconBg: 'bg-[#dcf8e8]',
    iconColor: 'text-[#128C7E]',
    title: 'Campus Visit',
    description:
      'Schedule a tour of NextGen Academy at Near Fort, Fort Enclave Colony, Aligarh.',
    link: 'Book a visit',
    to: '/contact#visit',
    external: false,
  },
  {
    icon: 'chat',
    iconBg: 'bg-[#ffdcc4]',
    iconColor: 'text-[#8f4d2e]',
    title: 'WhatsApp',
    description: 'Quick questions about location, timings, or how to reach us.',
    link: 'Chat on WhatsApp',
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: 'location_on',
    iconBg: 'bg-[#e5e2e1]',
    iconColor: 'text-[#504533]',
    title: 'Directions',
    description: 'Open our campus location in Google Maps.',
    link: 'View on Maps',
    href: MAP_URL,
    external: true,
  },
]

export default function InquiryCards() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container-narrow">
        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {cards.map(({ icon, iconBg, iconColor, title, description, link, to, href, external }) => (
            <RevealItem key={title} as="article" className="contact-card group p-6 sm:p-8">
              <motion.div whileHover={{ y: -6 }} className="h-full">
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-lg sm:mb-6 sm:h-12 sm:w-12 ${iconBg}`}
                >
                  <span className={`material-symbols-outlined text-xl sm:text-2xl ${iconColor}`} aria-hidden>
                    {icon}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#1b1c1c] sm:text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#504533] sm:mt-3 sm:text-base">
                  {description}
                </p>
                {to ? (
                  <Link
                    to={to}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7a5900] group-hover:underline sm:mt-6"
                  >
                    {link}
                    <span className="material-symbols-outlined text-sm" aria-hidden>
                      arrow_forward
                    </span>
                  </Link>
                ) : (
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7a5900] group-hover:underline sm:mt-6"
                  >
                    {link}
                    <span className="material-symbols-outlined text-sm" aria-hidden>
                      arrow_forward
                    </span>
                  </a>
                )}
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
