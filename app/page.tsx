import { Navigation } from "@/components/navigation"
import { ScrollProgress } from "@/components/scroll-progress"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { Skills } from "@/components/skills"
import { Leadership } from "@/components/leadership"
import { Research } from "@/components/research"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Skills />
      <Leadership />
      <Research />
      <Contact />
      <Footer />
    </main>
  )
}
