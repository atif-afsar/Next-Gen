import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

const values = [
  {
    num: '01',
    title: 'Vision',
    description:
      "We look beyond the horizon, preparing students for industries and challenges that don't yet exist.",
    offset: true,
  },
  {
    num: '02',
    title: 'Integrity',
    description:
      'Character is our core curriculum. We cultivate an unbreakable moral compass guided by faith.',
    offset: false,
  },
  {
    num: '03',
    title: 'Innovation',
    description:
      'Applying timeless wisdom to modern problems requires a spirit of relentless experimentation.',
    offset: true,
  },
  {
    num: '04',
    title: 'Service',
    description:
      'True leadership is the ability to serve the community and the world at large with humility.',
    offset: false,
  },
]

export default function CoreValues() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 md:py-28">
      <div className="container-narrow">
        <Reveal>
          <h2 className="about-heading mb-10 text-2xl sm:mb-14 sm:text-3xl md:text-5xl">
            The Pillars of Our Ethos
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {values.map(({ num, title, description, offset }) => (
            <RevealItem
              key={title}
              as="article"
              className={offset ? 'lg:translate-y-12' : ''}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="about-card h-full p-6 sm:p-8 md:p-10"
              >
                <p className="mb-4 font-serif text-3xl text-[#ffdea3] opacity-80 sm:mb-6 sm:text-4xl">
                  {num}
                </p>
                <h3 className="about-heading text-lg sm:text-xl">{title}</h3>
                <p className="about-body mt-3 text-sm leading-relaxed sm:mt-4">{description}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
