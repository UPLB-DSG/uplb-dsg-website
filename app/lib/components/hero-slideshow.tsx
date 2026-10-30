// Full-bleed photo slideshow behind the hero: each photo fades in, holds, and
// dissolves into the next, with a slow drift. Pure CSS: every slide runs the
// same keyframes offset by its index. The pause toggle is a checkbox the CSS
// reads with :has(), so it needs no script. Reduced motion shows the first photo only.
// Photos from the guild's Facebook page, cropped inside the poster frames (public/hero/):
// 1, 3, 4 Untangled orientation (Sept 2026), 2 the Synthesis batch.
const SLIDES: string[] = ["1", "2", "3", "4"];
const HOLD = 7; // seconds per photo

export default function HeroSlideshow() {
  const total = SLIDES.length * HOLD;
  return (
    <>
      <div className="hero-slides pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {SLIDES.map((src, i) => (
          <picture
            key={src}
            className="hero-slide absolute inset-0"
            style={{ animationDuration: `${total}s`, animationDelay: `${i * HOLD}s` } as React.CSSProperties}
          >
            <source media="(max-width: 640px)" srcSet={`/hero/${src}-640.webp`} />
            <img
              src={`/hero/${src}.webp`}
              alt=""
              className="h-full w-full object-cover object-[55%_35%]"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : undefined}
              decoding="async"
            />
          </picture>
        ))}
        {/* Neutral scrim: dark behind the text column, lighter over the faces. */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(10_10_10/0.9)_0%,rgb(10_10_10/0.6)_45%,rgb(10_10_10/0.35)_100%),linear-gradient(180deg,rgb(10_10_10/0.35)_0%,transparent_40%,var(--color-background)_100%)]" />
      </div>
      <label className="absolute bottom-4 right-4 z-40 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-sm bg-background/70 px-3 text-sm text-white/80 hover:text-white has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-off-white motion-reduce:hidden lg:bottom-6 lg:right-6">
        <input type="checkbox" className="hero-pause sr-only" />
        <span aria-hidden="true" className="hero-pause-icon w-3 text-center" />
        Pause motion
      </label>
    </>
  );
}
