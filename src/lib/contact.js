import { PHONES, ADDRESS } from './seo.js'

/** Primary admissions line */
export const PHONE_RAW = PHONES[0].raw
export const PHONE_E164 = `91${PHONE_RAW}`
export const PHONE_DISPLAY = PHONES[0].display
export const PHONE_DISPLAY_SHORT = '70375 11306'

export const PHONE_SECONDARY_RAW = PHONES[1].raw
export const PHONE_SECONDARY_DISPLAY = PHONES[1].display

export const TEL_URL = `tel:+${PHONE_E164}`
export const TEL_SECONDARY_URL = `tel:+91${PHONE_SECONDARY_RAW}`

export const WHATSAPP_URL = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(
  'Hello NextGen Academy, I would like to know more about admissions.'
)}`

/** Admissions and enquiry inbox */
export const ADMISSIONS_EMAIL = 'nextgeneacademy.ims@gmail.com'

export const ADDRESS_LINE = ADDRESS.formatted
export const ADDRESS_SHORT = 'Near AMU Fort, Fort Enclave Colony, Aligarh, UP, India'

export const MAP_QUERY = encodeURIComponent(
  'NextGen Academy Near AMU Fort, Fort Enclave Colony, Aligarh, UP, India'
)
export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`
