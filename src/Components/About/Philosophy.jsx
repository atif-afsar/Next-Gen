const cards = [
  {
    title: 'Spiritual Core',
    description:
      "The Quranic foundation isn't just a subject; it's the operating system of our students' minds, providing moral clarity in a complex world.",
    icon: '✦',
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
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="scroll-mt-24 bg-[#f5f3f3] py-20 md:py-28">
      <div className="container-narrow text-center">
        <p className="about-eyebrow">The Philosophy</p>
        <h2 className="about-heading mt-4 text-3xl md:text-5xl">
          Architects of Tomorrow Philosophy
        </h2>
        <p className="about-body mx-auto mt-4 max-w-2xl">
          A unique educational model where spiritual rigor is the catalyst for academic achievement.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map(({ title, description, icon, accent }) => (
            <article
              key={title}
              className={`about-card rounded-xl p-8 text-left transition hover:-translate-y-1 md:p-10 ${
                accent ? 'border-t-2 border-t-[#7a5900]/40' : ''
              }`}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#ffdea3]/40 text-xl text-[#7a5900]">
                {icon}
              </div>
              <h3 className="about-heading text-2xl">{title}</h3>
              <p className="about-body mt-4 text-sm leading-relaxed md:text-base">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
