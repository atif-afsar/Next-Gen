import PageShell from '../Components/Common/PageShell.jsx'
import { HERO_BG } from '../lib/images.js'
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
    <PageShell page="home" preload={HERO_BG} includeFaq>
      <main>
        <Hero />
        <div className="page-home-sections" aria-label="Academy overview">
          <div
            className="h-16 bg-gradient-to-b from-[#0a0a0a] via-[#141210] to-[#f5f3f3] sm:h-20 md:h-28"
            aria-hidden
          />
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
