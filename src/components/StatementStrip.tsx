const pillars = [
  { word: 'Trust', desc: 'The foundation every engagement is built on' },
  { word: 'Reliability', desc: 'Consistent delivery, every time' },
  { word: 'Quality', desc: 'A standard applied before you ever ask' },
]

export default function StatementStrip() {
  return (
    <section className="glass-section overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 py-[72px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-[2]">
        <div>
          <p className="text-[0.7rem] font-bold tracking-[.18em] uppercase text-n-blue m-0 mb-4">Our Foundation</p>
          <h2
            className="font-display font-extrabold text-n-dark leading-[1.1] m-0"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-.02em' }}
          >
            Three Words.<br />One Standard.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {pillars.map(({ word, desc }) => (
            <div
              key={word}
              className="glass-card rounded-[18px] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/50"
            >
              <p className="font-display font-extrabold text-n-blue text-2xl tracking-[-0.01em] m-0 mb-1.5">{word}</p>
              <p className="text-[0.78rem] text-n-slate leading-[1.5] m-0">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
