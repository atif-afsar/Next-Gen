import { MUSLIM_ACADEMIC_LEADERSHIP } from '../../lib/siteContent.js'
import OptimizedImage from '../Common/OptimizedImage.jsx'
import { Reveal, RevealStagger, RevealItem, RichTextWithHighlights } from './motion.jsx'

export default function Philosophy() {
  return (
    <section id="philosophy" className="scroll-mt-20 bg-[#f3ecd9] py-16 sm:scroll-mt-24 sm:py-20 md:py-28">
      <div className="container-narrow">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="about-eyebrow text-xs sm:text-sm">National Contribution</p>
          <h2 className="about-heading mt-3 text-2xl leading-snug sm:mt-4 sm:text-3xl md:text-4xl">
            {MUSLIM_ACADEMIC_LEADERSHIP.title}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-center gap-8 sm:mt-14 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <div className="premium-image mx-auto max-w-sm overflow-hidden rounded-2xl border border-[#d4c4ac]/40 bg-white shadow-[0_14px_40px_rgba(122,89,0,0.12)] lg:mx-0 lg:max-w-none">
              <OptimizedImage
                src="/images/brochure/vishwa-guru.jpg"
                alt="Writing the future — bridging tradition and modernity"
                className="aspect-square w-full object-cover"
                width={720}
                height={720}
              />
            </div>
          </Reveal>

          <RevealStagger className="space-y-5 lg:col-span-7">
            {MUSLIM_ACADEMIC_LEADERSHIP.paragraphs.map((text, index) => (
              <RevealItem
                key={text.slice(0, 32)}
                as="article"
                className="about-card rounded-xl border-l-4 border-l-[#f5a623] p-6 text-left sm:p-8"
              >
                <p className="mb-3 font-serif text-2xl leading-none text-[#f5a623] sm:text-3xl" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="about-body text-sm leading-relaxed sm:text-base">
                  <RichTextWithHighlights text={text} />
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  )
}
