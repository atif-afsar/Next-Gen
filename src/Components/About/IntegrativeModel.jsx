const features = [
  {
    num: '01',
    title: 'Dual-Stream Hifz',
    description:
      'A proprietary memorization protocol that enhances cognitive plasticity, integrated seamlessly into the daily schedule.',
  },
  {
    num: '02',
    title: 'ICSE Advanced Tier',
    description:
      'Aggressive academic rigor in STEM and Humanities, taught with a global-first perspective and project-based assessments.',
  },
  {
    num: '03',
    title: 'Leadership Labs',
    description:
      'Weekly modules focused on public speaking, ethics, geopolitical awareness, and venture design.',
  },
]

export default function IntegrativeModel() {
  return (
    <section id="model" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffb800]/5 blur-[120px]" />

      <div className="container-narrow relative grid items-center gap-16 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-white md:text-5xl">The NextGen Integrative Model</h2>
          <div className="mt-12 space-y-10">
            {features.map(({ num, title, description }) => (
              <div key={num} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#ffb800] text-xs font-bold text-[#ffb800]">
                  {num}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white md:text-2xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 md:text-base">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-white/5 shadow-[0_0_40px_rgba(255,184,0,0.05)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ffb800]/10 to-transparent" />
          <div className="relative z-10 text-center">
            <div className="mb-8 flex justify-center">
              <div className="animate-spin-slow flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed border-[#ffb800]/40">
                <span className="text-5xl text-[#ffb800]">◉</span>
              </div>
            </div>
            <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#ffb800]">
              SYSTEM ARCHITECTURE
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['FAITH', 'LOGIC', 'IMPACT'].map((pill) => (
                <span
                  key={pill}
                  className="glass-panel rounded-full px-4 py-2 text-xs text-white/60"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
