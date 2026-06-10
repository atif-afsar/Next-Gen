import { ABOUT_PAGE_HERO } from '../../lib/images.js'
import { ABOUT } from '../../lib/siteContent.js'
import OptimizedImage from '../Common/OptimizedImage.jsx'
import { AnimatedButton } from '../Common/animations.jsx'
import { motion, EASE_OUT, heroLoadContainer, heroLoadItem } from './motion.jsx'
import './about-hero.css'

export default function AboutHero() {
  return (
    <header className="about-hero-split relative overflow-hidden bg-[#faf3e3] pt-24 pb-16 text-[#1b1c1c] sm:pt-28 sm:pb-20 md:pt-36 md:pb-28">
      <div
        className="about-hero-accent pointer-events-none absolute top-0 right-0 -z-10 hidden h-full w-2/5 max-w-xl sm:block"
        aria-hidden
      />

      <div className="container-narrow relative px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-12 md:gap-10 lg:gap-14">
          <motion.div
            className="md:col-span-7"
            variants={heroLoadContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={heroLoadItem}
              className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#7a5900] sm:mb-4 sm:text-sm"
            >
              {ABOUT.eyebrow}
            </motion.p>

            <motion.h1
              variants={heroLoadItem}
              className="font-serif text-3xl leading-[1.12] text-balance sm:text-4xl md:text-5xl lg:text-[3.75rem] lg:leading-[1.1]"
            >
              {ABOUT.title}
            </motion.h1>

            <motion.p
              variants={heroLoadItem}
              className="mt-4 max-w-xl text-base leading-relaxed text-[#504533] sm:mt-6 sm:text-lg"
            >
              {ABOUT.paragraphs[0]}
            </motion.p>

            <motion.div
              variants={heroLoadItem}
              className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <AnimatedButton
                href="#vision-mission"
                className="w-full rounded bg-[#7a5900] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#654800] sm:w-auto sm:px-8 sm:py-4"
              >
                Vision &amp; Mission
              </AnimatedButton>
              <AnimatedButton
                href="#why-leadership"
                className="w-full rounded border border-[#827560] bg-white px-6 py-3.5 text-center text-sm font-semibold text-[#1b1c1c] transition hover:bg-[#f3ecd9] sm:w-auto sm:px-8 sm:py-4"
              >
                Why Academic Leadership
              </AnimatedButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative md:col-span-5"
            initial={{ opacity: 0, x: 32, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EASE_OUT }}
          >
            <div className="premium-image relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl shadow-2xl sm:max-w-none">
              <OptimizedImage
                src={ABOUT_PAGE_HERO}
                alt="Balancing academic excellence and Iman — the heart of NextGen Academy"
                className="h-full w-full object-cover object-center"
                priority
                width={800}
                height={1000}
              />
            </div>

            <motion.div
              className="about-hero-glass absolute -bottom-4 left-2 right-2 mx-auto max-w-[280px] rounded-lg p-5 sm:-bottom-6 sm:left-auto sm:right-auto sm:max-w-[240px] sm:-left-4 md:-left-8 md:p-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: EASE_OUT }}
            >
              <p className="font-serif text-lg italic leading-snug text-[#7a5900] sm:text-xl">
                &ldquo;Building Academic Leadership for New India&rdquo;
              </p>
              <p className="mt-2 text-sm text-[#504533]">NextGen Academy</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
