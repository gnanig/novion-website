const items = [
  'Trusted Quality',
  'Precision Engineering',
  'End-to-End Testing',
  'Strategic Consulting',
  'Reliable Delivery',
]

function TrackItems() {
  return (
    <span className="flex items-center" aria-hidden="true">
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center">
          <span className="px-10 sm:px-[52px] text-[0.72rem] font-extrabold tracking-[.16em] uppercase text-white whitespace-nowrap">
            {item}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-n-blue shadow-[0_0_18px_rgba(0,161,240,.8)]" />
        </span>
      ))}
    </span>
  )
}

export default function MarqueeStrip() {
  return (
    <section className="relative overflow-hidden border-y border-[rgba(100,180,230,.26)] bg-[linear-gradient(135deg,#03101D_0%,#061A2D_48%,#08233C_100%)] py-5 shadow-[inset_0_1px_0_rgba(255,255,255,.07)]" aria-label="Novion values">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(3,16,29,.96),transparent_18%,transparent_82%,rgba(3,16,29,.96))]" />
      <div className="absolute inset-0 pointer-events-none opacity-80 bg-[radial-gradient(circle_at_18%_50%,rgba(0,161,240,.22),transparent_28%),radial-gradient(circle_at_86%_50%,rgba(101,213,255,.14),transparent_30%)]" />
      <div className="marquee-track relative z-[1]">
        <TrackItems />
        <TrackItems />
      </div>
    </section>
  )
}
