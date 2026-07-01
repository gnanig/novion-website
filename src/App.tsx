import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import StatementStrip from './components/StatementStrip'
import Services      from './components/Services'
import Programs      from './components/Programs'
import WhyNovion     from './components/WhyNovion'
import About         from './components/About'
import MarqueeStrip  from './components/MarqueeStrip'
import Contact       from './components/Contact'
import Footer        from './components/Footer'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <Hero />
      <StatementStrip />
      <Services />
      <Programs />
      <WhyNovion />
      <About />
      <MarqueeStrip />
      <Contact />
      <Footer />
    </>
  )
}
