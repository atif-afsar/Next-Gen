import { motion, EASE_OUT, viewport } from './motion.jsx'

const benefits = ['Tailored Academic Roadmaps', 'Confidential Enrollment Strategy']

const interestOptions = [
  'Admissions & Enrollment',
  'Curriculum Partnership',
  'Executive Leadership Programs',
  'Philanthropic Support',
]

export default function Consultation() {
  return (
    <section
      id="apply"
      className="relative scroll-mt-20 overflow-hidden bg-[#efeded] py-14 sm:scroll-mt-24 sm:py-16 md:py-24"
    >
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/3 -translate-y-1/2 rounded-full bg-[#7a5900]/5 blur-[120px] sm:block" />

      <div className="container-narrow relative grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.65, ease: EASE_OUT }}
        >
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-5xl">
            Private Consultation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#504533] sm:mt-6 sm:text-lg">
            Request a confidential consultation with our Dean of Leadership or Academic Directors to
            discuss your unique educational trajectory.
          </p>
          <ul className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
            {benefits.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm font-semibold text-[#1b1c1c] sm:items-center"
              >
                <span className="material-symbols-outlined shrink-0 text-[#7a5900]">verified</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.65, delay: 0.1, ease: EASE_OUT }}
          className="contact-glass rounded-lg p-6 sm:p-8 md:p-10"
        >
          <form className="space-y-6 sm:space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Alexander Hamilton"
                  className="contact-input mt-2 w-full py-2 text-base text-[#1b1c1c] placeholder:text-[#504533]/50"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="alex@leadership.com"
                  className="contact-input mt-2 w-full py-2 text-base text-[#1b1c1c] placeholder:text-[#504533]/50"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                Area of Interest
              </label>
              <select className="contact-input mt-2 w-full py-2 text-base text-[#1b1c1c]">
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
                className="contact-input mt-2 w-full resize-none py-2 text-base text-[#1b1c1c] placeholder:text-[#504533]/50"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="contact-btn-primary w-full rounded-lg py-3.5 text-xs font-semibold uppercase tracking-wider shadow-lg sm:py-4 sm:text-sm"
            >
              Request Professional Consultation
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
