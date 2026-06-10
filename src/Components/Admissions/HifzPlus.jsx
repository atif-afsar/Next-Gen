import { HIFZ_PLUS } from '../../lib/siteContent.js'
import { Reveal, RevealStagger, RevealItem } from '../Contact/motion.jsx'

export default function HifzPlus() {
  return (
    <section id="hifz-plus" className="scroll-mt-20 border-t border-[#d4c4ac]/25 bg-[#faf3e3] py-14 sm:scroll-mt-24 sm:py-16 md:py-20">
      <div className="container-narrow px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-4xl">{HIFZ_PLUS.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#504533] sm:text-base">{HIFZ_PLUS.description}</p>
        </Reveal>

        <Reveal className="mx-auto mt-7 max-w-2xl sm:mt-8">
          <div className="flex items-start gap-4 rounded-2xl border border-[#f5a623]/40 bg-white p-5 text-left shadow-sm sm:p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffdea3]/50 text-[#7a5900]">
              <span className="material-symbols-outlined icon-outline text-xl" aria-hidden>
                workspace_premium
              </span>
            </span>
            <p className="text-sm leading-relaxed text-[#504533] sm:text-base">{HIFZ_PLUS.note}</p>
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center sm:mt-12">
          <h3 className="font-serif text-xl text-[#1b1c1c] sm:text-2xl">Assessment Process</h3>
        </Reveal>

        <RevealStagger className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {HIFZ_PLUS.steps.map(({ step, title, items }) => (
            <RevealItem key={step} as="article" className="admissions-card rounded-2xl p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#7a5900]">{step}</p>
              <h4 className="mt-2 font-serif text-lg text-[#1b1c1c] sm:text-xl">{title}</h4>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#504533]">
                    <span className="material-symbols-outlined mt-0.5 shrink-0 text-base text-[#7a5900]">
                      check
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
