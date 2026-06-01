import { ABOUT_BG } from '../../lib/images.js'
import { IconStar, IconUsers } from './icons.jsx'

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
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-narrow grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
          <img
            src={ABOUT_BG}
            alt="NextGen Academy campus — modern Islamic architecture at twilight"
            className="aspect-square w-full object-cover object-center transition duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
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
