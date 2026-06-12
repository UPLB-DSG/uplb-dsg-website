import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden flex flex-col lg:block">
      {/* Top Mesh Gradient - accurate to Figma screenshot */}
      <div className="absolute top-0 left-0 right-0 h-[400px] w-full z-0 pointer-events-none opacity-80 mix-blend-screen overflow-hidden">
         <div className="absolute top-[-150px] left-[-10%] w-[50%] h-[300px] bg-[#9e1c59] blur-[120px] rounded-[100%]" />
         <div className="absolute top-[-200px] left-[20%] w-[60%] h-[400px] bg-[#4a0a77] blur-[140px] rounded-[100%]" />
         <div className="absolute top-[-150px] right-[-10%] w-[40%] h-[300px] bg-[#a35c3e]/80 blur-[120px] rounded-[100%]" />
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 lg:px-12 z-30 relative w-full flex flex-col lg:flex-row items-center justify-between h-full min-h-[calc(100vh-80px)] pt-8 pb-12 lg:py-0">
        
        {/* Left Content (Text) */}
        <section className="space-y-4 lg:space-y-6 w-full lg:w-[50%] xl:w-[45%] z-30 mt-8 lg:mt-0">
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
            <button className="bg-accent-main hover:bg-accent-secondary text-off-white text-xs font-bold py-2.5 px-6 transition-colors uppercase tracking-widest w-max rounded-sm shadow-[0_0_20px_rgba(114,48,255,0.4)]">
              SUBSCRIBE
            </button>
          </div>
        </section>

        {/* Isometric Graphic (Responsive) */}
        {/* We use a mathematical CSS grid for perfect precision instead of an image */}
        <section 
          className="relative w-full lg:w-[50%] aspect-[1/1] lg:aspect-[1468/845] flex items-center justify-center z-10 pointer-events-none mt-8 lg:mt-0"
          style={{ '--tile-size': 'clamp(64px, 8vw, 160px)' } as React.CSSProperties}
        >
          
          {/* Strong Center Glow BEHIND Grid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[60%] bg-accent-main rounded-full blur-[60px] lg:blur-[80px] opacity-60 z-0" />

          {/* Mathematical Isometric Grid Container with Radial Fade */}
          <div 
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 45%, transparent 80%)',
              maskImage: 'radial-gradient(ellipse at center, black 45%, transparent 80%)'
            }}
          >
             {/* The 3D Plane */}
             <div className="absolute w-[200%] md:w-[150%] aspect-square [transform:rotateX(56.633deg)_rotateZ(45deg)] flex items-center justify-center">
                
                {/* Grid Background */}
                <div className="absolute inset-0" 
                     style={{
                       backgroundImage: `
                         linear-gradient(to right, rgba(167, 139, 250, 0.25) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(167, 139, 250, 0.25) 1px, transparent 1px)
                       `,
                       backgroundSize: 'var(--tile-size) var(--tile-size)',
                       /* backgroundPosition: center center naturally places the center of the container exactly in the middle of a grid tile */
                       backgroundPosition: 'center center'
                     }} 
                />

                {/* Glowing Floor Tiles (Mapped to a SINGLE unit tile) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80" 
                     style={{ 
                       width: 'calc(var(--tile-size) * 1.5)', 
                       height: 'calc(var(--tile-size) * 1.5)',
                       background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 60%)'
                     }} 
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" 
                     style={{ 
                       width: 'var(--tile-size)', 
                       height: 'var(--tile-size)',
                       background: 'radial-gradient(circle, var(--accent-main) 0%, transparent 70%)'
                     }} 
                />
             </div>
          </div>

          {/* Stacked Logo Elements - perfectly scaled to ONE mathematical grid tile! */}
          {/* Width of a 1x1 tile diamond is sqrt(2) * tile-size = 1.4142 * tile-size */}
          {/* The logo is shifted up by exactly 25% of its height. Since the logo's height is 264 and center is 132, the base diamond center is at Y=198. Shifting by -25% (-66px) aligns the base perfectly to the grid center. */}
          <div className="absolute z-20 flex items-center justify-center"
               style={{ 
                 width: 'calc(var(--tile-size) * 1.4142)', 
                 aspectRatio: '240 / 264',
                 transform: 'translateY(-25%)'
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
              className="object-contain absolute z-30 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
            />
          </div>
        </section>
      </div>
      </section>

      {/* WHO ARE WE SECTION */}
      <section className="relative w-full bg-[#050505] py-20 lg:py-32 z-40 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left: Image Placeholder */}
            <div className="relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(123,44,191,0.05)] group">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                     <svg className="w-8 h-8 md:w-10 md:h-10 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                     </svg>
                  </div>
               </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              {/* Heading */}
              <div className="bg-white/5 border border-white/10 px-8 py-3 rounded-lg inline-block shadow-inner">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-accent-main">
                  WHO ARE WE?
                </h2>
              </div>
              
              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-faded-accent mt-6">
                <div className="space-y-1 mt-6">
                  <h3 className="text-3xl md:text-4xl font-black text-off-white">100<span className="text-accent-main">+</span></h3>
                  <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold">members</p>
                </div>
                <div className="space-y-1 mt-6">
                  <h3 className="text-3xl md:text-4xl font-black text-off-white">100<span className="text-accent-main">+</span></h3>
                  <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold">alumni</p>
                </div>
                <div className="space-y-1 mt-6">
                  <h3 className="text-3xl md:text-4xl font-black text-off-white">100<span className="text-accent-main">+</span></h3>
                  <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold">partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
