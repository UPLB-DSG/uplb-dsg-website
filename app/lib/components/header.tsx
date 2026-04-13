import Link from "next/link";

export default function Header() {
	return (
		<header className="w-full border-b border-off-white/20 bg-bg-brand text-off-white">
			<nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
				<Link href="/" className="text-sm font-semibold tracking-[0.2em] uppercase">
					UPLB DSG
				</Link>
				<div className="flex items-center gap-6 text-sm">
					<Link href="#" className="hover:text-accent-secondary transition-colors">
						About Us
					</Link>
					<Link href="#" className="hover:text-accent-secondary transition-colors">
						Events
					</Link>
				</div>
			</nav>
		</header>
	);
}
