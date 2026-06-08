import { Link } from 'react-router-dom'
import { LEGACY_STATS } from '../../lib/homeContent.js'
import { ABOUT } from '../../lib/siteContent.js'
import { HOME_ABOUT_HERITAGE } from '../../lib/images.js'
import OptimizedImage from '../Common/OptimizedImage.jsx'
import { Reveal, RevealStagger, RevealItem } from './motion.jsx'

export default function LegacySection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#f5f3f3] py-16 sm:scroll-mt-24 sm:py-20 md:py-28"
      aria-labelledby="legacy-heading"
    >
      <div className="container-narrow">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Image column */}
          <Reveal className="lg:col-span-5">
            <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-[#d4c4ac]/40 bg-white shadow-[0_14px_40px_rgba(26,26,26,0.12)] lg:mx-0 lg:max-w-none">
              <OptimizedImage
                src={HOME_ABOUT_HERITAGE}
                alt="Young learner bridging Islamic heritage and academic leadership at NextGen Academy"
                className="aspect-[4/5] w-full object-cover object-center sm:aspect-[5/6]"
                width={640}
                height={768}
              />
            </div>
          </Reveal>

          {/* Content column */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a5900] sm:text-sm">
                {ABOUT.eyebrow}
              </p>
              <h2
                id="legacy-heading"
                className="mt-3 font-serif text-2xl leading-tight text-[#1b1c1c] sm:text-3xl md:text-4xl lg:text-[2.75rem]"
              >
                {ABOUT.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#504533] sm:mt-5 sm:text-base md:text-lg">
                {ABOUT.lead}
              </p>
            </Reveal>

            <RevealStagger className="mt-6 space-y-4 sm:mt-8">
              {ABOUT.highlights.map(({ icon, title, text }) => (
                <RevealItem
                  key={title}
                  as="article"
                  className="home-glass-card flex gap-4 rounded-xl p-5 sm:p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#ffdea3]/50 text-[#7a5900]">
                    <span className="material-symbols-outlined text-xl">{icon}</span>
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg text-[#1b1c1c] sm:text-xl">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#504533] sm:text-base">{text}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>

            <Reveal delay={0.1} className="mt-6 sm:mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#7a5900] transition hover:text-[#654800]"
              >
                Learn more about our story
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Stats strip */}
        <RevealStagger className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-5 md:grid-cols-4 lg:mt-20">
          {LEGACY_STATS.map(({ value, label }) => (
            <RevealItem
              key={label}
              className="rounded-xl border border-[#d4c4ac]/35 bg-white px-4 py-5 text-center shadow-sm sm:px-6 sm:py-6"
            >
              <p className="font-serif text-2xl text-[#7a5900] sm:text-3xl md:text-4xl">{value}</p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-[#504533] sm:text-xs">
                {label}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
