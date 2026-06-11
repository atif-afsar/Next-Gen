import { motion } from 'motion/react'
import { HERO, HERO_FEATURES } from '../../lib/siteContent.js'
import { AnimatedButton } from '../Common/animations.jsx'
import HeroSpline from './HeroSpline.jsx'
import { Spotlight } from '../ui/Spotlight.jsx'
import { heroLoadContainer, heroLoadItem } from './motion.jsx'

const HERO_SPLINE_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'

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

function CornerWaves() {
  return (
    <>
      <svg
        className="hero-corner-wave hero-corner-wave--tl pointer-events-none absolute -left-8 -top-4 hidden h-32 w-32 text-[#ffdea3] sm:block sm:h-40 sm:w-40"
        viewBox="0 0 160 160"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 80 C 40 20, 100 10, 160 0 M0 110 C 50 60, 110 50, 160 40 M0 140 C 60 100, 120 90, 160 80"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
      <svg
        className="hero-corner-wave hero-corner-wave--br pointer-events-none absolute -bottom-6 -right-6 hidden h-36 w-36 text-[#7a5900] sm:block sm:h-44 sm:w-44"
        viewBox="0 0 160 160"
        fill="none"
        aria-hidden
      >
        <path
          d="M160 80 C 120 120, 60 130, 0 160 M160 50 C 110 90, 50 100, 0 130 M160 20 C 100 60, 40 70, 0 100"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.15"
        />
      </svg>
    </>
  )
}

function FloatingFeatureCard({ title, href, className = '' }) {
  return (
    <motion.div variants={heroLoadItem} className={`absolute z-20 ${className}`}>
      <AnimatedButton
        to={href}
        wrapperClassName="block w-full"
        className="group flex w-full max-w-full items-start justify-between gap-2 rounded-2xl border border-[#d4c4ac]/50 bg-white/95 p-3.5 shadow-[0_8px_32px_rgba(26,26,26,0.08)] backdrop-blur-sm transition hover:border-[#7a5900]/30 hover:shadow-[0_12px_40px_rgba(122,89,0,0.12)] xl:gap-3 xl:p-5"
        aria-label={title}
      >
        <span className="font-serif text-xs leading-snug text-[#1b1c1c] xl:text-sm 2xl:text-base">{title}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ffdea3]/50 text-[#7a5900] transition-all duration-300 group-hover:bg-[#ffdea3]">
          <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </AnimatedButton>
    </motion.div>
  )
}

