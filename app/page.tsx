import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] bg-black text-white overflow-hidden flex flex-col lg:block">
      {/* Top Mesh Gradient - accurate to Figma screenshot */}
      <div className="absolute top-0 left-0 right-0 h-[400px] w-full z-0 pointer-events-none opacity-80 mix-blend-screen overflow-hidden">
         <div className="absolute top-[-150px] left-[-10%] w-[50%] h-[300px] bg-[#9e1c59] blur-[120px] rounded-[100%]" />
         <div className="absolute top-[-200px] left-[20%] w-[60%] h-[400px] bg-[#4a0a77] blur-[140px] rounded-[100%]" />
         <div className="absolute top-[-150px] right-[-10%] w-[40%] h-[300px] bg-[#a35c3e]/80 blur-[120px] rounded-[100%]" />
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 lg:px-12 z-30 relative w-full flex flex-col-reverse lg:block h-full min-h-[calc(100vh-80px)] justify-center pt-8 pb-12 lg:py-0">
        
        {/* Left Content (Text) */}
        <section className="space-y-4 lg:space-y-6 w-full lg:max-w-none lg:w-max lg:absolute lg:top-1/2 lg:-translate-y-1/2 z-30 mt-8 lg:mt-0 lg:left-[5%] xl:left-[10%]">
          {/* Made UPLB Data Science Guild more prominent per user request */}
          <p className="text-lg md:text-xl text-off-white font-bold uppercase tracking-[0.2em]">
            UPLB Data Science Guild
          </p>
          
          {/* Gradient text matching Figma, w-fit ensures gradient exactly wraps the text without truncating */}
          <h1 className="w-fit text-[clamp(2rem,6.5vw,4.5rem)] font-black leading-[1.1] drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-[#7b2cbf] via-[#c77dff] to-[#ffffff]">
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
        {/* Adjusted proportions: Grid is massive, centered/shifted right on desktop */}
        <section className="relative lg:absolute w-[150vw] sm:w-[120vw] max-w-[800px] left-1/2 -translate-x-1/2 lg:w-[1300px] xl:w-[1500px] lg:max-w-none lg:left-[20%] xl:left-[25%] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 aspect-[1468/845] flex items-center justify-center z-10 pointer-events-none">
          
          {/* Strong Center Glow BEHIND Grid so grid lines stay crisp */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[50%] bg-[#9d4edd] rounded-full blur-[60px] lg:blur-[80px] opacity-70 z-0" />

          {/* Highlighted Floor Tiles matching isometric grid perspective */}
          {/* Positioned slightly below center (58.5%) to align with the bottom base of the cube */}
          <div className="absolute top-[58.5%] left-[49.5%] -translate-x-1/2 -translate-y-1/2 w-[44%] aspect-[2/1] z-0">
             {/* Base glowing tile footprint */}
             <div className="w-full h-full bg-[#c77dff] opacity-40 blur-[4px]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
             {/* Core intense glow directly underneath the cube */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] bg-[#e0aaff] opacity-60 blur-[12px]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
          </div>

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

          {/* Stacked Logo Elements - perfectly scaled and aligned to the grid intersections */}
          {/* Width: 240/1468 = 16.34% | Height: 264/845 = 31.24% */}
          {/* Tweak top/left percentages to snap the cube perfectly onto the grid lines */}
          <div className="absolute z-20 w-[16.34%] h-[31.24%] top-[51%] left-[49.5%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
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
