import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] bg-black text-white overflow-hidden flex flex-col lg:block">
      {/* Top Mesh Gradient - exactly as in Figma */}
      <div className="absolute top-0 left-0 right-0 h-[400px] w-full z-0 pointer-events-none opacity-80 mix-blend-screen overflow-hidden">
         {/* Using absolute positioned blurred ovals to simulate the mesh gradient at the top */}
         <div className="absolute top-[-150px] left-[-10%] w-[50%] h-[300px] bg-[#9d4edd] blur-[100px] rounded-[100%]" />
         <div className="absolute top-[-200px] left-[30%] w-[60%] h-[400px] bg-[#7b2cbf] blur-[120px] rounded-[100%]" />
         <div className="absolute top-[-150px] right-[-10%] w-[40%] h-[300px] bg-[#c77dff]/40 blur-[100px] rounded-[100%]" />
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 lg:px-12 z-30 relative w-full flex flex-col-reverse lg:block h-full min-h-[calc(100vh-80px)] justify-center pt-8 pb-12 lg:py-0">
        
        {/* Left Content (Text) */}
        <section className="space-y-4 lg:space-y-6 max-w-2xl w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 z-30 mt-8 lg:mt-0 lg:left-[5%] xl:left-[10%]">
          {/* Made UPLB Data Science Guild more prominent per user request */}
          <p className="text-lg md:text-xl text-off-white font-bold uppercase tracking-[0.2em]">
            UPLB Data Science Guild
          </p>
          
          {/* Gradient text matching Figma */}
          <h1 className="text-[2.75rem] md:text-6xl lg:text-[4.5rem] font-black leading-[1.1] drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-[#7b2cbf] via-[#c77dff] to-[#ffffff]">
            <span className="block">INTEGRITY.</span>
            <span className="block">INTERDEPENDENCE.</span>
            <span className="block">INNOVATION.</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-4 lg:pt-6">
            <span className="text-sm text-gray-300">Want to hear updates?</span>
            <button className="bg-[#7b2cbf] hover:bg-[#5a189a] text-white text-xs font-bold py-2.5 px-6 transition-colors uppercase tracking-widest w-max rounded-sm">
              SUBSCRIBE
            </button>
          </div>
        </section>

        {/* Isometric Graphic (Responsive) */}
        {/* Adjusted proportions: Grid is ~1000-1100px wide, centered/shifted right on desktop */}
        <section className="relative lg:absolute w-[150vw] sm:w-[120vw] max-w-[800px] left-1/2 -translate-x-1/2 lg:w-[1000px] xl:w-[1100px] lg:max-w-none lg:left-[35%] xl:left-[40%] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 aspect-[1468/845] flex items-center justify-center z-10 pointer-events-none">
          
          {/* Strong Center Glow BEHIND Grid so grid lines stay crisp */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[50%] bg-[#9d4edd] rounded-full blur-[60px] lg:blur-[80px] opacity-70 z-0" />

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
              className="object-contain absolute z-30 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
