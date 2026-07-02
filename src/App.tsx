import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import MarqueeStrip  from './components/MarqueeStrip'
import StatementStrip from './components/StatementStrip'
import Services      from './components/Services'
import Programs      from './components/Programs'
import Features      from './components/Features'
import About         from './components/About'
import Products      from './components/Products'
import Contact       from './components/Contact'
import Footer        from './components/Footer'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <StatementStrip />
      <About />
      <Features />
      <Services />
      <Products />
      <Programs />
      <Contact />
      <Footer />
    </>
  )
}
