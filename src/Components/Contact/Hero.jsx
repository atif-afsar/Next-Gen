import { CONTACT_HERO } from '../../lib/images.js'
import { ADDRESS_SHORT } from '../../lib/contact.js'
import OptimizedImage from '../Common/OptimizedImage.jsx'
import { motion, EASE_OUT, staggerContainer, staggerItem } from './motion.jsx'

export default function ContactHero() {
  return (
    <section
      className="relative flex min-h-[min(560px,75dvh)] items-center justify-center overflow-hidden px-4 py-14 sm:min-h-[min(640px,80dvh)] sm:py-16 md:min-h-[min(716px,85vh)]"
      aria-labelledby="contact-hero-heading"
    >
      <OptimizedImage
        src={CONTACT_HERO}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        priority
        width={1920}
        height={1080}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbf9f8] via-transparent to-[#fbf9f8]" aria-hidden />

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
          {ADDRESS_SHORT}
        </motion.p>
        <motion.h1
          id="contact-hero-heading"
          variants={staggerItem}
          className="font-serif text-3xl leading-tight text-[#1b1c1c] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Contact
          <br />
          <span className="italic text-[#7a5900]">NextGen Academy</span>
        </motion.h1>
        <motion.p
          variants={staggerItem}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#504533] sm:mt-8 sm:text-lg"
        >
          Reach us for campus visits, directions, partnerships, and general enquiries. For enrollment
          and applications, visit our{' '}
          <a href="/admissions" className="font-semibold text-[#7a5900] underline-offset-2 hover:underline">
            Admissions page
          </a>
          .
        </motion.p>
      </motion.div>
    </section>
  )
}
