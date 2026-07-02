const iconColor = '#00A1F0'

const features = [
  {
    icon: (
      <svg width="74" height="74" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="11" rx="1" />
        <path d="M8 20h8" /><path d="M12 15v5" /><path d="M3 20h18" />
      </svg>
    ),
    title: 'Software & Solutions',
    desc: 'Helping clients create the future with technology expertise and business intelligence that turns ideas into dependable outcomes.',
  },
  {
    icon: (
      <svg width="74" height="74" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-8 0v2" /><circle cx="12" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M2 21v-2a4 4 0 0 1 3-3.87" /><path d="M8 3.13a4 4 0 0 0 0 7.75" />
      </svg>
    ),
    title: 'Corporate Training',
    desc: 'High-quality, cost-effective training platforms that keep teams aligned with current industry needs and delivery standards.',
  },
  {
    icon: (
      <svg width="74" height="74" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" /><path d="M6 21v-2a6 6 0 0 1 12 0v2" />
      </svg>
    ),
    title: 'Skill Up',
    desc: 'Practical upskilling for professionals who want expert guidance, relevant exposure, and confidence beyond the ordinary.',
  },
  {
    icon: (
      <svg width="74" height="74" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5V5.75A2.75 2.75 0 0 1 6.75 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5" />
        <path d="M12 6v10" /><path d="M16 6v10" />
      </svg>
    ),
    title: 'Research & Innovation',
    desc: 'A dedicated innovation environment for researchers and teams building useful ideas for a better, more capable world.',
  },
]

export default function WhyNovion() {
  return (
    <section id="features" className="glass-section py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-[620px] mx-auto mb-16 reveal">
          <span className="inline-block text-[0.72rem] font-bold tracking-[.16em] uppercase text-n-blue mb-[0.65rem]">
            What We Enable
          </span>
          <h2
            className="font-display font-extrabold text-n-dark leading-[1.1] m-0"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', letterSpacing: '-.02em' }}
          >
            Features
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal reveal-d2">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="glass-card group rounded-[18px] px-7 py-9 text-center transition-all duration-[250ms] hover:border-white/50 hover:shadow-[0_24px_70px_rgba(19,36,58,0.16)] hover:-translate-y-1"
            >
              <div aria-hidden="true" className="flex justify-center mb-8 transition-transform duration-300 group-hover:scale-105">
                {icon}
              </div>
              <h3 className="font-display font-bold text-n-dark text-[1.18rem] tracking-[-0.01em] m-0 mb-5">{title}</h3>
              <p className="text-[0.95rem] text-n-slate leading-[1.7] m-0">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
