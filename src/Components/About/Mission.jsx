import { MISSION, VISION } from '../../lib/siteContent.js'
import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

export default function Mission() {
  return (
    <section id="vision-mission" className="scroll-mt-20 bg-white py-16 sm:scroll-mt-24 sm:py-20 md:py-28">
      <div className="container-narrow">
        <Reveal className="text-center">
          <p className="about-eyebrow text-xs sm:text-sm">Vision &amp; Mission</p>
          <h2 className="about-heading mt-3 text-2xl sm:mt-4 sm:text-3xl md:text-5xl">
            Our Guiding Purpose
          </h2>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8">
          <RevealItem>
            <motion.div whileHover={{ y: -4 }} className="about-card-muted h-full border-l-2 border-[#ffdea3] p-6 sm:p-8">
              <h3 className="about-heading text-xl sm:text-2xl">{VISION.title}</h3>
              <p className="about-body mt-3 text-sm leading-relaxed sm:mt-4 sm:text-base">{VISION.text}</p>
            </motion.div>
          </RevealItem>
          <RevealItem>
            <motion.div whileHover={{ y: -4 }} className="about-card-muted h-full border-l-2 border-[#7a5900] p-6 sm:p-8">
              <h3 className="about-heading text-xl sm:text-2xl">{MISSION.title}</h3>
              <p className="about-body mt-3 text-sm leading-relaxed sm:mt-4 sm:text-base">{MISSION.text}</p>
            </motion.div>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  )
}
