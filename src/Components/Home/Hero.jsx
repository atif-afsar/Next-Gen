import { HERO_BG } from '../../lib/images.js'
import { TAGLINE } from '../../lib/seo.js'
import OptimizedImage from '../Common/OptimizedImage.jsx'
import { motion, EASE_OUT, staggerContainer, staggerItem } from './motion.jsx'

const PARTICLES = [
  { left: '18%', top: '22%', size: 3, opacity: 0.7, delay: '0s', dur: '6s' },
  { left: '42%', top: '35%', size: 2, opacity: 0.5, delay: '1.2s', dur: '8s' },
  { left: '55%', top: '28%', size: 4, opacity: 0.6, delay: '0.4s', dur: '7s' },
  { left: '68%', top: '40%', size: 2, opacity: 0.45, delay: '2s', dur: '9s' },
  { left: '32%', top: '48%', size: 3, opacity: 0.55, delay: '0.8s', dur: '6.5s' },
  { left: '78%', top: '32%', size: 2, opacity: 0.4, delay: '1.6s', dur: '7.5s' },
  { left: '48%', top: '18%', size: 2, opacity: 0.65, delay: '0.2s', dur: '5.5s' },
  { left: '25%', top: '38%', size: 2, opacity: 0.35, delay: '2.4s', dur: '8.5s' },
  { left: '62%', top: '52%', size: 3, opacity: 0.5, delay: '1s', dur: '6s' },
  { left: '85%', top: '45%', size: 2, opacity: 0.3, delay: '1.8s', dur: '7s' },
]

function DustParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="hero-particle absolute rounded-full bg-[#ffb800]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.dur,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className="home-hero-section relative z-0 flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
      aria-labelledby="home-hero-heading"
    >
      <div className="absolute inset-0" aria-hidden>
        <OptimizedImage
          src={HERO_BG}
          alt="NextGen Academy — Islamic residential school campus in Aligarh at dusk"
          className="hero-bg-image h-full w-full object-cover object-center"
          priority
          width={1920}
          height={1080}
        />
      </div>

      <div className="absolute inset-0 bg-black/25" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]/95" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(0,0,0,0.35)_0%,transparent_65%)]" aria-hidden />
      <DustParticles />

      <motion.div
        className="container-narrow relative z-10 w-full px-4 py-20 text-center sm:py-28 md:py-36"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={staggerItem}
          className="hero-eyebrow mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] sm:mb-6 sm:text-xs sm:tracking-[0.4em]"
        >
          {TAGLINE}
        </motion.p>

        <motion.h1
          id="home-hero-heading"
          variants={staggerItem}
          className="font-serif text-[1.75rem] leading-[1.12] sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.08]"
        >
          <span className="hero-headline-white block">
            NextGen Academy — <span className="hero-gold-text">Aligarh</span>
          </span>
          <span className="hero-gold-text mt-1 block sm:mt-2">Hifz to Leadership</span>
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="mx-auto mt-6 max-w-xl px-1 text-sm leading-[1.75] text-white/95 sm:mt-8 sm:max-w-2xl sm:text-base md:text-[17px] md:leading-[1.8] [text-shadow:0_1px_8px_rgba(0,0,0,0.85)]"
        >
          A premium Islamic residential school in Aligarh from Grade 5 through graduation — especially Hifz-completed
          students. We unite Iman with academic excellence, character, discipline, and innovation at
          Green Fort City, Near AMU Fort.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-11 sm:flex-row sm:items-center sm:gap-5"
        >
          <motion.a
            href="/about"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-md bg-[#ffb800] px-6 py-3.5 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-[#1a1008] shadow-[0_4px_24px_rgba(255,184,0,0.35)] sm:min-w-[220px] sm:w-auto sm:px-9 sm:text-[11px] sm:tracking-[0.18em]"
            aria-label="Discover NextGen Academy vision"
          >
            Discover Our Vision
          </motion.a>
          <motion.a
            href="/programs"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-md border border-[#ffb800]/90 bg-black/20 px-6 py-3.5 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-[#ffb800] backdrop-blur-sm sm:min-w-[220px] sm:w-auto sm:px-9 sm:text-[11px] sm:tracking-[0.18em]"
            aria-label="Explore Hifz plus academic programs"
          >
            Hifz Plus Academic Program
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
