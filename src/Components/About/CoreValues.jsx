import { WHY_ACADEMIC_LEADERSHIP } from '../../lib/siteContent.js'
import { Reveal, RevealStagger, RevealItem } from './motion.jsx'

export default function CoreValues() {
  return (
    <section
      id="why-leadership"
      className="scroll-mt-20 overflow-hidden bg-white py-20 sm:scroll-mt-24 sm:py-24 md:py-32"
    >
      <div className="container-narrow">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="about-eyebrow text-xs sm:text-sm">Our Conviction</p>
          <h2 className="about-heading mt-3 text-balance text-2xl sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
            {WHY_ACADEMIC_LEADERSHIP.title}
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-3xl sm:mt-12 md:mt-14 lg:max-w-4xl">
          <blockquote className="about-quote rounded-2xl p-6 sm:p-8 md:p-10">
            <span
              className="mb-3 block font-serif text-5xl leading-none text-[#7a5900]/25 sm:mb-4 sm:text-6xl"
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="font-serif text-base italic leading-[1.85] text-[#1b1c1c]/90 sm:text-lg md:text-xl md:leading-[1.9]">
              {WHY_ACADEMIC_LEADERSHIP.quote}
            </p>
          </blockquote>
        </Reveal>

        <RevealStagger className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 md:mt-16 md:gap-10">
          {WHY_ACADEMIC_LEADERSHIP.paragraphs.map((paragraph, index) => (
            <RevealItem
              key={paragraph.slice(0, 40)}
              as="article"
              className="about-card rounded-2xl border-l-4 border-l-[#7a5900] p-6 sm:p-8"
            >
              <p
                className="mb-4 font-serif text-3xl leading-none text-[#f5a623] sm:mb-5 sm:text-4xl"
                aria-hidden
              >
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="about-body text-sm leading-[1.8] sm:text-base md:leading-[1.85]">
                {paragraph}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
