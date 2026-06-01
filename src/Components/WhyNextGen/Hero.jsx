import { Link } from 'react-router-dom'

export default function WhyNextGenHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden py-24">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffdea3_0%,transparent_70%)]" />
      </div>

      <div className="container-narrow relative z-10 px-4 text-center">
        <span className="mb-8 inline-block rounded-full border border-[#d4c4ac] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a5900]">
          The Architect&apos;s Path
        </span>

        <h1 className="font-serif text-4xl leading-[1.15] text-[#1b1c1c] md:text-6xl lg:text-7xl">
          Why NextGen? Because the Future Needs{' '}
          <span className="italic text-[#7a5900]">Faith-Powered Intellect.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#504533]">
          We do not just teach students; we architect leaders. NextGen Academy bridges the gap
          between rigorous academic excellence and profound spiritual depth.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#curriculum"
            className="why-btn-primary rounded-lg px-10 py-4 text-sm font-semibold uppercase tracking-wider shadow-lg shadow-[#7a5900]/20 transition"
          >
            Explore the Curriculum
          </a>
          <Link
            to="/contact"
            className="why-btn-outline rounded-lg px-10 py-4 text-sm font-semibold uppercase tracking-wider transition"
          >
            Virtual Campus Tour
          </Link>
        </div>
      </div>
    </section>
  )
}
