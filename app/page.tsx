import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Certifications } from "@/components/certifications"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Leadership } from "@/components/leadership"
import { Research } from "@/components/research"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Experience />
      <Leadership />
      <Research />
      <Contact />
      <Footer />
    </main>
  )
}
