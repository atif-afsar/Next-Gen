import PageShell from '../Components/Common/PageShell.jsx'
import { ABOUT_HERO_CAMPUS } from '../lib/images.js'
import '../Components/Admissions/admissions-page.css'
import AdmissionsPageContent from '../Components/Admissions/PageContent.jsx'

export default function Admissions() {
  return (
    <PageShell
      page="admissions"
      preload={ABOUT_HERO_CAMPUS}
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'Admissions', path: '/admissions' },
      ]}
      includeFaq
    >
      <AdmissionsPageContent />
    </PageShell>
  )
}
