import { FAQ_ITEMS } from '../../lib/seo.js'
import { Reveal } from './motion.jsx'

export default function FAQ() {
  return (
    <section
      className="border-t border-[#d4c4ac]/25 bg-[#fbf9f8] py-14 sm:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="container-narrow px-4 sm:px-6">
        <Reveal>
          <h2 id="faq-heading" className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[#504533] sm:text-base">
            Answers for parents exploring NextGen Academy, Near Fort, Fort Enclave Colony, Aligarh.
          </p>
        </Reveal>
        <dl className="mt-8 space-y-6">
          {FAQ_ITEMS.map(({ question, answer }) => (
            <div key={question} className="rounded-xl border border-[#d4c4ac]/30 bg-white p-5 sm:p-6">
              <dt className="font-serif text-lg font-semibold text-[#1b1c1c]">{question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#504533] sm:text-base">{answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
