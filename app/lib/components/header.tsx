import Link from "next/link";
import Image from "next/image";

export default function Header() {
	return (
		<header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[98vw]">
			<nav className="flex items-center gap-1 md:gap-4 px-2 py-2 md:px-4 md:py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(123,44,191,0.3)]">
				
				{/* Left Links */}
				<div className="flex items-center gap-0 md:gap-2">
					<Link href="/" className="px-2 py-2 md:px-4 rounded-full hover:bg-white/10 text-[9px] sm:text-[10px] md:text-xs font-bold tracking-wider md:tracking-widest uppercase transition-colors text-gray-300 hover:text-white whitespace-nowrap">
						Home
					</Link>
					<Link href="#" className="px-2 py-2 md:px-4 rounded-full hover:bg-white/10 text-[9px] sm:text-[10px] md:text-xs font-bold tracking-wider md:tracking-widest uppercase transition-colors text-gray-300 hover:text-white whitespace-nowrap">
						Events
					</Link>
				</div>

				{/* Center Interactable Keyhole */}
				<Link href="#" className="group relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12 shrink-0 rounded-full hover:bg-white/5 transition-colors mx-1 md:mx-0" aria-label="Secret Portal">
					{/* Glowing effect on hover */}
					<div className="absolute inset-0 rounded-full bg-[#c77dff]/0 group-hover:bg-[#c77dff]/30 blur-md transition-all duration-300" />
					<div className="relative z-10 w-3 h-5 md:w-4 md:h-6">
						<Image 
							src="/keyhole.png" 
							alt="Keyhole" 
							fill
							className="object-contain invert opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-md" 
						/>
					</div>
				</Link>

				{/* Right Links */}
				<div className="flex items-center gap-0 md:gap-2">
					<Link href="#" className="px-2 py-2 md:px-4 rounded-full hover:bg-white/10 text-[9px] sm:text-[10px] md:text-xs font-bold tracking-wider md:tracking-widest uppercase transition-colors text-gray-300 hover:text-white whitespace-nowrap">
						About Us
					</Link>
					<Link href="#" className="px-2 py-2 md:px-4 rounded-full hover:bg-white/10 text-[9px] sm:text-[10px] md:text-xs font-bold tracking-wider md:tracking-widest uppercase transition-colors text-gray-300 hover:text-white whitespace-nowrap">
						Contact
					</Link>
				</div>

			</nav>
		</header>
	);
}
