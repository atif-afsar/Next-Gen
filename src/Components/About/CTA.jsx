import { Link } from 'react-router-dom'
import { ABOUT_HERITAGE } from '../../lib/images.js'

export default function AboutCTA() {
  return (
    <section id="admissions" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-2xl bg-[#7a5900] px-8 py-14 text-center md:px-16 md:py-20">
          <img
            src={ABOUT_HERITAGE}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-10"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl text-white md:text-4xl lg:text-5xl">
              Begin Your Future Heritage
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Applications for the 2025–2026 academic year are now open. Join a cohort of leaders
              destined to redefine the future.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact#apply"
                className="min-w-[200px] rounded bg-white px-10 py-4 text-sm font-semibold text-[#7a5900] shadow-xl transition hover:scale-105"
              >
                Submit Application
              </Link>
              <Link
                to="/contact"
                className="min-w-[200px] rounded border border-white/30 px-10 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request Prospectus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
