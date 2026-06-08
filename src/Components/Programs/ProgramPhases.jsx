import { PROGRAM_PHASES } from '../../lib/siteContent.js'
import { motion, Reveal, RevealStagger, RevealItem, staggerContainer, staggerItem } from '../WhyNextGen/motion.jsx'
import { useMotionViewport } from '../../hooks/useMotionViewport.js'

export default function ProgramPhases() {
  const motionViewport = useMotionViewport()
  const stageCount = PROGRAM_PHASES.length

  return (
    <section id="program-phases" className="scroll-mt-20 bg-[#fbf9f8] py-16 sm:scroll-mt-24 sm:py-20 md:py-24">
      <div className="container-narrow px-4">
        <Reveal className="text-center">
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-5xl">Program Phases</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#504533] sm:mt-4 sm:text-base">
            Five integrated phases from foundation to academic leadership.
          </p>
        </Reveal>

        <motion.div
          className="relative mt-12 hidden md:mt-16 md:block"
          initial="hidden"
          whileInView="visible"
          viewport={motionViewport}
          variants={staggerContainer}
        >
          <div className="absolute left-0 right-0 top-6 h-px bg-[#d4c4ac]/50" />
          <div
            className="grid gap-3 lg:gap-4"
            style={{ gridTemplateColumns: `repeat(${stageCount}, minmax(0, 1fr))` }}
          >
            {PROGRAM_PHASES.map(({ step, grades, phase, role, description }) => (
              <motion.div key={step} variants={staggerItem} className="relative z-10 space-y-2 text-center">
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#7a5900] text-xs font-bold text-white shadow-lg ring-8 ring-[#fbf9f8] lg:mb-6 lg:h-11 lg:w-11">
                  {step}
                </div>
                <h3 className="font-serif text-sm text-[#1b1c1c] lg:text-base">{grades}</h3>
                <p className="text-[9px] font-semibold uppercase leading-snug tracking-wider text-[#7a5900] lg:text-[10px]">
                  {phase}
                </p>
                <p className="text-xs font-medium text-[#1b1c1c]">{role}</p>
                <p className="text-xs leading-relaxed text-[#504533]">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <RevealStagger className="relative mt-10 space-y-0 md:hidden">
          <div className="absolute bottom-4 left-6 top-4 w-px bg-[#d4c4ac]/50" aria-hidden />
          {PROGRAM_PHASES.map(({ step, grades, phase, role, description }) => (
            <RevealItem key={step} className="relative flex gap-5 pb-10 last:pb-0">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#7a5900] text-sm font-bold text-white shadow-md ring-4 ring-[#fbf9f8]">
                {step}
              </div>
              <div className="min-w-0 flex-1 pt-1">
                <h3 className="font-serif text-lg text-[#1b1c1c]">{grades}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[#7a5900]">{phase}</p>
                <p className="mt-1 text-sm font-medium text-[#1b1c1c]">{role}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#504533]">{description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
