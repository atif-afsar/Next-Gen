import { IconBook, IconStar, IconUsers } from './icons.jsx'

const pillars = [
  {
    icon: IconUsers,
    title: 'Leadership',
    description:
      'Cultivating ethical leaders who serve humanity with wisdom, courage, and compassion.',
  },
  {
    icon: IconStar,
    title: 'Iman',
    description:
      'Deepening spiritual foundations through Quran, Sunnah, and authentic Islamic scholarship.',
  },
  {
    icon: IconBook,
    title: 'Innovation',
    description:
      'Embracing STEM, design thinking, and global competencies for the challenges of tomorrow.',
  },
  {
    icon: IconBook,
    title: 'Knowledge',
    description:
      'Pursuing academic rigor across sciences, humanities, and languages with excellence.',
  },
]

export default function VisionPillars() {
  return (
    <section className="border-t border-white/5 bg-[#0d0d0d] py-20 md:py-28">
      <div className="container-narrow">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-white md:text-5xl">
            Our <span className="text-gold">Vision Pillars</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl border border-white/10 bg-[#141414] p-6 transition hover:border-gold/40"
            >
              <span className="inline-flex rounded-lg bg-gold/10 p-2.5 text-gold transition group-hover:bg-gold/20">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-serif text-xl text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
