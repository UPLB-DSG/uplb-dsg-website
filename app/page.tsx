import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] bg-[#0d0914] text-off-white overflow-hidden flex flex-col lg:block">
      {/* Vibrant purple background blur to replicate the glowing backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#8b5cf6]/10 blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#a855f7]/20 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[30%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-[#c084fc]/15 blur-[120px] mix-blend-screen" />
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 z-30 relative w-full flex flex-col-reverse lg:block h-full min-h-[calc(100vh-80px)] justify-center pt-8 pb-12 lg:py-0">
        
        {/* Left Content (Text) */}
        <section className="space-y-6 max-w-xl w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 z-30 mt-8 lg:mt-0">
          <p className="text-sm md:text-base text-gray-400 uppercase tracking-widest font-medium">
            UPLB Data Science Guild
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#a78bfa] drop-shadow-lg">
            <span className="block mb-1">INTEGRITY.</span>
            <span className="block mb-1">INTERDEPENDENCE.</span>
            <span className="block">INNOVATION.</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-6 lg:pt-8">
            <span className="text-sm text-gray-300">Want to hear updates?</span>
            <button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-xs font-bold py-3 px-8 transition-colors uppercase tracking-widest w-max shadow-lg shadow-purple-900/50 rounded-sm">
              SUBSCRIBE
            </button>
          </div>
        </section>

        {/* Isometric Graphic (Responsive) */}
        {/* Mobile: relative, centered, scaled to 150vw so it's large but contained */}
        {/* Desktop: absolute, positioned on right, massive fixed pixel dimensions */}
        <section className="relative lg:absolute w-[150vw] sm:w-[120vw] max-w-[800px] left-1/2 -translate-x-1/2 lg:w-[1300px] xl:w-[1500px] lg:max-w-none lg:left-[40%] xl:left-[45%] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 aspect-[1468/845] flex items-center justify-center z-10 pointer-events-none">
          
          {/* Strong Center Glow BEHIND Grid so grid lines stay crisp */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[60%] bg-[#a855f7] rounded-full blur-[60px] lg:blur-[100px] opacity-40 z-0" />

          {/* Isometric Grid Background */}
          <div className="absolute inset-0 z-10">
            <Image 
              src="/vector-grid.png" 
              alt="Grid Background" 
              fill
              className="object-contain opacity-100"
              priority
            />
          </div>

          {/* Stacked Logo Elements - perfectly scaled to the grid's original Figma export dimensions */}
          {/* Width: 240/1468 = 16.34% | Height: 264/845 = 31.24% */}
          <div className="absolute z-20 w-[16.34%] h-[31.24%] flex items-center justify-center">
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
              className="object-contain absolute z-30 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
