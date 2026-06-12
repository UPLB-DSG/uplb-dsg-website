import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden flex flex-col lg:block">
      <div className="absolute top-0 left-0 right-0 h-[400px] w-full z-0 pointer-events-none opacity-80 mix-blend-screen overflow-hidden">
        <div className="absolute top-[-150px] left-[-10%] w-[50%] h-[300px] bg-[#9e1c59] blur-[120px] rounded-[100%]" />
        <div className="absolute top-[-200px] left-[20%] w-[60%] h-[400px] bg-[#4a0a77] blur-[140px] rounded-[100%]" />
        <div className="absolute top-[-150px] right-[-10%] w-[40%] h-[300px] bg-[#a35c3e]/80 blur-[120px] rounded-[100%]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 z-30 relative w-full flex flex-col lg:flex-row items-center justify-between h-full min-h-[calc(100vh-80px)] pt-8 pb-12 lg:py-0">
        <section className="space-y-4 lg:space-y-6 w-full lg:w-[50%] xl:w-[45%] z-30 mt-8 lg:mt-0">
          <p className="text-lg md:text-xl text-off-white font-bold uppercase tracking-[0.2em]">
            UPLB Data Science Guild
          </p>

          <h1 className="w-fit text-[clamp(2rem,6.5vw,4.5rem)] font-black leading-[1.1] drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-[#7b2cbf] via-[#c77dff] to-[#ffffff]">
            <span className="block">INTEGRITY.</span>
            <span className="block">INTERDEPENDENCE.</span>
            <span className="block">INNOVATION.</span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-4 lg:pt-6">
            <span className="text-sm text-gray-300">Want to hear updates?</span>
            <button className="bg-accent-main hover:bg-accent-secondary text-off-white text-xs font-bold py-2.5 px-6 transition-colors uppercase tracking-widest w-max rounded-sm shadow-[0_0_20px_rgba(114,48,255,0.4)]">
              SUBSCRIBE
            </button>
          </div>
        </section>

        <section
          className="relative w-full lg:w-[50%] aspect-[1/1] lg:aspect-[1468/845] flex items-center justify-center z-10 pointer-events-none mt-8 lg:mt-0"
          style={
            { "--tile-size": "clamp(64px, 8vw, 160px)" } as React.CSSProperties
          }
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[60%] bg-accent-main rounded-full blur-[60px] lg:blur-[80px] opacity-60 z-0" />

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] flex items-center justify-center pointer-events-none"
            style={{
              WebkitMaskImage:
                "radial-gradient(50% 50% at center, black 20%, transparent 70%)",
              maskImage:
                "radial-gradient(50% 50% at center, black 20%, transparent 70%)",
            }}
          >
            <div className="absolute w-[200%] md:w-[150%] aspect-square [transform:rotateX(54.736deg)_rotateZ(45deg)] flex items-center justify-center">
              <div className="absolute inset-0">
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none"
                  style={{
                    width: "calc(var(--tile-size) * 6)",
                    height: "calc(var(--tile-size) * 6)",
                    background:
                      "radial-gradient(circle, var(--accent-main) 0%, transparent 50%)",
                  }}
                />

                {[
                  { x: 0, y: 0, opacity: 0.6 },
                  { x: 1, y: 0, opacity: 0.4 },
                  { x: 0, y: 1, opacity: 0.4 },
                  { x: -1, y: 0, opacity: 0.2 },
                  { x: 0, y: -1, opacity: 0.2 },
                  { x: 2, y: 0, opacity: 0.15 },
                  { x: 0, y: 2, opacity: 0.15 },
                  { x: -2, y: 0, opacity: 0.05 },
                  { x: 0, y: -2, opacity: 0.05 },
                ].map((tile, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 bg-accent-main pointer-events-none"
                    style={{
                      width: "var(--tile-size)",
                      height: "var(--tile-size)",
                      opacity: tile.opacity,
                      transform: `translate(calc(-50% + ${tile.x} * var(--tile-size)), calc(-50% + ${tile.y} * var(--tile-size)))`,
                    }}
                  />
                ))}
              </div>

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `
                         linear-gradient(to right, rgba(167, 139, 250, 0.25) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(167, 139, 250, 0.25) 1px, transparent 1px)
                       `,
                  backgroundSize: "var(--tile-size) var(--tile-size)",
                  backgroundPosition: "center center",
                }}
              />
            </div>
          </div>

          <div
            className="absolute z-20 flex items-center justify-center"
            style={{
              width: "calc(var(--tile-size) * 1.4142)",
              aspectRatio: "240 / 264",
              transform: "translateY(-25%)",
            }}
          >
            <Image
              src="/polygon-15.png"
              alt="DSG Logo Base"
              fill
              className="object-contain absolute z-10"
            />
            <Image
              src="/group-49.png"
              alt="DSG Logo Middle"
              fill
              className="object-contain absolute z-20"
            />
            <Image
              src="/group-47.png"
              alt="DSG Logo Top"
              fill
              className="object-contain absolute z-30 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
