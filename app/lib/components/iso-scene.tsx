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
  [239.6, 160.0, 1.5, "#c77dff"],
  [215.1, 164.5, 2.1, "#c77dff"],
  [325.7, 182.5, 2.2, "#c77dff"],
  [276.9, 178.7, 1.6, "#c77dff"],
  [333.1, 226.1, 1.8, "#c77dff"],
  [208.3, 140.5, 3.1, "#c77dff"],
  [311.6, 163.7, 1.5, "#c77dff"],
  [270.6, 152.5, 1.9, "#c77dff"],
  [242.2, 183.8, 2.9, "#c77dff"],
  [261.6, 187.2, 2.4, "#c77dff"],
  [208.5, 161.2, 1.5, "#c77dff"],
  [298.2, 183.0, 1.8, "#c77dff"],
  [237.7, 189.8, 2.5, "#c77dff"],
  [185.9, 183.3, 1.9, "#c77dff"],
  [251.1, 190.5, 2.4, "#c77dff"],
  [147.0, 158.7, 3.0, "#c77dff"],
  [257.4, 169.4, 1.6, "#c77dff"],
  [200.2, 189.3, 2.8, "#c77dff"],
  [295.4, 177.8, 2.6, "#c77dff"],
  [256.1, 124.8, 2.4, "#c77dff"],
  [235.5, 142.2, 2.5, "#c77dff"],
  [212.5, 155.9, 2.2, "#c77dff"],
  [161.0, 180.0, 2.6, "#c77dff"],
  [382.0, 206.3, 2.7, "#c77dff"],
  [308.1, 88.0, 1.9, "#c77dff"],
  [117.2, 249.5, 2.6, "#c77dff"],
  [828.0, 246.0, 1.6, "#7230ff"],
  [800.3, 202.7, 2.8, "#7230ff"],
  [761.9, 215.8, 3.0, "#7230ff"],
  [823.5, 212.8, 2.2, "#7230ff"],
  [848.3, 114.1, 3.0, "#7230ff"],
  [782.1, 229.9, 2.1, "#7230ff"],
  [878.6, 183.5, 1.7, "#7230ff"],
  [840.4, 269.1, 1.8, "#7230ff"],
  [782.9, 196.9, 1.9, "#7230ff"],
  [870.2, 201.4, 2.2, "#7230ff"],
  [849.0, 187.7, 2.6, "#7230ff"],
  [724.1, 195.6, 2.5, "#7230ff"],
  [798.4, 195.8, 2.8, "#7230ff"],
  [804.7, 189.9, 2.8, "#7230ff"],
  [833.8, 222.9, 2.5, "#7230ff"],
  [830.9, 211.6, 1.5, "#7230ff"],
  [784.3, 206.2, 1.5, "#7230ff"],
  [830.3, 200.0, 1.7, "#7230ff"],
  [842.8, 205.9, 3.0, "#7230ff"],
  [760.1, 182.2, 1.7, "#7230ff"],
  [789.4, 200.5, 1.6, "#7230ff"],
  [827.7, 164.0, 3.2, "#7230ff"],
  [857.5, 227.7, 1.6, "#7230ff"],
  [780.6, 209.8, 1.9, "#7230ff"],
  [809.5, 202.0, 3.1, "#7230ff"],
  [754.0, 195.6, 1.7, "#7230ff"],
  [684.5, 468.1, 3.2, "#a35c3e"],
  [702.9, 467.7, 2.7, "#a35c3e"],
  [702.3, 472.8, 2.8, "#a35c3e"],
  [634.6, 460.7, 2.8, "#a35c3e"],
  [709.0, 454.8, 3.2, "#a35c3e"],
  [726.2, 446.1, 2.9, "#a35c3e"],
  [707.0, 502.4, 2.3, "#a35c3e"],
  [635.7, 526.4, 1.5, "#a35c3e"],
  [696.8, 508.2, 2.6, "#a35c3e"],
  [709.5, 468.2, 2.2, "#a35c3e"],
  [884.5, 433.2, 2.1, "#a35c3e"],
  [714.8, 524.1, 1.8, "#a35c3e"],
  [688.9, 462.5, 3.0, "#a35c3e"],
  [724.1, 444.2, 2.3, "#a35c3e"],
  [761.9, 495.0, 2.6, "#a35c3e"],
  [786.8, 432.1, 2.8, "#a35c3e"],
  [700.0, 470.0, 2.8, "#a35c3e"],
  [660.4, 517.5, 2.8, "#a35c3e"],
  [643.7, 497.5, 3.1, "#a35c3e"],
  [698.0, 461.6, 1.7, "#a35c3e"],
  [723.1, 459.2, 2.9, "#a35c3e"],
  [717.4, 485.6, 2.9, "#a35c3e"],
  [640.0, 526.3, 2.4, "#a35c3e"],
  [708.6, 476.4, 1.4, "#a35c3e"],
  [601.7, 458.6, 3.1, "#a35c3e"],
  [683.1, 475.1, 3.0, "#a35c3e"],
];
const CENTROIDS: [number, number][] = [[250, 170], [790, 200], [700, 470]];

export default function IsoScene() {
  const cube = { x: CUBE_X, y: CUBE_Y, width: CUBE_W, height: CUBE_H, preserveAspectRatio: "xMidYMid meet" as const };
  return (
    <svg
      viewBox={`0 0 ${VW} ${VH}`}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <pattern id="dots" width={STEP} height={STEP} patternUnits="userSpaceOnUse" x={CX % STEP} y={CY % STEP}>
          <circle cx="0" cy="0" r="1.6" fill="#a78bfa" />
        </pattern>
        <radialGradient id="dot-fade" cx={CX} cy={CY} r="500" gradientUnits="userSpaceOnUse">
          <stop offset="0.15" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </radialGradient>
        <mask id="dot-mask">
          <rect width={VW} height={VH} fill="url(#dot-fade)" />
        </mask>
        <radialGradient id="scene-glow" cx={CX} cy={CY} r="330" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7230ff" stopOpacity="0.85" />
          <stop offset="0.4" stopColor="#7230ff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#7230ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={CX} cy={CY} r="330" fill="url(#scene-glow)" />
      <rect width={VW} height={VH} fill="url(#dots)" mask="url(#dot-mask)" opacity="0.6" />

      <g mask="url(#dot-mask)">
        {POINTS.map(([x, y, r, c], i) => (
          <circle key={i} cx={x} cy={y} r={r} fill={c} className="scene-node" style={{ "--n": i % 9 } as React.CSSProperties} />
        ))}
        {CENTROIDS.map(([x, y], i) => (
          <g key={`c${i}`} transform={`translate(${x} ${y}) rotate(45)`}>
            <rect x="-7" y="-7" width="14" height="14" fill="none" stroke="#fafafa" strokeWidth="1.5" />
          </g>
        ))}
      </g>

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
