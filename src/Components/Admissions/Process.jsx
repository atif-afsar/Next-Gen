import { Link } from 'react-router-dom'
import { Reveal, RevealStagger, RevealItem } from '../Contact/motion.jsx'

const STEPS = [
  {
    step: '01',
    title: 'Enquire',
    description:
      'Call, WhatsApp, or submit the application form below. Our admissions team will answer questions about the Hifz plus academic program and residential options.',
  },
  {
    step: '02',
    title: 'Visit & Assess',
    description:
      'Schedule a campus visit or virtual consultation. We learn about your child\'s Hifz background, academics, and family goals.',
  },
  {
    step: '03',
    title: 'Enroll',
    description:
      'Receive guidance on enrollment documents, fees, and joining dates. Welcome to the NextGen family in Aligarh.',
  },
]

export default function Process() {
  return (
    <section className="py-14 sm:py-16 md:py-20" aria-labelledby="process-heading">
      <div className="container-narrow px-4 sm:px-6">
        <Reveal>
          <h2 id="process-heading" className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-4xl">
            How to apply
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[#504533] sm:text-base">
            A straightforward path for parents — most families complete the first conversation within a
            single call.
          </p>
        </Reveal>

        <RevealStagger className="mt-10 space-y-4 sm:mt-12">
          {STEPS.map(({ step, title, description }) => (
            <RevealItem
              key={step}
              className="admissions-card flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-start sm:gap-8 sm:p-8"
            >
              <span className="font-serif text-3xl text-[#7a5900] sm:w-16 sm:shrink-0">{step}</span>
              <div>
                <h3 className="font-serif text-xl text-[#1b1c1c] sm:text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#504533] sm:text-base">{description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <p className="mt-8 text-center text-sm text-[#504533]">
          Prefer to visit first?{' '}
          <Link to="/contact#visit" className="font-semibold text-[#7a5900] underline-offset-2 hover:underline">
            Schedule on our Contact page
          </Link>
        </p>
      </div>
    </section>
  )
}
