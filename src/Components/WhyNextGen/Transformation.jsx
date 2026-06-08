import { WHY_ACADEMIC_LEADERSHIP } from '../../lib/siteContent.js'
import { motion, RevealStagger, RevealItem } from './motion.jsx'

export default function Transformation() {
  return (
    <section className="border-y border-[#d4c4ac]/30 bg-white py-16 sm:py-20 md:py-24">
      <div className="container-narrow px-4">
        <RevealStagger className="mx-auto grid max-w-3xl grid-cols-1 gap-8">
          {WHY_ACADEMIC_LEADERSHIP.paragraphs.map((paragraph, index) => (
            <RevealItem key={paragraph.slice(0, 40)} as="article" className="group relative">
              <motion.div whileHover={{ y: -4 }}>
                <span
                  className="pointer-events-none absolute -left-2 -top-8 font-serif text-[4rem] leading-none text-[#7a5900]/10 transition group-hover:text-[#7a5900]/20 sm:-top-10 sm:text-[5rem]"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="relative mt-6 text-sm leading-relaxed text-[#504533] sm:mt-8 sm:text-base md:text-lg">
                  {paragraph}
                </p>
                <div className="mt-5 h-1 w-0 bg-[#7a5900] transition-all duration-700 group-hover:w-full sm:mt-6" />
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
