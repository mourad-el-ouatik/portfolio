import type { DiagramKind } from "@/lib/content/projects"

const stroke = { stroke: "currentColor", strokeWidth: 1.5, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" } as const
const mono = { fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, fill: "currentColor" } as const

function Topology() {
  const managers = [150, 240, 330]
  const workers = [45, 126, 207, 288, 369, 450]
  return (
    <svg viewBox="0 0 495 300" className="size-full" aria-hidden="true" focusable="false">
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={10 + i * 96} y={196} width={90} height={26} rx={13} {...stroke} strokeDasharray="3 4" opacity={0.55} className="text-live" />
      ))}
      {[0, 1, 2, 3, 4].map((i) => (
        <text key={i} x={55 + i * 96} y={213} textAnchor="middle" {...mono} className="text-live" fontSize={11}>{`VLAN ${i + 1}`}</text>
      ))}
      {managers.flatMap((mx) => workers.map((wx) => <line key={`${mx}-${wx}`} x1={mx} y1={78} x2={wx} y2={150} {...stroke} opacity={0.18} className="text-primary" />))}
      <path d="M166 62H224M256 62H314" {...stroke} className="text-primary" opacity={0.7} />
      {managers.map((x) => (
        <g key={x} className="text-primary">
          <circle cx={x} cy={62} r={22} {...stroke} fill="var(--surface-1)" strokeWidth={2} />
          <circle cx={x} cy={62} r={7} fill="currentColor" />
        </g>
      ))}
      {workers.map((x) => (
        <g key={x} className="text-primary">
          <rect x={x - 17} y={133} width={34} height={34} rx={9} {...stroke} fill="var(--surface-1)" />
          <circle cx={x} cy={150} r={4} fill="currentColor" opacity={0.75} />
        </g>
      ))}
      <text x={10} y={20} {...mono} opacity={0.7}>managers ×3</text>
      <text x={10} y={118} {...mono} opacity={0.7}>workers ×6</text>
      <text x={10} y={262} {...mono} opacity={0.7}>9 nœuds · 5 VLAN · Docker Swarm</text>
    </svg>
  )
}

function Flow({ stages }: { stages: { title: string; sub: string }[] }) {
  const w = 100
  const gap = 24
  return (
    <svg viewBox="0 0 495 260" className="size-full" aria-hidden="true" focusable="false">
      {stages.map((s, i) => {
        const x = 8 + i * (w + gap)
        return (
          <g key={s.title} className="text-primary">
            <rect x={x} y={92} width={w} height={76} rx={14} {...stroke} fill="var(--surface-1)" className={i === stages.length - 1 ? "text-live" : "text-primary"} />
            <text x={x + w / 2} y={125} textAnchor="middle" {...mono} fontSize={13} fontWeight={600}>{s.title}</text>
            <text x={x + w / 2} y={146} textAnchor="middle" {...mono} fontSize={10.5} opacity={0.7}>{s.sub}</text>
            {i < stages.length - 1 && (
              <path d={`M${x + w + 4} 130H${x + w + gap - 5}M${x + w + gap - 11} 124l6 6-6 6`} {...stroke} opacity={0.8} />
            )}
          </g>
        )
      })}
      <path d="M8 200H487" {...stroke} strokeDasharray="2 6" opacity={0.35} className="text-primary" />
    </svg>
  )
}

const pipelineStages = [
  { title: "Code", sub: "commit" },
  { title: "GitHub", sub: "Actions" },
  { title: "SonarQube", sub: "analyse statique" },
  { title: "Trivy", sub: "images Docker" },
]
const apkStages = [
  { title: "APK", sub: "Android" },
  { title: "JADX", sub: "décompilation" },
  { title: "Quark", sub: "détection" },
  { title: "Rapport", sub: "HTML" },
]

const labels: Record<DiagramKind, string> = {
  topology: "Schéma de la topologie Zero Trust : 3 nœuds managers et 6 workers répartis sur 5 VLAN.",
  pipeline: "Schéma du pipeline CI/CD : code, GitHub Actions, analyse statique SonarQube, scan d'images Docker Trivy.",
  apk: "Schéma du flux d'analyse APK : décompilation JADX, détection Quark Engine, rapport HTML.",
}

export function ProjectDiagram({ kind }: { kind: DiagramKind }) {
  return (
    <div role="img" aria-label={labels[kind]} className="aspect-[495/300] w-full text-foreground [&_text]:select-none lg:aspect-[495/290]">
      {kind === "topology" ? <Topology /> : <Flow stages={kind === "pipeline" ? pipelineStages : apkStages} />}
    </div>
  )
}
