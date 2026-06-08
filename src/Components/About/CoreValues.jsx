import { WHY_ACADEMIC_LEADERSHIP } from '../../lib/siteContent.js'
import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

export default function CoreValues() {
  return (
    <section id="why-leadership" className="overflow-hidden bg-white py-16 sm:py-20 md:py-28">
      <div className="container-narrow">
        <Reveal className="text-center">
          <h2 className="about-heading mb-6 text-2xl sm:mb-8 sm:text-3xl md:text-5xl">
            {WHY_ACADEMIC_LEADERSHIP.title}
          </h2>
        </Reveal>

        <RevealStagger className="mx-auto grid max-w-3xl grid-cols-1 gap-6">
          {WHY_ACADEMIC_LEADERSHIP.paragraphs.map((paragraph, index) => (
            <RevealItem key={paragraph.slice(0, 40)} as="article">
              <motion.div whileHover={{ y: -4 }} className="about-card h-full p-6 sm:p-8">
                <p className="mb-3 font-serif text-3xl text-[#ffdea3] opacity-80 sm:text-4xl">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="about-body text-sm leading-relaxed sm:text-base">{paragraph}</p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
