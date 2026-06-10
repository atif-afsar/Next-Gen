import { Link } from 'react-router-dom'
import { motion, viewport, staggerContainer, staggerItem } from './motion.jsx'

export default function WhyNextGenCTA() {
  return (
    <section className="why-highlight-card overflow-hidden py-16 text-center sm:py-20 md:py-24">
      <motion.div
        className="container-narrow px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.h2
          variants={staggerItem}
          className="font-serif text-2xl text-white sm:text-3xl md:text-5xl"
        >
          Ready to Architect Your Child&apos;s Future?
        </motion.h2>
        <motion.p
          variants={staggerItem}
          className="mx-auto mt-4 max-w-xl text-base text-white/90 sm:mt-6 sm:text-lg"
        >
          Admissions are now open for Grades 5–8. We invite visionaries to apply.
        </motion.p>
        <motion.div
          variants={staggerItem}
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              to="/admissions#apply"
              className="block w-full rounded-lg bg-white px-8 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-[#7a5900] transition hover:bg-white/95 sm:px-12 sm:py-5 sm:text-sm"
            >
              Begin Application
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              to="/contact"
              className="block w-full rounded-lg border border-white/30 px-8 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-white/10 sm:px-12 sm:py-5 sm:text-sm"
            >
              Request Prospectus
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
