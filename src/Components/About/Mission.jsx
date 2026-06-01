import { ABOUT_HERITAGE } from '../../lib/images.js'

export default function Mission() {
  return (
    <section id="mission" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-narrow grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 aspect-square overflow-hidden rounded-2xl border border-white/10 lg:order-1">
          <img
            src={ABOUT_HERITAGE}
            alt="Heritage architecture blending tradition and modernity"
            className="h-full w-full object-cover transition duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent opacity-60" />
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#ffb800]">
            Our Mission
          </p>
          <h2 className="font-serif text-3xl text-white md:text-5xl">Engineering Future Heritage</h2>
          <p className="mt-6 text-base leading-relaxed text-white/65 md:text-lg">
            Born from the visionary foundation of IMS, NextGen Academy is a sister institution
            dedicated to evolving the legacy of excellence. We bridge decades of academic prestige
            with a forward-leaning curriculum designed for the 21st-century global stage.
          </p>
          <blockquote className="glass-panel mt-8 rounded-xl border-l-4 border-[#ffb800] p-8 shadow-[0_0_40px_rgba(255,184,0,0.05)]">
            <p className="font-serif text-lg italic leading-relaxed text-white/85">
              &ldquo;Tradition is not the worship of ashes, but the preservation of fire. We take the
              fire of our ancestors and use it to power the engines of tomorrow.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
