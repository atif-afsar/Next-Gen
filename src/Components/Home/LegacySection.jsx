import { Link } from 'react-router-dom'
import { LEGACY_STATS } from '../../lib/homeContent.js'
import { ABOUT } from '../../lib/siteContent.js'
import { HOME_ABOUT_HERITAGE, HOME_ABOUT_VISION } from '../../lib/images.js'
import OptimizedImage from '../Common/OptimizedImage.jsx'
import { Reveal, RevealStagger, RevealItem } from './motion.jsx'

export default function LegacySection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#f3ecd9] py-20 sm:scroll-mt-24 sm:py-24 md:py-32"
      aria-labelledby="legacy-heading"
    >
      <div className="container-narrow">
        {/* Intro — text left, vision image right */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <Reveal className="text-center lg:col-span-7 lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a5900] sm:text-sm">
              {ABOUT.eyebrow}
            </p>
            <h2
              id="legacy-heading"
              className="mt-4 text-balance font-serif text-2xl leading-snug text-[#1b1c1c] sm:mt-5 sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              {ABOUT.title}
            </h2>
            <p className="mt-6 text-sm leading-[1.8] text-[#504533] sm:mt-8 sm:text-base md:text-lg md:leading-[1.85]">
              {ABOUT.lead}
            </p>
            <p className="mx-auto mt-8 max-w-xl border-l-0 border-[#7a5900]/35 pl-0 text-base font-serif italic leading-relaxed text-[#1b1c1c]/90 sm:mt-10 sm:border-l-4 sm:pl-6 sm:text-lg lg:mx-0 lg:max-w-[36rem]">
              {ABOUT.legacy}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <div className="premium-image mx-auto max-w-sm overflow-hidden rounded-2xl border border-[#d4c4ac]/40 bg-white shadow-[0_14px_40px_rgba(26,26,26,0.1)] sm:max-w-md lg:mx-0 lg:max-w-none">
              <OptimizedImage
                src={HOME_ABOUT_VISION}
                alt="Vision of nurturing future-ready leaders at NextGen Academy"
                className="aspect-[4/5] w-full object-cover object-center sm:aspect-square lg:aspect-[4/5]"
                width={640}
                height={640}
              />
            </div>
          </Reveal>
        </div>

        {/* Image + highlight cards */}
        <div className="mt-14 grid grid-cols-1 items-start gap-12 sm:mt-16 sm:gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <div className="premium-image mx-auto max-w-sm overflow-hidden rounded-2xl border border-[#d4c4ac]/40 bg-white shadow-[0_14px_40px_rgba(26,26,26,0.1)] sm:max-w-md lg:mx-0 lg:max-w-none">
              <OptimizedImage
                src={HOME_ABOUT_HERITAGE}
                alt="Young learner bridging Islamic heritage and academic leadership at NextGen Academy"
                className="aspect-[4/5] w-full object-cover object-center sm:aspect-[5/6]"
                width={640}
                height={768}
              />
            </div>
          </Reveal>

          <RevealStagger className="flex flex-col gap-6 sm:gap-8 lg:col-span-7">
            {ABOUT.highlights.map(({ icon, title, text }) => (
              <RevealItem
                key={title}
                as="article"
                className="home-glass-card rounded-2xl p-6 sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ffdea3]/50 text-[#7a5900] sm:h-14 sm:w-14">
                    <span className="material-symbols-outlined text-2xl">{icon}</span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-xl text-[#1b1c1c] sm:text-2xl">{title}</h3>
                    <p className="mt-3 text-sm leading-[1.75] text-[#504533] sm:mt-4 sm:text-base">
                      {text}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}

            <RevealItem>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-[#7a5900] transition hover:text-[#654800] sm:text-base"
              >
                Learn more about our story
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </RevealItem>
          </RevealStagger>
        </div>

        {/* Stats — separated band */}
        <div className="mt-16 border-t border-[#d4c4ac]/45 pt-12 sm:mt-20 sm:pt-14 lg:mt-24 lg:pt-16">
          <RevealStagger className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
            {LEGACY_STATS.map(({ value, label }) => (
              <RevealItem
                key={label}
                className="rounded-2xl border border-[#d4c4ac]/30 bg-white/80 px-5 py-6 text-center shadow-sm sm:px-6 sm:py-8"
              >
                <p className="font-serif text-2xl text-[#7a5900] sm:text-3xl md:text-4xl">{value}</p>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-[#504533] sm:mt-4 sm:text-xs">
                  {label}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  )
}
