import { Link } from 'react-router-dom'
import { ABOUT_HERITAGE } from '../../lib/images.js'
import { motion, scaleIn, viewport } from './motion.jsx'

export default function AboutCTA() {
  return (
    <section id="admissions" className="scroll-mt-20 px-4 py-12 sm:scroll-mt-24 sm:py-16 md:py-28">
      <div className="container-narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={scaleIn}
          custom={0}
          className="relative overflow-hidden rounded-2xl bg-[#7a5900] px-6 py-12 text-center sm:px-10 sm:py-14 md:px-16 md:py-20"
        >
          <img
            src={ABOUT_HERITAGE}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-10"
            aria-hidden
          />
          <motion.div
            className="relative z-10 mx-auto max-w-3xl space-y-4 sm:space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: 0.15, duration: 0.55 }}
          >
            <h2 className="font-serif text-2xl leading-snug text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Apply for Admission
            </h2>
            <p className="text-base text-white/90 sm:text-lg">
              Join NextGen Academy — a sister organization of Islamic Mission School. Building Academic
              Leadership for New India.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4 sm:pt-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  to="/admissions"
                  className="block w-full rounded bg-white px-8 py-3.5 text-center text-sm font-semibold text-[#7a5900] shadow-xl transition hover:bg-white/95 sm:min-w-[200px] sm:px-10 sm:py-4"
                >
                  Apply for Admission
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  to="/programs"
                  className="block w-full rounded border border-white/30 px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:min-w-[200px] sm:px-10 sm:py-4"
                >
                  Explore Program
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
