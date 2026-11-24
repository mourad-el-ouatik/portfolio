"use client"

import { Award, Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { links, profile } from "@/lib/content/site"

const socials = [
  { href: links.github, label: "GitHub", icon: Github },
  { href: links.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: links.credly, label: "Credly", icon: Award },
]

const rowClass = "flex items-center gap-4 rounded-xl border border-line bg-surface-1 p-4"
const iconBox = "flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"

export function ContactInfo() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      toast.success("E-mail copié dans le presse-papiers")
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error("Copie impossible — sélectionnez l'adresse manuellement.")
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-display text-xl font-semibold">Coordonnées</h3>
        <ul className="mt-5 space-y-3">
          <li className={rowClass}>
            <span className={iconBox}><Mail strokeWidth={1.75} className="size-5" aria-hidden /></span>
            <div className="min-w-0 flex-1">
              <p className="t-label text-muted-foreground">E-mail</p>
              <a href={`mailto:${profile.email}`} className="block text-foreground [overflow-wrap:anywhere] hover:text-primary">{profile.email}</a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copier l'email"
                className="mt-2 inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg border border-line px-3 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {copied ? <Check strokeWidth={1.75} className="size-4 text-ok" aria-hidden /> : <Copy strokeWidth={1.75} className="size-4" aria-hidden />}
                <span>{copied ? "Copié" : "Copier l'email"}</span>
              </button>
            </div>
          </li>
          <li className={rowClass}>
            <span className={iconBox}><Phone strokeWidth={1.75} className="size-5" aria-hidden /></span>
            <div>
              <p className="t-label text-muted-foreground">Téléphone</p>
              <a href={profile.phoneHref} className="text-foreground hover:text-primary">{profile.phone}</a>
            </div>
          </li>
          <li className={rowClass}>
            <span className={iconBox}><MapPin strokeWidth={1.75} className="size-5" aria-hidden /></span>
            <div>
              <p className="t-label text-muted-foreground">Localisation</p>
              <p className="text-foreground">{profile.location}</p>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-display text-lg font-semibold">Me retrouver</h3>
        <ul className="mt-4 flex gap-3">
          {socials.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (nouvel onglet)`}
                className="flex size-12 items-center justify-center rounded-xl border border-line bg-surface-1 transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Icon strokeWidth={1.75} className="size-5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-ok/30 bg-ok/10 p-4">
        <div className="flex items-start gap-3">
          <span aria-hidden className="mt-2 size-2.5 shrink-0 rounded-full bg-ok" />
          <div>
            <p className="font-medium text-foreground">Disponible pour un stage de fin d&apos;études</p>
            <p className="mt-1 text-sm text-muted-foreground">{profile.availabilityDetail}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
