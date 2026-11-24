import Image from "next/image"
import { ChipList } from "@/components/primitives/chip"
import { NodeHeader } from "@/components/primitives/node-header"
import { NodeSection } from "@/components/primitives/node-section"
import { Reveal } from "@/components/primitives/reveal"
import { leadership, type Organization } from "@/lib/content/leadership"

function OrgBand({ org }: { org: Organization }) {
  return (
    <article className="card-surface overflow-hidden p-0">
      <div className="relative aspect-[16/9] sm:aspect-[16/7] lg:aspect-[16/6]">
        <Image
          src={org.image}
          alt={org.imageAlt}
          fill
          sizes="(min-width:1200px) 1064px, 100vw"
          loading="lazy"
          className="object-cover [filter:saturate(0.75)_contrast(1.05)]"
        />
        <div aria-hidden className="absolute inset-0 bg-[oklch(0.3_0.08_260/0.4)] mix-blend-multiply" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-surface-1 via-surface-1/30 to-transparent" />
        <h3 className="absolute bottom-4 left-5 right-5 font-display text-2xl font-semibold text-foreground sm:bottom-6 sm:left-8 sm:text-4xl">
          {org.organization}
        </h3>
      </div>
      <div className="p-5 sm:p-8">
        <ol className="relative grid gap-8 before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-px before:bg-line md:grid-cols-2 md:gap-10 md:before:bottom-auto md:before:left-0 md:before:right-0 md:before:top-[5px] md:before:h-px md:before:w-auto">
          {org.roles.map((role) => (
            <li key={role.title} className="relative pl-7 md:pl-0 md:pt-8">
              <span aria-hidden className="absolute left-0 top-1.5 size-[11px] rounded-full border-2 border-primary bg-background md:top-0" />
              <p className="font-mono text-xs tracking-tight text-primary">{role.stamp}</p>
              <h4 className="mt-1 font-display text-xl font-semibold text-foreground">{role.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{role.period}</p>
              <p className="prose-fit mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{role.description}</p>
              <ChipList items={role.skills} variant="skill" className="mt-4" />
            </li>
          ))}
        </ol>
      </div>
    </article>
  )
}

export function Leadership() {
  return (
    <NodeSection id="leadership">
      <NodeHeader id="leadership" title="Leadership & Engagement associatif" description="Animer des communautés et piloter des initiatives." />
      <div className="space-y-8">
        {leadership.map((org, i) => (
          <Reveal key={org.organization} delay={i * 0.05}>
            <OrgBand org={org} />
          </Reveal>
        ))}
      </div>
    </NodeSection>
  )
}
