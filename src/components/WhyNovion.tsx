const iconColor = '#00A1F0'

const features = [
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round">
        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
      </svg>
    ),
    title: 'Proven Expertise',
    desc: 'Deep hands-on experience and technical depth you can measure from the very first conversation.',
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Reliable Delivery',
    desc: 'We treat your deadlines as our own, with clear planning and steady execution.',
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Quality-First Culture',
    desc: 'Our standard is applied before you ever ask for it. Quality is built in from the start.',
  },
  {
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: 'Full Transparency',
    desc: 'Clear processes and regular updates keep you in control every step of the way.',
  },
]

export default function WhyNovion() {
  return (
    <section id="features" className="glass-section py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="inline-block text-[0.72rem] font-bold tracking-[.16em] uppercase text-n-blue mb-[0.65rem]">
              The Novion Advantage
            </span>
            <h2
              className="font-display font-extrabold text-n-dark leading-[1.1] m-0 mb-5"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', letterSpacing: '-.02em' }}
            >
              Why Clients<br />Choose Novion
            </h2>
            <p className="text-[1.0625rem] text-n-slate leading-[1.7] m-0 mb-9">
              Beyond delivering a project, we deliver a standard. Every engagement and every deliverable is held to the same bar we set from day one.
            </p>
            <a href="#contact" className="btn-primary">
              Start a Conversation
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col gap-4 reveal reveal-d2">
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="glass-card group rounded-[18px] px-7 py-6 flex gap-[18px] items-start transition-all duration-[250ms] hover:border-white/50 hover:shadow-[0_24px_70px_rgba(19,36,58,0.16)] hover:-translate-y-1"
              >
                <div
                  aria-hidden="true"
                  className="w-10 h-10 rounded-xl bg-n-soft flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                >
                  {icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-n-dark text-base tracking-[-0.01em] m-0 mb-[5px]">{title}</h3>
                  <p className="text-sm text-n-slate leading-[1.6] m-0">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
