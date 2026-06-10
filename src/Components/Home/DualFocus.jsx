import { Link } from 'react-router-dom'
import { DUAL_PATHWAYS } from '../../lib/siteContent.js'
import { HighlightText, Reveal, RevealStagger, RevealItem } from './motion.jsx'

const PATH_STYLES = [
  {
    accent: 'border-t-[#7a5900]',
    iconBg: 'bg-[#ffdea3]/50',
    iconColor: 'text-[#7a5900]',
    checkColor: 'text-[#7a5900]',
  },
  {
    accent: 'border-t-[#914c00]',
    iconBg: 'bg-[#ffdea3]/30',
    iconColor: 'text-[#914c00]',
    checkColor: 'text-[#914c00]',
  },
]

function PathwayCard({ path, style }) {
  return (
    <article className="premium-card-hover group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#d4c4ac]/35 bg-white shadow-[0_4px_24px_rgba(26,26,26,0.05)]">
      <div className={`border-t-4 ${style.accent} p-6 sm:p-8`}>
        <div className="mb-5 flex items-start gap-4">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${style.iconBg} ${style.iconColor}`}
          >
            <span className="material-symbols-outlined text-2xl">{path.icon}</span>
          </span>
          <div className="min-w-0">
            <h3 className="font-serif text-xl text-[#1b1c1c] sm:text-2xl">
              <HighlightText>{path.title}</HighlightText>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#504533] sm:text-base">{path.summary}</p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-3">
          {path.items.map((item) => (
            <li key={item} className="flex min-w-0 items-start gap-2 text-sm text-[#504533]">
              <span className={`material-symbols-outlined icon-outline mt-0.5 shrink-0 text-base ${style.checkColor}`}>
                check_circle
              </span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function DualFocus() {
  const [academicPath, islamicPath] = DUAL_PATHWAYS.paths

  return (
    <section
      id="dual-pathway"
      className="scroll-mt-20 bg-[#faf3e3] py-16 sm:scroll-mt-24 sm:py-20 md:py-28"
    >
      <div className="container-narrow">
        {/* Centered header — full width on desktop */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7a5900] sm:text-sm">
            Two Journeys, One Vision
          </p>
          <h2 className="mt-3 font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-4xl lg:text-5xl">
            {DUAL_PATHWAYS.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#504533] sm:mt-5 sm:text-base md:text-lg">
            {DUAL_PATHWAYS.subtitle}
          </p>
        </Reveal>

        {/* Full-width card grid */}
        <RevealStagger className="mt-10 grid min-w-0 grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 md:gap-8 lg:mt-16">
          <RevealItem className="min-w-0">
            <PathwayCard path={academicPath} style={PATH_STYLES[0]} />
          </RevealItem>
          <RevealItem className="min-w-0">
            <PathwayCard path={islamicPath} style={PATH_STYLES[1]} />
          </RevealItem>
        </RevealStagger>

        {/* Unified path connector */}
        <Reveal delay={0.1} className="relative mx-auto mt-10 max-w-xl sm:mt-12">
          <div className="home-merging-path rounded-full" />
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#7a5900] px-5 py-2 text-[10px] font-semibold uppercase tracking-widest text-white shadow-md sm:text-xs">
            Unified Path
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 text-center sm:mt-12">
          <Link
            to="/programs"
            className="inline-flex items-center justify-center rounded-lg bg-[#7a5900] px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#654800] active:scale-[0.98] sm:px-10 sm:py-4"
          >
            Explore Program
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
