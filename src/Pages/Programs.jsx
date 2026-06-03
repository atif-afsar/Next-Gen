import PageShell from '../Components/Common/PageShell.jsx'
import '../Components/WhyNextGen/why-page.css'
import WhyNextGenPageContent from '../Components/WhyNextGen/PageContent.jsx'

export default function Programs() {
  return (
    <PageShell
      page="programs"
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Programs', path: '/programs' },
      ]}
    >
      <WhyNextGenPageContent />
    </PageShell>
  )
}
