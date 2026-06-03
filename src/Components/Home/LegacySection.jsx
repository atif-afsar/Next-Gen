import { LEGACY_STATS } from '../../lib/homeContent.js'
import { motion, RevealStagger, RevealItem, staggerContainer, staggerItem, viewport } from './motion.jsx'

export default function LegacySection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#f5f3f3] py-16 sm:scroll-mt-24 sm:py-20 md:py-32"
      aria-labelledby="legacy-heading"
    >
      <div className="container-narrow text-center">
        <motion.div
          className="mx-auto max-w-3xl space-y-4 sm:space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >
          <motion.p
            variants={staggerItem}
            className="text-xs font-semibold uppercase tracking-widest text-[#7a5900] sm:text-sm"
          >
            Islamic Mission School Heritage
          </motion.p>
          <motion.h2
            id="legacy-heading"
            variants={staggerItem}
            className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-5xl"
          >
            Faith With Future Education in Aligarh
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-base leading-relaxed text-[#504533] sm:text-lg"
          >
            NextGen Academy, Green Fort City, Near AMU Fort, Aligarh, carries forward the legacy of
            Islamic Mission School (IMS). For parents seeking a Hifz plus academic program, we offer
            a residential environment where Huffaz grow into scholars, innovators, and leaders —
            with character, discipline, and Islamic values alongside modern education.
          </motion.p>
        </motion.div>

        <RevealStagger className="mt-12 grid grid-cols-2 gap-6 border-t border-[#d4c4ac]/30 pt-12 sm:mt-16 sm:gap-8 sm:pt-16 md:grid-cols-4 md:gap-6 md:pt-16">
          {LEGACY_STATS.map(({ value, label }) => (
            <RevealItem key={label} className="text-center">
              <p className="font-serif text-2xl text-[#7a5900] sm:text-3xl md:text-4xl">{value}</p>
              <p className="mt-1.5 text-[10px] font-semibold uppercase leading-snug tracking-wider text-[#504533] sm:mt-2 sm:text-xs">
                {label}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
