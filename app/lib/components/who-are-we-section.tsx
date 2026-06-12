export default function WhoAreWeSection() {
  return (
    <section className="relative w-full bg-[#050505] py-20 lg:py-32 z-40 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(123,44,191,0.05)] group">
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                   <svg className="w-8 h-8 md:w-10 md:h-10 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                   </svg>
                </div>
             </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 px-8 py-3 rounded-lg inline-block shadow-inner">
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-accent-main">
                WHO ARE WE?
              </h2>
            </div>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>

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
  );
}
