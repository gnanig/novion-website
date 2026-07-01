import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const iconColor = '#00A1F0'
const fieldClass =
  'w-full px-4 py-[13px] bg-white border-[1.5px] border-n-border rounded-xl text-n-dark font-body text-[0.9375rem] outline-none transition-all duration-200 focus:border-n-blue focus:shadow-[0_0_0_3px_rgba(0,161,240,0.12)] placeholder:text-[#8DA4B6]'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="glass-section py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <span className="inline-block text-[0.72rem] font-bold tracking-[.16em] uppercase text-n-blue mb-[0.65rem]">
              Get In Touch
            </span>
            <h2
              className="font-display font-extrabold text-n-dark leading-[1.1] m-0 mb-5"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', letterSpacing: '-.02em' }}
            >
              Start Your<br />Next Project.
            </h2>
            <p className="text-[1.0625rem] text-n-slate leading-[1.7] m-0 mb-10">
              Have a project in mind? Fill in the form and we will be in touch within 24 hours.
            </p>

            <div className="flex flex-col gap-4">
              <div className="glass-card group flex items-center gap-4 px-[22px] py-[18px] rounded-[14px] transition-all duration-300 hover:border-white/50 hover:-translate-y-0.5">
                <div aria-hidden="true" className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-shrink-0 bg-n-soft">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-[0.72rem] font-bold tracking-[.08em] uppercase text-[#7895A8] m-0 mb-0.5">Location</p>
                  <p className="text-[0.9rem] font-semibold text-n-dark m-0">11th Floor, O-HUB, SEZ, Bhubaneswar, India, 751024</p>
                </div>
              </div>

              <div className="glass-card group flex items-center gap-4 px-[22px] py-[18px] rounded-[14px] transition-all duration-300 hover:border-white/50 hover:-translate-y-0.5">
                <div aria-hidden="true" className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-shrink-0 bg-n-soft">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[0.72rem] font-bold tracking-[.08em] uppercase text-[#7895A8] m-0 mb-0.5">Email</p>
                  <a href="mailto:info@noviontec.com" className="text-[0.9rem] font-semibold text-n-blue no-underline">
                    info@noviontec.com
                  </a>
                </div>
              </div>

              <div className="glass-card flex items-center gap-4 px-[22px] py-[18px] rounded-[14px]">
                <div aria-hidden="true" className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center flex-shrink-0 bg-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="text-[0.72rem] font-bold tracking-[.08em] uppercase text-[#7895A8] m-0 mb-0.5">
                    Response Time
                  </p>
                  <p className="text-[0.9rem] font-semibold text-n-dark m-0">
                    Within <span className="text-n-blue">24 hours</span> on business days
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-d2 glass-card rounded-[18px] p-7">
            {status === 'success' ? (
              <div className="text-center py-14">
                <div className="w-14 h-14 rounded-full bg-n-soft flex items-center justify-center mx-auto mb-[18px]">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-n-dark text-[1.4rem] tracking-[-0.01em] m-0 mb-2">Message Sent!</h3>
                <p className="text-n-slate text-[0.9rem] m-0">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]" noValidate>
                <div>
                  <label htmlFor="name" className="block text-[0.82rem] font-bold text-n-dark mb-1.5">Full Name</label>
                  <input
                    type="text" id="name" name="name" required
                    value={form.name} onChange={set('name')}
                    className={fieldClass} placeholder="Your full name" autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[0.82rem] font-bold text-n-dark mb-1.5">Email Address</label>
                  <input
                    type="email" id="email" name="email" required
                    value={form.email} onChange={set('email')}
                    className={fieldClass} placeholder="your@email.com" autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-[0.82rem] font-bold text-n-dark mb-1.5">Service Interested In</label>
                  <select
                    id="service" name="service"
                    value={form.service} onChange={set('service')}
                    className={fieldClass}
                  >
                    <option value="">Select a service...</option>
                    <option value="software">Software Solutions</option>
                    <option value="testing">Testing Services</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[0.82rem] font-bold text-n-dark mb-1.5">Message</label>
                  <textarea
                    id="message" name="message" required rows={4}
                    value={form.message} onChange={set('message')}
                    className={`${fieldClass} resize-none`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm m-0">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center justify-center gap-2 w-full py-[14px] px-7 bg-n-dark text-white rounded-xl font-body font-semibold text-[0.9375rem] cursor-pointer transition-all duration-200 hover:bg-n-navy hover:-translate-y-px hover:shadow-[0_12px_28px_rgba(19,36,58,.18)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : (
                    <>
                      Send Message
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                        <path d="m22 2-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
