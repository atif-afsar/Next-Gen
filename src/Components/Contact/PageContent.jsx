import ContactHero from './Hero.jsx'
import ContactDirect from './ContactDirect.jsx'
import InquiryCards from './InquiryCards.jsx'
import VirtualVisit from './VirtualVisit.jsx'
import Location from './Location.jsx'

export default function ContactPageContent() {
  return (
    <main className="page-contact pt-16 sm:pt-20">
      <ContactHero />
      <ContactDirect />
      <InquiryCards />
      <VirtualVisit />
      <Location />
    </main>
  )
}
