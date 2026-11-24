import { NodeHeader } from "@/components/primitives/node-header"
import { NodeSection } from "@/components/primitives/node-section"
import { Reveal } from "@/components/primitives/reveal"
import { vlans } from "@/lib/content/skills"
import { VlanMatrix } from "./vlan-matrix"

export function Skills() {
  return (
    <NodeSection id="skills">
      <NodeHeader
        id="skills"
        title="Compétences & Référentiels"
        description="Référentiels de gouvernance, outils et technologies que je mobilise pour piloter des chantiers de conformité et de sécurité, regroupés par zone."
      />
      <Reveal>
        <VlanMatrix vlans={vlans} />
      </Reveal>
    </NodeSection>
  )
}
