import { ABOUT_HERO_CAMPUS } from '../../lib/images.js'
import './about-hero.css'

export default function AboutHero() {
  return (
    <header className="about-hero-split relative overflow-hidden bg-[#fbf9f8] pt-28 pb-20 text-[#1b1c1c] md:pt-36 md:pb-28">
      <div
        className="about-hero-accent pointer-events-none absolute top-0 right-0 -z-10 h-full w-2/5 max-w-xl"
        aria-hidden
      />

      <div className="container-narrow relative">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-14">
          <div className="md:col-span-7">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#7a5900]">
              Our Mission
            </p>

            <h1 className="font-serif text-4xl leading-[1.1] text-balance sm:text-5xl md:text-6xl lg:text-[3.75rem]">
              Architecting the Future of Faith &amp; Intellect
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#504533]">
              NextGen Academy represents the evolution of the Islamic Model School legacy—a
              synthesis of rigorous modern academics and deep-rooted spiritual wisdom.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#philosophy"
                className="rounded bg-[#7a5900] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#654800]"
              >
                Explore the Vision
              </a>
              <a
                href="#mission"
                className="rounded border border-[#827560] bg-white px-8 py-4 text-sm font-semibold text-[#1b1c1c] transition hover:bg-[#f5f3f3]"
              >
                View History
              </a>
            </div>
          </div>

          <div className="relative md:col-span-5 md:mt-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-2xl">
              <img
                src={ABOUT_HERO_CAMPUS}
                alt="NextGen Academy campus — modern building with glass and stone"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="about-hero-glass absolute -bottom-6 -left-4 max-w-[240px] rounded-lg p-6 md:-left-8">
              <p className="font-serif text-xl italic leading-snug text-[#7a5900]">
                &ldquo;Engineering Future Heritage&rdquo;
              </p>
              <p className="mt-2 text-sm text-[#504533]">The NextGen Manifesto</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
