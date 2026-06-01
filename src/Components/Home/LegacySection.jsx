import { IconStar, IconUsers } from './icons.jsx'

const BUILDING_IMAGE =
  'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80'

const stats = [
  {
    icon: IconStar,
    title: 'Full Hifz Excellence',
    description: 'Rigorous memorization with tajweed mastery and daily revision cycles.',
  },
  {
    icon: IconUsers,
    title: '20+ Years',
    description: 'A trusted institution shaping Huffaz into global academic leaders.',
  },
]

export default function LegacySection() {
  return (
    <section id="mission" className="py-20 md:py-28">
      <div className="container-narrow grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={BUILDING_IMAGE}
            alt="Islamic architecture at NextGen Academy campus"
            className="aspect-[4/3] w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
        </div>

        <div>
          <h2 className="font-serif text-3xl text-white md:text-5xl">
            A Legacy of <span className="text-gold">Excellence</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/65 md:text-lg">
            For over two decades, NextGen Academy has stood at the intersection of sacred tradition
            and modern scholarship—nurturing students who carry the light of the Quran into
            laboratories, boardrooms, and communities worldwide.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {stats.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-[#141414] p-5 transition hover:border-gold/30"
              >
                <span className="inline-flex rounded-lg bg-gold/10 p-2 text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-serif text-lg text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
