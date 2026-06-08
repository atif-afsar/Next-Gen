import { MUSLIM_ACADEMIC_LEADERSHIP } from '../../lib/siteContent.js'
import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

export default function Philosophy() {
  return (
    <section id="philosophy" className="scroll-mt-20 bg-[#f5f3f3] py-16 sm:scroll-mt-24 sm:py-20 md:py-28">
      <div className="container-narrow text-center">
        <Reveal>
          <p className="about-eyebrow text-xs sm:text-sm">National Contribution</p>
          <h2 className="about-heading mt-3 text-2xl sm:mt-4 sm:text-3xl md:text-5xl">
            {MUSLIM_ACADEMIC_LEADERSHIP.title}
          </h2>
        </Reveal>

        <RevealStagger className="mt-10 sm:mt-14">
          <RevealItem as="article" className="about-card mx-auto max-w-3xl rounded-xl p-6 text-left sm:p-10">
            <motion.div whileHover={{ y: -4 }}>
              <p className="about-body text-sm leading-relaxed sm:text-base md:text-lg">
                {MUSLIM_ACADEMIC_LEADERSHIP.text}
              </p>
            </motion.div>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  )
}
