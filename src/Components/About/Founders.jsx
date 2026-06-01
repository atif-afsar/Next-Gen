import {
  ABOUT_FOUNDER_1,
  ABOUT_FOUNDER_2,
  ABOUT_FOUNDER_3,
} from '../../lib/images.js'

const founders = [
  {
    name: 'Dr. Ibrahim Al-Farsi',
    role: 'Dean of Innovation',
    image: ABOUT_FOUNDER_1,
  },
  {
    name: 'Dr. Sarah Khan',
    role: 'Director of Academics',
    image: ABOUT_FOUNDER_2,
  },
  {
    name: 'Prof. Ahmed Malik',
    role: 'Campus Experience Officer',
    image: ABOUT_FOUNDER_3,
  },
]

export default function Founders() {
  return (
    <section id="founders" className="scroll-mt-24 bg-[#fbf9f8] py-20 md:py-28">
      <div className="container-narrow">
        <div className="mb-14 max-w-2xl">
          <p className="about-eyebrow">The Minds</p>
          <h2 className="about-heading mt-4 text-3xl md:text-5xl">
            Minds Behind the NextGen Revolution
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {founders.map(({ name, role, image }) => (
            <article key={name} className="group">
              <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <h3 className="about-heading text-xl">{name}</h3>
              <p className="about-body mt-1 text-sm">{role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
