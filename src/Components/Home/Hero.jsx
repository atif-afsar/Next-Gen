import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { HERO, HERO_FEATURES } from '../../lib/siteContent.js'
import OptimizedImage from '../Common/OptimizedImage.jsx'
import { EASE_OUT, staggerContainer, staggerItem } from './motion.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', duration: 0.7, ease: EASE_OUT },
  },
}

function ArrowIcon({ className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function HeroFeatureCard({ title, imageUrl, href, className = '' }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 320 }}
      className={className}
    >
      <Link
        to={href}
        aria-label={title}
        className="hero-feature-card group block h-full overflow-hidden rounded-2xl border border-[#d4c4ac]/40 bg-white shadow-[0_4px_24px_rgba(26,26,26,0.06)] transition-shadow duration-300 hover:border-[#7a5900]/30 hover:shadow-[0_12px_40px_rgba(122,89,0,0.1)]"
      >
        <div className="overflow-hidden bg-[#f5f3f3]">
          <OptimizedImage
            src={imageUrl}
            alt=""
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 sm:aspect-square"
            width={800}
            height={800}
          />
        </div>
        <div className="flex items-center justify-between gap-3 p-4 sm:p-5 md:p-6">
          <h3 className="font-serif text-base leading-snug text-[#1b1c1c] sm:text-lg md:text-xl">{title}</h3>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffdea3]/50 text-[#7a5900] transition-all duration-300 group-hover:bg-[#ffdea3] sm:h-10 sm:w-10">
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-5 sm:w-5" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Hero() {
  const titleParts = HERO.title.split(HERO.titleAccent)
  const hasAccent = titleParts.length > 1

  return (
    <section
      className="home-hero-section relative overflow-hidden bg-white pt-16 sm:pt-20"
      aria-labelledby="home-hero-heading"
    >
      {/* Light ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,222,163,0.45),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_90%_90%,rgba(122,89,0,0.06),transparent_50%)]" />
        <OptimizedImage
          src="/images/hero/image8.png"
          alt=""
          className="h-full w-full object-cover opacity-[0.04]"
          width={1920}
          height={1080}
          aria-hidden
        />
      </div>

      <motion.div
        className="container-narrow relative z-10 px-4 py-12 sm:py-16 md:py-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Hero text */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            variants={staggerItem}
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#7a5900] sm:mb-5 sm:text-xs sm:tracking-[0.4em]"
          >
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            id="home-hero-heading"
            variants={staggerItem}
            className="font-serif text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-[#1b1c1c] sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            {hasAccent ? (
              <>
                {titleParts[0]}
                <span className="text-[#7a5900]">{HERO.titleAccent}</span>
                {titleParts[1]}
              </>
            ) : (
              HERO.title
            )}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#504533] sm:mt-6 sm:text-base md:text-lg md:leading-8"
          >
            {HERO.description}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
          >
            <Link
              to={HERO.ctaPrimary.path}
              className="inline-flex items-center justify-center rounded-lg bg-[#7a5900] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(122,89,0,0.25)] transition hover:bg-[#654800] active:scale-[0.98] sm:min-w-[200px]"
            >
              {HERO.ctaPrimary.label}
            </Link>
            <Link
              to={HERO.ctaSecondary.path}
              className="inline-flex items-center justify-center rounded-lg border border-[#d4c4ac] bg-white px-7 py-3.5 text-sm font-semibold text-[#1b1c1c] transition hover:border-[#7a5900]/40 hover:bg-[#fbf9f8] active:scale-[0.98] sm:min-w-[200px]"
            >
              {HERO.ctaSecondary.label}
            </Link>
          </motion.div>
        </div>

        {/* Feature cards */}
        <motion.div
          variants={staggerContainer}
          className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 md:mt-20 lg:grid-cols-3 lg:gap-6"
        >
          {HERO_FEATURES.map((feature, index) => (
            <HeroFeatureCard
              key={feature.id}
              {...feature}
              className={
                index === HERO_FEATURES.length - 1 ? 'sm:col-span-2 lg:col-span-1' : undefined
              }
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
