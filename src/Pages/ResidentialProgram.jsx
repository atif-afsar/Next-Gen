import PageShell from '../Components/Common/PageShell.jsx'
import '../Components/WhyNextGen/why-page.css'
import WhyNextGenPageContent from '../Components/WhyNextGen/PageContent.jsx'

export default function ResidentialProgram() {
  return (
    <PageShell
      page="residential"
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Residential Program', path: '/residential-program' },
      ]}
    >
      <WhyNextGenPageContent />
    </PageShell>
  )
}
