import { ABOUT } from '../../lib/siteContent.js'
import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

const highlights = [
  {
    icon: 'science',
    title: 'Modern Laboratories',
    description:
      'Physics, Chemistry, Biology, Computer Science, Robotics, and STEM facilities on campus.',
  },
  {
    icon: 'school',
    title: 'ICSE Excellence',
    description:
      'Value-based ICSE curriculum with Integrated NEET/JEE Schooling Program for competitive pathways.',
  },
  {
    icon: 'groups',
    title: 'Enhancement Programs',
    description:
      'English Communication, Arabic Communication, Financial Literacy, Life Skills, Robotics, and STEM.',
  },
]

export default function IntegrativeModel() {
  return (
    <section id="model" className="scroll-mt-20 bg-[#fbf9f8] py-16 sm:scroll-mt-24 sm:py-20 md:py-28">
      <div className="container-narrow text-center">
        <Reveal>
          <p className="about-eyebrow text-xs sm:text-sm">Islamic Mission School</p>
          <h2 className="about-heading mt-3 text-2xl sm:mt-4 sm:text-3xl md:text-5xl">
            A Legacy of Excellence
          </h2>
          <p className="about-body mx-auto mt-4 max-w-2xl text-sm sm:text-base">{ABOUT.paragraphs[1]}</p>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {highlights.map(({ icon, title, description }) => (
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
