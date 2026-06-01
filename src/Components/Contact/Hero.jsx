import { CONTACT_HERO } from '../../lib/images.js'
import { motion, EASE_OUT, staggerContainer, staggerItem } from './motion.jsx'

export default function ContactHero() {
  return (
    <section className="relative flex min-h-[min(560px,75dvh)] items-center justify-center overflow-hidden px-4 py-14 sm:min-h-[min(640px,80dvh)] sm:py-16 md:min-h-[min(716px,85vh)]">
      <motion.img
        src={CONTACT_HERO}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        fetchPriority="high"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.2, ease: EASE_OUT }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbf9f8] via-transparent to-[#fbf9f8]" />

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
          The Gateway to Legacy
        </motion.p>
        <motion.h1
          variants={staggerItem}
          className="font-serif text-3xl leading-tight text-[#1b1c1c] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Connect with the
          <br />
          <span className="italic text-[#7a5900]">Future of Leadership</span>
        </motion.h1>
        <motion.p
          variants={staggerItem}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#504533] sm:mt-8 sm:text-lg"
        >
          At NextGen Academy, every conversation is the start of a journey. Whether you are an
          aspiring scholar or a global partner, our doors are open to those who seek excellence.
        </motion.p>
      </motion.div>
    </section>
  )
}
