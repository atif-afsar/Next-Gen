import '../Components/Contact/contact-page.css'
import ContactHero from '../Components/Contact/Hero.jsx'
import InquiryCards from '../Components/Contact/InquiryCards.jsx'
import Consultation from '../Components/Contact/Consultation.jsx'
import VirtualVisit from '../Components/Contact/VirtualVisit.jsx'
import Location from '../Components/Contact/Location.jsx'

export default function Contact() {
  return (
    <main className="page-contact pt-16 sm:pt-20">
      <ContactHero />
      <InquiryCards />
      <Consultation />
      <VirtualVisit />
      <Location />
    </main>
  )
}
