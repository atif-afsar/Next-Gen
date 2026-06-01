import { HOME_CURRICULUM_PHILOSOPHY, HOME_CURRICULUM_STEM } from '../../lib/images.js'

export default function Curriculum() {
  return (
    <section id="curriculum" className="scroll-mt-24 bg-white py-20 md:py-32">
      <div className="container-narrow">
        <h2 className="text-center font-serif text-3xl text-[#1b1c1c] md:text-5xl">
          Future-Ready Curriculum
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:h-[600px] md:grid-cols-3 md:grid-rows-2">
          <article className="home-glass-card group relative min-h-[280px] overflow-hidden rounded-xl md:col-span-2 md:row-span-1">
            <img
              src={HOME_CURRICULUM_STEM}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              aria-hidden
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
              <h3 className="font-serif text-2xl md:text-3xl">STEM &amp; Digital Innovation</h3>
              <p className="mt-2 max-w-lg text-sm opacity-90 md:text-base">
                Mastering coding, bio-engineering, and the ethical use of technology.
              </p>
            </div>
          </article>

          <article className="home-glass-card flex flex-col justify-center rounded-xl bg-[#ffdea3]/20 p-8">
            <span className="material-symbols-outlined mb-6 text-5xl text-[#7a5900]">
              precision_manufacturing
            </span>
            <h3 className="font-serif text-2xl text-[#1b1c1c]">Robotics</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#504533] md:text-base">
              Design, build, and program the future. From Grade 6 onward.
            </p>
          </article>

          <article className="home-glass-card flex flex-col justify-center rounded-xl bg-[#efeded] p-8">
            <span className="material-symbols-outlined mb-6 text-5xl text-[#7a5900]">
              monetization_on
            </span>
            <h3 className="font-serif text-2xl text-[#1b1c1c]">Financial Literacy</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#504533] md:text-base">
              Understanding Islamic finance, investments, and global markets.
            </p>
          </article>

          <article className="home-glass-card group relative min-h-[280px] overflow-hidden rounded-xl md:col-span-2">
            <img
              src={HOME_CURRICULUM_PHILOSOPHY}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              aria-hidden
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
              <h3 className="font-serif text-2xl md:text-3xl">Philosophy &amp; Rhetoric</h3>
              <p className="mt-2 max-w-lg text-sm opacity-90 md:text-base">
                Developing the power of persuasion, critical analysis, and ethical reasoning.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
