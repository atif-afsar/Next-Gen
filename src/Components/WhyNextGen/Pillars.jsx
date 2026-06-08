import { MUSLIM_ACADEMIC_LEADERSHIP } from '../../lib/siteContent.js'
import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

export default function Pillars() {
  return (
    <section id="muslim-leadership" className="scroll-mt-20 py-16 sm:scroll-mt-24 sm:py-20 md:py-24">
      <div className="container-narrow px-4">
        <Reveal className="text-center">
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-5xl">
            {MUSLIM_ACADEMIC_LEADERSHIP.title}
          </h2>
        </Reveal>

        <RevealStagger className="mt-10 sm:mt-14">
          <RevealItem as="article" className="why-card mx-auto max-w-3xl rounded-sm p-6 sm:p-10">
            <motion.div whileHover={{ y: -4 }}>
              <p className="text-sm leading-relaxed text-[#504533] sm:text-base md:text-lg">
                {MUSLIM_ACADEMIC_LEADERSHIP.text}
              </p>
            </motion.div>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  )
}
