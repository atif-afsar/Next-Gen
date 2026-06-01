import { DUAL_FOCUS_ACADEMIC, DUAL_FOCUS_ISLAMIC } from '../../lib/images.js'
import { GoldBullet, IconInfinity, IconOpenBook, IconTerminal } from './icons.jsx'

const academicItems = [
  'ICSE STEM Specialization',
  'Financial Literacy & FinTech',
  'Robotics & AI Research',
]

const islamicItems = [
  'Quranic Reintegration',
  'Classical Arabic Mastery',
  'Character Engineering (Tarbiyah)',
]

function PanelBackground({ src, alt }) {
  return (
    <>
      <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" aria-hidden />
      <div className="absolute inset-0 bg-black/55 transition-colors duration-500 group-hover:bg-black/45" />
    </>
  )
}

export default function DualFocus() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_12px_48px_rgba(0,0,0,0.5)]">
          <div className="grid min-h-[520px] lg:grid-cols-2 lg:min-h-[600px]">
            {/* Academic Excellence */}
            <article className="group relative flex flex-col justify-center border-b border-white/10 p-10 md:p-12 lg:border-b-0 lg:border-r lg:border-white/10">
              <PanelBackground src={DUAL_FOCUS_ACADEMIC} alt="Circuit board STEM background" />
              <div className="relative z-10">
                <span className="inline-flex text-[#ffb800]">
                  <IconTerminal />
                </span>
                <h3 className="mt-5 font-serif text-3xl text-white md:text-4xl">Academic Excellence</h3>
                <ul className="mt-8 space-y-4">
                  {academicItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/80 md:text-base"
                    >
                      <GoldBullet />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Islamic Scholarship */}
            <article className="group relative flex flex-col justify-center p-10 md:p-12">
              <PanelBackground src={DUAL_FOCUS_ISLAMIC} alt="Islamic geometric scholarship background" />
              <div className="relative z-10 lg:text-right">
                <div className="mb-5 flex lg:justify-end">
                  <span className="inline-flex text-[#ffb800]">
                    <IconOpenBook />
                  </span>
                </div>
                <h3 className="font-serif text-3xl text-white md:text-4xl">Islamic Scholarship</h3>
                <ul className="mt-8 space-y-4">
                  {islamicItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/80 md:text-base lg:flex-row-reverse"
                    >
                      <GoldBullet />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>

          {/* Infinity connector */}
          <div
            className="absolute left-1/2 top-1/2 z-20 hidden h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#ffb800]/60 bg-[#0a0a0a]/90 text-[#ffb800] shadow-[0_0_50px_rgba(255,184,0,0.35)] backdrop-blur-md lg:flex"
            aria-hidden
          >
            <IconInfinity />
          </div>

          {/* Mobile connector */}
          <div className="flex items-center justify-center border-t border-white/10 bg-[#0a0a0a] py-4 lg:hidden">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ffb800]/60 text-[#ffb800] shadow-[0_0_30px_rgba(255,184,0,0.25)]">
              <IconInfinity className="h-6 w-6" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
