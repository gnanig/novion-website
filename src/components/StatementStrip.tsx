const pillars = [
  { word: 'Trust', desc: 'Transparent partnership from first conversation to final delivery.' },
  { word: 'Reliability', desc: 'Steady engineering habits that keep work predictable and accountable.' },
  { word: 'Quality', desc: 'Clear standards applied before your users ever see the result.' },
]

export default function StatementStrip() {
  return (
    <section className="glass-section overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="glass-panel reveal grid grid-cols-1 md:grid-cols-[0.82fr_1.18fr] gap-10 items-center rounded-[22px] p-7 sm:p-9 lg:p-11">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(100,213,255,.22)] bg-white/5 px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[.16em] text-n-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-n-blue shadow-[0_0_16px_rgba(0,161,240,.8)]" />
              Our Foundation
            </span>
            <h2
              className="font-display font-extrabold text-white leading-[1.08] m-0 mt-5"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', letterSpacing: '-.02em' }}
            >
              Three words.<br />
              One delivery standard.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pillars.map(({ word, desc }) => (
              <article
                key={word}
                className="rounded-[18px] border border-[rgba(100,213,255,.18)] bg-[linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.035))] p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(100,213,255,.38)] hover:shadow-[0_20px_52px_rgba(0,8,18,.24),0_0_24px_rgba(0,161,240,.08)]"
              >
                <p className="font-display font-extrabold text-n-blue text-2xl tracking-[-0.01em] m-0 mb-2">{word}</p>
                <p className="text-[0.82rem] text-[rgba(214,229,238,.78)] leading-[1.55] m-0">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
