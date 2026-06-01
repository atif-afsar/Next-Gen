import { CONTACT_CAMPUS } from '../../lib/images.js'
import { motion, Reveal, viewport, EASE_OUT } from './motion.jsx'

export default function Location() {
  return (
    <section className="pb-0">
      <Reveal className="container-narrow mb-6 px-4 sm:mb-8 sm:px-6">
        <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-4xl">
          The Citadel Campus
        </h2>
        <p className="mt-1 text-sm text-[#504533] sm:mt-2 sm:text-base">Oxfordshire, United Kingdom</p>
      </Reveal>

      <motion.div
        className="group relative h-[280px] w-full contrast-[0.9] grayscale transition duration-700 hover:grayscale-0 sm:h-[360px] md:h-[450px] lg:h-[500px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.8, ease: EASE_OUT }}
      >
        <img
          src={CONTACT_CAMPUS}
          alt="Aerial view of NextGen Academy campus in Oxfordshire"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#7a5900]/10 opacity-0 mix-blend-multiply transition group-hover:opacity-100" />
        <motion.div
          className="absolute left-1/2 top-1/2 flex max-w-[90vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center px-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ delay: 0.25, duration: 0.55, ease: EASE_OUT }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-2xl sm:h-12 sm:w-12"
          >
            <span className="material-symbols-outlined icon-fill text-[#7a5900]">location_on</span>
          </motion.div>
          <div className="contact-glass mt-3 rounded-full border border-white px-4 py-2 shadow-lg sm:mt-4 sm:px-6 sm:py-3">
            <span className="text-xs font-semibold text-[#1b1c1c] sm:text-sm">NextGen Academy HQ</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
