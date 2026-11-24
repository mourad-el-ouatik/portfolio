const nodes = [
  [120, 140], [360, 80], [620, 170], [900, 90], [1090, 230],
  [220, 420], [520, 360], [800, 450], [1050, 560],
] as const
const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 6], [2, 7], [3, 7], [4, 8], [5, 6], [6, 7], [7, 8]] as const

export function HeroMesh() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_70%_at_60%_30%,black,transparent)]"
        style={{ backgroundImage: "radial-gradient(var(--line) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(60%_60%_at_60%_0%,var(--glow),transparent)]" />
      <svg viewBox="0 0 1200 640" preserveAspectRatio="xMidYMin slice" className="absolute inset-0 size-full text-primary opacity-35 lg:opacity-100">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
            stroke="currentColor" strokeOpacity="0.22" strokeWidth="1"
            className="animate-[node-on_0.8s_var(--ease-out)_both]"
            style={{ animationDelay: `${0.4 + i * 0.12}s` }}
          />
        ))}
        {nodes.map(([x, y], i) => (
          <g key={i} className="animate-[node-on_0.8s_var(--ease-out)_both]" style={{ animationDelay: `${0.3 + i * 0.28}s` }}>
            <circle cx={x} cy={y} r="14" fill="currentColor" fillOpacity="0.1" />
            <circle cx={x} cy={y} r="4.5" fill="currentColor" />
          </g>
        ))}
      </svg>
      <div className="grain absolute inset-0" />
    </div>
  )
}
