import type { ReactNode } from 'react'

interface ServiceCard {
  icon: ReactNode
  title: string
  description: string
  tags: string[]
  delay?: string
}

const iconColor = '#00A1F0'

const services: ServiceCard[] = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Software Solutions',
    description: 'From concept to deployment, robust web platforms, enterprise applications, and custom digital tools built to perform under pressure.',
    tags: ['Web Apps', 'Enterprise', 'APIs'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" /><path d="m9 15 2 2 4-4" />
      </svg>
    ),
    title: 'Testing Services',
    description: 'Eliminate defects before they reach your users. Manual, automated, and performance QA that gives you confidence to ship.',
    tags: ['Manual', 'Automation', 'Performance'],
    delay: 'reveal-d1',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
    title: 'Technology Consulting',
    description: 'Strategic guidance on digital transformation, architecture reviews, and long-term technology roadmaps aligned with business goals.',
    tags: ['Strategy', 'Architecture', 'Roadmaps'],
    delay: 'reveal-d2',
  },
]

export default function Services() {
  return (
    <section id="services" className="nav-section glass-section py-24">
      <div className="section-frame max-w-7xl mx-auto px-8">
        <div className="section-intro text-center max-w-[560px] mx-auto mb-14 reveal">
          <span className="inline-block text-[0.72rem] font-bold tracking-[.16em] uppercase text-n-blue mb-[0.65rem]">
            What We Do
          </span>
          <h2
            className="font-display font-extrabold text-n-dark leading-[1.1] m-0 mb-4"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', letterSpacing: '-.02em' }}
          >
            Complete Technology Services
          </h2>
          <p className="text-[1.0625rem] text-n-slate leading-[1.7] m-0">
            Every layer of your technology journey, built, tested, and strategically guided under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`reveal ${svc.delay ?? ''} glass-card group flex h-full flex-col rounded-[18px] p-9 transition-all duration-[250ms] hover:border-white/50 hover:shadow-[0_24px_70px_rgba(19,36,58,0.16)] hover:-translate-y-1`}
            >
              <div
                aria-hidden="true"
                className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-6 bg-n-soft transition-transform duration-300 group-hover:scale-105"
              >
                {svc.icon}
              </div>
              <h3 className="font-display font-bold text-n-dark text-[1.3rem] tracking-[-0.01em] m-0 mb-[14px]">
                {svc.title}
              </h3>
              <p className="text-[0.9375rem] text-n-slate leading-[1.7] m-0 flex-1">
                {svc.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-7">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/55 border border-white/50 text-[0.72rem] font-semibold text-n-slate"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
