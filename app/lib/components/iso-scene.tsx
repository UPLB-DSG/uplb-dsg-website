// Hero scene, flat by design: a dot-matrix grid, the glow, three scatter
// clusters (the same k-means motif as the opening and the Konami egg), and the
// cube floating at the center. One svg viewBox, no projections, so nothing has
// to line up with anything.

const VW = 1000;
const VH = 600;
const CX = 500;
const CY = 300;
const STEP = 34;

const CUBE_W = 320;
const CUBE_H = (CUBE_W * 264) / 240;
const CUBE_X = CX - CUBE_W / 2;
const CUBE_Y = CY - CUBE_H / 2;

// x, y, radius, color. Generated once with a fixed seed; edit freely.
const POINTS: [number, number, number, string][] = [
  [370.3, 151.4, 2.1, "#c77dff"],
  [282.4, 174.2, 2.3, "#c77dff"],
  [285.4, 160.4, 2.7, "#c77dff"],
  [359.7, 200.7, 1.9, "#c77dff"],
  [273.0, 114.6, 1.5, "#c77dff"],
  [363.6, 170.4, 2.9, "#c77dff"],
  [330.9, 202.6, 1.4, "#c77dff"],
  [237.8, 166.5, 1.5, "#c77dff"],
  [321.1, 177.2, 2.1, "#c77dff"],
  [266.3, 185.6, 2.7, "#c77dff"],
  [219.8, 175.1, 2.5, "#c77dff"],
  [295.1, 176.9, 1.8, "#c77dff"],
  [411.3, 58.1, 2.5, "#c77dff"],
  [303.8, 176.9, 1.8, "#c77dff"],
  [305.6, 171.1, 2.0, "#c77dff"],
  [317.7, 162.2, 2.0, "#c77dff"],
  [417.3, 175.3, 1.7, "#c77dff"],
  [330.6, 163.7, 2.2, "#c77dff"],
  [358.7, 193.6, 2.4, "#c77dff"],
  [306.3, 169.9, 1.8, "#c77dff"],
  [349.9, 167.8, 2.6, "#c77dff"],
  [325.7, 188.3, 1.8, "#c77dff"],
  [309.9, 163.6, 1.7, "#c77dff"],
  [293.4, 171.8, 2.1, "#c77dff"],
  [739.1, 183.2, 2.4, "#7230ff"],
  [782.4, 207.4, 2.1, "#7230ff"],
  [725.8, 163.6, 2.7, "#7230ff"],
  [699.6, 195.5, 2.8, "#7230ff"],
  [724.0, 156.9, 2.4, "#7230ff"],
  [762.1, 189.0, 3.0, "#7230ff"],
  [716.5, 157.6, 1.9, "#7230ff"],
  [702.0, 195.3, 1.5, "#7230ff"],
  [717.9, 211.8, 2.4, "#7230ff"],
  [685.5, 186.5, 2.1, "#7230ff"],
  [655.5, 143.9, 2.8, "#7230ff"],
  [722.2, 176.2, 1.6, "#7230ff"],
  [715.3, 230.0, 1.7, "#7230ff"],
  [711.0, 122.9, 2.9, "#7230ff"],
  [750.7, 142.2, 2.4, "#7230ff"],
  [592.8, 211.0, 1.6, "#7230ff"],
  [725.9, 269.3, 2.5, "#7230ff"],
  [713.4, 190.9, 2.7, "#7230ff"],
  [733.6, 190.7, 2.6, "#7230ff"],
  [740.9, 173.4, 1.8, "#7230ff"],
  [632.7, 114.7, 1.8, "#7230ff"],
  [752.1, 150.1, 1.7, "#7230ff"],
  [670.5, 176.1, 1.5, "#7230ff"],
  [717.2, 168.1, 2.0, "#7230ff"],
  [671.4, 460.3, 2.8, "#a35c3e"],
  [703.9, 443.8, 2.5, "#a35c3e"],
  [708.2, 460.5, 1.5, "#a35c3e"],
  [763.7, 450.8, 2.9, "#a35c3e"],
  [736.3, 449.4, 2.4, "#a35c3e"],
  [544.2, 456.4, 2.6, "#a35c3e"],
  [775.9, 475.8, 2.3, "#a35c3e"],
  [673.0, 299.3, 2.8, "#a35c3e"],
  [692.0, 439.9, 2.9, "#a35c3e"],
  [634.3, 497.4, 2.5, "#a35c3e"],
  [604.4, 479.3, 2.7, "#a35c3e"],
  [736.4, 407.5, 2.3, "#a35c3e"],
  [653.8, 430.5, 2.4, "#a35c3e"],
  [726.5, 459.1, 2.4, "#a35c3e"],
  [673.2, 359.4, 2.0, "#a35c3e"],
  [689.5, 441.4, 2.3, "#a35c3e"],
  [782.2, 482.5, 2.6, "#a35c3e"],
  [731.1, 450.4, 2.4, "#a35c3e"],
  [676.3, 416.4, 2.2, "#a35c3e"],
  [686.1, 442.6, 2.9, "#a35c3e"],
  [689.9, 445.2, 2.5, "#a35c3e"],
  [692.7, 451.1, 1.7, "#a35c3e"],
  [621.7, 463.3, 2.8, "#a35c3e"],
  [667.1, 475.5, 2.5, "#a35c3e"],
];
const CENTROIDS: [number, number][] = [[305, 175], [715, 165], [690, 445]];

