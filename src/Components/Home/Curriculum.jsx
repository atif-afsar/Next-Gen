import { HOME_CURRICULUM_PHILOSOPHY, HOME_CURRICULUM_STEM } from '../../lib/images.js'
import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

function ImageCard({ src, title, description, className = '' }) {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      className={`home-glass-card group relative min-h-[240px] overflow-hidden rounded-xl sm:min-h-[280px] ${className}`}
    >
      <img
        src={src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 sm:p-8">
        <h3 className="font-serif text-xl text-white sm:text-2xl md:text-3xl">{title}</h3>
        <p className="mt-2 max-w-lg text-sm text-white/90 sm:text-base">{description}</p>
      </div>
    </motion.article>
  )
}

function IconCard({ icon, title, description, bgClass }) {
  return (
    <article
      className={`home-glass-card flex min-h-[200px] flex-col justify-center rounded-xl p-6 sm:min-h-[220px] sm:p-8 ${bgClass}`}
    >
      <span className="material-symbols-outlined mb-4 text-4xl text-[#7a5900] sm:mb-6 sm:text-5xl">
        {icon}
      </span>
      <h3 className="font-serif text-xl text-[#1b1c1c] sm:text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#504533] sm:mt-3 sm:text-base">
        {description}
      </p>
    </article>
  )
}

export default function Curriculum() {
  return (
    <section id="curriculum" className="scroll-mt-20 bg-white py-16 sm:scroll-mt-24 sm:py-20 md:py-32">
      <div className="container-narrow">
        <Reveal className="text-center">
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-5xl">
            Future-Ready Curriculum
          </h2>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3 md:grid-rows-2 md:gap-6 lg:h-[600px]">
          <RevealItem className="md:col-span-2 md:row-span-1">
            <ImageCard
              src={HOME_CURRICULUM_STEM}
              title="STEM & Digital Innovation"
              description="Mastering coding, bio-engineering, and the ethical use of technology."
              className="h-full min-h-[260px]"
            />
          </RevealItem>

          <RevealItem>
            <IconCard
              icon="precision_manufacturing"
              title="Robotics"
              description="Design, build, and program the future. From Grade 6 onward."
              bgClass="bg-[#ffdea3]/20"
            />
          </RevealItem>

          <RevealItem>
            <IconCard
              icon="monetization_on"
              title="Financial Literacy"
              description="Understanding Islamic finance, investments, and global markets."
              bgClass="bg-[#efeded]"
            />
          </RevealItem>

          <RevealItem className="md:col-span-2">
            <ImageCard
              src={HOME_CURRICULUM_PHILOSOPHY}
              title="Philosophy & Rhetoric"
              description="Developing the power of persuasion, critical analysis, and ethical reasoning."
              className="h-full min-h-[260px]"
            />
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  )
}
