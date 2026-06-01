const cards = [
  {
    title: 'Spiritual Core',
    description:
      "The Quranic foundation isn't just a subject; it's the operating system of our students' minds, providing moral clarity in a complex world.",
    icon: '✦',
    accent: false,
  },
  {
    title: 'Technological Edge',
    description:
      'Students master the tools of the future—AI, coding, and strategic engineering—to become creators rather than just consumers of technology.',
    icon: '⬡',
    accent: true,
  },
  {
    title: 'Global Leadership',
    description:
      "Developing emotional intelligence and cultural fluency to navigate and lead within the world's most elite professional circles.",
    icon: '◎',
    accent: false,
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="scroll-mt-24 border-t border-white/5 bg-[#0c0f0f] py-20 md:py-28">
      <div className="container-narrow text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#ffb800]">
          The Philosophy
        </p>
        <h2 className="font-serif text-3xl text-white md:text-5xl">
          Architects of Tomorrow Philosophy
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/60">
          A unique educational model where spiritual rigor is the catalyst for academic achievement.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {cards.map(({ title, description, icon, accent }) => (
            <article
              key={title}
              className={`glass-panel rounded-xl p-10 text-left transition duration-500 hover:-translate-y-2 ${
                accent ? 'border-t-2 border-t-[#ffb800]/30' : ''
              }`}
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#ffb800]/15 text-2xl text-[#ffb800]">
                {icon}
              </div>
              <h3 className="font-serif text-2xl text-white">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
