import PageShell from '../Components/Common/PageShell.jsx'
import '../Components/WhyNextGen/why-page.css'
import WhyNextGenPageContent from '../Components/WhyNextGen/PageContent.jsx'

export default function WhyNextGen() {
  return (
    <PageShell
      page="whyNextGen"
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Why NextGen', path: '/why-nextgen' },
      ]}
    >
      <WhyNextGenPageContent />
    </PageShell>
  )
}
