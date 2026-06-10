import { WHY_ACADEMIC_LEADERSHIP } from '../../lib/siteContent.js'
import { Reveal, RevealStagger, RevealItem } from '../WhyNextGen/motion.jsx'

export default function ProgramOverview() {
  return (
    <section className="border-y border-[#d4c4ac]/30 bg-white py-16 sm:py-20 md:py-24">
      <div className="container-narrow px-4">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-4xl">
            {WHY_ACADEMIC_LEADERSHIP.title}
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-3xl sm:mt-10">
          <blockquote className="relative rounded-2xl bg-[#faf3e3] p-6 sm:p-8">
            <span
              className="absolute -top-2 left-5 font-serif text-6xl leading-none text-[#f5a623] sm:-top-3 sm:text-7xl"
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="relative z-10 pt-4 font-serif text-base italic leading-relaxed text-[#1b1c1c] sm:text-lg">
              {WHY_ACADEMIC_LEADERSHIP.quote}
            </p>
          </blockquote>
        </Reveal>

        <RevealStagger className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          {WHY_ACADEMIC_LEADERSHIP.paragraphs.map((paragraph, index) => (
            <RevealItem
              key={paragraph.slice(0, 40)}
              as="article"
              className="why-card rounded-xl border-t-4 border-t-[#f5a623] p-6 sm:p-8"
            >
              <p className="mb-3 font-serif text-2xl leading-none text-[#f5a623] sm:text-3xl" aria-hidden>
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="text-sm leading-relaxed text-[#504533] sm:text-base">{paragraph}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
