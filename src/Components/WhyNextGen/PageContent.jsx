import WhyNextGenHero from './Hero.jsx'
import Transformation from './Transformation.jsx'
import Pillars from './Pillars.jsx'
import CompetitiveEdge from './CompetitiveEdge.jsx'
import Testimonials from './Testimonials.jsx'
import WhyNextGenCTA from './CTA.jsx'

export default function WhyNextGenPageContent() {
  return (
    <main className="page-why pt-16 sm:pt-20">
      <WhyNextGenHero />
      <Transformation />
      <Pillars />
      <CompetitiveEdge />
      <Testimonials />
      <WhyNextGenCTA />
    </main>
  )
}
