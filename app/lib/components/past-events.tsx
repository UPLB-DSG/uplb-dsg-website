"use client";

import { useState } from "react";
import type { Event } from "@/lib/data";

export default function PastEvents({ events }: { events: Event[] }) {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const activeEvent = events[activeEventIndex];

  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md">
      {/* Event list */}
      <div className="w-full md:w-1/3 md:h-full overflow-y-auto border-b md:border-b-0 md:border-r border-white/10 bg-black/20 flex flex-col">
        {events.map((event, idx) => (
          <button
            key={event.id}
            onClick={() => setActiveEventIndex(idx)}
            aria-current={activeEventIndex === idx ? "true" : undefined}
            className={`w-full text-left px-8 py-6 md:py-8 transition-all duration-300 border-b border-white/5 relative flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-main
              ${activeEventIndex === idx ? "bg-white/10" : "hover:bg-white/5"}
            `}
          >
            {activeEventIndex === idx && (
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent-main" />
            )}
            <span
              className={`block text-lg md:text-xl font-bold ${activeEventIndex === idx ? "text-white" : "text-white/50"}`}
            >
              {event.title}
            </span>
          </button>
        ))}
        <div className="flex-grow bg-black/10" />
      </div>

      {/* Detail panel */}
      <div className="w-full md:w-2/3 min-h-[320px] md:h-full relative group">
        <div
          className={`absolute inset-0 transition-colors duration-1000 ${
            activeEventIndex % 3 === 0
              ? "bg-gradient-to-br from-accent-main/20 via-dark-gray to-black"
              : activeEventIndex % 3 === 1
                ? "bg-gradient-to-bl from-accent-secondary/20 via-dark-gray to-black"
                : "bg-gradient-to-tr from-faded-accent/30 via-dark-gray to-black"
          }`}
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>

        <div className="relative md:absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-6 md:p-10">
          <div
            key={activeEvent.id}
            className="transition-opacity duration-500 ease-in-out opacity-100"
          >
            <p className="text-accent-main font-mono text-sm md:text-base mb-3 uppercase tracking-wider">
              {activeEvent.date}
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {activeEvent.title}
            </h3>
            <p className="text-white/70 max-w-2xl leading-relaxed text-lg">
              {activeEvent.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
