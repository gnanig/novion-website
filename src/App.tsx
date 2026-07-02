import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Services      from './components/Services'
import Programs      from './components/Programs'
import WhyNovion     from './components/WhyNovion'
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
      <About />
      <WhyNovion />
      <Services />
      <Products />
      <Programs />
      <Contact />
      <Footer />
    </>
  )
}
