const products = [
  {
    title: 'Custom Platforms',
    text: 'Purpose-built web and business systems shaped around your operations, users, and growth plans.',
  },
  {
    title: 'Automation Tooling',
    text: 'Focused utilities that remove repetitive effort, improve consistency, and make daily workflows easier to scale.',
  },
  {
    title: 'AI-Ready Solutions',
    text: 'Data-aware product foundations designed for modern analytics, intelligent workflows, and future AI capability.',
  },
]

export default function Products() {
  return (
    <section id="products" className="nav-section glass-section py-24">
      <div className="section-frame max-w-7xl mx-auto px-8">
        <div className="section-intro text-center max-w-[620px] mx-auto mb-14 reveal">
          <span className="inline-block text-[0.72rem] font-bold tracking-[.16em] uppercase text-n-blue mb-[0.65rem]">
            What We Build
          </span>
          <h2
            className="font-display font-extrabold text-n-dark leading-[1.1] m-0 mb-4"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', letterSpacing: '-.02em' }}
          >
            Products
          </h2>
          <p className="text-[1.0625rem] text-n-slate leading-[1.7] m-0">
            Practical, reliable technology products that help teams work faster, operate clearly, and deliver with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal reveal-d1">
          {products.map(({ title, text }) => (
            <div
              key={title}
              className="glass-card rounded-[18px] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:shadow-[0_24px_70px_rgba(19,36,58,0.16)]"
            >
              <p className="text-[0.7rem] font-bold tracking-[.15em] uppercase text-n-blue m-0 mb-[14px]">Product</p>
              <h3 className="font-display font-bold text-n-dark text-[1.25rem] tracking-[-0.01em] m-0 mb-4">{title}</h3>
              <p className="text-[0.95rem] text-n-slate leading-[1.7] m-0">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
