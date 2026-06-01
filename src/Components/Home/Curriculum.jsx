import { IconBook, IconGraduation, IconStar } from './icons.jsx'

const wideCards = [
  {
    title: 'Hands-On Sciences',
    description: 'Laboratory inquiry, experimentation, and research from early secondary years.',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Data & Analytics',
    description: 'Statistics, coding, and analytical thinking woven across the curriculum.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  },
]

const smallCards = [
  {
    icon: IconBook,
    title: 'Classical Arabic',
    description: 'Grammar, rhetoric, and literary appreciation for deep textual engagement.',
  },
  {
    icon: IconGraduation,
    title: 'STEM Integration',
    description: 'Engineering, mathematics, and technology pathways with real-world projects.',
  },
  {
    icon: IconStar,
    title: 'Tarbiyah',
    description: 'Character, adab, and spiritual formation guided by qualified scholars.',
  },
]

export default function Curriculum() {
  return (
    <section id="curriculum" className="border-t border-white/5 bg-[#0d0d0d] py-20 md:py-28">
      <div className="container-narrow">
        <h2 className="text-center font-serif text-3xl text-white md:text-5xl">
          The <span className="text-gold">NextGen</span> Curriculum
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {wideCards.map(({ title, description, image }) => (
            <article
              key={title}
              className="group relative min-h-[280px] overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className="font-serif text-2xl text-white">{title}</h3>
                <p className="mt-2 max-w-md text-sm text-white/70">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {smallCards.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-[#141414] p-6 transition hover:border-gold/30"
            >
              <span className="inline-flex rounded-lg bg-gold/10 p-2.5 text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-serif text-xl text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
