import { ArrowUp, Award, Github, Linkedin } from "lucide-react"
import { Monogram } from "@/components/primitives/monogram"
import { links, profile } from "@/lib/content/site"
import { CurrentYear } from "./current-year"

const quick = [
  { href: "#experience", label: "Parcours" },
  { href: "#projects", label: "Projets" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
]
const socials = [
  { href: links.github, label: "GitHub", icon: Github },
  { href: links.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: links.credly, label: "Credly", icon: Award },
]

export function Footer() {
  return (
    <footer className="border-t border-line pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-12 lg:pb-12">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_auto] md:items-start md:gap-16">
          <div className="flex items-center gap-4">
            <Monogram />
            <div>
              <p className="font-display text-lg font-semibold">{profile.name}</p>
              <p className="text-sm text-muted-foreground">Consultant Cybersécurité & GRC · {profile.location}</p>
            </div>
          </div>
          <nav aria-label="Liens rapides">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {quick.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex items-center gap-1">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (nouvel onglet)`}
                  className="inline-flex size-11 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon strokeWidth={1.75} className="size-5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> Mourad EL OUATIK. Tous droits réservés.
          </p>
          <p className="inline-flex items-center gap-2 font-mono text-xs">
            <span aria-hidden className="size-2 rounded-full bg-ok" />
            Tous systèmes opérationnels
          </p>
          <a href="#hero" className="group inline-flex min-h-11 items-center gap-2 text-foreground transition-colors hover:text-primary">
            Retour en haut
            <ArrowUp strokeWidth={1.75} className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  )
}
