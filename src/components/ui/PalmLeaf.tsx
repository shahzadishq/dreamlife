/**
 * Decorative tropical palm frond (procedural SVG, uses currentColor).
 * Purely ornamental — aria-hidden, no layout impact.
 */
export function PalmLeaf({ className = "" }: { className?: string }) {
  const P0 = [16, 184];
  const P1 = [62, 44];
  const P2 = [188, 14];
  const bez = (t: number): [number, number] => [
    (1 - t) ** 2 * P0[0] + 2 * (1 - t) * t * P1[0] + t ** 2 * P2[0],
    (1 - t) ** 2 * P0[1] + 2 * (1 - t) * t * P1[1] + t ** 2 * P2[1],
  ];
  const dbez = (t: number): [number, number] => [
    2 * (1 - t) * (P1[0] - P0[0]) + 2 * t * (P2[0] - P1[0]),
    2 * (1 - t) * (P1[1] - P0[1]) + 2 * t * (P2[1] - P1[1]),
  ];

  const N = 16;
  const leaflets: string[] = [];
  for (let i = 1; i < N; i++) {
    const t = i / N;
    const [x, y] = bez(t);
    const [dx, dy] = dbez(t);
    const dl = Math.hypot(dx, dy) || 1;
    const ux = dx / dl;
    const uy = dy / dl;
    const nx = -uy;
    const ny = ux;
    const len = 60 * (1 - 0.55 * t);
    const sweep = 0.4; // blend leaflets toward the tip
    for (const side of [1, -1]) {
      let lx = nx * side * (1 - sweep) + ux * sweep;
      let ly = ny * side * (1 - sweep) + uy * sweep;
      const ll = Math.hypot(lx, ly) || 1;
      lx /= ll;
      ly /= ll;
      const ex = x + lx * len;
      const ey = y + ly * len;
      const cx = x + lx * len * 0.5 + ux * len * 0.14;
      const cy = y + ly * len * 0.5 + uy * len * 0.14;
      leaflets.push(
        `M${x.toFixed(1)} ${y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`,
      );
    }
  }

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      <path
        d={`M${P0[0]} ${P0[1]} Q${P1[0]} ${P1[1]} ${P2[0]} ${P2[1]}`}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {leaflets.map((d, i) => (
        <path key={i} d={d} strokeWidth="1.5" strokeLinecap="round" />
      ))}
    </svg>
  );
}
