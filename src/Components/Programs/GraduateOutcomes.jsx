import { GRADUATE_PROFILE } from '../../lib/siteContent.js'
import { Reveal, RevealStagger, RevealItem } from '../WhyNextGen/motion.jsx'

export default function GraduateOutcomes() {
  return (
    <section className="border-t border-[#d4c4ac]/30 bg-white py-16 sm:py-20 md:py-24">
      <div className="container-narrow px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-4xl">
                {GRADUATE_PROFILE.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#504533] sm:text-base">
                {GRADUATE_PROFILE.intro}
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-[#1b1c1c] sm:text-base">
                A NextGen graduate embodies this powerful synthesis:
              </p>
            </Reveal>
            <RevealStagger className="mt-6 space-y-3">
              {GRADUATE_PROFILE.traits.map((trait) => (
                <RevealItem key={trait} className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-[#7a5900]">check_circle</span>
                  <span className="text-sm leading-relaxed text-[#504533] sm:text-base">{trait}</span>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>

          <div>
            <Reveal>
              <h3 className="font-serif text-xl text-[#1b1c1c] sm:text-2xl">{GRADUATE_PROFILE.outcomesTitle}</h3>
            </Reveal>
            <RevealStagger className="mt-6 space-y-3">
              {GRADUATE_PROFILE.outcomes.map((outcome) => (
                <RevealItem key={outcome} className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 shrink-0 text-[#7a5900]">arrow_forward</span>
                  <span className="text-sm leading-relaxed text-[#504533] sm:text-base">{outcome}</span>
                </RevealItem>
              ))}
            </RevealStagger>
            <Reveal>
              <p className="mt-8 border-l-2 border-[#f5a623] pl-4 text-sm italic leading-relaxed text-[#504533] sm:text-base">
                {GRADUATE_PROFILE.closing}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
