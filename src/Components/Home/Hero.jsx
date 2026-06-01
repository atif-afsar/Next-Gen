const HERO_IMAGE =
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        role="img"
        aria-label="Student in scholarly setting"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-[#0a0a0a]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.15) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container-narrow relative z-10 py-24 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold md:text-sm">
          Empowering Future Leaders
        </p>
        <h1 className="font-serif text-4xl leading-tight text-white md:text-6xl lg:text-7xl">
          Transforming{' '}
          <span className="text-gold italic">Huffaz</span>
          <br />
          into Academic Leaders
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          Bridging the timeless wisdom of the Quran with the rigor of STEM &amp; IB education to
          forge the next generation of visionary leaders.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#admissions"
            className="min-w-[160px] rounded-full bg-gold px-8 py-3 text-sm font-semibold text-black transition hover:bg-[#e8c96a]"
          >
            Apply Now
          </a>
          <a
            href="#"
            className="min-w-[160px] rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
          >
            Download Prospectus
          </a>
        </div>
      </div>
    </section>
  )
}
