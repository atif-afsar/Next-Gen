import { Link } from 'react-router-dom'
import { motion, viewport, staggerContainer, staggerItem } from '../WhyNextGen/motion.jsx'

export default function ProgramsCTA() {
  return (
    <section className="border-t border-[#d4c4ac]/30 bg-[#faf3e3] px-4 py-16 sm:py-20 md:py-24">
      <div className="container-narrow">
        <motion.div
          className="why-highlight-card overflow-hidden rounded-2xl px-6 py-12 text-center shadow-[0_16px_48px_rgba(122,89,0,0.18)] sm:px-10 sm:py-14 md:px-14 md:py-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2
            variants={staggerItem}
            className="font-serif text-2xl leading-snug text-white sm:text-3xl md:text-4xl"
          >
            Ready to Begin the Academic Leadership Journey?
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mx-auto mt-4 max-w-xl text-sm text-white/90 sm:mt-5 sm:text-base md:text-lg"
          >
            Admissions are open for Grades 5th to 8th. Explore Hifz Plus support for Hifz-completed
            students.
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <Link
              to="/admissions"
              className="inline-flex w-full items-center justify-center rounded-lg bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#7a5900] transition hover:bg-white/95 active:scale-[0.98] sm:w-auto sm:px-10 sm:py-4 sm:text-sm"
            >
              Apply for Admission
            </Link>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center rounded-lg border border-white/35 bg-white/10 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-white/15 active:scale-[0.98] sm:w-auto sm:px-10 sm:py-4 sm:text-sm"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
