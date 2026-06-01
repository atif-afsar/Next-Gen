import { TIMELINE_STAGES } from '../../lib/homeContent.js'
import { motion, Reveal, RevealStagger, RevealItem, viewport, staggerContainer, staggerItem } from './motion.jsx'

export default function Timeline() {
  return (
    <section
      id="leadership"
      className="scroll-mt-20 overflow-hidden bg-[#f5f3f3] py-16 sm:scroll-mt-24 sm:py-20 md:py-32"
    >
      <div className="container-narrow">
        <Reveal className="text-center">
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-5xl">
            The Leadership Timeline
          </h2>
          <p className="mt-3 text-sm text-[#504533] sm:mt-4 sm:text-base">
            A decade of transformation, from foundations to global impact.
          </p>
        </Reveal>

        {/* Desktop timeline */}
        <motion.div
          className="relative mt-12 hidden md:mt-16 md:block"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <div className="absolute left-0 right-0 top-6 h-px bg-[#d4c4ac]/50" />
          <div className="grid grid-cols-4 gap-4 lg:gap-6">
            {TIMELINE_STAGES.map(({ step, grades, phase, description }) => (
              <motion.div
                key={step}
                variants={staggerItem}
                className="relative z-10 space-y-3 text-center lg:space-y-4"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="mx-auto mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#7a5900] text-sm font-bold text-white shadow-lg ring-8 ring-[#f5f3f3] lg:mb-8 lg:h-12 lg:w-12"
                >
                  {step}
                </motion.div>
                <h3 className="font-serif text-lg text-[#1b1c1c] lg:text-xl">{grades}</h3>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#7a5900] lg:text-xs">
                  {phase}
                </p>
                <p className="text-sm leading-relaxed text-[#504533]">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile timeline */}
        <RevealStagger className="relative mt-10 space-y-0 md:hidden">
          <div className="absolute bottom-4 left-6 top-4 w-px bg-[#d4c4ac]/50" aria-hidden />
          {TIMELINE_STAGES.map(({ step, grades, phase, description }) => (
            <RevealItem key={step} className="relative flex gap-5 pb-10 last:pb-0">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#7a5900] text-sm font-bold text-white shadow-md ring-4 ring-[#f5f3f3]">
                {step}
              </div>
              <div className="min-w-0 flex-1 pt-1">
                <h3 className="font-serif text-lg text-[#1b1c1c]">{grades}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[#7a5900]">
                  {phase}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#504533]">{description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
