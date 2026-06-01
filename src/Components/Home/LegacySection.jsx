import { LEGACY_STATS } from '../../lib/homeContent.js'
import { motion, RevealStagger, RevealItem, staggerContainer, staggerItem, viewport } from './motion.jsx'

export default function LegacySection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#f5f3f3] py-16 sm:scroll-mt-24 sm:py-20 md:py-32"
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
            Established on Tradition
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-5xl"
          >
            A Legacy of Excellence
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-base leading-relaxed text-[#504533] sm:text-lg"
          >
            Founded on the principles of intellectual rigor and spiritual depth, NextGen Academy has
            consistently produced graduates who lead in the boardroom as effectively as they lead in
            the masjid. Our pedagogy respects the past while defining the future.
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
