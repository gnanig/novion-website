import HeroWave from './HeroWave'
import HeroModel from './HeroModel'

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-atmosphere relative overflow-hidden flex items-center"
      style={{ minHeight: '100vh', paddingTop: '88px' }}
    >
      <HeroWave />

      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-8 w-full py-20">
        <div className="glass-panel hero-stage">
          <div className="hero-copy-panel min-w-0">
            <div className="ha1 inline-flex items-center gap-[9px] px-4 py-[7px] rounded-full border border-white/25 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,.12)] mb-7">
              <span aria-hidden="true" className="w-[7px] h-[7px] rounded-full bg-n-blue flex-shrink-0" />
              <span className="text-[0.78rem] font-semibold text-white/80 tracking-[0.03em]">
                Software | Testing | Consulting
              </span>
            </div>

            <h1
              className="ha2 font-display font-extrabold text-white m-0 mb-[10px]"
              style={{ fontSize: 'clamp(2.25rem, 9vw, 4.25rem)', lineHeight: 1.06, letterSpacing: '-.02em' }}
            >
              Engineering<br />
              <span className="text-n-blue">Trust.</span><br />Delivering<br />Excellence.
            </h1>

            <p className="ha3 text-[0.72rem] font-semibold tracking-[.2em] uppercase text-[#9BE4FF] m-0 mb-[22px]">
              Trust / Reliability / Quality
            </p>

            <p className="ha4 text-[1.0625rem] text-white/75 leading-[1.7] max-w-[460px] m-0 mb-10">
              Novion Technologies is your end-to-end technology partner, from precision software development and rigorous testing to strategic consulting that delivers real results.
            </p>

            <div className="ha5 flex flex-col sm:flex-row gap-[14px] items-start sm:items-center">
              <a href="#services" className="btn-primary">
                Explore Services
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="btn-primary">Get in Touch</a>
            </div>
          </div>

          <div className="ha4 flex justify-center items-center min-w-0">
            <HeroModel />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[6px]"
      >
        <span className="text-[0.65rem] tracking-[.15em] uppercase text-white/55 font-medium">Scroll</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2" strokeLinecap="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}
