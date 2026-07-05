import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#features', label: 'Features' },
  { href: '#services', label: 'Services' },
  { href: '#products', label: 'Products' },
  { href: '#programs', label: 'Programs' },
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
          ? 'top-[10px] py-2 rounded-2xl border border-white/75 shadow-[0_18px_52px_rgba(0,42,78,0.12)]'
          : 'top-[14px] py-2 rounded-2xl border border-white/70 shadow-[0_16px_48px_rgba(0,42,78,0.1)]'
      }`}
      style={{
        width: 'calc(100vw - 2rem)',
        maxWidth: '1180px',
        background: scrolled
          ? 'radial-gradient(circle at 9% 0%, rgba(0,161,240,0.15), transparent 30%), radial-gradient(circle at 92% 0%, rgba(155,228,255,0.18), transparent 34%), linear-gradient(90deg, rgba(250,254,255,0.72), rgba(238,249,254,0.64) 46%, rgba(250,254,255,0.72))'
          : 'radial-gradient(circle at 9% 0%, rgba(0,161,240,0.13), transparent 32%), radial-gradient(circle at 92% 0%, rgba(155,228,255,0.17), transparent 36%), linear-gradient(90deg, rgba(250,254,255,0.66), rgba(235,248,254,0.58) 46%, rgba(250,254,255,0.66))',
        backdropFilter: 'blur(34px) saturate(1.35) contrast(1.08) brightness(1.08)',
        WebkitBackdropFilter: 'blur(34px) saturate(1.35) contrast(1.08) brightness(1.08)',
        boxShadow: scrolled
          ? '0 20px 58px rgba(0,42,78,0.14), 0 0 0 1px rgba(0,161,240,0.1), inset 0 1px 0 rgba(255,255,255,0.92), inset 0 -16px 38px rgba(0,161,240,0.05)'
          : '0 18px 54px rgba(0,42,78,0.12), 0 0 0 1px rgba(0,161,240,0.09), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -16px 38px rgba(0,161,240,0.05)',
      }}
    >
      <div className="mx-auto px-5 sm:px-6 flex items-center justify-between">
        <a
          href="#home"
          aria-label="Novion Technologies home"
          className="inline-flex items-center"
        >
          {logoError ? (
            <span style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, color: '#13243A', fontSize: '1.1rem', letterSpacing: '-.01em' }}>
              novion <span className="text-n-blue">TECH</span>
            </span>
          ) : (
            <img
              src="/assets/logo.png"
              alt="Novion Technologies"
              className="h-[46px] w-auto"
              onError={() => setLogoError(true)}
            />
          )}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[0.94rem] font-bold text-[#071827] no-underline tracking-[0.01em] transition-colors duration-200 hover:text-[#003F73] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:rounded-full after:bg-[#005FA8] after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-[10px]">
          <a
            href="#contact"
            className="nav-cta navbar-cta btn-secondary"
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
          <div className="border border-white/70 rounded-[14px] p-2 bg-[radial-gradient(circle_at_18%_0%,rgba(0,161,240,.18),transparent_36%),linear-gradient(135deg,rgba(250,254,255,.82),rgba(235,248,254,.72))] shadow-[0_18px_48px_rgba(0,42,78,.16),inset_0_1px_0_rgba(255,255,255,.88)] backdrop-blur-[32px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-[11px] text-[#071827] no-underline rounded-[10px] text-[0.95rem] font-semibold hover:bg-[rgba(0,95,168,.1)] hover:text-[#003F73]"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="navbar-cta btn-secondary mt-1.5 w-full justify-center"
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
