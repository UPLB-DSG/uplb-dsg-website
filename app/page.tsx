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
        {/* We use a mathematical CSS grid for perfect precision instead of an image */}
        <section 
          className="relative lg:absolute w-full lg:w-[1000px] xl:w-[1400px] lg:left-[15%] xl:left-[20%] lg:top-1/2 lg:-translate-y-1/2 aspect-[1468/845] flex items-center justify-center z-10 pointer-events-none"
          style={{ '--tile-size': 'clamp(24px, 4vw, 64px)' } as React.CSSProperties}
        >
          
          {/* Strong Center Glow BEHIND Grid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[50%] bg-[#9d4edd] rounded-full blur-[60px] lg:blur-[80px] opacity-70 z-0" />

          {/* Mathematical Isometric Grid Container */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
             {/* The 3D Plane */}
             <div className="absolute w-[200%] aspect-square [transform:rotateX(60deg)_rotateZ(45deg)] flex items-center justify-center">
                
                {/* Grid Background */}
                <div className="absolute inset-0" 
                     style={{
                       backgroundImage: `
                         linear-gradient(to right, rgba(167, 139, 250, 0.25) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(167, 139, 250, 0.25) 1px, transparent 1px)
                       `,
                       backgroundSize: 'var(--tile-size) var(--tile-size)',
                       backgroundPosition: 'center center'
                     }} 
                />

                {/* Glowing Floor Tiles (3x3 grid area) */}
                {/* Perfectly locked to the grid lines! */}
                <div className="absolute bg-[#c77dff] opacity-40 blur-[4px]" 
                     style={{ width: 'calc(var(--tile-size) * 3)', height: 'calc(var(--tile-size) * 3)' }} 
                />
                <div className="absolute bg-[#e0aaff] opacity-60 blur-[12px]" 
                     style={{ width: 'calc(var(--tile-size) * 1.5)', height: 'calc(var(--tile-size) * 1.5)' }} 
                />
             </div>
          </div>

          {/* Stacked Logo Elements - perfectly scaled to the mathematical grid! */}
          {/* Width of a 3x3 tile diamond is 3 * sqrt(2) * tile-size = 4.2426 * tile-size */}
          {/* The logo is shifted up by roughly 29% of its width to align the cube's base with the floor diamond */}
          <div className="absolute z-20 flex items-center justify-center"
               style={{ 
                 width: 'calc(var(--tile-size) * 4.2426)', 
                 aspectRatio: '240 / 264',
                 top: '50%',
                 left: '50%',
                 transform: 'translate(-50%, calc(-50% - (var(--tile-size) * 4.2426 * 0.29)))'
               }}>
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
