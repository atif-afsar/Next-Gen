import { CONTACT_CAMPUS } from '../../lib/images.js'
import { ADDRESS_LINE, MAP_URL } from '../../lib/contact.js'
import OptimizedImage from '../Common/OptimizedImage.jsx'
import { motion, Reveal, viewport, EASE_OUT } from './motion.jsx'

export default function Location() {
  return (
    <section id="location" className="scroll-mt-24 pb-0">
      <Reveal className="container-narrow mb-6 px-4 sm:mb-8 sm:px-6">
        <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-4xl">
          Visit NextGen Academy, Aligarh
        </h2>
        <p className="mt-2 text-sm text-[#504533] sm:text-base">
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[#7a5900]/40 underline-offset-2 transition hover:text-[#7a5900]"
          >
            {ADDRESS_LINE}
          </a>
        </p>
      </Reveal>

      <motion.div
        className="group relative h-[280px] w-full contrast-[0.9] grayscale transition duration-700 hover:grayscale-0 sm:h-[360px] md:h-[450px] lg:h-[500px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.8, ease: EASE_OUT }}
      >
        <OptimizedImage
          src={CONTACT_CAMPUS}
          alt="NextGen Academy residential campus at Green Fort City, Near AMU Fort, Aligarh"
          className="h-full w-full object-cover"
          width={1600}
          height={900}
        />
        <div className="pointer-events-none absolute inset-0 bg-[#7a5900]/10 opacity-0 mix-blend-multiply transition group-hover:opacity-100" aria-hidden />
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
            aria-hidden
          >
            <span className="material-symbols-outlined icon-fill text-[#7a5900]" aria-hidden>
              location_on
            </span>
          </motion.div>
          <div className="contact-glass mt-3 rounded-full border border-white px-4 py-2 shadow-lg sm:mt-4 sm:px-6 sm:py-3">
            <span className="text-xs font-semibold text-[#1b1c1c] sm:text-sm">
              NextGen Academy, Aligarh
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
