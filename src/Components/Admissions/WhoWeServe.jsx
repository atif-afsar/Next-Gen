import { ADMISSIONS } from '../../lib/siteContent.js'
import { Reveal, RevealStagger, RevealItem } from '../Contact/motion.jsx'

const CRITERIA = [
  {
    icon: 'school',
    title: 'Grades',
    description: ADMISSIONS.grades,
  },
  {
    icon: 'calendar_month',
    title: 'Age Group',
    description: ADMISSIONS.ageGroup,
  },
  {
    icon: 'diversity_3',
    title: 'Holistic Development',
    description:
      'Rigorous academics combined with character, spiritual growth, and leadership preparation.',
  },
]

export default function WhoWeServe() {
  return (
    <section className="border-y border-[#d4c4ac]/25 bg-white py-14 sm:py-16 md:py-20" aria-labelledby="eligibility-heading">
      <div className="container-narrow px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 id="eligibility-heading" className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-4xl">
            {ADMISSIONS.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#504533] sm:text-base">{ADMISSIONS.description}</p>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {CRITERIA.map(({ icon, title, description }) => (
            <RevealItem key={title} as="article" className="admissions-card rounded-2xl p-6 sm:p-8">
              <span
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#ffdea3] text-[#7a5900]"
                aria-hidden
              >
                <span className="material-symbols-outlined">{icon}</span>
              </span>
              <h3 className="font-serif text-xl text-[#1b1c1c]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#504533] sm:text-base">{description}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
