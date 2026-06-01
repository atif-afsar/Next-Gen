const values = [
  {
    num: '01',
    title: 'Vision',
    description:
      "We look beyond the horizon, preparing students for industries and challenges that don't yet exist.",
    offset: true,
  },
  {
    num: '02',
    title: 'Integrity',
    description:
      'Character is our core curriculum. We cultivate an unbreakable moral compass guided by faith.',
    offset: false,
  },
  {
    num: '03',
    title: 'Innovation',
    description:
      'Applying timeless wisdom to modern problems requires a spirit of relentless experimentation.',
    offset: true,
  },
  {
    num: '04',
    title: 'Service',
    description:
      'True leadership is the ability to serve the community and the world at large with humility.',
    offset: false,
  },
]

export default function CoreValues() {
  return (
    <section className="overflow-hidden bg-white py-20 md:py-28">
      <div className="container-narrow">
        <h2 className="about-heading mb-14 text-3xl md:text-5xl">The Pillars of Our Ethos</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ num, title, description, offset }) => (
            <article key={title} className={offset ? 'lg:translate-y-12' : ''}>
              <div className="about-card h-full p-8 transition duration-300 hover:-translate-y-2 md:p-10">
                <p className="mb-6 font-serif text-4xl text-[#ffdea3] opacity-80">{num}</p>
                <h3 className="about-heading text-xl">{title}</h3>
                <p className="about-body mt-4 text-sm leading-relaxed">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
