import { Fragment } from "react"
import { Identity } from "@/components/nav/identity"
import { NodeDock } from "@/components/nav/node-dock"
import { CommandLauncher } from "@/components/nav/command-launcher"
import { CableDivider } from "@/components/primitives/cable-divider"
import { About } from "@/components/sections/about/about"
import { Certifications } from "@/components/sections/certifications/certifications"
import { Contact } from "@/components/sections/contact/contact"
import { Education } from "@/components/sections/education/education"
import { Experience } from "@/components/sections/experience/experience"
import { Footer } from "@/components/sections/footer/footer"
import { Hero } from "@/components/sections/hero/hero"
import { Leadership } from "@/components/sections/leadership/leadership"
import { Projects } from "@/components/sections/projects/projects"
import { Research } from "@/components/sections/research/research"
import { Skills } from "@/components/sections/skills/skills"

const sections = [Hero, About, Experience, Education, Projects, Certifications, Skills, Leadership, Research, Contact]

export default function Portfolio() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-primary focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Aller au contenu
      </a>
      <Identity />
      <NodeDock />
      <CommandLauncher />
      <main id="main">
        {sections.map((Section, i) => (
          <Fragment key={i}>
            {i > 0 && <CableDivider />}
            <Section />
          </Fragment>
        ))}
      </main>
      <Footer />
    </>
  )
}
