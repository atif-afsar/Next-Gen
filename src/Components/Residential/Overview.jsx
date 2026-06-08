import { RESIDENTIAL_PROGRAM } from '../../lib/siteContent.js'
import { Reveal } from '../WhyNextGen/motion.jsx'

export default function ResidentialOverview() {
  return (
    <section className="border-y border-[#d4c4ac]/30 bg-white py-14 sm:py-16 md:py-20">
      <div className="container-narrow px-4">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-4xl">
            A Holistic 24/7 Learning Environment
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#504533] sm:text-base">
            {RESIDENTIAL_PROGRAM.description}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
