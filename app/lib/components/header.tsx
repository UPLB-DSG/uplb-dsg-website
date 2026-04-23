import Link from "next/link";

export default function Header() {
	return (
		<header className="w-full border-b border-brand-off-white/20 bg-brand-blue text-brand-off-white min-h-20 flex items-center">
			<nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
				<Link href="/" className="text-body-lg font-heading font-semibold tracking-[0.2em] uppercase">
					UPLB DSG
				</Link>
				<div className="flex items-center gap-6 text-body-sm">
					<Link href="#" className="hover:text-accent-pink transition-colors">
						About Us
					</Link>
					<Link href="#" className="hover:text-accent-pink transition-colors">
						Events
					</Link>
				</div>
			</nav>
		</header>
	);
}
