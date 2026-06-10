import { useState } from 'react'
import { motion, EASE_OUT, viewport } from '../Contact/motion.jsx'
import { ADMISSIONS_EMAIL } from '../../lib/contact.js'

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(ADMISSIONS_EMAIL)}`

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

const STYLES = {
  admissions: {
    glass: 'admissions-glass',
    input: 'admissions-input',
    btn: 'admissions-btn-primary',
    id: (name) => name,
  },
  contact: {
    glass: 'contact-glass',
    input: 'contact-input',
    btn: 'contact-btn-primary',
    id: (name) => `contact-${name}`,
  },
}

export default function ApplicationForm({ variant = 'admissions' }) {
  const styles = STYLES[variant] ?? STYLES.admissions
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    setStatus('submitting')
    setErrorMessage('')

    const parentName = String(data.get('parentName') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const grade = String(data.get('grade') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const body = {
      name: parentName,
      phone,
      grade,
      message: message || '(No additional message)',
      _subject: `Admissions enquiry — ${grade}`,
      _template: 'table',
    }
    if (email) body.email = email

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error('submit failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage(
        'We could not send your enquiry. Please try again or contact us on WhatsApp.',
      )
    }
  }

  return (
    <section
      id="apply"
      className="relative scroll-mt-24 overflow-hidden bg-[#efe7d2] py-14 sm:py-16 md:py-24"
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
          className={`${styles.glass} rounded-lg p-6 sm:p-8 md:p-10`}
        >
          <form
            className="space-y-6 sm:space-y-8"
            onSubmit={handleSubmit}
            aria-label="Admissions enquiry form"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              <div>
                <label htmlFor={styles.id('parent-name')} className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                  Parent / Guardian name
                </label>
                <input
                  id={styles.id('parent-name')}
                  name="parentName"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Your full name"
                  className={`${styles.input} mt-2 w-full py-2 text-base text-[#1b1c1c] placeholder:text-[#504533]/50`}
                />
              </div>
              <div>
                <label htmlFor={styles.id('phone')} className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                  Phone (WhatsApp preferred)
                </label>
                <input
                  id={styles.id('phone')}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="+91 …"
                  className={`${styles.input} mt-2 w-full py-2 text-base text-[#1b1c1c] placeholder:text-[#504533]/50`}
                />
              </div>
            </div>
            <div>
              <label htmlFor={styles.id('email')} className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                Email address
              </label>
              <input
                id={styles.id('email')}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@email.com"
                className={`${styles.input} mt-2 w-full py-2 text-base text-[#1b1c1c] placeholder:text-[#504533]/50`}
              />
            </div>
            <div>
              <label htmlFor={styles.id('grade')} className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                Student grade / status
              </label>
              <select
                id={styles.id('grade')}
                name="grade"
                required
                className={`${styles.input} mt-2 w-full py-2 text-base text-[#1b1c1c]`}
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
              <label htmlFor={styles.id('message')} className="text-xs font-semibold uppercase tracking-wider text-[#504533]">
                Tell us about your child
              </label>
              <textarea
                id={styles.id('message')}
                name="message"
                rows={4}
                placeholder="Hifz background, current school, and what you hope for at NextGen…"
                className={`${styles.input} mt-2 w-full resize-none py-2 text-base text-[#1b1c1c] placeholder:text-[#504533]/50`}
              />
            </div>
            {status === 'success' && (
              <p
                role="status"
                className="rounded-lg border border-[#7a5900]/30 bg-[#7a5900]/10 px-4 py-3 text-sm font-medium text-[#1b1c1c]"
              >
                Thank you. Your enquiry was sent — our admissions team will contact you soon.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="rounded-lg border border-red-300/50 bg-red-50 px-4 py-3 text-sm text-red-800">
                {errorMessage}
              </p>
            )}
            <motion.button
              type="submit"
              disabled={status === 'submitting'}
              whileHover={status === 'submitting' ? undefined : { scale: 1.02 }}
              whileTap={status === 'submitting' ? undefined : { scale: 0.98 }}
              className={`${styles.btn} w-full rounded-lg py-3.5 text-xs font-semibold uppercase tracking-wider shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:py-4 sm:text-sm`}
            >
              {status === 'submitting' ? 'Sending…' : 'Submit admissions enquiry'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
