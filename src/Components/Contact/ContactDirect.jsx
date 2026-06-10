import { Link } from 'react-router-dom'
import {
  PHONE_DISPLAY,
  PHONE_SECONDARY_DISPLAY,
  TEL_URL,
  TEL_SECONDARY_URL,
  WHATSAPP_URL,
  ADDRESS_SHORT,
} from '../../lib/contact.js'
import { PhoneIcon, WhatsAppIcon } from '../Common/ContactIcons.jsx'
import { Reveal } from './motion.jsx'

export default function ContactDirect() {
  return (
    <section className="border-y border-[#d4c4ac]/25 bg-white py-12 sm:py-16 md:py-20">
      <div className="container-narrow">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a5900] sm:text-xs">
            Speak with us directly
          </p>
          <h2 className="mt-2 font-serif text-2xl text-[#1b1c1c] sm:text-3xl md:text-4xl">
            Call or message us
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#504533] sm:mt-4 sm:text-base">
            General enquiries, directions, and campus visits — we are at {ADDRESS_SHORT}. For
            applications, see{' '}
            <Link to="/admissions" className="font-semibold text-[#7a5900] underline-offset-2 hover:underline">
              Admissions
            </Link>
            .
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          <a
            href={TEL_URL}
            className="group contact-card flex items-center gap-5 rounded-2xl border border-[#d4c4ac]/30 p-6 transition-all duration-300 hover:border-[#7a5900]/40 hover:shadow-lg sm:p-8"
            aria-label={`Call NextGen Academy admissions at ${PHONE_DISPLAY}`}
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffdea3] to-[#ffb800] text-[#1b1c1c] shadow-md transition-transform duration-300 group-hover:scale-105">
              <PhoneIcon className="h-7 w-7" aria-hidden />
            </span>
            <span className="text-left">
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-[#7a5900]">
                Primary line
              </span>
              <span className="mt-1 block font-serif text-xl font-semibold text-[#1b1c1c] sm:text-2xl">
                {PHONE_DISPLAY}
              </span>
              <span className="mt-1 block text-sm text-[#504533]">Tap to dial instantly</span>
            </span>
          </a>

          <a
            href={TEL_SECONDARY_URL}
            className="group contact-card flex items-center gap-5 rounded-2xl border border-[#d4c4ac]/30 p-6 transition-all duration-300 hover:border-[#7a5900]/40 hover:shadow-lg sm:p-8"
            aria-label={`Call NextGen Academy at ${PHONE_SECONDARY_DISPLAY}`}
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffdea3] to-[#ffb800] text-[#1b1c1c] shadow-md transition-transform duration-300 group-hover:scale-105">
              <PhoneIcon className="h-7 w-7" aria-hidden />
            </span>
            <span className="text-left">
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-[#7a5900]">
                Alternate line
              </span>
              <span className="mt-1 block font-serif text-xl font-semibold text-[#1b1c1c] sm:text-2xl">
                {PHONE_SECONDARY_DISPLAY}
              </span>
              <span className="mt-1 block text-sm text-[#504533]">Second admissions contact</span>
            </span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group contact-card flex items-center gap-5 rounded-2xl border border-[#d4c4ac]/30 p-6 transition-all duration-300 hover:border-[#25D366]/50 hover:shadow-lg sm:col-span-2 sm:p-8"
            aria-label="Chat with NextGen Academy on WhatsApp"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5dde88] to-[#128C7E] text-white shadow-md transition-transform duration-300 group-hover:scale-105">
              <WhatsAppIcon className="h-7 w-7" aria-hidden />
            </span>
            <span className="text-left">
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-[#128C7E]">
                WhatsApp
              </span>
              <span className="mt-1 block font-serif text-xl font-semibold text-[#1b1c1c] sm:text-2xl">
                Message our admissions team
              </span>
              <span className="mt-1 block text-sm text-[#504533]">
                Quick answers on fees, Hifz program, and campus tours
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
