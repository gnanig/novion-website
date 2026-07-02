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
          ? 'top-[10px] py-2 rounded-2xl border border-white/45 shadow-[0_18px_52px_rgba(0,42,78,0.16)]'
          : 'top-[14px] py-2 rounded-2xl border border-white/40 shadow-[0_16px_48px_rgba(0,42,78,0.14)]'
      }`}
      style={{
        width: 'calc(100vw - 2rem)',
        maxWidth: '1180px',
        background: scrolled
          ? 'linear-gradient(135deg, rgba(231,237,240,0.72), rgba(205,219,226,0.58))'
          : 'linear-gradient(135deg, rgba(238,243,246,0.84), rgba(218,229,235,0.72))',
        backdropFilter: 'blur(32px) saturate(1.35)',
        WebkitBackdropFilter: 'blur(32px) saturate(1.35)',
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

        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[0.82rem] font-bold text-[#10243A] no-underline tracking-[0.01em] transition-colors duration-200 hover:text-[#00589A] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:rounded-full after:bg-[#00589A] after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-[10px]">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-white text-sm font-bold px-[22px] py-[10px] rounded-full border border-white/35 no-underline bg-[linear-gradient(135deg,rgba(0,161,240,.78),rgba(39,108,172,.58))] shadow-[0_10px_28px_rgba(0,161,240,.26),inset_0_1px_0_rgba(255,255,255,.28)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-px hover:shadow-[0_14px_34px_rgba(0,161,240,.36),0_0_22px_rgba(0,161,240,.2),inset_0_1px_0_rgba(255,255,255,.34)]"
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
          <div className="border border-white/45 rounded-[14px] p-2 bg-[linear-gradient(135deg,rgba(231,237,240,.86),rgba(205,219,226,.72))] shadow-[0_16px_40px_rgba(0,42,78,.14)] backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-[11px] text-[#10243A] no-underline rounded-[10px] text-sm font-semibold hover:bg-white/45 hover:text-[#00589A]"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-1.5 px-5 py-3 text-white text-center rounded-full font-semibold text-sm no-underline border border-white/35 bg-[linear-gradient(135deg,rgba(0,161,240,.78),rgba(39,108,172,.58))] shadow-[0_10px_28px_rgba(0,161,240,.24),inset_0_1px_0_rgba(255,255,255,.25)]"
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
