const cards = [
  {
    label: 'Our Mission',
    text: 'To help ambitious teams turn product ideas, workflows, and business goals into dependable software systems.',
  },
  {
    label: 'Product Mindset',
    text: 'We shape architecture, workflows, and implementation around the way your product needs to work in the real world.',
  },
  {
    label: 'Our Commitment',
    text: 'Every build decision is made for clarity, maintainability, performance, and long-term business value.',
  },
]

export default function About() {
  return (
    <section id="about" className="about-section glass-section py-24 relative overflow-hidden">
      <div className="about-section-inner max-w-7xl mx-auto px-8 relative z-[2]">
        <div className="about-intro max-w-[600px] mx-auto text-center mb-16 reveal">
          <span className="inline-block text-[0.72rem] font-bold tracking-[.16em] uppercase text-n-blue mb-[0.65rem]">
            About Novion
          </span>
          <h2
            className="font-display font-extrabold text-n-dark leading-[1.1] m-0 mb-5"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', letterSpacing: '-.02em' }}
          >
            Rooted in Value.<br />Built for Impact.
          </h2>
          <p className="text-[1.0625rem] text-n-slate leading-[1.7] m-0">
            Novion Technologies partners with growing teams to design, build, and improve digital products that are practical, scalable, and ready for real users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal">
          {cards.map(({ label, text }) => (
            <div
              key={label}
              className="about-card glass-card rounded-[18px] p-9 transition-all duration-300 hover:-translate-y-1 hover:border-white/50"
            >
              <p className="text-[0.7rem] font-bold tracking-[.15em] uppercase text-n-blue m-0 mb-[14px]">{label}</p>
              <p className="text-[1.0625rem] text-n-dark font-semibold leading-[1.65] m-0">{text}</p>
            </div>
          ))}
        </div>

        <div className="about-cta text-center mt-[52px] reveal">
          <a href="#contact" className="btn-primary">Work With Us</a>
        </div>
      </div>
    </section>
  )
}
