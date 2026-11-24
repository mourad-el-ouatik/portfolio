import { NodeHeader } from "@/components/primitives/node-header"
import { NodeSection } from "@/components/primitives/node-section"
import { projectCountWord, projects } from "@/lib/content/projects"
import { CaseFile } from "./case-file"

export function Projects() {
  return (
    <NodeSection id="projects">
      <NodeHeader
        id="projects"
        title="Réalisations phares"
        description={`${projectCountWord} projets illustrant mon approche de la cybersécurité : gouvernance des risques, architecture Zero Trust, analyse de sécurité et intégration DevSecOps.`}
      />
      <div className="space-y-8 lg:space-y-12">
        {projects.map((project, i) => (
          <CaseFile key={project.id} project={project} index={i} />
        ))}
      </div>
    </NodeSection>
  )
}
