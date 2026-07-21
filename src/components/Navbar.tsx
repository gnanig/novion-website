import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#features', label: 'Features' },
  { href: '#services', label: 'Services' },
  { href: '#products', label: 'Products' },
  { href: '#programs', label: 'Programs' },
  { href: '#contact', label: 'Contact' },
]

const sectionTopLinks = new Set(['#home', '#about', '#features', '#services', '#contact'])

export default function Navbar() {
  const isScrollingRef = useRef(false)
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      setIsVisible(true)
      return undefined
    }

    let hideTimer = window.setTimeout(() => setIsVisible(false), 1500)
    let scrollStopTimer = 0

    const scheduleHide = () => {
      window.clearTimeout(hideTimer)
      hideTimer = window.setTimeout(() => setIsVisible(false), 1500)
    }

    const showNavbar = () => {
      if (isScrollingRef.current) return
      setIsVisible(true)
      scheduleHide()
    }

    const hideWhileScrolling = () => {
      isScrollingRef.current = true
      setIsVisible(false)
      window.clearTimeout(hideTimer)
      window.clearTimeout(scrollStopTimer)
      scrollStopTimer = window.setTimeout(() => {
        isScrollingRef.current = false
      }, 180)
    }

    window.addEventListener('pointermove', showNavbar, { passive: true })
    window.addEventListener('scroll', hideWhileScrolling, { passive: true })

    return () => {
      window.clearTimeout(hideTimer)
      window.clearTimeout(scrollStopTimer)
      window.removeEventListener('pointermove', showNavbar)
      window.removeEventListener('scroll', hideWhileScrolling)
      isScrollingRef.current = false
    }
  }, [menuOpen])

  const scrollToSection = (href: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith('#')) return
    if (!sectionTopLinks.has(href)) {
      setMenuOpen(false)
      return
    }

    event.preventDefault()
    const target = document.getElementById(href.slice(1))

    if (!target) {
      window.location.hash = href
      return
    }

    const behavior: ScrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'

    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY,
      behavior,
    })
    window.history.pushState(null, '', href)
    setMenuOpen(false)
  }

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`site-navbar ${scrolled ? 'site-navbar-scrolled' : ''} ${isVisible || menuOpen ? 'site-navbar-visible' : 'site-navbar-hidden'} ${menuOpen ? 'site-navbar-menu-open' : ''}`}
    >
      <div className="site-navbar-content mx-auto px-5 sm:px-6 flex items-center justify-between">
        <a
          href="#home"
          aria-label="Novion Technologies home"
          className="navbar-logo-link inline-flex items-center"
          onClick={(event) => scrollToSection('#home', event)}
        >
          {logoError ? (
            <span className="navbar-logo-fallback" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, color: '#13243A', fontSize: '1.1rem', letterSpacing: '-.01em' }}>
              novion <span className="text-n-blue">TECH</span>
            </span>
          ) : (
            <img
              src="/assets/logo.png"
              alt="Novion Technologies"
              className="navbar-logo h-[46px] w-auto"
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
              onClick={(event) => scrollToSection(link.href, event)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-[10px]">
          <a
            href="#contact"
            className="nav-cta navbar-cta btn-secondary"
            onClick={(event) => scrollToSection('#contact', event)}
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
                onClick={(event) => scrollToSection(link.href, event)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="navbar-cta btn-secondary mt-1.5 w-full justify-center"
              onClick={(event) => scrollToSection('#contact', event)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
