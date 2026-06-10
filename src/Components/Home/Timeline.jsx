import { TIMELINE_STAGES } from '../../lib/homeContent.js'
import { ACADEMIC_LEADERSHIP_PROGRAM } from '../../lib/siteContent.js'
import { Reveal, RevealStagger, RevealItem } from './motion.jsx'

function PhaseCard({ step, grades, phase, role, description, className = '' }) {
  const phaseLabel = phase.replace(/^Phase \d+:\s*/i, '')

  return (
    <article
      className={`flex h-full min-w-0 flex-col rounded-2xl border border-[#d4c4ac]/40 bg-white p-5 shadow-[0_4px_24px_rgba(26,26,26,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(122,89,0,0.1)] sm:p-6 ${className}`}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7a5900] text-sm font-bold text-white shadow-md">
          {step}
        </span>
        <span className="text-right text-[10px] font-semibold uppercase tracking-wider text-[#7a5900] sm:text-xs">
          {phaseLabel}
        </span>
      </div>

      <h3 className="font-serif text-lg leading-snug text-[#1b1c1c] sm:text-xl">{grades}</h3>
      <p className="mt-1.5 text-sm font-medium text-[#7a5900]">{role}</p>
      <p className="mt-3 text-sm leading-relaxed text-[#504533]">{description}</p>
    </article>
  )
}

export default function Timeline() {
  return (
    <section
      id="leadership"
      className="scroll-mt-20 bg-[#f3ecd9] py-16 sm:scroll-mt-24 sm:py-20 md:py-28"
      aria-labelledby="leadership-heading"
    >
      <div className="container-narrow">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a5900] sm:text-sm">
            {ACADEMIC_LEADERSHIP_PROGRAM.eyebrow}
          </p>
          <h2
            id="leadership-heading"
            className="mt-3 font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Program Phases
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#504533] sm:mt-4 sm:text-base">
            {ACADEMIC_LEADERSHIP_PROGRAM.description}
          </p>
        </Reveal>

        {/* Tablet & small desktop — horizontal scroll */}
        <div className="relative mt-10 hidden md:block 2xl:hidden md:mt-14">
          <div
            className="flex gap-4 overflow-x-auto pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 [&::-webkit-scrollbar]:hidden"
            role="list"
            aria-label="Program phases"
          >
            {TIMELINE_STAGES.map((stage) => (
              <PhaseCard
                key={stage.step}
                {...stage}
                className="w-[min(82vw,280px)] shrink-0 sm:w-[300px]"
              />
            ))}
          </div>
          <p className="mt-3 text-center text-[11px] text-[#504533]/80 md:hidden">
            Swipe to explore all phases
          </p>
        </div>

        {/* Large desktop — full grid */}
        <RevealStagger className="mt-14 hidden grid-cols-5 gap-4 2xl:grid 2xl:gap-5">
          {TIMELINE_STAGES.map((stage) => (
            <RevealItem key={stage.step} className="min-w-0">
              <PhaseCard {...stage} />
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Mobile — vertical stack */}
        <RevealStagger className="mt-10 space-y-4 md:hidden" role="list" aria-label="Program phases">
          {TIMELINE_STAGES.map((stage) => (
            <RevealItem key={stage.step}>
              <PhaseCard {...stage} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
