import { VISION_PILLARS } from '../../lib/homeContent.js'
import { Reveal, RevealStagger, RevealItem } from './motion.jsx'

export default function VisionPillars() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-32">
      <div className="container-narrow">
        <Reveal className="text-center">
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-4xl">
            Vision &amp; Mission
          </h2>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {VISION_PILLARS.map(({ icon, title, description }) => (
            <RevealItem
              key={title}
              as="article"
              className="home-glass-card group h-full rounded-lg p-6 sm:p-8"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#ffdea3]/40 text-[#7a5900] sm:mb-6 sm:h-12 sm:w-12">
                <span className="material-symbols-outlined text-xl sm:text-2xl">{icon}</span>
              </div>
              <h3 className="font-serif text-xl text-[#1b1c1c] sm:text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#504533] sm:mt-4 sm:text-base">
                {description}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
