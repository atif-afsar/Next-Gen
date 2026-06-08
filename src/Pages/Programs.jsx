import PageShell from '../Components/Common/PageShell.jsx'
import '../Components/WhyNextGen/why-page.css'
import ProgramsPageContent from '../Components/Programs/PageContent.jsx'

export default function Programs() {
  return (
    <PageShell
      page="programs"
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Academic Leadership Program', path: '/programs' },
      ]}
    >
      <ProgramsPageContent />
    </PageShell>
  )
}
