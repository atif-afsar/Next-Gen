import { HERO_BG } from '../../lib/images.js'

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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="hero-bg-image h-full w-full object-cover object-center scale-105"
          fetchPriority="high"
        />
      </div>

      {/* Overlays — keep arches visible, darken edges for text */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(0,0,0,0.35)_0%,transparent_65%)]" />
      <DustParticles />

      {/* Content */}
      <div className="container-narrow relative z-10 px-4 py-28 text-center md:py-36">
        <p className="hero-eyebrow mb-6 text-[11px] font-semibold uppercase tracking-[0.4em] sm:text-xs">
          Empowering the Future Huffaz
        </p>

        <h1 className="font-serif text-[2.25rem] leading-[1.12] sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.08]">
          <span className="hero-headline-white block">
            Architecting the Future of <span className="hero-gold-text">Faith</span>
          </span>
          <span className="hero-gold-text mt-1 block">&amp; Intellect</span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-[15px] leading-[1.75] text-white/95 sm:max-w-2xl sm:text-base md:text-[17px] md:leading-[1.8] [text-shadow:0_1px_8px_rgba(0,0,0,0.85)]">
          We transcend the traditional to forge a new path where divine wisdom meets technological
          mastery. Our mission is to cultivate a generation of leaders who carry the Quran in their
          hearts and the future in their hands.
        </p>

        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <a
            href="#about"
            className="group min-w-[220px] rounded-md bg-[#ffb800] px-9 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#1a1008] shadow-[0_4px_24px_rgba(255,184,0,0.35)] transition hover:bg-[#ffc933] hover:shadow-[0_6px_32px_rgba(255,184,0,0.45)]"
          >
            Discover Our Vision
          </a>
          <a
            href="#about"
            className="min-w-[220px] rounded-md border border-[#ffb800]/90 bg-black/20 px-9 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ffb800] backdrop-blur-sm transition hover:border-[#ffc933] hover:bg-[#ffb800]/10 hover:text-[#ffc933]"
          >
            The Legacy of IMS
          </a>
        </div>
      </div>
    </section>
  )
}
