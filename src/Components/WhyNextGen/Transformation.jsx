const steps = [
  {
    num: '01',
    title: 'Foundation',
    description:
      'Forging an unbreakable spiritual core. Our students begin by understanding their identity and purpose through the lens of faith.',
  },
  {
    num: '02',
    title: 'The Bridge',
    description:
      'Connecting ancient wisdom with modern research. We integrate theology with advanced mathematics and emerging technologies.',
  },
  {
    num: '03',
    title: 'The Pinnacle',
    description:
      'Actualizing leadership. Students apply their skills to real-world global challenges, leading with ethical clarity and technical mastery.',
  },
]

export default function Transformation() {
  return (
    <section className="border-y border-[#d4c4ac]/30 bg-white py-20 md:py-24">
      <div className="container-narrow">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map(({ num, title, description }) => (
            <article key={num} className="group relative">
              <span
                className="pointer-events-none absolute -left-2 -top-10 font-serif text-[5rem] leading-none text-[#7a5900]/10 transition group-hover:text-[#7a5900]/20 md:text-[6rem]"
                aria-hidden
              >
                {num}
              </span>
              <h3 className="relative mt-8 font-serif text-2xl text-[#1b1c1c] md:text-3xl">{title}</h3>
              <p className="relative mt-4 text-[#504533]">{description}</p>
              <div className="mt-6 h-1 w-0 bg-[#7a5900] transition-all duration-700 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
