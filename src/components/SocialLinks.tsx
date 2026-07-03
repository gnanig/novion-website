import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import type { IconType } from 'react-icons'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/novion-tech/',
    Icon: FaLinkedinIn,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/+918984084040',
    Icon: FaWhatsapp,
  },
] satisfies Array<{ label: string; href: string; Icon: IconType }>

interface SocialLinksProps {
  variant?: 'contact' | 'footer'
}

export default function SocialLinks({ variant = 'contact' }: SocialLinksProps) {
  return (
    <div className={`social-links social-links-${variant}`}>
      {socialLinks.map(({ href, Icon, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <Icon aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}
