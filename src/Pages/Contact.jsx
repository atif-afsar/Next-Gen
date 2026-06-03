import PageShell from '../Components/Common/PageShell.jsx'
import { CONTACT_HERO } from '../lib/images.js'
import '../Components/Contact/contact-page.css'
import ContactPageContent from '../Components/Contact/PageContent.jsx'

export default function Contact() {
  return (
    <PageShell
      page="contact"
      preload={CONTACT_HERO}
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]}
    >
      <ContactPageContent />
    </PageShell>
  )
}