export default function IsoScene({ minimal = false }: { minimal?: boolean }) {
  const cube = { x: CUBE_X, y: CUBE_Y, width: CUBE_W, height: CUBE_H, preserveAspectRatio: "xMidYMid meet" as const };
  return (
    <svg
      viewBox={`0 0 ${VW} ${VH}`}
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 z-10 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <pattern id="dots" width={STEP} height={STEP} patternUnits="userSpaceOnUse" x={CX % STEP} y={CY % STEP}>
          <circle cx="0" cy="0" r="1.6" fill="#a78bfa" />
        </pattern>
        <radialGradient id="dot-fade" cx={CX} cy={CY} r="290" gradientUnits="userSpaceOnUse">
          <stop offset="0.3" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </radialGradient>
        <mask id="dot-mask">
          <rect width={VW} height={VH} fill="url(#dot-fade)" />
        </mask>
        <radialGradient id="scene-glow" cx={CX} cy={CY} r="290" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7230ff" stopOpacity="0.9" />
          <stop offset="0.4" stopColor="#7230ff" stopOpacity="0.45" />
          <stop offset="1" stopColor="#7230ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={CX} cy={CY} r="290" fill="url(#scene-glow)" />
      {!minimal && <rect width={VW} height={VH} fill="url(#dots)" mask="url(#dot-mask)" opacity="0.6" />}

      {!minimal && <g mask="url(#dot-mask)">
        {POINTS.map(([x, y, r, c], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill={c} className="scene-node" style={{ "--n": i % 9 } as React.CSSProperties} />
        ))}
        {CENTROIDS.map(([x, y], i) => (
          <g key={`c${i}`} transform={`translate(${x} ${y}) rotate(45)`}>
            <rect x="-7" y="-7" width="14" height="14" fill="none" stroke="#fafafa" strokeWidth="1.5" />
          </g>
        ))}
      </g>}

      <g id="hero-cube" className="cube-float">
        <ellipse cx={CX} cy={CUBE_Y + CUBE_H + 30} rx="120" ry="16" fill="#7230ff" fillOpacity="0.35" className="cube-shadow" />
        <image href="/polygon-15.png" {...cube} />
        <image href="/group-49.png" {...cube} />
        <image href="/group-47.png" {...cube} style={{ filter: "drop-shadow(0 0 14px rgba(255,255,255,0.5))" }} />
        <text x={CX} y={CUBE_Y + CUBE_H + 62} textAnchor="middle" className="antigravity-caption" fill="#fafafa" fontSize="14" fontFamily="ui-monospace, monospace" fontWeight="700">
          I&apos;m learning Python!
        </text>
      </g>
    </svg>
  );
}
