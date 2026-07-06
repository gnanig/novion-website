const cards = [
  {
    label: 'Our Mission',
    text: 'To empower businesses through unwavering trust, consistent reliability, and uncompromising quality.',
  },
  {
    label: 'Who We Serve',
    text: 'Businesses of every scale and individuals with ambition. The same quality standard applies to every engagement.',
  },
  {
    label: 'Our Commitment',
    text: 'Every line of code, recommendation, and deliverable is held to a standard that reflects your trust in us.',
  },
]

export default function About() {
  return (
    <section id="about" className="glass-section py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-[2]">
        <div className="max-w-[600px] mx-auto text-center mb-16 reveal">
          <span className="inline-block text-[0.72rem] font-bold tracking-[.16em] uppercase text-n-blue mb-[0.65rem]">
            About Novion
          </span>
          <h2
            className="font-display font-extrabold text-n-dark leading-[1.1] m-0 mb-5"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', letterSpacing: '-.02em' }}
          >
            Rooted in Bhubaneswar.<br />Built for Impact.
          </h2>
          <p className="text-[1.0625rem] text-n-slate leading-[1.7] m-0">
            Founded on the belief that great technology is built on trust, Novion Technologies serves businesses and individuals alike from the heart of Odisha's growing IT landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal">
          {cards.map(({ label, text }) => (
            <div
              key={label}
              className="glass-card rounded-[18px] p-9 transition-all duration-300 hover:-translate-y-1 hover:border-white/50"
            >
              <p className="text-[0.7rem] font-bold tracking-[.15em] uppercase text-n-blue m-0 mb-[14px]">{label}</p>
              <p className="text-[1.0625rem] text-n-dark font-semibold leading-[1.65] m-0">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-[52px] reveal">
          <a href="#contact" className="btn-primary">Work With Us</a>
        </div>
      </div>
    </section>
  )
}
