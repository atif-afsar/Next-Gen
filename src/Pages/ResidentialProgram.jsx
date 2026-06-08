import PageShell from '../Components/Common/PageShell.jsx'
import '../Components/WhyNextGen/why-page.css'
import ResidentialPageContent from '../Components/Residential/PageContent.jsx'

export default function ResidentialProgram() {
  return (
    <PageShell
      page="residential"
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Residential Program', path: '/residential-program' },
      ]}
    >
      <ResidentialPageContent />
    </PageShell>
  )
}
