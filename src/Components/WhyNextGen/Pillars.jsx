import { motion, Reveal, RevealStagger, RevealItem } from './motion.jsx'

const pillars = [
  {
    span: 'md:col-span-3',
    icon: '◈',
    title: 'Spiritual Mastery',
    description:
      'Daily reflection, theology, and the cultivation of an inner life that provides stability in a volatile world.',
    highlight: false,
  },
  {
    span: 'md:col-span-3',
    icon: '◎',
    title: 'Academic Rigor',
    description:
      'An Ivy-League level curriculum designed to challenge the brightest minds through inquiry-based learning.',
    highlight: false,
  },
  {
    span: 'md:col-span-2',
    icon: '🌐',
    title: 'Global Communication',
    description: 'Multilingual fluency and diplomatic rhetoric training.',
    small: true,
  },
  {
    span: 'md:col-span-2',
    icon: '⬡',
    title: 'Future Skills',
    description: 'AI, Robotics, and Sustainable Design integrated into core learning.',
    small: true,
  },
  {
    span: 'md:col-span-2',
    icon: '★',
    title: 'Ethical Leadership',
    description: 'Decision making rooted in unwavering principles and public service.',
    small: true,
    highlight: true,
  },
]

export default function Pillars() {
  return (
    <section id="curriculum" className="scroll-mt-20 py-16 sm:scroll-mt-24 sm:py-20 md:py-24">
      <div className="container-narrow">
        <Reveal className="text-center">
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-5xl">
            The Five Pillars of Excellence
          </h2>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-6 md:grid-rows-2 md:gap-6 lg:h-[800px]">
          {pillars.map(({ span, icon, title, description, small, highlight }) => (
            <RevealItem
              key={title}
              as="article"
              className={`${span} group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-sm p-6 sm:min-h-[220px] sm:p-8 md:p-10 ${
                highlight ? 'why-highlight-card' : 'why-card'
              }`}
            >
              <motion.div whileHover={{ y: -4 }} className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span
                    className={`mb-3 block text-2xl sm:mb-4 sm:text-3xl ${
                      highlight ? 'text-white' : 'why-text-primary'
                    }`}
                  >
                    {icon}
                  </span>
                  <h3
                    className={`font-serif ${small ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl md:text-3xl'} ${
                      highlight ? 'text-white' : 'text-[#1b1c1c]'
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`mt-2 sm:mt-3 ${small ? 'text-sm' : 'text-sm sm:text-base'} ${
                      highlight ? 'text-white/80' : 'text-[#504533]'
                    }`}
                  >
                    {description}
                  </p>
                </div>
                {!highlight && title === 'Spiritual Mastery' && (
                  <span
                    className="pointer-events-none absolute -bottom-4 -right-4 text-[5rem] text-[#7a5900]/10 transition group-hover:scale-110 sm:text-[7rem]"
                    aria-hidden
                  >
                    ✦
                  </span>
                )}
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
