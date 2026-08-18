import Image from "next/image";
import { COPY, STATS } from "@/lib/data";

export default function WhoAreWeSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-surface py-20 lg:py-32 z-40 border-t border-white/5 scroll-mt-24"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(123,44,191,0.05)]">
            <Image
              src="/dsg-members.webp"
              alt="UPLB Data Science Guild members gathered at a guild event"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 px-8 py-3 rounded-lg inline-block shadow-inner">
              <h2 className="font-display text-xl md:text-2xl font-black uppercase tracking-widest text-accent-main">
                WHO ARE WE?
              </h2>
            </div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              {COPY.whoAreWe}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-faded-accent mt-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="space-y-1 mt-6">
                  <p className="text-3xl md:text-4xl font-black text-off-white">
                    {stat.value}
                    <span className="text-accent-main">{stat.suffix}</span>
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-bold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
