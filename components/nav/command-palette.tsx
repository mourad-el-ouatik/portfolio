"use client"

import { Download, Github, Linkedin, Award, Mail, FolderGit2, CornerDownLeft } from "lucide-react"
import { toast } from "sonner"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { projects } from "@/lib/content/projects"
import { links, nodeNumber, profile, sections } from "@/lib/content/site"
import { goTo } from "@/lib/nav"

interface CommandPaletteProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const run = (fn: () => void) => {
    onOpenChange(false)
    window.setTimeout(fn, 120)
  }
  const external = (url: string) => run(() => window.open(url, "_blank", "noopener,noreferrer"))

  const onSearch = (value: string) => {
    if (value.trim().toLowerCase() === "sudo") {
      onOpenChange(false)
      toast.success("Accès accordé — bienvenue, recruteur.")
    }
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Palette de commandes"
      description="Aller à une section, un projet ou lancer une action."
    >
      <CommandInput placeholder="Aller à une section, un projet, une action…" onValueChange={onSearch} />
      <CommandList className="max-h-[60svh]">
        <CommandEmpty>Aucun résultat.</CommandEmpty>
        <CommandGroup heading="Aller à">
          {sections.map(({ id, label, index, icon: Icon }) => (
            <CommandItem key={id} value={`section ${label}`} onSelect={() => run(() => goTo(id))}>
              <Icon strokeWidth={1.75} aria-hidden />
              <span>{label}</span>
              <span className="ml-auto font-mono text-xs text-muted-foreground">{nodeNumber(index)}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem
            value="action télécharger le cv"
            onSelect={() =>
              run(() => {
                const a = document.createElement("a")
                a.href = profile.cv
                a.download = ""
                a.click()
              })
            }
          >
            <Download strokeWidth={1.75} aria-hidden /> Télécharger le CV
          </CommandItem>
          <CommandItem value="action m'écrire contact" onSelect={() => run(() => goTo("contact"))}>
            <Mail strokeWidth={1.75} aria-hidden /> M&apos;écrire
          </CommandItem>
          <CommandItem value="action ouvrir linkedin" onSelect={() => external(links.linkedin)}>
            <Linkedin strokeWidth={1.75} aria-hidden /> Ouvrir LinkedIn
          </CommandItem>
          <CommandItem value="action ouvrir github" onSelect={() => external(links.github)}>
            <Github strokeWidth={1.75} aria-hidden /> Ouvrir GitHub
          </CommandItem>
          <CommandItem value="action ouvrir credly" onSelect={() => external(links.credly)}>
            <Award strokeWidth={1.75} aria-hidden /> Ouvrir Credly
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Projets">
          {projects.map((p) => (
            <CommandItem key={p.id} value={`projet ${p.title}`} onSelect={() => run(() => goTo(`project-${p.id}`))}>
              <FolderGit2 strokeWidth={1.75} aria-hidden />
              <span className="truncate">{p.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
      <div className="flex items-center justify-between border-t px-3 py-2 font-mono text-xs text-muted-foreground">
        <span>↑↓ naviguer · Échap fermer</span>
        <span className="inline-flex items-center gap-1">
          <CornerDownLeft className="size-3" aria-hidden /> valider
        </span>
      </div>
    </CommandDialog>
  )
}
