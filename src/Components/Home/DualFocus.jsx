import { Link } from 'react-router-dom'
import { ACADEMIC_TRACK, ISLAMIC_TRACK } from '../../lib/homeContent.js'

export default function DualFocus() {
  return (
    <section className="overflow-hidden bg-[#fbf9f8] py-20 md:py-32">
      <div className="container-narrow">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="z-10 flex-1 space-y-6 lg:max-w-md">
            <h2 className="font-serif text-3xl leading-tight text-[#1b1c1c] md:text-5xl">
              The Integration of Two Worlds
            </h2>
            <p className="text-lg leading-relaxed text-[#504533]">
              We don&apos;t believe in &quot;dual curriculum&quot; as a separation. We believe in a
              single, unified journey where Islamic scholarship informs scientific inquiry, and
              vice-versa.
            </p>
          </div>

          <div className="w-full flex-1">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-[#7a5900]/20 bg-white p-8 shadow-sm">
                <span className="mb-4 block text-xs font-semibold uppercase tracking-wider text-[#7a5900]">
                  Academic Track
                </span>
                <ul className="space-y-3 text-sm text-[#504533] md:text-base">
                  {ACADEMIC_TRACK.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="material-symbols-outlined icon-outline text-lg text-[#7a5900]">
                        check_circle
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-[#914c00]/20 bg-white p-8 shadow-sm">
                <span className="mb-4 block text-xs font-semibold uppercase tracking-wider text-[#914c00]">
                  Islamic Scholarship
                </span>
                <ul className="space-y-3 text-sm text-[#504533] md:text-base">
                  {ISLAMIC_TRACK.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="material-symbols-outlined icon-outline text-lg text-[#914c00]">
                        check_circle
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative mt-10">
              <div className="home-merging-path rounded-full shadow-[0_0_20px_rgba(244,180,0,0.3)]" />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#7a5900] px-6 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-lg">
                Unified Path
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/about"
            className="inline-block rounded-lg bg-[#7a5900] px-10 py-4 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-[#654800]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
