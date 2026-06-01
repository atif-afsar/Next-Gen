import '../Components/About/about-page.css'
import AboutHero from '../Components/About/Hero.jsx'
import Mission from '../Components/About/Mission.jsx'
import IntegrativeModel from '../Components/About/IntegrativeModel.jsx'
import Founders from '../Components/About/Founders.jsx'
import CoreValues from '../Components/About/CoreValues.jsx'
import Philosophy from '../Components/About/Philosophy.jsx'
import Pillars from '../Components/About/Pillars.jsx'
import AboutCTA from '../Components/About/CTA.jsx'

export default function About() {
  return (
    <main className="page-about bg-[#fbf9f8]">
      <AboutHero />
      <Mission />
      <IntegrativeModel />
      <Founders />
      <CoreValues />
      <Philosophy />
      <Pillars />
      <AboutCTA />
    </main>
  )
}
