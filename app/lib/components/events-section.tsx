'use client';

import { useState } from 'react';

const PAST_EVENTS = [
  { id: 1, title: "Event Title 1", date: "Date of Event 1", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", image: "gradient-1" },
  { id: 2, title: "Event Title 2", date: "Date of Event 2", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", image: "gradient-2" },
  { id: 3, title: "Event Title 3", date: "Date of Event 3", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", image: "gradient-3" },
  { id: 4, title: "Event Title 4", date: "Date of Event 4", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", image: "gradient-4" },
];

const UPCOMING_EVENT = {
  title: "Upcoming Event Title",
  date: "Date of Upcoming Event",
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  registrationLink: "#"
};

export default function EventsSection() {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const activeEvent = PAST_EVENTS[activeEventIndex];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-24 flex flex-col gap-32">
      
      {/* Upcoming Event Section */}
      <section className="flex flex-col gap-8 w-full">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          UPCOMING <span className="text-accent-main">EVENT</span>
        </h2>
        
        <div className="flex flex-col gap-6 w-full">
          <div className="w-full relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md group">
            {/* Placeholder Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-main/20 via-black to-accent-secondary/20" />
            
            {/* Image Placeholder Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-500">
               <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-8 md:p-12">
              <p className="text-accent-secondary font-mono text-sm mb-3 uppercase tracking-wider">{UPCOMING_EVENT.date}</p>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{UPCOMING_EVENT.title}</h3>
              <p className="text-white/70 max-w-3xl text-lg md:text-xl leading-relaxed">{UPCOMING_EVENT.description}</p>
            </div>
          </div>
          
          <button className="w-full md:w-auto self-center md:self-end px-16 py-5 bg-white text-black text-lg font-bold tracking-widest uppercase hover:bg-accent-secondary hover:text-white transition-all duration-300 rounded-sm">
            Register
          </button>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="flex flex-col gap-8 w-full">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          PAST <span className="text-accent-main">EVENTS</span>
        </h2>
        
        <div className="flex flex-col md:flex-row w-full h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md">
          
          {/* Left Sidebar - List */}
          <div className="w-full md:w-1/3 h-full overflow-y-auto border-r border-white/10 bg-black/20 flex flex-col">
            {PAST_EVENTS.map((event, idx) => (
              <button
                key={event.id}
                onClick={() => setActiveEventIndex(idx)}
                className={`w-full text-left px-8 py-8 transition-all duration-300 border-b border-white/5 relative flex-shrink-0
                  ${activeEventIndex === idx 
                    ? 'bg-white/10' 
                    : 'hover:bg-white/5'
                  }
                `}
              >
                {activeEventIndex === idx && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent-main" />
                )}
                <h4 className={`text-lg md:text-xl font-bold ${activeEventIndex === idx ? 'text-white' : 'text-white/50'}`}>
                  {event.title}
                </h4>
              </button>
            ))}
            {/* Filler for empty space */}
            <div className="flex-grow bg-black/10" />
          </div>

          {/* Right Side - Preview */}
          <div className="w-full md:w-2/3 h-full relative group">
            {/* Background Placeholder representing different events */}
            <div className={`absolute inset-0 transition-colors duration-1000 ${
              activeEventIndex % 3 === 0 ? 'bg-gradient-to-br from-accent-main/20 via-[#111] to-black' :
              activeEventIndex % 3 === 1 ? 'bg-gradient-to-bl from-accent-secondary/20 via-[#111] to-black' :
              'bg-gradient-to-tr from-faded-accent/30 via-[#111] to-black'
            }`} />

            {/* Image Placeholder Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-500">
               <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-10">
              <div 
                key={activeEvent.id} 
                className="transition-opacity duration-500 ease-in-out opacity-100"
              >
                <p className="text-accent-main font-mono text-sm md:text-base mb-3 uppercase tracking-wider">{activeEvent.date}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{activeEvent.title}</h3>
                <p className="text-white/70 max-w-2xl leading-relaxed text-lg">{activeEvent.description}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
