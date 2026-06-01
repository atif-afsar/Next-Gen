import { WHY_PARENT_1, WHY_PARENT_2 } from '../../lib/images.js'
import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

const testimonials = [
  {
    name: 'Dr. Julian Vance',
    role: 'Neurosurgeon & Philanthropist',
    image: WHY_PARENT_1,
    quote:
      "We searched globally for a school that wouldn't force our son to choose between his faith and his ambition. NextGen Academy is the only institution that treats both as equally vital components of his future.",
  },
  {
    name: 'Sarah Al-Mansour',
    role: 'International Policy Advisor',
    image: WHY_PARENT_2,
    quote:
      "The level of critical thinking my daughter displays since joining the Academy is astounding. She doesn't just solve problems; she questions their ethical implications with a wisdom far beyond her years.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="container-narrow">
        <Reveal className="text-center">
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-5xl">
            Parent Perspectives
          </h2>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2">
          {testimonials.map(({ name, role, image, quote }) => (
            <RevealItem
              key={name}
              as="article"
              className="relative flex flex-col gap-5 border border-[#d4c4ac] bg-white p-6 sm:gap-6 sm:p-8 md:p-10"
            >
              <motion.div whileHover={{ y: -4 }} className="flex h-full flex-col gap-5 sm:gap-6">
                <span
                  className="pointer-events-none absolute right-4 top-4 font-serif text-5xl text-[#7a5900]/20 sm:right-6 sm:top-6 sm:text-6xl"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <p className="relative z-10 text-base italic leading-relaxed text-[#504533] sm:text-lg">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="mt-auto flex items-center gap-3 sm:gap-4">
                  <img
                    src={image}
                    alt={name}
                    className="h-14 w-14 shrink-0 rounded-full object-cover sm:h-16 sm:w-16"
                  />
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-[#1b1c1c]">{name}</h3>
                    <p className="text-xs text-[#504533]">{role}</p>
                  </div>
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
