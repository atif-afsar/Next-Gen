import { PHONE_DISPLAY_SHORT, TEL_URL, WHATSAPP_URL } from '../../lib/contact.js'
import { PhoneIcon, WhatsAppIcon } from './ContactIcons.jsx'
import './floating-contact.css'

export default function FloatingContact() {
  return (
    <>
      <aside
        className="floating-contact floating-contact--left pointer-events-none fixed bottom-5 left-4 z-40 sm:bottom-7 sm:left-6"
        aria-label="Call us"
      >
        <div className="floating-contact__item pointer-events-auto">
          <a
            href={TEL_URL}
            className="floating-contact__btn floating-contact__btn--call"
            aria-label={`Call ${PHONE_DISPLAY_SHORT}`}
          >
            <span className="floating-contact__label floating-contact__label--call">Call us</span>
            <PhoneIcon className="h-[22px] w-[22px] text-[#1a1008]" />
          </a>
        </div>
      </aside>

      <aside
        className="floating-contact floating-contact--right pointer-events-none fixed bottom-5 right-4 z-40 sm:bottom-7 sm:right-6"
        aria-label="WhatsApp"
      >
        <div className="floating-contact__item pointer-events-auto">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-contact__btn floating-contact__btn--wa"
            aria-label={`WhatsApp ${PHONE_DISPLAY_SHORT}`}
          >
            <span className="floating-contact__label floating-contact__label--wa">WhatsApp</span>
            <WhatsAppIcon className="h-[22px] w-[22px]" />
          </a>
        </div>
      </aside>
    </>
  )
}
