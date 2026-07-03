import { useEffect } from 'react'
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
import SectionDivider from './components/SectionDivider'

export default function App() {
  useScrollReveal()

  useEffect(() => {
    let activeGrid: HTMLElement | null = null
    let activeCard: HTMLElement | null = null

    const updateGridGlow = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return

      const target = event.target.closest<HTMLElement>('.hero-atmosphere, .glass-section')
      if (!target) {
        activeGrid?.removeAttribute('data-grid-active')
        activeCard?.removeAttribute('data-card-active')
        activeGrid = null
        activeCard = null
        return
      }

      if (activeGrid && activeGrid !== target) {
        activeGrid.removeAttribute('data-grid-active')
      }

      activeGrid = target
      target.setAttribute('data-grid-active', 'true')

      const rect = target.getBoundingClientRect()
      target.style.setProperty('--grid-x', `${event.clientX - rect.left}px`)
      target.style.setProperty('--grid-y', `${event.clientY - rect.top}px`)

      const card = event.target.closest<HTMLElement>('.glass-card')
      if (!card) {
        activeCard?.removeAttribute('data-card-active')
        activeCard = null
        return
      }

      if (activeCard && activeCard !== card) {
        activeCard.removeAttribute('data-card-active')
      }

      activeCard = card
      card.setAttribute('data-card-active', 'true')

      const cardRect = card.getBoundingClientRect()
      card.style.setProperty('--card-x', `${event.clientX - cardRect.left}px`)
      card.style.setProperty('--card-y', `${event.clientY - cardRect.top}px`)
    }

    const clearGridGlow = () => {
      activeGrid?.removeAttribute('data-grid-active')
      activeCard?.removeAttribute('data-card-active')
      activeGrid = null
      activeCard = null
    }

    window.addEventListener('pointermove', updateGridGlow, { passive: true })
    window.addEventListener('pointerleave', clearGridGlow)
    window.addEventListener('blur', clearGridGlow)

    return () => {
      window.removeEventListener('pointermove', updateGridGlow)
      window.removeEventListener('pointerleave', clearGridGlow)
      window.removeEventListener('blur', clearGridGlow)
    }
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <SectionDivider />
      <StatementStrip />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Features />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <MarqueeStrip />
      <SectionDivider />
      <Products />
      <SectionDivider />
      <Programs />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Footer />
    </>
  )
}
