import { CURRICULUM_FINANCIAL, CURRICULUM_ROBOTICS } from '../../lib/images.js'
import { IconFlask, IconPsychology, IconTranslate } from './icons.jsx'

const wideCards = [
  {
    title: 'Robotics & AI Lab',
    description: 'From coding fundamentals to advanced machine learning models.',
    image: CURRICULUM_ROBOTICS,
  },
  {
    title: 'Financial Literacy',
    description: 'Understanding Islamic finance, wealth management, and global economics.',
    image: CURRICULUM_FINANCIAL,
  },
]

const smallCards = [
  {
    icon: IconTranslate,
    title: 'Classical Arabic',
    description: 'Mastering the language of the Quran for deep theological research.',
  },
  {
    icon: IconFlask,
    title: 'STEM Integration',
    description: 'Physics, Chemistry, and Biology taught through a lens of divine design.',
  },
  {
    icon: IconPsychology,
    title: 'Tarbiyah',
    description: 'A curated emotional and psychological growth program for future leaders.',
  },
]

export default function Curriculum() {
  return (
    <section id="curriculum" className="border-t border-white/5 bg-[#0a0a0a] py-20 md:py-28">
      <div className="container-narrow">
        <h2 className="text-center font-serif text-3xl text-white md:text-5xl">
          The <span className="text-[#ffb800]">NextGen</span> Curriculum
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:h-[600px] md:grid-cols-6 md:grid-rows-2">
          {wideCards.map(({ title, description, image }) => (
            <article
              key={title}
              className="group relative min-h-[260px] overflow-hidden rounded-3xl border border-white/10 bg-[#141414] p-8 md:col-span-3 md:min-h-0"
            >
              <img
                src={image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-700 group-hover:scale-110 group-hover:opacity-35"
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
              <div className="relative z-10 flex h-full min-h-[200px] flex-col justify-end md:min-h-0">
                <h3 className="font-serif text-2xl text-[#ffb800] md:text-3xl">{title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70 md:text-base">
                  {description}
                </p>
              </div>
            </article>
          ))}

          {smallCards.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#141414]/80 p-8 text-center backdrop-blur-sm transition hover:border-[#ffb800]/30 md:col-span-2"
            >
              <span className="mb-4 inline-flex text-[#ffb800]">
                <Icon />
              </span>
              <h3 className="font-serif text-lg font-bold text-[#ffb800] md:text-xl">{title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/60">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
