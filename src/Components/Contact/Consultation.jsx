const benefits = ['Tailored Academic Roadmaps', 'Confidential Enrollment Strategy']

const interestOptions = [
  'Admissions & Enrollment',
  'Curriculum Partnership',
  'Executive Leadership Programs',
  'Philanthropic Support',
]

export default function Consultation() {
  return (
    <section id="apply" className="relative scroll-mt-24 overflow-hidden bg-[#efeded] py-16 md:py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 -translate-y-1/2 rounded-full bg-[#7a5900]/5 blur-[120px]" />

      <div className="container-narrow relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-[#1b1c1c] md:text-5xl">Private Consultation</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#504533]">
            Request a confidential consultation with our Dean of Leadership or Academic Directors to
            discuss your unique educational trajectory.
          </p>
          <ul className="mt-10 space-y-4">
            {benefits.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-semibold text-[#1b1c1c]">
                <span className="material-symbols-outlined text-[#7a5900]">verified</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-glass rounded-lg p-8 md:p-10">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Alexander Hamilton"
                  className="contact-input mt-2 w-full py-2 text-[#1b1c1c] placeholder:text-[#504533]/50"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="alex@leadership.com"
                  className="contact-input mt-2 w-full py-2 text-[#1b1c1c] placeholder:text-[#504533]/50"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                Area of Interest
              </label>
              <select className="contact-input mt-2 w-full py-2 text-[#1b1c1c]">
                {interestOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                Your Message
              </label>
              <textarea
                rows={4}
                placeholder="How can we assist in your leadership journey?"
                className="contact-input mt-2 w-full resize-none py-2 text-[#1b1c1c] placeholder:text-[#504533]/50"
              />
            </div>
            <button
              type="submit"
              className="contact-btn-primary w-full rounded-lg py-4 text-sm font-semibold uppercase tracking-wider shadow-lg"
            >
              Request Professional Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
