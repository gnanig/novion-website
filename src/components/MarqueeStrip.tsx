const items = [
  'Trusted Quality',
  'Precision Engineering',
  'End-to-End Testing',
  'Strategic Consulting',
  'Reliable Delivery',
  'Bhubaneswar, Odisha',
]

function TrackItems() {
  return (
    <span className="flex items-center" aria-hidden="true">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-[52px] text-white/58 text-[0.78rem] font-bold tracking-[.14em] uppercase whitespace-nowrap">
            {item}
          </span>
          <span className="text-n-blue text-[0.55rem]">/</span>
        </span>
      ))}
    </span>
  )
}

export default function MarqueeStrip() {
  return (
    <div
      className="bg-[#071321] py-8 overflow-hidden border-y border-white/10"
      aria-label="Our values"
    >
      <div className="marquee-track">
        <TrackItems />
        <TrackItems />
      </div>
    </div>
  )
}
