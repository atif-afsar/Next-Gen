import {
  PHONE_DISPLAY,
  PHONE_SECONDARY_DISPLAY,
  TEL_URL,
  TEL_SECONDARY_URL,
  WHATSAPP_URL,
} from '../../lib/contact.js'
import { PhoneIcon, WhatsAppIcon } from '../Common/ContactIcons.jsx'
import { Reveal } from '../Contact/motion.jsx'

export default function AdmissionsQuickContact() {
  return (
    <section className="border-t border-[#d4c4ac]/25 bg-[#fbf9f8] py-12 sm:py-14">
      <div className="container-narrow px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-serif text-2xl text-[#1b1c1c] sm:text-3xl">Speak with admissions today</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#504533] sm:text-base">
            Prefer a direct conversation? Call or WhatsApp — we respond to families across Aligarh and
            beyond.
          </p>
        </Reveal>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href={TEL_URL}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4c4ac]/40 bg-white px-5 py-3 text-sm font-semibold text-[#1b1c1c] transition hover:border-[#7a5900]/50"
            aria-label={`Call admissions at ${PHONE_DISPLAY}`}
          >
            <PhoneIcon className="h-4 w-4 text-[#7a5900]" aria-hidden />
            {PHONE_DISPLAY}
          </a>
          <a
            href={TEL_SECONDARY_URL}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d4c4ac]/40 bg-white px-5 py-3 text-sm font-semibold text-[#1b1c1c] transition hover:border-[#7a5900]/50"
            aria-label={`Call alternate line ${PHONE_SECONDARY_DISPLAY}`}
          >
            <PhoneIcon className="h-4 w-4 text-[#7a5900]" aria-hidden />
            {PHONE_SECONDARY_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#f0fdf4] px-5 py-3 text-sm font-semibold text-[#128C7E] transition hover:border-[#25D366]"
            aria-label="WhatsApp admissions"
          >
            <WhatsAppIcon className="h-4 w-4" aria-hidden />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
