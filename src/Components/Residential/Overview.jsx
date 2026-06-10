import { RESIDENTIAL_PROGRAM } from '../../lib/siteContent.js'
import OptimizedImage from '../Common/OptimizedImage.jsx'
import { Reveal } from '../WhyNextGen/motion.jsx'

const HIGHLIGHTS = [
  { icon: 'schedule', label: '24/7 nurturing environment' },
  { icon: 'shield', label: 'Safe, holistic ecosystem' },
  { icon: 'self_improvement', label: 'Academic, social, spiritual & emotional growth' },
]

export default function ResidentialOverview() {
  return (
    <section className="border-y border-[#d4c4ac]/30 bg-white py-14 sm:py-16 md:py-20">
      <div className="container-narrow px-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-4xl">
              A Holistic 24/7 Learning Environment
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#504533] sm:mt-5 sm:text-base">
              {RESIDENTIAL_PROGRAM.description}
            </p>
            <ul className="mt-6 space-y-3 sm:mt-8">
              {HIGHLIGHTS.map(({ icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffdea3]/45 text-[#7a5900]">
                    <span className="material-symbols-outlined icon-outline text-lg" aria-hidden>
                      {icon}
                    </span>
                  </span>
                  <span className="text-sm font-medium text-[#1b1c1c] sm:text-base">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="premium-image mx-auto max-w-sm overflow-hidden rounded-2xl border border-[#d4c4ac]/40 shadow-[0_14px_40px_rgba(122,89,0,0.12)] lg:mx-0 lg:max-w-none">
              <OptimizedImage
                src="/images/brochure/residential-child.jpg"
                alt="A young student at NextGen Academy's residential campus"
                className="aspect-[4/3] w-full object-cover"
                width={760}
                height={570}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
