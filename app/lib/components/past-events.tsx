"use client";

import Image from "next/image";
import { useState } from "react";
import type { Event } from "@/lib/data";

export default function PastEvents({ events }: { events: Event[] }) {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeEvent = events[activeEventIndex];
  const activeImage = activeEvent.images[activeImageIndex];

  const selectEvent = (index: number) => {
    setActiveEventIndex(index);
    setActiveImageIndex(0);
  };

  return (
    <div className="grid w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md md:min-h-[620px] md:grid-cols-[minmax(220px,1fr)_2fr]">
      <div className="event-tabs-scrollbar relative flex w-full snap-x overflow-x-auto border-b border-white/10 bg-black/20 md:flex-col md:overflow-y-auto md:border-r md:border-b-0">
        {events.map((event, idx) => (
          <button
            key={event.id}
            onClick={() => selectEvent(idx)}
            aria-current={activeEventIndex === idx ? "true" : undefined}
            className={`relative min-h-11 w-[78vw] max-w-72 shrink-0 snap-start border-r border-white/5 px-5 py-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-main md:w-full md:max-w-none md:border-r-0 md:border-b md:px-8 md:py-8
              ${activeEventIndex === idx ? "bg-white/10" : "hover:bg-white/5"}
            `}
          >
            {activeEventIndex === idx && (
              <span className="absolute inset-x-0 bottom-0 h-1 bg-accent-main md:inset-y-0 md:right-auto md:h-auto md:w-1.5" />
            )}
            <span
              className={`block text-base font-bold md:text-xl ${activeEventIndex === idx ? "text-white" : "text-white/50"}`}
            >
              {event.title}
            </span>
          </button>
        ))}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 flex items-center bg-gradient-to-l from-black via-black/90 to-transparent pl-8 pr-3 text-[10px] font-bold uppercase tracking-widest text-white/70 md:hidden"
        >
          Swipe →
        </span>
      </div>

      <div className="flex min-w-0 flex-col">
        <div className="relative aspect-[4/3] min-h-64 overflow-hidden bg-dark-gray md:flex-1 md:aspect-auto">
          <picture key={activeImage.src}>
            <source
              media="(max-width: 640px)"
              srcSet={activeImage.src.replace(".webp", "-640.webp")}
            />
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover"
            />
          </picture>
          {activeEvent.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex(
                    (activeImageIndex - 1 + activeEvent.images.length) %
                      activeEvent.images.length,
                  )
                }
                aria-label="Previous event photo"
                className="absolute left-3 top-1/2 grid min-h-11 min-w-11 -translate-y-1/2 place-items-center rounded-full bg-black/70 text-2xl text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex(
                    (activeImageIndex + 1) % activeEvent.images.length,
                  )
                }
                aria-label="Next event photo"
                className="absolute right-3 top-1/2 grid min-h-11 min-w-11 -translate-y-1/2 place-items-center rounded-full bg-black/70 text-2xl text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main"
              >
                ›
              </button>
              <div
                className="absolute inset-x-0 bottom-3 flex justify-center gap-2"
                aria-label={`Photo ${activeImageIndex + 1} of ${activeEvent.images.length}`}
              >
                {activeEvent.images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    aria-label={`Show photo ${index + 1}`}
                    aria-current={activeImageIndex === index ? "true" : undefined}
                    className={`min-h-11 min-w-11 rounded-full before:block before:h-2 before:w-2 before:rounded-full before:transition-colors ${
                      activeImageIndex === index
                        ? "before:bg-accent-main"
                        : "before:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="border-t border-white/10 bg-black/60 p-6 md:p-8">
          <p className="mb-2 font-mono text-sm uppercase tracking-wider text-accent-main">
            {activeEvent.date}
          </p>
          <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
            {activeEvent.title}
          </h3>
          <p className="max-w-2xl leading-relaxed text-white/70">
            {activeEvent.description}
          </p>
          {activeEvent.images.length > 1 && (
            <p className="mt-4 text-sm text-white/50" aria-live="polite">
              Photo {activeImageIndex + 1} of {activeEvent.images.length}
            </p>
          )}
          </div>
      </div>
    </div>
  );
}
