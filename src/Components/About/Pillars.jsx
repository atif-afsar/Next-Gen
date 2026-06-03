import {
  ABOUT_PILLAR_INTELLECTUAL,
  ABOUT_PILLAR_LEADERSHIP,
  ABOUT_PILLAR_SPIRITUAL,
} from '../../lib/images.js'
import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

const pillars = [
  {
    title: 'Intellectual Rigor',
    description:
      'A commitment to deep critical thinking and the pursuit of absolute mastery in all fields of knowledge.',
    image: ABOUT_PILLAR_INTELLECTUAL,
  },
  {
    title: 'Spiritual Excellence',
    description:
      'Refining the soul to achieve Ihsan—performing every action with perfection as if in the presence of the Divine.',
    image: ABOUT_PILLAR_SPIRITUAL,
  },
  {
    title: 'Leadership Character',
    description:
      'Cultivating the inner strength and outer skill required to lead movements and influence the global narrative.',
    image: ABOUT_PILLAR_LEADERSHIP,
  },
]

export default function Pillars() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-28">
      <div className="container-narrow">
        <Reveal className="text-center">
          <p className="about-eyebrow mb-3 text-xs sm:mb-4 sm:text-sm">Our Distinction</p>
          <h2 className="about-heading mb-10 text-2xl sm:mb-14 sm:text-3xl md:text-5xl">
            Institutional Pillars
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
          {pillars.map(({ title, description, image }) => (
            <RevealItem
              key={title}
              as="article"
              className="group relative flex min-h-[300px] items-end overflow-hidden rounded-2xl border border-[#d4c4ac]/30 shadow-sm sm:min-h-[380px] md:min-h-[460px] lg:min-h-[500px]"
            >
              <motion.div whileHover={{ y: -4 }} className="relative flex h-full w-full items-end">
                <img
                  src={image}
                  alt=""
                  role="presentation"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1c]/95 via-[#1b1c1c]/50 to-[#1b1c1c]/15" />
                <div className="relative z-10 w-full p-6 sm:p-8 md:p-10">
                  <h3 className="font-serif text-xl text-white sm:text-2xl md:text-3xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/90 sm:mt-4 md:text-base">
                    {description}
                  </p>
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
