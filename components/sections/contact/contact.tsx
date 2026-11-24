import { NodeHeader } from "@/components/primitives/node-header"
import { NodeSection } from "@/components/primitives/node-section"
import { Reveal } from "@/components/primitives/reveal"
import { ContactForm } from "./contact-form"
import { ContactInfo } from "./contact-info"

export function Contact() {
  return (
    <NodeSection id="contact">
      <NodeHeader id="contact" title="Ouvrons une session." description="Conseil cybersécurité & GRC, stage de fin d'études ou collaboration." />
      <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
        <Reveal className="lg:col-span-3 lg:order-last">
          <div className="card-surface">
            <div className="flex items-center gap-2 rounded-t-[inherit] border-b border-line bg-surface-2 px-5 py-3">
              <span aria-hidden className="size-2.5 rounded-full bg-line" />
              <span aria-hidden className="size-2.5 rounded-full bg-line" />
              <span aria-hidden className="size-2.5 rounded-full bg-line" />
              <span className="t-label ml-3 text-muted-foreground">nouvelle session · contact</span>
            </div>
            <div className="p-5 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-2">
          <ContactInfo />
        </Reveal>
      </div>
    </NodeSection>
  )
}
