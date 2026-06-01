import { WHY_PARENT_1, WHY_PARENT_2 } from '../../lib/images.js'

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
    <section className="py-20 md:py-24">
      <div className="container-narrow">
        <h2 className="text-center font-serif text-3xl text-[#1b1c1c] md:text-5xl">
          Parent Perspectives
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map(({ name, role, image, quote }) => (
            <article
              key={name}
              className="relative flex flex-col gap-6 border border-[#d4c4ac] bg-white p-10"
            >
              <span
                className="pointer-events-none absolute right-6 top-6 font-serif text-6xl text-[#7a5900]/20"
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="relative z-10 text-lg italic leading-relaxed text-[#504533]">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img src={image} alt={name} className="h-16 w-16 rounded-full object-cover" />
                <div>
                  <h3 className="text-sm font-semibold text-[#1b1c1c]">{name}</h3>
                  <p className="text-xs text-[#504533]">{role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
