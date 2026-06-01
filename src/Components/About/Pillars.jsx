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
    <section className="py-20 md:py-28">
      <div className="container-narrow grid gap-8 lg:grid-cols-3">
        {pillars.map(({ title, description, image }) => (
          <article
            key={title}
            className="group relative flex h-[420px] items-end overflow-hidden rounded-2xl border border-white/10 p-8 md:h-[500px] md:p-10"
          >
            <img
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-110 group-hover:opacity-60"
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
            <div className="relative z-10">
              <h3 className="font-serif text-2xl text-white md:text-3xl">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60 transition group-hover:text-white/85 md:text-base">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
