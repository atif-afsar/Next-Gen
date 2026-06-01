import { Link } from 'react-router-dom'

export default function WhyNextGenCTA() {
  return (
    <section className="why-highlight-card py-20 text-center md:py-24">
      <div className="container-narrow px-4">
        <h2 className="font-serif text-3xl text-white md:text-5xl">
          Ready to Architect Your Child&apos;s Future?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
          Admissions for the 2025 Academic Year are now open. We invite visionaries to apply.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="rounded-lg bg-white px-12 py-5 text-sm font-semibold uppercase tracking-wider text-[#7a5900] transition hover:scale-[1.02]"
          >
            Begin Application
          </Link>
          <a
            href="#"
            className="rounded-lg border border-white/30 px-12 py-5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white/10"
          >
            Request Prospectus
          </a>
        </div>
      </div>
    </section>
  )
}
