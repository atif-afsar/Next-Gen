export default function AboutCTA() {
  return (
    <section id="admissions" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-narrow">
        <div className="glass-panel relative overflow-hidden rounded-3xl border border-[#ffb800]/20 p-12 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-[#ffb800]/5 blur-3xl" />
          <h2 className="relative font-serif text-3xl text-white md:text-4xl">
            Join the Next Generation of Visionaries
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/65">
            Applications for the next academic cycle are now open. Begin your journey toward becoming
            an Architect of Tomorrow.
          </p>
          <a
            href="#"
            className="relative mt-10 inline-block rounded-lg bg-gradient-to-r from-[#ffb800] to-[#f3b300] px-12 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a1008] transition hover:shadow-[0_0_30px_rgba(255,184,0,0.4)]"
          >
            Apply For Admission
          </a>
        </div>
      </div>
    </section>
  )
}
