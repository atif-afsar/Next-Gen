import { IconCheck, IconGraduation, IconMosque } from './icons.jsx'

const academicFeatures = [
  'IB & Cambridge-aligned pathways',
  'Advanced STEM laboratories',
  'Research & innovation labs',
  'University placement support',
]

const islamicFeatures = [
  'Complete Hifz program with tajweed',
  'Classical Arabic & Islamic sciences',
  'Daily tarbiyah & character building',
  'Scholar-led mentorship circles',
]

export default function DualFocus() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="relative grid gap-6 lg:grid-cols-2 lg:gap-0">
          <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-8 md:p-10 lg:rounded-r-none lg:pr-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <span className="relative inline-flex rounded-lg bg-gold/10 p-2.5 text-gold">
              <IconGraduation className="h-6 w-6" />
            </span>
            <h3 className="relative mt-4 font-serif text-2xl text-white md:text-3xl">
              Academic Excellence
            </h3>
            <ul className="relative mt-6 space-y-3">
              {academicFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70 md:text-base">
                  <span className="mt-0.5 shrink-0 text-gold">
                    <IconCheck />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-[#0a0a0a] font-serif text-sm font-semibold text-gold">
              OR
            </span>
          </div>

          <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-8 md:p-10 lg:rounded-l-none lg:pl-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <span className="relative inline-flex rounded-lg bg-gold/10 p-2.5 text-gold">
              <IconMosque className="h-6 w-6" />
            </span>
            <h3 className="relative mt-4 font-serif text-2xl text-white md:text-3xl">
              Islamic Scholarship
            </h3>
            <ul className="relative mt-6 space-y-3">
              {islamicFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70 md:text-base">
                  <span className="mt-0.5 shrink-0 text-gold">
                    <IconCheck />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <div className="flex justify-center lg:hidden">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-[#141414] font-serif text-xs font-semibold text-gold">
              OR
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
