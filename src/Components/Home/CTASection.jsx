import { useMotionViewport } from '../../hooks/useMotionViewport.js'
import { ADMISSIONS } from '../../lib/siteContent.js'
import { AnimatedButton } from '../Common/animations.jsx'
import { motion, scaleIn } from './motion.jsx'

export default function CTASection() {
  const motionViewport = useMotionViewport()

  return (
    <section id="admissions" className="scroll-mt-20 px-4 py-12 sm:scroll-mt-24 sm:py-16 md:py-24">
      <div className="container-narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={motionViewport}
          variants={scaleIn}
          custom={0}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#7a5900] to-[#f5a623] px-6 py-12 text-center sm:px-10 sm:py-14 md:px-16 md:py-20"
        >
          <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden>
            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0 100 L100 0 L100 100 Z" fill="white" />
            </svg>
          </div>

          <motion.div
            className="relative z-10 mx-auto max-w-2xl space-y-5 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={motionViewport}
            transition={{ delay: 0.15, duration: 0.55 }}
          >
            <h2 className="font-serif text-2xl leading-snug text-[#261900] sm:text-3xl md:text-4xl lg:text-5xl">
              {ADMISSIONS.title}
            </h2>
            <p className="text-base text-[#261900]/85 sm:text-lg">
              {ADMISSIONS.description} Open for {ADMISSIONS.grades} ({ADMISSIONS.ageGroup}).
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
              <AnimatedButton
                to="/admissions#apply"
                className="block w-full rounded-lg bg-[#261900] px-8 py-3.5 text-center text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#1b1c1c] sm:min-w-[200px] sm:px-10 sm:py-4"
              >
                Start Application
              </AnimatedButton>
              <AnimatedButton
                to="/admissions#hifz-plus"
                className="block w-full rounded-lg border border-[#261900]/30 bg-white/10 px-8 py-3.5 text-center text-xs font-semibold uppercase tracking-widest text-[#261900] backdrop-blur-md transition hover:bg-white/20 sm:min-w-[200px] sm:px-10 sm:py-4"
              >
                Hifz Plus Program
              </AnimatedButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
