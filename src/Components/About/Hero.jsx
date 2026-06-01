import { ABOUT_HERO_BG } from '../../lib/images.js'

export default function AboutHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at top right, rgba(255, 184, 0, 0.08), transparent 60%), radial-gradient(circle at bottom left, rgba(255, 212, 129, 0.05), transparent 50%)',
        }}
      />
      <img
        src={ABOUT_HERO_BG}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.22] mix-blend-luminosity"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[#050505]/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-transparent to-[#0a0a0a]" />

      <div className="container-narrow relative z-10 px-4 py-28 text-center md:py-36">
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#ffb800]">
          Empowering the Future Huffaz
        </p>

        <h1 className="font-serif text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Architecting the Future of
          <br />
          <span className="text-[#ffb800]">Faith &amp; Intellect</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
          We transcend the traditional to forge a new path where divine wisdom meets technological
          mastery. Our mission is to cultivate a generation of leaders who carry the Quran in their
          hearts and the future in their hands.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="#mission"
            className="min-w-[220px] rounded-lg bg-[#ffb800] px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a1008] transition hover:scale-[1.02] hover:bg-[#ffc933] hover:shadow-[0_0_24px_rgba(255,184,0,0.35)]"
          >
            Request a Tour
          </a>
          <a
            href="#model"
            className="min-w-[220px] rounded-lg border border-[#ffb800]/80 bg-white/5 px-10 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffb800] backdrop-blur-sm transition hover:bg-white/10"
          >
            Explore Our Model
          </a>
        </div>
      </div>
    </section>
  )
}
