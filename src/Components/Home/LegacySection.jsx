import { LEGACY_STATS } from '../../lib/homeContent.js'

export default function LegacySection() {
  return (
    <section id="about" className="scroll-mt-24 bg-[#f5f3f3] py-20 md:py-32">
      <div className="container-narrow text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#7a5900]">
            Established on Tradition
          </p>
          <h2 className="font-serif text-3xl text-[#1b1c1c] md:text-5xl">A Legacy of Excellence</h2>
          <p className="text-lg leading-relaxed text-[#504533]">
            Founded on the principles of intellectual rigor and spiritual depth, NextGen Academy has
            consistently produced graduates who lead in the boardroom as effectively as they lead in
            the masjid. Our pedagogy respects the past while defining the future.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-[#d4c4ac]/30 pt-16 md:grid-cols-4 md:gap-6">
          {LEGACY_STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-serif text-3xl text-[#7a5900] md:text-4xl">{value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#504533]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
