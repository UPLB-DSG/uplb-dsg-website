// Full-bleed photo slideshow behind the hero: each photo fades in, holds, and
// dissolves into the next, with a slow drift. Pure CSS: every slide runs the
// same keyframes offset by its index. Reduced motion shows the first photo only.
const SLIDES: string[] = [
  "edgerunners/02",
  "data-horizons-2024/06",
  "dataverse-blockchain/06",
  "no-code-beta/05",
  "data-in-borderland/02",
];
const HOLD = 7; // seconds per photo

export default function HeroSlideshow() {
  const total = SLIDES.length * HOLD;
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {SLIDES.map((src, i) => (
        <picture
          key={src}
          className="hero-slide absolute inset-0"
          style={{ animationDuration: `${total}s`, animationDelay: `${i * HOLD}s` } as React.CSSProperties}
        >
          <source media="(max-width: 640px)" srcSet={`/events/${src}-640.webp`} />
          <img
            src={`/events/${src}.webp`}
            alt=""
            className="h-full w-full object-cover object-[55%_35%]"
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </picture>
      ))}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.65) 40%, rgba(10,10,10,0.4) 100%), linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0) 40%, #0a0a0a 100%), rgba(74,10,119,0.3)",
        }}
      />
    </div>
  );
}
