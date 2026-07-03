import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import type { IconType } from 'react-icons'

const contactSocials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/novion-tech/',
    Icon: FaLinkedinIn,
    className: 'contact-social-linkedin',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/+918984084040',
    Icon: FaWhatsapp,
    className: 'contact-social-whatsapp',
  },
] satisfies Array<{
  label: string
  href: string
  Icon: IconType
  className: string
}>

export default function ContactSocialLinks() {
  return (
    <div className="contact-socials" aria-label="Novion social links">
      {contactSocials.map(({ href, Icon, label, className }) => (
        <div key={label} className={`contact-social-item ${className}`}>
          <a
            href={href}
            aria-label={label}
            title={label}
            target="_blank"
            rel="noreferrer"
            className="contact-social-icon"
          >
            <span className="contact-social-layer" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span className="contact-social-symbol">
                <Icon />
              </span>
            </span>
            <span className="contact-social-label">{label}</span>
          </a>
        </div>
      ))}
    </div>
  )
}
