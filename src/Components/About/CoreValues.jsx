const values = [
  {
    title: 'Vision',
    description: 'Looking beyond the horizon to see possibilities others miss.',
    icon: '👁',
  },
  {
    title: 'Integrity',
    description: 'Steadfast character aligned with divine principles.',
    icon: '🛡',
  },
  {
    title: 'Innovation',
    description: 'Constant evolution in thought, method, and execution.',
    icon: '💡',
  },
  {
    title: 'Service',
    description: 'Leadership is the humble service of humanity and faith.',
    icon: '🤝',
  },
]

export default function CoreValues() {
  return (
    <section className="border-t border-white/5 bg-[#141414] py-20 md:py-28">
      <div className="container-narrow text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#ffb800]">
          The Foundation
        </p>
        <h2 className="font-serif text-3xl text-white md:text-5xl">Our Core Values</h2>

        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
          {values.map(({ title, description, icon }) => (
            <article key={title} className="group text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#ffb800]/10 text-3xl transition duration-300 group-hover:rotate-45 group-hover:bg-[#ffb800]/20">
                <span className="-rotate-0 transition group-hover:-rotate-45">{icon}</span>
              </div>
              <h3 className="font-serif text-xl text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/55">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
