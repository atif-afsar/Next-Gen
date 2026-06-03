import { motion, EASE_OUT, viewport } from '../Contact/motion.jsx'

const benefits = [
  'Personalized academic roadmap from Grade 5 through graduation',
  'Guidance for Hifz-completed and residential applicants',
]

const gradeOptions = [
  'Grade 5',
  'Grade 6',
  'Grade 7',
  'Grade 8',
  'Grade 9',
  'Grade 10',
  'Grade 11',
  'Grade 12',
  'Hifz completed — seeking enrollment',
]

export default function ApplicationForm() {
  return (
    <section
      id="apply"
      className="relative scroll-mt-24 overflow-hidden bg-[#efeded] py-14 sm:py-16 md:py-24"
      aria-labelledby="apply-heading"
    >
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/3 -translate-y-1/2 rounded-full bg-[#7a5900]/5 blur-[120px] sm:block" aria-hidden />

      <div className="container-narrow relative grid items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={{ duration: 0.65, ease: EASE_OUT }}
        >
          <h2 id="apply-heading" className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-5xl">
            Application enquiry
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#504533] sm:mt-6 sm:text-lg">
            Share your details and our admissions team will contact you about enrollment, the
            residential program, and next steps for your child at NextGen Academy, Aligarh.
          </p>
          <ul className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
            {benefits.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm font-semibold text-[#1b1c1c] sm:items-center"
              >
                <span className="material-symbols-outlined shrink-0 text-[#7a5900]" aria-hidden>
                  verified
                </span>
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
          className="admissions-glass rounded-lg p-6 sm:p-8 md:p-10"
        >
          <form className="space-y-6 sm:space-y-8" onSubmit={(e) => e.preventDefault()} aria-label="Admissions enquiry form">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              <div>
                <label htmlFor="parent-name" className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                  Parent / Guardian name
                </label>
                <input
                  id="parent-name"
                  name="parentName"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your full name"
                  className="admissions-input mt-2 w-full py-2 text-base text-[#1b1c1c] placeholder:text-[#504533]/50"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                  Phone (WhatsApp preferred)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="+91 …"
                  className="admissions-input mt-2 w-full py-2 text-base text-[#1b1c1c] placeholder:text-[#504533]/50"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@email.com"
                className="admissions-input mt-2 w-full py-2 text-base text-[#1b1c1c] placeholder:text-[#504533]/50"
              />
            </div>
            <div>
              <label htmlFor="grade" className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                Student grade / status
              </label>
              <select
                id="grade"
                name="grade"
                required
                className="admissions-input mt-2 w-full py-2 text-base text-[#1b1c1c]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select grade or status
                </option>
                {gradeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                Tell us about your child
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Hifz background, current school, and what you hope for at NextGen…"
                className="admissions-input mt-2 w-full resize-none py-2 text-base text-[#1b1c1c] placeholder:text-[#504533]/50"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="admissions-btn-primary w-full rounded-lg py-3.5 text-xs font-semibold uppercase tracking-wider shadow-lg sm:py-4 sm:text-sm"
            >
              Submit admissions enquiry
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
