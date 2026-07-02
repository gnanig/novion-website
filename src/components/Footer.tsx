import { useState } from 'react'

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
  'Software Solutions',
  'Testing Services',
  'Consulting',
]

const linkClass = 'text-sm no-underline text-white/60 transition-colors duration-200 hover:text-white'

export default function Footer() {
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="bg-[#122A3F] pt-[60px] pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
          <div>
            {logoError ? (
              <span className="block mb-4 font-display font-extrabold text-white text-[1.05rem] tracking-[-0.01em]">
                novion <span className="text-n-blue">TECHNOLOGIES</span>
              </span>
            ) : (
              <img
                src="/assets/logo.png"
                alt="Novion Technologies"
                className="h-[30px] w-auto mb-4 block"
                style={{ filter: 'brightness(0) invert(1)' }}
                onError={() => setLogoError(true)}
              />
            )}
            <p className="text-sm leading-[1.7] max-w-[260px] m-0 mb-3 text-white/60">
              Engineering Trust. Delivering Quality. Your technology partner in Bhubaneswar, Odisha.
            </p>
            <p className="text-[0.72rem] italic m-0 text-white/35">
              Trust | Reliability | Quality
            </p>
          </div>

          <div>
            <p className="text-[0.72rem] font-bold tracking-[.12em] uppercase m-0 mb-[18px] text-white/40">
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
            <p className="text-[0.72rem] font-bold tracking-[.12em] uppercase m-0 mb-[18px] text-white/40">
              Services
            </p>
            <div className="flex flex-col gap-[11px]">
              {serviceLinks.map((label) => (
                <a key={label} href="#services" className={linkClass}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-7 flex justify-between items-center flex-wrap gap-[10px] border-t border-white/10">
          <p className="text-[0.78rem] m-0 text-white/35">
            Copyright 2025 Novion Technologies. All rights reserved.
          </p>
          <p className="text-[0.78rem] m-0 text-white/35">
            Crafted in <span className="text-n-blue">Bhubaneswar, Odisha</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
