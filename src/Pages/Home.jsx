import Navbar from '../Components/Home/Navbar.jsx'
import Hero from '../Components/Home/Hero.jsx'
import LegacySection from '../Components/Home/LegacySection.jsx'
import VisionPillars from '../Components/Home/VisionPillars.jsx'
import DualFocus from '../Components/Home/DualFocus.jsx'
import Curriculum from '../Components/Home/Curriculum.jsx'
import Timeline from '../Components/Home/Timeline.jsx'
import CTASection from '../Components/Home/CTASection.jsx'
import Footer from '../Components/Home/Footer.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <Hero />
        <LegacySection />
        <VisionPillars />
        <DualFocus />
        <Curriculum />
        <Timeline />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
