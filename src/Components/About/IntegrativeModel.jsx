const pillars = [
  {
    icon: 'auto_stories',
    title: 'Traditional Hifz',
    description:
      "A rigorous yet compassionate approach to Qur'anic memorization and understanding, integrated into the daily flow.",
  },
  {
    icon: 'terminal',
    title: 'ICSE Excellence',
    description:
      'Top-tier Indian Certificate of Secondary Education curriculum with a focused emphasis on STEM and Critical Thinking.',
  },
  {
    icon: 'groups',
    title: 'Leadership Labs',
    description:
      'Proprietary experiential workshops focused on emotional intelligence, negotiation, and ethical leadership.',
  },
]

export default function IntegrativeModel() {
  return (
    <section id="model" className="scroll-mt-24 bg-[#fbf9f8] py-20 md:py-28">
      <div className="container-narrow text-center">
        <p className="about-eyebrow">The Pedagogy</p>
        <h2 className="about-heading mt-4 text-3xl md:text-5xl">The Integrative Model</h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon, title, description }) => (
            <article
              key={title}
              className="group flex flex-col items-center rounded-xl bg-[#f5f3f3] p-10 text-center transition duration-500 hover:bg-[#7a5900]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm transition group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl text-[#7a5900] group-hover:text-[#7a5900]">
                  {icon}
                </span>
              </div>
              <h3 className="about-heading text-xl group-hover:text-white">{title}</h3>
              <p className="about-body mt-4 text-sm leading-relaxed group-hover:text-white/85 md:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
