import { ABOUT_HERO_CAMPUS } from '../../lib/images.js'
import { ADDRESS_SHORT } from '../../lib/contact.js'
import OptimizedImage from '../Common/OptimizedImage.jsx'
import { motion, EASE_OUT, staggerContainer, staggerItem } from '../Contact/motion.jsx'

export default function AdmissionsHero() {
  return (
    <section
      className="relative flex min-h-[min(520px,72dvh)] items-center justify-center overflow-hidden px-4 py-14 sm:min-h-[min(600px,78dvh)] sm:py-16 md:min-h-[min(680px,82vh)]"
      aria-labelledby="admissions-hero-heading"
    >
      <OptimizedImage
        src={ABOUT_HERO_CAMPUS}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-15"
        priority
        width={1920}
        height={1080}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbf9f8] via-[#fbf9f8]/80 to-[#fbf9f8]" aria-hidden />

      <motion.div
        className="container-narrow relative z-10 max-w-4xl text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={staggerItem}
          className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a5900] sm:mb-4 sm:text-xs"
        >
          Enroll at {ADDRESS_SHORT}
        </motion.p>
        <motion.h1
          id="admissions-hero-heading"
          variants={staggerItem}
          className="font-serif text-3xl leading-tight text-[#1b1c1c] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Admissions —{' '}
          <span className="italic text-[#7a5900]">Grade 5 Through Graduation</span>
        </motion.h1>
        <motion.p
          variants={staggerItem}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#504533] sm:mt-8 sm:text-lg"
        >
          Begin your child&apos;s Hifz-to-leadership journey at NextGen Academy Aligarh. We welcome
          Hifz-completed students and families seeking our Hifz plus academic residential program.
        </motion.p>
        <motion.div variants={staggerItem} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <a
            href="#apply"
            className="admissions-btn-primary inline-block rounded-lg px-8 py-3.5 text-xs font-semibold uppercase tracking-wider shadow-lg sm:text-sm"
          >
            Start Application
          </a>
          <a
            href="/contact"
            className="inline-block rounded-lg border border-[#827560] bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1b1c1c] transition hover:bg-[#f5f3f3] sm:text-sm"
          >
            General Contact
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
