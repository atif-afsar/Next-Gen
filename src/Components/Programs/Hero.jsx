import { ACADEMIC_LEADERSHIP_PROGRAM } from '../../lib/siteContent.js'
import { AnimatedButton, HighlightText } from '../Common/animations.jsx'
import { motion, heroLoadContainer, heroLoadItem } from '../WhyNextGen/motion.jsx'

export default function ProgramsHero() {
  return (
    <section className="relative flex min-h-[75dvh] items-center justify-center overflow-hidden py-16 sm:min-h-[80dvh] sm:py-20 md:py-24">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffdea3_0%,transparent_70%)]" />
      </div>

      <motion.div
        className="container-narrow relative z-10 px-4 text-center"
        variants={heroLoadContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={heroLoadItem}
          className="mb-6 inline-block rounded-full border border-[#d4c4ac] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a5900] sm:mb-8 sm:px-4 sm:py-1.5 sm:text-xs"
        >
          {ACADEMIC_LEADERSHIP_PROGRAM.eyebrow}
        </motion.span>

        <motion.h1
          variants={heroLoadItem}
          className="font-serif text-3xl leading-[1.15] text-[#1b1c1c] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <HighlightText>{ACADEMIC_LEADERSHIP_PROGRAM.title}</HighlightText>
        </motion.h1>

        <motion.p
          variants={heroLoadItem}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#504533] sm:mt-8 sm:text-lg"
        >
          {ACADEMIC_LEADERSHIP_PROGRAM.description}
        </motion.p>

        <motion.div
          variants={heroLoadItem}
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4"
        >
          <AnimatedButton
            href="#program-phases"
            wrapperClassName="w-full sm:w-auto"
            className="why-btn-primary w-full rounded-lg px-8 py-3.5 text-xs font-semibold uppercase tracking-wider shadow-lg shadow-[#7a5900]/20 sm:w-auto sm:px-10 sm:py-4 sm:text-sm"
          >
            View Program Phases
          </AnimatedButton>
          <AnimatedButton
            to="/admissions"
            wrapperClassName="w-full sm:w-auto"
            className="why-btn-outline w-full rounded-lg px-8 py-3.5 text-xs font-semibold uppercase tracking-wider sm:w-full sm:px-10 sm:py-4 sm:text-sm"
          >
            Apply for Admission
          </AnimatedButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
