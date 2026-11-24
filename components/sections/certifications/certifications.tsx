import { Award, ExternalLink } from "lucide-react"
import { NodeHeader } from "@/components/primitives/node-header"
import { NodeSection } from "@/components/primitives/node-section"
import { Reveal } from "@/components/primitives/reveal"
import { certifications } from "@/lib/content/certifications"
import { links } from "@/lib/content/site"
import { BadgeTile } from "./badge-tile"

export function Certifications() {
  return (
    <NodeSection id="certifications">
      <NodeHeader id="certifications" title="Certifications professionnelles" description="Gouvernance, conformité, cloud et cybersécurité." />
      <ul className="grid gap-6 md:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal as="li" key={cert.name} delay={i * 0.08}>
            <BadgeTile cert={cert} />
          </Reveal>
        ))}
      </ul>
      <div className="mt-10">
        <a
          href={links.credly}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground"
        >
          <Award strokeWidth={1.75} className="size-4" aria-hidden />
          Voir tous les badges sur Credly
          <ExternalLink strokeWidth={1.75} className="size-3.5" aria-hidden />
          <span className="sr-only">(nouvel onglet)</span>
        </a>
      </div>
    </NodeSection>
  )
}
