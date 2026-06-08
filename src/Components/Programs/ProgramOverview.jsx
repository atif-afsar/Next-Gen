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

        <RevealStagger className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6">
          {WHY_ACADEMIC_LEADERSHIP.paragraphs.map((paragraph) => (
            <RevealItem key={paragraph.slice(0, 40)} as="p" className="text-sm leading-relaxed text-[#504533] sm:text-base">
              {paragraph}
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
