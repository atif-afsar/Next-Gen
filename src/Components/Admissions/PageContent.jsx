import AdmissionsHero from './Hero.jsx'
import WhoWeServe from './WhoWeServe.jsx'
import Process from './Process.jsx'
import HifzPlus from './HifzPlus.jsx'
import ApplicationForm from './ApplicationForm.jsx'
import QuickContact from './QuickContact.jsx'
import FAQ from '../Contact/FAQ.jsx'

export default function AdmissionsPageContent() {
  return (
    <main className="page-admissions pt-16 sm:pt-20">
      <AdmissionsHero />
      <WhoWeServe />
      <Process />
      <HifzPlus />
      <ApplicationForm />
      <QuickContact />
      <FAQ />
    </main>
  )
}
