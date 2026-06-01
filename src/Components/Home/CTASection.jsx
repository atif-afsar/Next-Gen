export default function CTASection() {
  return (
    <section id="admissions" className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#0a0a0a] px-8 py-14 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />

          <h2 className="relative font-serif text-3xl leading-snug text-white md:text-4xl lg:text-5xl">
            Prepare Your Child for <span className="text-gold">Leadership</span>
            <br />
            in This World and the Hereafter.
          </h2>

          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="min-w-[200px] rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-[#e8c96a]"
            >
              Start Admission Process
            </a>
            <a
              href="#"
              className="min-w-[200px] rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
            >
              Book a Campus Tour
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
