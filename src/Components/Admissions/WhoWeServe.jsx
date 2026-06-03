import { Reveal, RevealStagger, RevealItem } from '../Contact/motion.jsx'

const ELIGIBILITY = [
  {
    icon: 'menu_book',
    title: 'Hifz-Completed Students',
    description:
      'Students who have memorized the Quran and are ready for rigorous academics alongside continued Islamic growth.',
  },
  {
    icon: 'school',
    title: 'Grade 5 Through Graduation',
    description:
      'A continuous pathway from middle school through secondary completion — not a short-term program ending in Grade 8.',
  },
  {
    icon: 'home',
    title: 'Residential Applicants',
    description:
      'Families seeking a disciplined, faith-centered boarding environment in Aligarh with character and leadership focus.',
  },
]

export default function WhoWeServe() {
  return (
    <section className="border-y border-[#d4c4ac]/25 bg-white py-14 sm:py-16 md:py-20" aria-labelledby="eligibility-heading">
      <div className="container-narrow px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 id="eligibility-heading" className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-4xl">
            Who we admit
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#504533] sm:text-base">
            NextGen Academy is designed for young Muslims ready to unite Iman with academic excellence
            from Grade 5 through graduation.
          </p>
        </Reveal>

        <RevealStagger className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {ELIGIBILITY.map(({ icon, title, description }) => (
            <RevealItem key={title} as="article" className="admissions-card rounded-2xl p-6 sm:p-8">
              <span
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#ffdea3] text-[#7a5900]"
                aria-hidden
              >
                <span className="material-symbols-outlined">{icon}</span>
              </span>
              <h3 className="font-serif text-xl text-[#1b1c1c]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#504533] sm:text-base">{description}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
