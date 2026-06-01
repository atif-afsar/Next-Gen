const stages = [
  {
    level: 'Level 1–7',
    title: 'Foundation',
    description: 'Core Hifz, Arabic literacy, and foundational sciences with strong adab.',
  },
  {
    level: 'Level 8–10',
    title: 'Specialization',
    description: 'STEM tracks, Islamic sciences depth, and leadership workshops.',
  },
  {
    level: 'Level 11–12',
    title: 'Synthesis',
    description: 'Capstone projects, university prep, and community impact initiatives.',
  },
  {
    level: 'Post Grad',
    title: 'Heritage',
    description: 'Alumni mentorship, global networks, and lifelong learning pathways.',
  },
]

export default function Timeline() {
  return (
    <section id="leadership" className="py-20 md:py-28">
      <div className="container-narrow">
        <h2 className="text-center font-serif text-3xl text-white md:text-5xl">
          The <span className="text-gold">Leadership</span> Timeline
        </h2>

        <div className="relative mt-16 hidden md:block">
          <div className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="grid grid-cols-4 gap-4">
            {stages.map(({ level, title, description }) => (
              <div key={title} className="relative pt-12 text-center">
                <span className="absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-gold bg-[#0a0a0a] shadow-[0_0_12px_rgba(212,175,55,0.5)]" />
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">{level}</p>
                <h3 className="mt-2 font-serif text-xl text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-8 md:hidden">
          {stages.map(({ level, title, description }, i) => (
            <div key={title} className="relative border-l-2 border-gold/40 pl-6">
              <span className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-gold bg-[#0a0a0a]" />
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">{level}</p>
              <h3 className="mt-1 font-serif text-xl text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/55">{description}</p>
              {i < stages.length - 1 && (
                <div className="absolute -bottom-4 left-0 h-4 w-px bg-gold/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
