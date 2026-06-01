import AboutHero from '../Components/About/Hero.jsx'
import Mission from '../Components/About/Mission.jsx'
import Philosophy from '../Components/About/Philosophy.jsx'
import Founders from '../Components/About/Founders.jsx'
import IntegrativeModel from '../Components/About/IntegrativeModel.jsx'
import CoreValues from '../Components/About/CoreValues.jsx'
import Pillars from '../Components/About/Pillars.jsx'
import AboutCTA from '../Components/About/CTA.jsx'

export default function About() {
  return (
    <main className="islamic-pattern">
      <AboutHero />
      <Mission />
      <Philosophy />
      <Founders />
      <IntegrativeModel />
      <CoreValues />
      <Pillars />
      <AboutCTA />
    </main>
  )
}
