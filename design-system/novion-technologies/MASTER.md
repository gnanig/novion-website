# Novion Technologies Design System

> Logic: when building a specific page, first check `design-system/novion-technologies/pages/[page-name].md`.
> If that file exists, page-specific rules override this master file.
> If not, follow this file.

---

**Project:** Novion Technologies  
**Site type:** Corporate technology services website  
**Current implementation:** React + Vite + Tailwind CSS  
**Last aligned with code:** 2026-07-14

---

## Current Visual Direction

The current website uses a premium technology aesthetic:

- dark glassmorphism sections
- cyan/blue/mint highlights
- glowing grid and pointer-reactive light effects
- rounded translucent cards
- pill-shaped CTA buttons
- Manrope typography
- 3D hero model on desktop

The visual language should feel:

- trustworthy
- modern
- technical
- polished
- energetic, but still professional
- suitable for software, testing, consulting, products, and training programs

Avoid changing the site back to the older navy/gold consulting style. The current brand direction is blue/cyan glass-tech.

---

## Color Palette

These are the active Tailwind brand colors from `tailwind.config.js`.

| Role | Hex | Tailwind token |
|---|---:|---|
| Dark text / deep base | `#13243A` | `text-n-dark` |
| Navy | `#183B56` | `n-navy` |
| Primary blue | `#00A1F0` | `n-blue` |
| Body slate | `#52667A` | `text-n-slate` |
| Light background | `#F6FAFD` | `bg-n-light` |
| Soft blue panel | `#EAF7FE` | `bg-n-soft` |
| Mint accent | `#2DBF9F` | `n-mint` |
| Border | `#D7E8F2` | `n-border` |

Additional recurring implementation colors:

| Role | Hex / value |
|---|---:|
| Bright cyan glow | `#65D5FF` |
| Soft cyan text | `#9BE4FF` |
| Deep hero navy | `#071321`, `#0B1D32`, `#102641`, `#173451` |
| Navbar CTA blue | `#0069B5`, `#003F73`, hover `#0087D8`, `#004F8E` |
| Contact muted label | `#7895A8` |

Use cyan/blue/mint accents. Avoid gold as a primary CTA color unless a future rebrand asks for it.

---

## Typography

The live site uses **Manrope** for both display and body text.

Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

Tailwind font families:

```js
fontFamily: {
  display: ['Manrope', 'system-ui', 'sans-serif'],
  body: ['Manrope', 'system-ui', 'sans-serif'],
}
```

Heading style:

- Manrope ExtraBold
- tight line height, usually `1.04` to `1.18`
- slight negative letter spacing, usually around `-.01em` to `-.02em`
- white headings inside dark glass sections

Body style:

- Manrope 400 to 600
- readable line height, usually `1.62` to `1.7`
- muted slate or translucent white depending on section background

---

## Layout System

The site is a one-page scrolling corporate website.

Current section order:

1. Navbar
2. Hero
3. About
4. Statement strip
5. Features
6. Services
7. Marquee strip
8. Products
9. Programs
10. Contact
11. Footer

Primary content container:

```css
max-width: 80rem; /* Tailwind max-w-7xl */
margin-inline: auto;
padding-inline: 2rem;
```

Section behavior:

- Hero is full viewport height on desktop.
- About and Services are tuned to fit as near full-screen sections on desktop.
- Mobile sections should become natural-height with comfortable vertical padding.
- Avoid horizontal overflow on all screen sizes.

---

## Backgrounds And Atmosphere

### Body Background

The body uses a light radial-gradient atmosphere, not a flat white page.

```css
background:
  radial-gradient(circle at 10% 0%, rgba(0,161,240,.16), transparent 32%),
  radial-gradient(circle at 92% 18%, rgba(90,117,186,.12), transparent 34%),
  radial-gradient(circle at 80% 82%, rgba(45,191,159,.12), transparent 36%),
  linear-gradient(135deg, #F4FAFD 0%, #EAF3F7 46%, #F2F6FA 100%);
```

### Hero

The hero uses `.hero-atmosphere`:

- dark blue gradient
- cyan and mint radial glows
- grid overlay
- animated `HeroWave`
- desktop-only 3D model
- glass hero stage

