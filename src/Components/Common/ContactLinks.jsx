import {
  PHONE_DISPLAY,
  PHONE_DISPLAY_SHORT,
  TEL_URL,
  WHATSAPP_URL,
} from '../../lib/contact.js'
import { PhoneIcon, WhatsAppIcon } from './ContactIcons.jsx'

const variants = {
  dark: {
    wrap: 'gap-3',
    btn: 'border-white/15 bg-white/5 text-white hover:border-gold/40 hover:bg-white/10',
    iconCall: 'bg-gold/20 text-gold',
    iconWa: 'bg-[#25D366]/20 text-[#5dde88]',
    label: 'text-white/50',
    number: 'text-white',
  },
  light: {
    wrap: 'gap-3',
    btn: 'border-[#d4c4ac]/40 bg-white text-[#1b1c1c] shadow-sm hover:border-[#7a5900]/40 hover:shadow-md',
    iconCall: 'bg-[#ffdea3] text-[#7a5900]',
    iconWa: 'bg-[#dcf8e8] text-[#128C7E]',
    label: 'text-[#504533]/70',
    number: 'text-[#1b1c1c]',
  },
  compact: {
    wrap: 'gap-2',
    btn: 'border-[#d4c4ac]/30 bg-[#fcfaf7] px-3 py-2 text-sm hover:border-[#7a5900]/50',
    iconCall: 'bg-[#ffdea3] text-[#7a5900] h-8 w-8',
    iconWa: 'bg-[#dcf8e8] text-[#128C7E] h-8 w-8',
    label: 'text-[#504533]/60 text-[10px]',
    number: 'text-[#1b1c1c] text-sm font-semibold',
  },
}

export default function ContactLinks({
  variant = 'light',
  showLabels = true,
  layout = 'row',
  className = '',
}) {
  const v = variants[variant] ?? variants.light
  const flexDir = layout === 'column' ? 'flex-col' : 'flex-row flex-wrap'

  const linkClass = `group flex min-w-0 flex-1 items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-300 ${v.btn}`

  return (
    <div className={`flex ${flexDir} ${v.wrap} ${className}`}>
      <a href={TEL_URL} className={linkClass} aria-label={`Call ${PHONE_DISPLAY}`}>
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 ${v.iconCall}`}
        >
          <PhoneIcon className="h-[18px] w-[18px]" />
        </span>
        <span className="min-w-0 text-left">
          {showLabels && (
            <span className={`block text-[10px] font-semibold uppercase tracking-wider ${v.label}`}>
              Call us
            </span>
          )}
          <span className={`block truncate font-semibold tracking-wide ${v.number}`}>
            {PHONE_DISPLAY_SHORT}
          </span>
        </span>
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label={`Chat on WhatsApp ${PHONE_DISPLAY}`}
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 ${v.iconWa}`}
        >
          <WhatsAppIcon className="h-[18px] w-[18px]" />
        </span>
        <span className="min-w-0 text-left">
          {showLabels && (
            <span className={`block text-[10px] font-semibold uppercase tracking-wider ${v.label}`}>
              WhatsApp
            </span>
          )}
          <span className={`block truncate font-semibold tracking-wide ${v.number}`}>
            {PHONE_DISPLAY_SHORT}
          </span>
        </span>
      </a>
    </div>
  )
}
