import { COPY } from "@/lib/data";

export default function AboutUsSection() {
  return (
    <section
      id="mission"
      className="w-full bg-surface py-24 z-40 border-t border-white/5 relative scroll-mt-24"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="bg-white text-black p-12 md:p-20 rounded-xl shadow-2xl flex flex-col gap-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-black/5 font-black text-8xl md:text-9xl tracking-tighter pointer-events-none select-none">
            DSG
          </div>

          <div className="w-full aspect-[21/9] bg-black/5 rounded-xl border border-black/10 flex items-center justify-center relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent mix-blend-multiply" />
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-black/10 flex items-center justify-center border border-black/5">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-black/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6">
              <h2 className="font-display text-2xl md:text-3xl font-black uppercase tracking-widest text-dark-gray">
                MISSION
              </h2>
              <div className="w-12 h-1 bg-accent-main rounded-full" />
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {COPY.mission}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-display text-2xl md:text-3xl font-black uppercase tracking-widest text-dark-gray">
                VISION
              </h2>
              <div className="w-12 h-1 bg-accent-secondary rounded-full" />
              <ul className="text-gray-600 text-base md:text-lg leading-relaxed list-disc space-y-2 pl-5">
                {COPY.vision.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-display text-2xl md:text-3xl font-black uppercase tracking-widest text-dark-gray">
                CORE VALUES
              </h2>
              <div className="w-12 h-1 bg-accent-main rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {COPY.coreValues.map((value) => (
                <div key={value.name} className="space-y-3">
                  <h3 className="font-display text-lg font-black uppercase tracking-wider text-dark-gray">
                    {value.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
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
