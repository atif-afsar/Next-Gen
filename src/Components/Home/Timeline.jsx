import { TIMELINE_STAGES } from '../../lib/homeContent.js'

export default function Timeline() {
  return (
    <section id="leadership" className="scroll-mt-24 overflow-hidden bg-[#f5f3f3] py-20 md:py-32">
      <div className="container-narrow">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-[#1b1c1c] md:text-5xl">The Leadership Timeline</h2>
          <p className="mt-4 text-[#504533]">
            A decade of transformation, from foundations to global impact.
          </p>
        </div>

        <div className="relative mt-16 hidden md:block">
          <div className="absolute left-0 right-0 top-6 h-px bg-[#d4c4ac]/50" />
          <div className="grid grid-cols-4 gap-6">
            {TIMELINE_STAGES.map(({ step, grades, phase, description }) => (
              <div key={step} className="relative z-10 space-y-4 text-center">
                <div className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#7a5900] text-sm font-bold text-white shadow-lg ring-8 ring-[#f5f3f3]">
                  {step}
                </div>
                <h3 className="font-serif text-xl text-[#1b1c1c]">{grades}</h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#7a5900]">
                  {phase}
                </p>
                <p className="text-sm leading-relaxed text-[#504533]">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 space-y-10 md:hidden">
          {TIMELINE_STAGES.map(({ step, grades, phase, description }) => (
            <div key={step} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#7a5900] text-sm font-bold text-white shadow-md">
                {step}
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#1b1c1c]">{grades}</h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#7a5900]">
                  {phase}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#504533]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
