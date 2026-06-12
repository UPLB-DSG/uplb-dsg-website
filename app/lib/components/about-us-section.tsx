export default function AboutUsSection() {
  return (
    <section className="w-full bg-[#050505] py-24 z-40 border-t border-white/5 relative">
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
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-[#111]">
                MISSION
              </h2>
              <div className="w-12 h-1 bg-accent-main rounded-full" />
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-[#111]">
                VISION
              </h2>
              <div className="w-12 h-1 bg-accent-secondary rounded-full" />
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
