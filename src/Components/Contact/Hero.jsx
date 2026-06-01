import { CONTACT_HERO } from '../../lib/images.js'

export default function ContactHero() {
  return (
    <section className="relative flex min-h-[min(716px,85vh)] items-center justify-center overflow-hidden px-4 py-16">
      <img
        src={CONTACT_HERO}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbf9f8] via-transparent to-[#fbf9f8]" />

      <div className="container-narrow relative z-10 max-w-4xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a5900]">
          The Gateway to Legacy
        </p>
        <h1 className="font-serif text-4xl leading-tight text-[#1b1c1c] md:text-6xl lg:text-7xl">
          Connect with the
          <br />
          <span className="italic text-[#7a5900]">Future of Leadership</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#504533]">
          At NextGen Academy, every conversation is the start of a journey. Whether you are an
          aspiring scholar or a global partner, our doors are open to those who seek excellence.
        </p>
      </div>
    </section>
  )
}
