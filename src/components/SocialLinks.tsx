const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/novion-tech/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V8.98h3.42v1.57h.05a3.75 3.75 0 0 1 3.37-1.85c3.61 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47Z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/+918984084040',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.04 2.5a9.44 9.44 0 0 0-8.05 14.37L2.95 21.5l4.76-1.03A9.45 9.45 0 1 0 12.04 2.5Zm0 1.78a7.66 7.66 0 1 1 0 15.32 7.58 7.58 0 0 1-3.86-1.06l-.31-.18-2.39.52.54-2.31-.21-.34a7.66 7.66 0 0 1 6.23-11.95Zm-2.6 3.94c-.15 0-.39.05-.6.28-.21.24-.79.77-.79 1.88 0 1.1.81 2.18.92 2.33.11.15 1.56 2.5 3.87 3.4 1.92.75 2.31.6 2.73.56.42-.04 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.06-.09-.21-.15-.43-.26-.23-.11-1.34-.66-1.55-.74-.21-.08-.36-.11-.51.11-.15.23-.58.74-.71.89-.13.15-.26.17-.49.06-.23-.11-.96-.35-1.82-1.13-.68-.6-1.13-1.35-1.26-1.58-.13-.23-.01-.35.1-.46.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.08-.15.04-.28-.02-.39-.06-.11-.51-1.22-.7-1.67-.18-.43-.37-.37-.51-.38l-.47-.01Z" />
      </svg>
    ),
  },
]

interface SocialLinksProps {
  variant?: 'contact' | 'footer'
}

export default function SocialLinks({ variant = 'contact' }: SocialLinksProps) {
  return (
    <div className={`social-links social-links-${variant}`}>
      {socialLinks.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          {icon}
        </a>
      ))}
    </div>
  )
}
