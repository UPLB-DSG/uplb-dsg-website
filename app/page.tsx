import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] bg-bg-brand text-off-white overflow-hidden flex items-center">
      {/* Subtle radial gradient to match the design's dark glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent -z-10" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 relative">
        
        {/* Left Content */}
        <section className="space-y-8 z-20">
          <p className="text-base text-off-white/80">
            UPLB Data Science Guild
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#a78bfa]">
            <span className="block mb-2">INTEGRITY.</span>
            <span className="block mb-2">INTERDEPENDENCE.</span>
            <span className="block">INNOVATION.</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
            <span className="text-sm text-off-white/80">Want to hear updates?</span>
            <button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-semibold py-2 px-8 transition-colors uppercase tracking-widest w-max">
              SUBSCRIBE
            </button>
          </div>
        </section>

        {/* Right Content - Isometric Logo Stack */}
        <section className="relative w-full aspect-square max-w-[700px] mx-auto flex items-center justify-center">
          {/* Grid Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image 
              src="/vector-grid.png" 
              alt="Grid Background" 
              fill
              className="object-contain opacity-60"
              priority
            />
          </div>

          {/* Stacked Logo Elements */}
          <div className="relative w-[50%] h-[50%] flex items-center justify-center">
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
              className="object-contain absolute z-30"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
