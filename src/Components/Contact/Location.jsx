import { CONTACT_CAMPUS } from '../../lib/images.js'

export default function Location() {
  return (
    <section className="pb-0">
      <div className="container-narrow mb-8">
        <h2 className="font-serif text-3xl text-[#1b1c1c] md:text-4xl">The Citadel Campus</h2>
        <p className="mt-2 text-[#504533]">Oxfordshire, United Kingdom</p>
      </div>
      <div className="group relative h-[400px] w-full contrast-[0.9] grayscale transition duration-700 hover:grayscale-0 md:h-[500px]">
        <img
          src={CONTACT_CAMPUS}
          alt="Aerial view of NextGen Academy campus in Oxfordshire"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#7a5900]/10 opacity-0 mix-blend-multiply transition group-hover:opacity-100" />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-white shadow-2xl">
            <span className="material-symbols-outlined icon-fill text-[#7a5900]">location_on</span>
          </div>
          <div className="contact-glass mt-4 rounded-full border border-white px-6 py-3 shadow-lg">
            <span className="text-sm font-semibold text-[#1b1c1c]">NextGen Academy HQ</span>
          </div>
        </div>
      </div>
    </section>
  )
}
