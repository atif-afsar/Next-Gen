import PageShell from '../Components/Common/PageShell.jsx'
import '../Components/About/about-page.css'
import AboutHero from '../Components/About/Hero.jsx'
import Mission from '../Components/About/Mission.jsx'
import IntegrativeModel from '../Components/About/IntegrativeModel.jsx'
import CoreValues from '../Components/About/CoreValues.jsx'
import Philosophy from '../Components/About/Philosophy.jsx'
import Pillars from '../Components/About/Pillars.jsx'
import AboutCTA from '../Components/About/CTA.jsx'

export default function About() {
  return (
    <PageShell
      page="about"
      breadcrumbs={[
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
      ]}
    >
      <main className="page-about bg-[#faf3e3]">
        <AboutHero />
        <Mission />
        <IntegrativeModel />
        <CoreValues />
        <Philosophy />
        <Pillars />
        <AboutCTA />
      </main>
    </PageShell>
  )
}
