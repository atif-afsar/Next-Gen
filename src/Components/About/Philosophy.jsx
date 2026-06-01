import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

const cards = [
  {
    title: 'Spiritual Core',
    description:
      "The Quranic foundation isn't just a subject; it's the operating system of our students' minds, providing moral clarity in a complex world.",
    icon: '✦',
  },
  {
    title: 'Technological Edge',
    description:
      'Students master the tools of the future—AI, coding, and strategic engineering—to become creators rather than just consumers of technology.',
    icon: '⬡',
    accent: true,
  },
  {
    title: 'Global Leadership',
    description:
      "Developing emotional intelligence and cultural fluency to navigate and lead within the world's most elite professional circles.",
    icon: '◎',
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="scroll-mt-20 bg-[#f5f3f3] py-16 sm:scroll-mt-24 sm:py-20 md:py-28">
      <div className="container-narrow text-center">
        <Reveal>
          <p className="about-eyebrow text-xs sm:text-sm">The Philosophy</p>
          <h2 className="about-heading mt-3 text-2xl sm:mt-4 sm:text-3xl md:text-5xl">
            Architects of Tomorrow Philosophy
          </h2>
          <p className="about-body mx-auto mt-3 max-w-2xl text-sm sm:mt-4 sm:text-base">
            A unique educational model where spiritual rigor is the catalyst for academic achievement.
          </p>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {cards.map(({ title, description, icon, accent }) => (
            <RevealItem
              key={title}
              as="article"
              className={`about-card h-full rounded-xl p-6 text-left sm:p-8 md:p-10 ${
                accent ? 'border-t-2 border-t-[#7a5900]/40' : ''
              }`}
            >
              <motion.div whileHover={{ y: -6 }} className="h-full text-left">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#ffdea3]/40 text-lg text-[#7a5900] sm:mb-6 sm:h-14 sm:w-14 sm:text-xl">
                  {icon}
                </div>
                <h3 className="about-heading text-xl sm:text-2xl">{title}</h3>
                <p className="about-body mt-3 text-sm leading-relaxed sm:mt-4 md:text-base">
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
