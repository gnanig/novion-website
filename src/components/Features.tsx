import { BookOpenCheck, Code2, GraduationCap, TrendingUp } from 'lucide-react'

const iconProps = {
  size: 74,
  strokeWidth: 1.65,
  color: '#008FD8',
}

const features = [
  {
    icon: <Code2 {...iconProps} />,
    title: 'Software & Solutions',
    desc: 'Helping clients create the future with technology expertise and business intelligence that turns ideas into dependable outcomes.',
  },
  {
    icon: <GraduationCap {...iconProps} />,
    title: 'Corporate Training',
    desc: 'High-quality, cost-effective training platforms that keep teams aligned with current industry needs and delivery standards.',
  },
  {
    icon: <TrendingUp {...iconProps} />,
    title: 'Skill Up',
    desc: 'Practical upskilling for professionals who want expert guidance, relevant exposure, and confidence beyond the ordinary.',
  },
  {
    icon: <BookOpenCheck {...iconProps} />,
    title: 'Research & Innovation',
    desc: 'A dedicated innovation environment for researchers and teams building useful ideas for a better, more capable world.',
  },
]

export default function Features() {
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
