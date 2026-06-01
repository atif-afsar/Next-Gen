import '../Components/WhyNextGen/why-page.css'
import WhyNextGenHero from '../Components/WhyNextGen/Hero.jsx'
import Transformation from '../Components/WhyNextGen/Transformation.jsx'
import Pillars from '../Components/WhyNextGen/Pillars.jsx'
import CompetitiveEdge from '../Components/WhyNextGen/CompetitiveEdge.jsx'
import Testimonials from '../Components/WhyNextGen/Testimonials.jsx'
import WhyNextGenCTA from '../Components/WhyNextGen/CTA.jsx'

export default function WhyNextGen() {
  return (
    <main className="page-why pt-20">
      <WhyNextGenHero />
      <Transformation />
      <Pillars />
      <CompetitiveEdge />
      <Testimonials />
      <WhyNextGenCTA />
    </main>
  )
}
