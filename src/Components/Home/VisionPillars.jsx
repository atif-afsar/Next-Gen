import { VISION_PILLARS } from '../../lib/homeContent.js'

export default function VisionPillars() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container-narrow">
        <h2 className="text-center font-serif text-3xl text-[#1b1c1c] md:text-4xl">
          The Pillars of our Vision
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VISION_PILLARS.map(({ icon, title, description }) => (
            <article
              key={title}
              className="home-glass-card group rounded-lg p-8 transition duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#ffdea3]/40 text-[#7a5900]">
                <span className="material-symbols-outlined">{icon}</span>
              </div>
              <h3 className="font-serif text-2xl text-[#1b1c1c]">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#504533] md:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
