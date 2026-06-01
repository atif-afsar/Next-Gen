import {
  ABOUT_FOUNDER_1,
  ABOUT_FOUNDER_2,
  ABOUT_FOUNDER_3,
} from '../../lib/images.js'

const founders = [
  {
    name: 'Dr. Ibrahim Al-Farsi',
    role: 'Chancellor & Lead Visionary',
    bio: 'Former Senior Architect at Global Intel, now dedicated to building the spiritual framework for future leaders.',
    image: ABOUT_FOUNDER_1,
  },
  {
    name: 'Maryam Suleiman',
    role: 'Director of Innovation',
    bio: 'Pioneer in integrative learning models, bridging the gap between sacred texts and computational science.',
    image: ABOUT_FOUNDER_2,
  },
  {
    name: 'Sheikh Yusuf Zaid',
    role: 'Head of Spiritual Excellence',
    bio: 'Master of Hifz with 30 years of experience in mentoring global scholars in character and ethics.',
    image: ABOUT_FOUNDER_3,
  },
]

export default function Founders() {
  return (
    <section id="founders" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-narrow">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#ffb800]">
              The Founders
            </p>
            <h2 className="font-serif text-3xl text-white md:text-5xl">
              Minds Behind the NextGen Revolution
            </h2>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {founders.map(({ name, role, bio, image }) => (
            <article key={name} className="group">
              <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-2xl bg-[#1a1a1a]">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 border-4 border-[#ffb800]/0 transition duration-500 group-hover:border-[#ffb800]/20" />
              </div>
              <h3 className="font-serif text-2xl text-white">{name}</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb800]">
                {role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
