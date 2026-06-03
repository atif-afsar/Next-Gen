import { Link } from 'react-router-dom'
import { ACADEMIC_TRACK, ISLAMIC_TRACK } from '../../lib/homeContent.js'
import { useMotionViewport } from '../../hooks/useMotionViewport.js'
import { motion, Reveal, EASE_OUT } from './motion.jsx'

function TrackCard({ label, items, accentClass, iconColor, fromLeft, motionViewport }) {
  return (
    <motion.div
      initial={{ opacity: 1, x: fromLeft ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={motionViewport}
      transition={{ duration: 0.65, ease: EASE_OUT }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={`rounded-xl border bg-white p-6 shadow-sm sm:p-8 ${accentClass}`}
    >
      <span
        className={`mb-4 block text-xs font-semibold uppercase tracking-wider ${iconColor}`}
      >
        {label}
      </span>
      <ul className="space-y-2.5 text-sm text-[#504533] sm:space-y-3 sm:text-base">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className={`material-symbols-outlined icon-outline shrink-0 text-lg ${iconColor}`}>
              check_circle
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function DualFocus() {
  const motionViewport = useMotionViewport()

  return (
    <section className="overflow-hidden bg-[#fbf9f8] py-16 sm:py-20 md:py-32">
      <div className="container-narrow">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
          <Reveal className="w-full text-center lg:max-w-md lg:text-left">
            <h2 className="font-serif text-2xl leading-tight text-[#1b1c1c] sm:text-3xl md:text-5xl">
              The Integration of Two Worlds
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#504533] sm:mt-6 sm:text-lg">
              At our Islamic residential school in Aligarh, the Hifz plus academic program is one
              unified journey — where Islamic scholarship strengthens STEM, robotics, and leadership
              for Hifz-completed students.
            </p>
          </Reveal>

          <div className="w-full flex-1">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              <TrackCard
                label="Academic Track"
                items={ACADEMIC_TRACK}
                accentClass="border-[#7a5900]/20"
                iconColor="text-[#7a5900]"
                fromLeft
                motionViewport={motionViewport}
              />
              <TrackCard
                label="Islamic Scholarship"
                items={ISLAMIC_TRACK}
                accentClass="border-[#914c00]/20"
                iconColor="text-[#914c00]"
                motionViewport={motionViewport}
              />
            </div>

            <Reveal delay={0.2} className="relative mt-8 sm:mt-10">
              <div className="home-merging-path rounded-full shadow-[0_0_20px_rgba(244,180,0,0.3)]" />
              <div className="absolute -top-3 left-1/2 max-w-[90vw] -translate-x-1/2 whitespace-nowrap rounded-full bg-[#7a5900] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white shadow-lg sm:-top-4 sm:px-6 sm:py-2 sm:text-xs">
                Unified Path
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.15} className="mt-10 text-center sm:mt-14">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/about"
              className="inline-block w-full max-w-xs rounded-lg bg-[#7a5900] px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#654800] sm:w-auto sm:px-10 sm:py-4"
            >
              Learn More
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