export default function Hero() {
  const titleParts = HERO.title.split(HERO.titleAccent)
  const hasAccent = titleParts.length > 1
  const [featureLeft, featureRight, featureBottom] = HERO_FEATURES

  return (
    <section
      className="home-hero-section relative overflow-hidden bg-[#faf3e3] pt-16 sm:pt-20"
      aria-labelledby="home-hero-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="hero-ambient-float absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,222,163,0.45),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_90%_90%,rgba(122,89,0,0.06),transparent_50%)]" />
        <CornerWaves />
      </div>

      <motion.div
        className="hero-container container-narrow relative z-10 w-full px-4 pb-10 pt-8 sm:pb-16 sm:pt-14 md:pb-20"
        variants={heroLoadContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Hero copy — single aligned column */}
        <div className="hero-copy mx-auto w-full max-w-4xl text-center">
          <motion.p
            variants={heroLoadItem}
            className="mx-auto mb-5 max-w-2xl text-sm font-medium leading-tight tracking-tight text-yellow-800 sm:mb-8 sm:text-lg"
          >
            {HERO.eyebrow}
          </motion.p>

          <motion.h1
            id="home-hero-heading"
            variants={heroLoadItem}
            className="hero-copy-block font-serif text-[1.45rem] font-semibold leading-[1.25] tracking-tight text-balance text-[#1b1c1c] min-[400px]:text-[1.6rem] sm:text-4xl sm:leading-[1.15] md:text-5xl lg:text-[3.25rem] lg:leading-[1.12]"
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
            variants={heroLoadItem}
            className="hero-copy-block mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#504533] sm:mt-6 sm:text-base md:text-lg md:leading-8"
          >
            {HERO.description}
          </motion.p>

          <motion.div
            variants={heroLoadItem}
            className="hero-cta-row mt-7 w-full sm:mt-10"
          >
            <AnimatedButton
              to={HERO.ctaPrimary.path}
              wrapperClassName="w-full"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#7a5900] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(122,89,0,0.25)] transition hover:bg-[#654800] sm:px-8"
            >
              {HERO.ctaPrimary.label}
            </AnimatedButton>
            <AnimatedButton
              to={HERO.ctaSecondary.path}
              wrapperClassName="w-full"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#d4c4ac] bg-white px-6 py-3.5 text-sm font-semibold text-[#1b1c1c] transition hover:border-[#7a5900]/40 hover:bg-[#f3ecd9] sm:px-8"
            >
              {HERO.ctaSecondary.label}
            </AnimatedButton>
          </motion.div>
        </div>

        {/* Spline + feature cards — same width column as copy */}
        <motion.div variants={heroLoadItem} className="hero-media mx-auto mt-8 w-full max-w-5xl sm:mt-12 md:mt-16">
          <div className="hero-spline-stage relative w-full">
            <div
              id="hero-spline-container"
              className="hero-spline-placeholder relative w-full overflow-hidden rounded-2xl border border-[#d4c4ac]/40 bg-gradient-to-br from-[#f3ecd9] via-[#faf3e3] to-[#ffdea3]/30 shadow-[0_8px_40px_rgba(122,89,0,0.08)] sm:rounded-3xl md:rounded-[2rem]"
              aria-label="Interactive 3D scene"
            >
              <Spotlight
                className="hero-spline-spotlight pointer-events-none hidden md:block"
                fill="#ffdea3"
              />
              <div className="hero-spline-canvas hero-spline-canvas--interactive absolute inset-0 flex items-center justify-center">
                <HeroSpline scene={HERO_SPLINE_SCENE} />
              </div>
            </div>

            <motion.div
              variants={heroLoadItem}
              className="hero-spline-pill pointer-events-none absolute left-1/2 top-4 z-30 hidden -translate-x-1/2 lg:block xl:top-6"
            >
              <div className="flex w-[min(90vw,22rem)] items-center gap-3 rounded-full border border-[#d4c4ac]/50 bg-white/95 px-4 py-2.5 shadow-[0_4px_24px_rgba(26,26,26,0.08)] backdrop-blur-sm xl:px-5 xl:py-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ffdea3]/60 text-[#7a5900] xl:h-8 xl:w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-3.5 w-3.5 xl:h-4 xl:w-4"
                    aria-hidden
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </span>
                <p className="line-clamp-2 text-left text-xs leading-snug text-[#504533] xl:text-sm">
                  {HERO.description}
                </p>
              </div>
            </motion.div>

            {featureLeft && (
              <FloatingFeatureCard
                title={featureLeft.title}
                href={featureLeft.href}
                className="hero-float-card hero-float-card--left"
              />
            )}
            {featureRight && (
              <FloatingFeatureCard
                title={featureRight.title}
                href={featureRight.href}
                className="hero-float-card hero-float-card--right"
              />
            )}
            {featureBottom && (
              <FloatingFeatureCard
                title={featureBottom.title}
                href={featureBottom.href}
                className="hero-float-card hero-float-card--bottom"
              />
            )}
          </div>

          <div className="hero-mobile-features mt-4 w-full lg:hidden">
            {HERO_FEATURES.map((feature) => (
              <AnimatedButton
                key={feature.id}
                to={feature.href}
                wrapperClassName="hero-mobile-feature-wrap"
                layoutClass="flex w-full items-center justify-between"
                className="hero-mobile-feature-card gap-3 rounded-2xl border border-[#d4c4ac]/50 bg-white px-4 py-3.5 text-sm font-medium text-[#1b1c1c] shadow-sm"
              >
                <span className="min-w-0 flex-1 text-left leading-snug">{feature.title}</span>
                <ArrowIcon className="h-4 w-4 shrink-0 text-[#7a5900]" />
              </AnimatedButton>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
