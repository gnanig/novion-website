import { useState } from 'react'
import SocialLinks from './SocialLinks'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#features', label: 'Features' },
  { href: '#services', label: 'Services' },
  { href: '#products', label: 'Products' },
  { href: '#programs', label: 'Programs' },
  { href: '#contact', label: 'Contact' },
]

const serviceLinks = [
  'Product Engineering',
  'AI/ML Solutions',
  'Cloud & DevOps',
  'Consulting',
  'Testing Services',
]

const linkClass = 'text-sm no-underline text-[#C8D8E2] transition-colors duration-200 hover:text-white'

export default function Footer() {
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="relative overflow-hidden border-t border-white/20 bg-[linear-gradient(135deg,#0A1F34,#123A59_48%,#173F61)] pt-[60px] pb-8 shadow-[inset_0_1px_0_rgba(255,255,255,.12)]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_14%_12%,rgba(155,228,255,.24),rgba(0,161,240,.16)_24%,transparent_42%),radial-gradient(circle_at_92%_28%,rgba(216,227,234,.12),transparent_34%)]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-8">
        <div className="relative z-[1] grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
          <div>
            {logoError ? (
              <span className="block mb-4 font-display font-extrabold text-white text-[1.05rem] tracking-[-0.01em]">
                novion <span className="text-n-blue">TECHNOLOGIES</span>
              </span>
            ) : (
              <img
                src="/assets/logo.png"
                alt="Novion Technologies"
                className="h-[42px] w-auto mb-4 block"
                onError={() => setLogoError(true)}
              />
            )}
            <p className="text-sm leading-[1.7] max-w-[260px] m-0 mb-3 text-[#C8D8E2]">
              Building modern software, AI-ready products, and scalable digital systems for ambitious teams.
            </p>
            <p className="text-[0.72rem] italic m-0 text-white/45">
              Engineering | Automation | Scale
            </p>
          </div>

          <div>
            <p className="text-[0.72rem] font-bold tracking-[.12em] uppercase m-0 mb-[18px] text-[#9BE4FF]">
              Navigation
            </p>
            <div className="flex flex-col gap-[11px]">
              {navLinks.map(({ href, label }) => (
                <a key={href} href={href} className={linkClass}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.72rem] font-bold tracking-[.12em] uppercase m-0 mb-[18px] text-[#9BE4FF]">
              Services
            </p>
            <div className="flex flex-col gap-[11px]">
              {serviceLinks.map((label) => (
                <a key={label} href="#services" className={linkClass}>
                  {label}
                </a>
              ))}
            </div>
            <div className="mt-7">
              <p className="text-[0.72rem] font-bold tracking-[.12em] uppercase m-0 mb-[14px] text-[#9BE4FF]">
                Social
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="relative z-[1] pt-7 flex justify-between items-center flex-wrap gap-[10px] border-t border-white/12">
          <p className="text-[0.78rem] m-0 text-white/45">
            Copyright 2025 Novion Technologies. All rights reserved.
          </p>
          <p className="text-[0.78rem] m-0 text-white/45">
            Built for <span className="text-n-blue">modern digital delivery</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
