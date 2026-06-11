import { ABOUT } from '../../lib/siteContent.js'
import { Reveal, RevealStagger, RevealItem } from './motion.jsx'

const highlights = [
  {
    icon: 'science',
    title: 'Modern Laboratories',
    description:
      'Physics, Chemistry, Biology, Computer Science, Robotics, and STEM facilities on campus.',
  },
  {
    icon: 'school',
    title: 'ICSE Excellence',
    description:
      'Value-based ICSE curriculum with Integrated NEET/JEE Schooling Program for competitive pathways.',
  },
  {
    icon: 'groups',
    title: 'Enhancement Programs',
    description:
      'English Communication, Arabic Communication, Financial Literacy, Life Skills, Robotics, and STEM.',
  },
]

export default function IntegrativeModel() {
  return (
    <section id="model" className="scroll-mt-20 bg-[#faf3e3] py-16 sm:scroll-mt-24 sm:py-20 md:py-28">
      <div className="container-narrow text-center">
        <Reveal>
          <p className="about-eyebrow text-xs sm:text-sm">Islamic Mission School</p>
          <h2 className="about-heading mt-3 text-2xl sm:mt-4 sm:text-3xl md:text-5xl">
            A Legacy of Excellence
          </h2>
          <p className="about-body mx-auto mt-4 max-w-2xl text-sm sm:text-base">{ABOUT.paragraphs[1]}</p>
        </Reveal>

        <RevealStagger className="about-model-grid mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {highlights.map(({ icon, title, description }) => (
            <RevealItem
              key={title}
              as="article"
              hoverLift={false}
              className="about-model-card group relative flex h-full min-w-0 flex-col items-center overflow-hidden rounded-xl border border-[#d4c4ac]/30 bg-[#f3ecd9] p-8 text-center shadow-[0_4px_20px_rgba(26,26,26,0.05)] transition-[background-color,box-shadow,border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#7a5900]/25 hover:bg-[#7a5900] hover:shadow-[0_14px_36px_rgba(122,89,0,0.22)] sm:p-10"
            >
              <div className="flex h-full w-full min-w-0 flex-col items-center">
                <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 group-hover:scale-105 sm:mb-6 sm:h-16 sm:w-16">
                  <span className="material-symbols-outlined text-2xl text-[#7a5900] sm:text-3xl">
                    {icon}
                  </span>
                </div>
                <h3 className="about-heading about-model-card-title w-full shrink-0 text-lg sm:text-xl">
                  {title}
                </h3>
                <p className="about-body about-model-card-body mt-3 w-full shrink-0 text-sm leading-relaxed sm:mt-4 md:text-base">
                  {description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