Do not replace this with a plain marketing hero or split-card landing layout.

### Glass Sections

Most content sections use `.glass-section`:

- dark blue gradient background
- grid overlay
- pointer-reactive glow through `data-grid-active`
- bright cyan text accents
- white headings
- translucent cards

---

## Core Components

### Navbar

The navbar is fixed, centered, rounded, translucent, and blurred.

Key traits:

- max width around `1180px`
- width `calc(100vw - 2rem)`
- rounded `1rem`
- white translucent glass background
- blur around `34px`
- subtle blue glow and inset highlight
- desktop links with underline animation
- mobile menu inside a separate translucent rounded panel

The logo should use `/assets/logo.png` with a text fallback.

### Buttons

Buttons are pill-shaped glass CTAs.

Primary button:

- cyan to blue gradient
- white text
- `border-radius: 999px`
- translucent border
- shine animation on hover
- hover lift of about `-2px`
- icon slides right on hover when present

Secondary button:

- lighter cyan/blue glass gradient
- white text
- same pill shape and shine behavior

Outline button:

- translucent white glass
- cyan/blue hover fill

Do not use rectangular gold CTA buttons in the current site style.

### Cards

Cards use `.glass-card` or `.glass-panel`.

Shared traits:

- translucent glass gradient
- cyan border
- `backdrop-filter: blur(...)`
- rounded corners, usually `14px` to `22px`
- inset highlight
- dark shadow
- hover border brightening
- small upward hover movement
- pointer-reactive highlight through `--card-x` and `--card-y`

Avoid nested cards unless there is a clear information hierarchy.

### Forms

Contact inputs use glass styling:

- translucent white or dark glass depending on parent section
- rounded `12px`
- visible focus ring using `rgba(0,161,240,0.12)`
- placeholder color around `#7895A8`
- white text on dark glass sections

### Social Links

Social links use custom icon treatments with cyan glow and brand-color hover states.

Use React icons or existing project icon libraries. Do not use emoji icons.

---

## Motion And Interaction

Current motion patterns:

- hero text fade-up sequence through `.ha1` to `.ha5`
- scroll reveal via `.reveal` and `.revealed`
- pointer-reactive grid glow on `.hero-atmosphere` and `.glass-section`
- pointer-reactive card glow on `.glass-card` and `.statement-card`
- CTA shine animation on hover
- marquee strip pauses on hover
- 3D model is shown on desktop and hidden on mobile

Respect reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Keep interactions smooth, but do not introduce layout-shifting hover effects.

---

## Responsive Rules

Desktop:

- hero uses a two-column glass stage
- 3D model visible from `768px` and above
- full nav links visible from `md`

Mobile:

- hero becomes single-column
- 3D model is hidden
- mobile nav menu is shown behind the hamburger button
- CTA buttons stay on one row where possible and use smaller padding
- sections use natural height rather than forced full viewport height

Always check:

- 375px mobile
- 768px tablet
- 1024px laptop
- 1440px desktop

---

## Current Anti-Patterns

Do not use:

- emoji icons
- gold CTA system from the older design file
- Lexend / Source Sans 3 typography
- generic purple/pink AI gradients as a dominant brand style
- flat white sections that break the glass-tech direction
- oversized hero type inside compact cards
- hover effects that cause layout shifts
- invisible focus states
- low-contrast text on dark sections
- mobile content wider than the viewport

---

## Pre-Delivery Checklist

Before delivering UI code, verify:

- [ ] Manrope remains the active font family
- [ ] Tailwind `n-*` colors are used where possible
- [ ] Hero still has dark glass-tech atmosphere
- [ ] Main sections still use the glass-section language
- [ ] Buttons remain pill-shaped glass CTAs
- [ ] Cards use glass-card or matching translucent styling
- [ ] Icons are from a consistent icon library, not emoji
- [ ] Clickable elements have pointer cursor or native interactive behavior
- [ ] Hover and focus states are visible and smooth
- [ ] `prefers-reduced-motion` is respected
- [ ] No horizontal scroll on mobile
- [ ] Text does not overflow buttons/cards
- [ ] Site builds successfully with `npm run build`
