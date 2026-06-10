import { RESIDENTIAL_PROGRAM } from '../../lib/siteContent.js'
import { motion, Reveal, RevealStagger, RevealItem } from '../WhyNextGen/motion.jsx'

export default function ResidentialPillars() {
  return (
    <section id="residential-pillars" className="scroll-mt-20 py-16 sm:scroll-mt-24 sm:py-20 md:py-24">
      <div className="container-narrow px-4">
        <Reveal className="text-center">
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-5xl">Four Pillars</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#504533] sm:mt-4 sm:text-base">
            Intellect, Spirit, Character, and Leadership — the foundation of residential life.
          </p>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {RESIDENTIAL_PROGRAM.pillars.map(({ icon, title, description }) => (
            <RevealItem
              key={title}
              as="article"
              className="why-card group flex min-h-[220px] flex-col rounded-lg p-6 sm:p-8"
            >
              <motion.div whileHover={{ y: -4 }}>
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#ffdea3]/40 text-[#7a5900]">
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </span>
                <h3 className="font-serif text-lg text-[#1b1c1c] sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#504533] sm:text-base">{description}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mx-auto mt-10 max-w-3xl text-center sm:mt-14">
          <p className="border-l-2 border-[#f5a623] pl-4 text-left text-sm italic leading-relaxed text-[#504533] sm:text-base">
            {RESIDENTIAL_PROGRAM.closing}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
