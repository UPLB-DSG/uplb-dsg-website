export default function Home() {
  return (
    <main className="min-h-screen bg-bg-brand text-off-white flex items-center justify-center px-6">
      <section className="max-w-3xl text-center space-y-4">
        <p className="text-sm uppercase tracking-[0.18em] text-accent-secondary">
          University of the Philippines Los Baños
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          UPLB <span className="text-accent-main">Data Science</span> Guild
        </h1>
        <p className="text-base sm:text-lg text-off-white/85">
          a socio-civic, and pioneer organization of UPLB for data science.
        </p>
      </section>
    </main>
  );
}
