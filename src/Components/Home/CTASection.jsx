import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section id="admissions" className="scroll-mt-24 py-16 md:py-24">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#7a5900] to-[#f4b400] px-8 py-14 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden>
            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0 100 L100 0 L100 100 Z" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-2xl space-y-6">
            <h2 className="font-serif text-3xl leading-snug text-[#261900] md:text-4xl lg:text-5xl">
              Prepare Your Child for Leadership in this Life and the Next
            </h2>
            <p className="text-lg text-[#261900]/80">
              Join an elite community of scholars, innovators, and leaders. Admissions are currently
              open for the upcoming academic year.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
              <Link
                to="/contact#apply"
                className="min-w-[200px] rounded-lg bg-[#261900] px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#1b1c1c]"
              >
                Start Application
              </Link>
              <Link
                to="/contact"
                className="min-w-[200px] rounded-lg border border-[#261900]/30 bg-white/10 px-10 py-4 text-xs font-semibold uppercase tracking-widest text-[#261900] backdrop-blur-md transition hover:bg-white/20"
              >
                Visit Our Campus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
