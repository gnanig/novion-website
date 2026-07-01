import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#programs', label: 'Programs' },
  { href: '#features', label: 'Why Us' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        scrolled
          ? 'top-[10px] py-3 rounded-2xl border border-white/25 shadow-[0_18px_48px_rgba(0,0,0,0.16)]'
          : 'top-[14px] py-3 rounded-2xl border border-white/18 shadow-[0_16px_44px_rgba(0,0,0,0.12)]'
      }`}
      style={{ width: 'min(calc(100% - 2rem), 1040px)', background: 'rgba(255,255,255,0.78)', backdropFilter: 'blur(22px) saturate(1.25)', WebkitBackdropFilter: 'blur(22px) saturate(1.25)' }}
    >
      <div className="mx-auto px-5 sm:px-6 flex items-center justify-between">
        <a href="#home" aria-label="Novion Technologies home">
          {logoError ? (
            <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, color: '#13243A', fontSize: '1.1rem', letterSpacing: '-.01em' }}>
              novion <span className="text-n-blue">TECH</span>
            </span>
          ) : (
            <img
              src="/assets/logo.png"
              alt="Novion Technologies"
              className="h-[38px] w-auto"
              onError={() => setLogoError(true)}
            />
          )}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-bold text-n-slate no-underline tracking-[0.01em] transition-colors duration-200 hover:text-n-dark after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:rounded-full after:bg-n-blue after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-[10px]">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-n-blue text-white text-sm font-bold px-[22px] py-[10px] rounded-full border border-n-blue no-underline shadow-[0_10px_26px_rgba(0,161,240,.25)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_14px_34px_rgba(0,161,240,.34)]"
          >
            Get Started
          </a>
          <button
            className="md:hidden p-2 bg-white/80 border border-white/40 rounded-xl cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#13243A" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#13243A" strokeWidth="2" strokeLinecap="round">
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="px-4 pb-3 pt-2 md:hidden">
          <div className="bg-white border border-n-border rounded-[14px] p-2 shadow-[0_16px_40px_rgba(19,36,58,.08)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-[11px] text-n-slate no-underline rounded-[10px] text-sm font-semibold hover:bg-n-soft hover:text-n-dark"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-1.5 px-5 py-3 bg-n-blue text-white text-center rounded-xl font-semibold text-sm no-underline"
              onClick={closeMenu}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
