// Hero cube: the guild's cube artwork floating in one svg viewBox, with a
// breathing shadow and the caption the "sudo" easter egg reveals
// (hero-canvas.tsx toggles #hero-cube.antigravity).

const VW = 1000;
const VH = 600;
const CX = 500;
const CY = 300;

const CUBE_W = 320;
const CUBE_H = (CUBE_W * 264) / 240;
const CUBE_X = CX - CUBE_W / 2;
const CUBE_Y = CY - CUBE_H / 2;

export default function IsoScene() {
  const cube = { x: CUBE_X, y: CUBE_Y, width: CUBE_W, height: CUBE_H, preserveAspectRatio: "xMidYMid meet" as const };
  return (
    <svg
      viewBox={`0 0 ${VW} ${VH}`}
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 z-10 h-full w-full"
      aria-hidden="true"
    >
      <g id="hero-cube" className="cube-float">
        <ellipse cx={CX} cy={CUBE_Y + CUBE_H + 30} rx="120" ry="16" fill="#0a0a0a" fillOpacity="0.6" className="cube-shadow" />
        <image href="/polygon-15.png" {...cube} />
        <image href="/group-49.png" {...cube} />
        <image href="/group-47.png" {...cube} style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.25))" }} />
        <text x={CX} y={CUBE_Y + CUBE_H + 62} textAnchor="middle" className="antigravity-caption" fill="#fafafa" fontSize="14" fontFamily="ui-monospace, monospace" fontWeight="700">
          I&apos;m learning Python!
        </text>
      </g>
    </svg>
  );
}
