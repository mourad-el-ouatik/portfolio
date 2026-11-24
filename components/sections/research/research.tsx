import { ArrowRight, BookOpen } from "lucide-react"
import Image from "next/image"
import { Chip, type ChipTone } from "@/components/primitives/chip"
import { NodeHeader } from "@/components/primitives/node-header"
import { NodeSection } from "@/components/primitives/node-section"
import { Reveal } from "@/components/primitives/reveal"
import { conference, goals, statusLabel, topics, type ResearchStatus } from "@/lib/content/research"
import { cn } from "@/lib/utils"

const tone: Record<ResearchStatus, ChipTone> = { done: "ok", ongoing: "live", planned: "warn" }
const filled: Record<ResearchStatus, number> = { done: 3, ongoing: 2, planned: 1 }
const barColor: Record<ResearchStatus, string> = { done: "bg-ok", ongoing: "bg-live", planned: "bg-warn" }

function Steps({ status }: { status: ResearchStatus }) {
  return (
    <div aria-hidden className="mt-3 flex w-28 gap-1">
      {[0, 1, 2].map((i) => (
        <span key={i} className={cn("h-1 flex-1 rounded-full", i < filled[status] ? barColor[status] : "bg-line")} />
      ))}
    </div>
  )
}

export function Research() {
  return (
    <NodeSection id="research">
      <NodeHeader id="research" title="Recherche & Conférences" description="Axes de recherche et participation à des conférences." />

      <Reveal as="article">
        <figure className="card-surface overflow-hidden p-0">
          <div className="relative aspect-[1280/597]">
            <Image
              src={conference.image}
              alt={conference.imageAlt}
              fill
              sizes="(min-width:1200px) 1064px, 100vw"
              loading="lazy"
              className="object-cover [filter:saturate(0.8)_contrast(1.05)]"
            />
            <div aria-hidden className="absolute inset-0 bg-[oklch(0.3_0.08_260/0.3)] mix-blend-multiply" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-surface-1 via-transparent to-transparent" />
          </div>
          <figcaption className="grid gap-3 p-5 sm:p-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="t-label text-muted-foreground">{conference.organization}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">{conference.name}</h3>
              <p className="prose-fit mt-2 text-muted-foreground">{conference.description}</p>
            </div>
            <Chip variant="status" tone="live" className="justify-self-start md:justify-self-end">
              {conference.role}
            </Chip>
          </figcaption>
        </figure>
      </Reveal>

      <h3 className="mt-14 font-display text-2xl font-semibold">Carnet de recherche</h3>
      <ol className="mt-6 divide-y divide-line border-y border-line">
        {topics.map((t, i) => (
          <Reveal as="li" key={t.title} delay={i * 0.06} className="grid gap-4 py-7 md:grid-cols-[11rem_1fr] md:gap-10">
            <div>
              <p className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")} · {t.type}</p>
              <div className="mt-3">
                <Chip variant="status" tone={tone[t.status]}>
                  {statusLabel[t.status]}
                </Chip>
              </div>
              <Steps status={t.status} />
            </div>
            <div>
              <h4 className="font-display text-xl font-semibold leading-snug text-foreground">{t.title}</h4>
              <p className="prose-fit mt-3 text-muted-foreground">{t.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-10">
        <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <BookOpen strokeWidth={1.75} className="size-5 text-primary" aria-hidden />
            <h3 className="font-display text-lg font-semibold">{goals.title}</h3>
          </div>
          <p className="prose-fit mt-4 text-muted-foreground">{goals.text}</p>
          <a href="#contact" className="group mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary hover:underline">
            {goals.cta}
            <ArrowRight strokeWidth={1.75} className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </a>
        </div>
      </Reveal>
    </NodeSection>
  )
}
