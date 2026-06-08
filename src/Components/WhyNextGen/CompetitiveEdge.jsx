import { GRADUATE_PROFILE } from '../../lib/siteContent.js'
import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

export default function CompetitiveEdge() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="container-narrow px-4">
        <Reveal className="text-center">
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-5xl">
            {GRADUATE_PROFILE.outcomesTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#504533] sm:mt-4 sm:text-base">
            What NextGen graduates are prepared to achieve.
          </p>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5">
          {GRADUATE_PROFILE.outcomes.map((outcome) => (
            <RevealItem key={outcome}>
              <motion.article whileHover={{ y: -3 }} className="why-card rounded-lg p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined shrink-0 text-[#7a5900]">arrow_forward</span>
                  <p className="text-sm font-medium text-[#1b1c1c] sm:text-base">{outcome}</p>
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
