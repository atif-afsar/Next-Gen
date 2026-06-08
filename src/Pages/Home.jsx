import PageShell from '../Components/Common/PageShell.jsx'
import '../Components/Home/home-page.css'
import Hero from '../Components/Home/Hero.jsx'
import LegacySection from '../Components/Home/LegacySection.jsx'
import VisionPillars from '../Components/Home/VisionPillars.jsx'
import DualFocus from '../Components/Home/DualFocus.jsx'
import Curriculum from '../Components/Home/Curriculum.jsx'
import Timeline from '../Components/Home/Timeline.jsx'
import CTASection from '../Components/Home/CTASection.jsx'

export default function Home() {
  return (
    <PageShell page="home" preload="/images/hero/image1.png" includeFaq>
      <main>
        <Hero />
        <div className="page-home-sections" aria-label="Academy overview">
          <LegacySection />
          <VisionPillars />
          <DualFocus />
          <Curriculum />
          <Timeline />
          <CTASection />
        </div>
      </main>
    </PageShell>
  )
}
