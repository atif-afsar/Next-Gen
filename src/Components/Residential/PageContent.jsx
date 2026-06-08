import ResidentialHero from './Hero.jsx'
import ResidentialOverview from './Overview.jsx'
import ResidentialPillars from './Pillars.jsx'
import ResidentialCTA from './CTA.jsx'

export default function ResidentialPageContent() {
  return (
    <main className="page-residential pt-16 sm:pt-20">
      <ResidentialHero />
      <ResidentialOverview />
      <ResidentialPillars />
      <ResidentialCTA />
    </main>
  )
}
