import { GRADUATE_PROFILE } from '../../lib/siteContent.js'
import { Reveal, RevealStagger, RevealItem } from './motion.jsx'

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="container-narrow px-4">
        <Reveal className="text-center">
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-5xl">
            {GRADUATE_PROFILE.title}
          </h2>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6">
          {GRADUATE_PROFILE.traits.map((trait) => (
            <RevealItem
              key={trait}
              as="article"
              className="relative border border-[#d4c4ac] bg-white p-6 sm:p-8"
            >
              <span
                className="pointer-events-none absolute right-4 top-4 font-serif text-5xl text-[#7a5900]/20 sm:right-6 sm:top-6"
                aria-hidden
              >
                ✦
              </span>
              <p className="relative z-10 text-sm leading-relaxed text-[#504533] sm:text-base">{trait}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
