import {
  ABOUT_FOUNDER_1,
  ABOUT_FOUNDER_2,
  ABOUT_FOUNDER_3,
} from '../../lib/images.js'
import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

const founders = [
  {
    name: 'Dr. Ibrahim Al-Farsi',
    role: 'Dean of Innovation',
    image: ABOUT_FOUNDER_1,
  },
  {
    name: 'Dr. Sarah Khan',
    role: 'Director of Academics',
    image: ABOUT_FOUNDER_2,
  },
  {
    name: 'Prof. Ahmed Malik',
    role: 'Campus Experience Officer',
    image: ABOUT_FOUNDER_3,
  },
]

export default function Founders() {
  return (
    <section id="founders" className="scroll-mt-20 bg-[#fbf9f8] py-16 sm:scroll-mt-24 sm:py-20 md:py-28">
      <div className="container-narrow">
        <Reveal className="mb-10 max-w-2xl sm:mb-14">
          <p className="about-eyebrow text-xs sm:text-sm">The Minds</p>
          <h2 className="about-heading mt-3 text-2xl sm:mt-4 sm:text-3xl md:text-5xl">
            Minds Behind the NextGen Revolution
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {founders.map(({ name, role, image }) => (
            <RevealItem key={name} as="article" className="group">
              <motion.div whileHover={{ y: -4 }}>
                <div className="relative mb-5 aspect-[3/4] overflow-hidden rounded-lg sm:mb-6">
                  <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="about-heading text-lg sm:text-xl">{name}</h3>
                <p className="about-body mt-1 text-sm">{role}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
