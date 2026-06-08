import { ACADEMIC_TRACK, ISLAMIC_TRACK } from '../../lib/homeContent.js'
import { DUAL_PATHWAYS } from '../../lib/siteContent.js'
import { useMotionViewport } from '../../hooks/useMotionViewport.js'
import { motion, Reveal, EASE_OUT } from '../WhyNextGen/motion.jsx'

function PathCard({ label, description, items, accentClass, iconColor, fromLeft, motionViewport }) {
  return (
    <motion.div
      initial={{ opacity: 1, x: fromLeft ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={motionViewport}
      transition={{ duration: 0.65, ease: EASE_OUT }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={`why-card rounded-lg p-6 sm:p-8 ${accentClass}`}
    >
      <span className={`mb-3 block text-xs font-semibold uppercase tracking-wider ${iconColor}`}>
        {label}
      </span>
      <p className="mb-4 text-sm leading-relaxed text-[#504533] sm:text-base">{description}</p>
      <ul className="space-y-2 text-sm text-[#504533] sm:text-base">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className={`material-symbols-outlined icon-outline shrink-0 text-lg ${iconColor}`}>
              check_circle
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function DualPathways() {
  const motionViewport = useMotionViewport()
  const [academicPath, islamicPath] = DUAL_PATHWAYS.paths

  return (
    <section id="islamic-scholarship" className="scroll-mt-20 py-16 sm:scroll-mt-24 sm:py-20 md:py-24">
      <div className="container-narrow px-4">
        <Reveal className="text-center">
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-5xl">{DUAL_PATHWAYS.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#504533] sm:mt-4 sm:text-base">
            {DUAL_PATHWAYS.subtitle}
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6">
          <PathCard
            label={academicPath.label}
            description={academicPath.description}
            items={ACADEMIC_TRACK}
            accentClass="border border-[#7a5900]/20"
            iconColor="text-[#7a5900]"
            fromLeft
            motionViewport={motionViewport}
          />
          <PathCard
            label={islamicPath.label}
            description={islamicPath.description}
            items={ISLAMIC_TRACK}
            accentClass="border border-[#914c00]/20"
            iconColor="text-[#914c00]"
            motionViewport={motionViewport}
          />
        </div>
      </div>
    </section>
  )
}
