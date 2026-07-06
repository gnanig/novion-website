const programs = [
  {
    title: 'Industry Readiness Program',
    eyebrow: 'For emerging talent',
    description: 'A structured program focused on practical engineering habits, workplace workflows, testing discipline, communication, and project delivery readiness.',
    points: ['Project-based learning', 'Testing and deployment basics', 'Professional delivery habits'],
    accent: 'from-n-blue/22 to-[#7C5CFF]/18',
  },
  {
    title: 'AI/ML for Experienced Professionals',
    eyebrow: 'For working professionals',
    description: 'A focused AI/ML track for professionals who want to apply modern machine learning concepts to real business and software delivery contexts.',
    points: ['Applied ML foundations', 'AI-assisted workflows', 'Use-case driven implementation'],
    accent: 'from-[#2DBF9F]/24 to-n-blue/18',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="glass-section py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <div className="reveal">
            <span className="inline-block text-[0.72rem] font-bold tracking-[.16em] uppercase text-n-blue mb-[0.65rem]">
              Our Programs
            </span>
            <h2
              className="font-display font-extrabold text-n-dark leading-[1.1] m-0 mb-5"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', letterSpacing: '-.02em' }}
            >
              Career-focused learning for real-world technology work.
            </h2>
            <p className="text-[1.0625rem] text-n-slate leading-[1.7] m-0">
              Practical, outcome-led programs designed for people who want to build capability, confidence, and relevance in modern technology teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            {programs.map((program, index) => (
              <article
                key={program.title}
                className={`reveal ${index === 1 ? 'reveal-d1' : ''} glass-card h-full overflow-hidden rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(19,36,58,.18)]`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.accent}`} aria-hidden="true" />
                <div className="relative z-[1] flex h-full flex-col">
                  <p className="text-[0.7rem] font-bold tracking-[.14em] uppercase text-[#6F45FF] m-0 mb-3">
                    {program.eyebrow}
                  </p>
                  <h3 className="font-display text-[1.35rem] leading-[1.18] font-extrabold text-n-dark tracking-[-0.01em] m-0 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-[0.94rem] text-n-slate leading-[1.7] m-0 flex-1">
                    {program.description}
                  </p>
                  <div className="mt-auto flex flex-col gap-2.5 pt-6">
                    {program.points.map((point) => (
                      <div key={point} className="flex items-center gap-2 text-sm font-semibold text-n-dark">
                        <span className="h-2 w-2 rounded-full bg-n-blue shadow-[0_0_18px_rgba(0,161,240,.55)]" aria-hidden="true" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
