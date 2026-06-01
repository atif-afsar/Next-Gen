import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

const pillars = [
  {
    icon: 'auto_stories',
    title: 'Traditional Hifz',
    description:
      "A rigorous yet compassionate approach to Qur'anic memorization and understanding, integrated into the daily flow.",
  },
  {
    icon: 'terminal',
    title: 'ICSE Excellence',
    description:
      'Top-tier Indian Certificate of Secondary Education curriculum with a focused emphasis on STEM and Critical Thinking.',
  },
  {
    icon: 'groups',
    title: 'Leadership Labs',
    description:
      'Proprietary experiential workshops focused on emotional intelligence, negotiation, and ethical leadership.',
  },
]

export default function IntegrativeModel() {
  return (
    <section id="model" className="scroll-mt-20 bg-[#fbf9f8] py-16 sm:scroll-mt-24 sm:py-20 md:py-28">
      <div className="container-narrow text-center">
        <Reveal>
          <p className="about-eyebrow text-xs sm:text-sm">The Pedagogy</p>
          <h2 className="about-heading mt-3 text-2xl sm:mt-4 sm:text-3xl md:text-5xl">
            The Integrative Model
          </h2>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {pillars.map(({ icon, title, description }) => (
            <RevealItem
              key={title}
              as="article"
              className="group flex h-full flex-col items-center rounded-xl bg-[#f5f3f3] p-8 text-center transition-colors duration-500 hover:bg-[#7a5900] sm:p-10"
            >
              <motion.div whileHover={{ y: -6 }} className="flex h-full flex-col items-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm transition group-hover:scale-110 sm:mb-6 sm:h-16 sm:w-16">
                  <span className="material-symbols-outlined text-2xl text-[#7a5900] sm:text-3xl">
                    {icon}
                  </span>
                </div>
                <h3 className="about-heading text-lg group-hover:text-white sm:text-xl">{title}</h3>
                <p className="about-body mt-3 text-sm leading-relaxed group-hover:text-white/85 sm:mt-4 md:text-base">
                  {description}
                </p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
