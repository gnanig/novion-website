import { FaCircleArrowRight } from 'react-icons/fa6'
import HeroWave from './HeroWave'
import HeroModel from './HeroModel'

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-atmosphere relative overflow-hidden flex items-center min-h-screen h-screen"
      style={{ paddingTop: '76px' }}
    >
      <HeroWave />

      <div className="relative z-[2] max-w-7xl mx-auto px-3 sm:px-8 w-full py-8">
        <div className="glass-panel hero-stage">
          <div className="hero-copy-panel min-w-0">
            <div className="ha1 inline-flex items-center gap-[9px] px-4 py-[7px] rounded-full border border-white/25 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,.12)] mb-5">
              <span aria-hidden="true" className="pulse-dot w-[7px] h-[7px] rounded-full bg-n-blue flex-shrink-0" />
              <span className="text-[0.78rem] font-semibold text-white/80 tracking-[0.03em]">
                Software | Testing | Consulting
              </span>
            </div>

            <h1
              className="ha2 font-display font-extrabold text-white m-0 mb-[10px]"
              style={{ fontSize: 'clamp(2.15rem, 4.85vw, 4rem)', lineHeight: 1.04, letterSpacing: '-.02em' }}
            >
              <span className="hero-title-line">Engineering <span className="text-n-blue">Trust</span></span>
              <span className="hero-title-line">Delivering <span className="text-n-blue">Quality</span></span>
            </h1>

            <p className="ha3 text-[0.72rem] font-semibold tracking-[.2em] uppercase text-[#9BE4FF] m-0 mb-[16px]">
              Trust |  Reliability | Quality
            </p>

            <p className="ha4 text-[1rem] text-white/75 leading-[1.62] max-w-[540px] m-0 mb-7">
              Novion Technologies is your end-to-end technology partner, from precision software development and rigorous testing to strategic consulting that delivers real results.
            </p>

            <div className="ha5 flex flex-col sm:flex-row gap-[14px] items-start sm:items-center">
              <a href="#services" className="btn-primary">
                Explore Services
                <FaCircleArrowRight aria-hidden="true" />
              </a>
              <a href="#contact" className="btn-secondary">Get in Touch</a>
            </div>
          </div>

          <div className="ha4 flex justify-center items-center min-w-0">
            <HeroModel />
          </div>
        </div>
      </div>
    </section>
  )
}
