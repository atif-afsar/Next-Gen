import ProgramsHero from './Hero.jsx'
import ProgramOverview from './ProgramOverview.jsx'
import ProgramPhases from './ProgramPhases.jsx'
import DualPathways from './DualPathways.jsx'
import GraduateOutcomes from './GraduateOutcomes.jsx'
import ProgramsCTA from './CTA.jsx'

export default function ProgramsPageContent() {
  return (
    <main className="page-programs pt-16 sm:pt-20">
      <ProgramsHero />
      <ProgramOverview />
      <ProgramPhases />
      <DualPathways />
      <GraduateOutcomes />
      <ProgramsCTA />
    </main>
  )
}
