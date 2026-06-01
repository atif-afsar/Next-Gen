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
    <section id="curriculum" className="scroll-mt-24 py-20 md:py-24">
      <div className="container-narrow">
        <h2 className="text-center font-serif text-3xl text-[#1b1c1c] md:text-5xl">
          The Five Pillars of Excellence
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:h-[800px] md:grid-cols-6 md:grid-rows-2">
          {pillars.map(({ span, icon, title, description, small, highlight }) => (
            <article
              key={title}
              className={`${span} group relative flex flex-col justify-between overflow-hidden rounded-sm p-8 md:p-10 ${
                highlight ? 'why-highlight-card' : 'why-card'
              } ${small ? 'md:row-span-1' : 'md:row-span-1'}`}
            >
              <div className="relative z-10">
                <span className={`mb-4 block text-3xl ${highlight ? 'text-white' : 'why-text-primary'}`}>
                  {icon}
                </span>
                <h3
                  className={`font-serif ${small ? 'text-xl' : 'text-2xl md:text-3xl'} ${
                    highlight ? 'text-white' : 'text-[#1b1c1c]'
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`mt-3 ${small ? 'text-sm' : ''} ${
                    highlight ? 'text-white/80' : 'text-[#504533]'
                  }`}
                >
                  {description}
                </p>
              </div>
              {!highlight && title === 'Spiritual Mastery' && (
                <span
                  className="pointer-events-none absolute -bottom-4 -right-4 text-[7rem] text-[#7a5900]/10 transition group-hover:scale-110"
                  aria-hidden
                >
                  ✦
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
