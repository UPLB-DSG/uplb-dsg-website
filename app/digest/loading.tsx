export default function DigestIndexLoading() {
  return (
    <div className="min-h-screen bg-background px-6 pt-32 pb-24 text-off-white">
      <div className="mx-auto w-full max-w-6xl animate-pulse motion-reduce:animate-none">
        <header className="mb-12 max-w-3xl space-y-6">
          <div className="h-4 w-20 rounded bg-white/10" />
          <div className="h-14 w-80 max-w-full rounded bg-white/10 md:h-20" />
          <div className="h-5 w-full max-w-xl rounded bg-white/5" />
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-white/10 bg-dark-gray"
            >
              <div className="aspect-square bg-white/5" />
              <div className="space-y-3 p-5">
                <div className="h-3 w-24 rounded bg-white/10" />
                <div className="h-6 w-4/5 rounded bg-white/10" />
                <div className="h-4 w-full rounded bg-white/5" />
                <div className="h-4 w-2/3 rounded bg-white/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
