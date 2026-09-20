import Link from "next/link";
import Lottie from "@/components/lottie";

const cell = "rounded-xl border border-white/10 p-6 text-center align-middle";

// 404 as a confusion matrix: we predicted the page exists; it does not.
export default function NotFound() {
  return (
    <div className="min-h-screen bg-background px-6 pt-32 pb-24 text-off-white">
      <div className="mx-auto max-w-xl">
        <Lottie src="/lottie/pop.json" className="-ml-4 h-28 w-28" />
        <p className="text-sm text-accent-main">Error 404</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">False positive.</h1>
        <p className="mt-4 leading-relaxed text-white/70">
          The model predicted this page exists. The ground truth disagrees. One more sample for the confusion matrix.
        </p>

        <table className="mt-10 w-full border-separate border-spacing-2 text-sm">
          <caption className="sr-only">Confusion matrix for this request</caption>
          <thead>
            <tr>
              <th scope="col" className="text-left font-mono text-xs text-white/40">predicted \ actual</th>
              <th scope="col" className="font-mono text-xs text-white/60">exists</th>
              <th scope="col" className="font-mono text-xs text-white/60">missing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-left font-mono text-xs text-white/60">exists</th>
              <td className={`${cell} text-white/50`}>true positive<br /><span className="text-2xl font-black text-white/30">0</span></td>
              <td className={`${cell} border-accent-main bg-accent-main/15 text-white`}>false positive<br /><span className="text-2xl font-black text-headline-via">1</span></td>
            </tr>
            <tr>
              <th scope="row" className="text-left font-mono text-xs text-white/60">missing</th>
              <td className={`${cell} text-white/50`}>false negative<br /><span className="text-2xl font-black text-white/30">0</span></td>
              <td className={`${cell} text-white/50`}>true negative<br /><span className="text-2xl font-black text-white/30">0</span></td>
            </tr>
          </tbody>
        </table>

        <Link
          href="/"
          className="mt-10 inline-flex min-h-11 items-center rounded-sm bg-accent-main px-6 font-bold uppercase tracking-widest text-off-white hover:bg-accent-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-off-white"
        >
          Retrain: go home
        </Link>
      </div>
    </div>
  );
}
