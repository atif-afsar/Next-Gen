import { Link } from 'react-router-dom'
import { RESIDENTIAL_PROGRAM } from '../../lib/siteContent.js'
import { motion, staggerContainer, staggerItem } from '../WhyNextGen/motion.jsx'

export default function ResidentialHero() {
  return (
    <section className="relative flex min-h-[55dvh] items-center justify-center overflow-hidden py-14 sm:min-h-[70dvh] sm:py-20 md:py-24">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffdea3_0%,transparent_70%)]" />
      </div>

      <motion.div
        className="container-narrow relative z-10 px-4 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={staggerItem}
          className="mb-6 inline-block rounded-full border border-[#d4c4ac] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a5900] sm:mb-8 sm:px-4 sm:py-1.5 sm:text-xs"
        >
          Grades 5–8 · Fully Residential
        </motion.span>

        <motion.h1
          variants={staggerItem}
          className="font-serif text-3xl leading-[1.15] text-[#1b1c1c] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {RESIDENTIAL_PROGRAM.title}
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#504533] sm:mt-8 sm:text-lg"
        >
          {RESIDENTIAL_PROGRAM.description}
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4"
        >
          <motion.a
            href="#residential-pillars"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="why-btn-primary w-full rounded-lg px-8 py-3.5 text-center text-xs font-semibold uppercase tracking-wider shadow-lg shadow-[#7a5900]/20 sm:w-auto sm:px-10 sm:py-4 sm:text-sm"
          >
            Four Pillars
          </motion.a>
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              to="/admissions"
              className="why-btn-outline block w-full rounded-lg px-8 py-3.5 text-center text-xs font-semibold uppercase tracking-wider sm:px-10 sm:py-4 sm:text-sm"
            >
              Apply for Admission
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
