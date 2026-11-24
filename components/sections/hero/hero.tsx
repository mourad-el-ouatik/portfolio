import { Award, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { ArrowGlyph } from "@/components/primitives/arrow-glyph"
import { ChipList } from "@/components/primitives/chip"
import { Reveal } from "@/components/primitives/reveal"
import { heroContent, links, profile } from "@/lib/content/site"
import { HeroMesh } from "./hero-mesh"
import { HeroPortrait } from "./hero-portrait"
import { HeroStats } from "./hero-stats"

const socials = [
  { href: links.github, label: "GitHub", icon: Github },
  { href: links.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: links.credly, label: "Credly", icon: Award },
]

export function Hero() {
  const [a, bold1, c, bold2, d] = heroContent.lede
  return (
    <section id="hero" aria-label="Accueil" className="relative isolate flex min-h-[100svh] flex-col justify-center pb-24 pt-20 sm:pt-24">
      <HeroMesh />
      <div className="container-x">
        <div className="grid items-center gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="order-first lg:order-last lg:col-span-5">
            <HeroPortrait />
          </div>

          <div className="[container-type:inline-size] lg:col-span-7">
            <Reveal>
              <p className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-ok/30 bg-ok/10 px-3.5 py-1.5 text-xs font-medium text-ok sm:text-sm">
                <span aria-hidden className="size-2 shrink-0 rounded-full bg-ok" />
                <span>{profile.availability}</span>
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="t-label mt-4 text-muted-foreground sm:mt-6">{profile.title}</p>
            </Reveal>
            <h1 className="mt-2 font-display font-bold tracking-[-0.035em] text-foreground [font-size:min(clamp(2.75rem,7vw+1rem,7.5rem),15cqi)] [line-height:1.02] sm:mt-3">
              {profile.firstName}
              <span className="block text-primary">{profile.lastName}</span>
            </h1>
            <Reveal delay={0.1}>
              <p className="prose-fit mt-5 text-muted-foreground sm:mt-8">
                {a}
                <strong className="hl">{bold1}</strong>
                {c}
                <strong className="hl">{bold2}</strong>
                {d}
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#experience"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-[transform,opacity] hover:opacity-90"
              >
                Voir mon parcours
                <ArrowGlyph className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-line px-6 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
              >
                <Mail strokeWidth={1.75} className="size-4" aria-hidden />
                Me contacter
              </a>
              <a
                href={profile.cv}
                download
                className="group inline-flex min-h-12 items-center justify-center gap-2 px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Download strokeWidth={1.75} className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden />
                Télécharger le CV
              </a>
            </Reveal>
            <Reveal delay={0.2} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <ul className="flex items-center gap-1">
                {socials.map(({ href, label, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex size-11 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon strokeWidth={1.75} className="size-5" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin strokeWidth={1.75} className="size-4" aria-hidden />
                {profile.location}
              </span>
            </Reveal>
            <Reveal delay={0.25} className="mt-4 hidden sm:block">
              <ChipList items={heroContent.techStack} />
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.3} className="mt-12 lg:mt-16">
          <HeroStats />
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Défiler vers la section À propos"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground sm:flex lg:translate-x-[calc(-50%+2.25rem)]"
      >
        <span className="t-label">Défiler</span>
        <span aria-hidden className="scroll-line" />
      </a>
    </section>
  )
}
