import {
  ABOUT_PILLAR_INTELLECTUAL,
  ABOUT_PILLAR_LEADERSHIP,
  ABOUT_PILLAR_SPIRITUAL,
} from '../../lib/images.js'
import { GRADUATE_PROFILE } from '../../lib/siteContent.js'
import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

const pillarImages = [ABOUT_PILLAR_INTELLECTUAL, ABOUT_PILLAR_SPIRITUAL, ABOUT_PILLAR_LEADERSHIP]

export default function Pillars() {
  const traits = GRADUATE_PROFILE.traits.slice(0, 3)

  return (
    <section className="bg-white py-16 sm:py-20 md:py-28">
      <div className="container-narrow">
        <Reveal className="text-center">
          <p className="about-eyebrow mb-3 text-xs sm:mb-4 sm:text-sm">Graduate Profile</p>
          <h2 className="about-heading mb-10 text-2xl sm:mb-14 sm:text-3xl md:text-5xl">
            {GRADUATE_PROFILE.title}
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
          {traits.map((trait, index) => (
            <RevealItem
              key={trait}
              as="article"
              className="group relative flex min-h-[300px] items-end overflow-hidden rounded-2xl border border-[#d4c4ac]/30 shadow-sm sm:min-h-[380px] md:min-h-[460px] lg:min-h-[500px]"
            >
              <motion.div whileHover={{ y: -4 }} className="relative flex h-full w-full items-end">
                <img
                  src={pillarImages[index]}
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
                  <p className="text-sm leading-relaxed text-white/90 sm:text-base">{trait}</p>
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
