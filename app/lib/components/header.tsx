import Link from "next/link";
import Image from "next/image";

export default function Header() {
	return (
		<header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95vw]">
			<nav className="flex items-center gap-1 md:gap-4 px-4 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(123,44,191,0.3)]">
				
				{/* Left Links */}
				<div className="flex items-center gap-1 md:gap-2">
					<Link href="/" className="px-4 py-2 rounded-full hover:bg-white/10 text-xs font-bold tracking-widest uppercase transition-colors text-gray-300 hover:text-white">
						Home
					</Link>
					<Link href="#" className="px-4 py-2 rounded-full hover:bg-white/10 text-xs font-bold tracking-widest uppercase transition-colors text-gray-300 hover:text-white">
						Events
					</Link>
				</div>

				{/* Center Interactable Keyhole */}
				<Link href="#" className="group relative flex items-center justify-center w-12 h-12 rounded-full hover:bg-white/5 transition-colors" aria-label="Secret Portal">
					{/* Glowing effect on hover */}
					<div className="absolute inset-0 rounded-full bg-[#c77dff]/0 group-hover:bg-[#c77dff]/30 blur-md transition-all duration-300" />
					<Image 
						src="/keyhole.png" 
						alt="Keyhole" 
						width={16} 
						height={26} 
						className="relative z-10 invert opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-md" 
					/>
				</Link>

				{/* Right Links */}
				<div className="flex items-center gap-1 md:gap-2">
					<Link href="#" className="px-4 py-2 rounded-full hover:bg-white/10 text-xs font-bold tracking-widest uppercase transition-colors text-gray-300 hover:text-white whitespace-nowrap">
						About Us
					</Link>
					<Link href="#" className="px-4 py-2 rounded-full hover:bg-white/10 text-xs font-bold tracking-widest uppercase transition-colors text-gray-300 hover:text-white">
						Contact
					</Link>
				</div>

			</nav>
		</header>
	);
}
