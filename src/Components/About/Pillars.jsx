import {
  ABOUT_PILLAR_INTELLECTUAL,
  ABOUT_PILLAR_LEADERSHIP,
  ABOUT_PILLAR_SPIRITUAL,
} from '../../lib/images.js'

const pillars = [
  {
    title: 'Intellectual Rigor',
    description:
      'A commitment to deep critical thinking and the pursuit of absolute mastery in all fields of knowledge.',
    image: ABOUT_PILLAR_INTELLECTUAL,
  },
  {
    title: 'Spiritual Excellence',
    description:
      'Refining the soul to achieve Ihsan—performing every action with perfection as if in the presence of the Divine.',
    image: ABOUT_PILLAR_SPIRITUAL,
  },
  {
    title: 'Leadership Character',
    description:
      'Cultivating the inner strength and outer skill required to lead movements and influence the global narrative.',
    image: ABOUT_PILLAR_LEADERSHIP,
  },
]

export default function Pillars() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-narrow">
        <p className="about-eyebrow mb-4 text-center">Our Distinction</p>
        <h2 className="about-heading mb-14 text-center text-3xl md:text-5xl">Institutional Pillars</h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {pillars.map(({ title, description, image }) => (
            <article
              key={title}
              className="group relative flex min-h-[420px] items-end overflow-hidden rounded-2xl border border-[#d4c4ac]/30 shadow-sm md:min-h-[500px]"
            >
              <img
                src={image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1c]/95 via-[#1b1c1c]/50 to-[#1b1c1c]/15" />
              <div className="relative z-10 p-8 md:p-10">
                <h3 className="font-serif text-2xl text-white md:text-3xl">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/90 md:text-base">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
