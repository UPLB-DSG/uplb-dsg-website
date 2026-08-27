export default function DigestEntryLoading() {
  return (
    <div className="min-h-screen bg-background px-6 pt-32 pb-24 text-off-white">
      <div className="mx-auto w-full max-w-3xl animate-pulse space-y-6 motion-reduce:animate-none">
        <div className="h-4 w-20 rounded bg-white/10" />
        <div className="h-12 w-4/5 rounded bg-white/10" />
        <div className="h-4 w-32 rounded bg-white/5" />
        <div className="aspect-square w-full rounded-2xl bg-white/5" />
        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-white/5" />
          <div className="h-4 w-full rounded bg-white/5" />
          <div className="h-4 w-3/4 rounded bg-white/5" />
        </div>
      </div>
    </div>
  );
}
