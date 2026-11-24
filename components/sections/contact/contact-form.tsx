"use client"

import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react"
import { useRef, useState, type FormEvent } from "react"
import { z } from "zod"
import { profile } from "@/lib/content/site"
import { cn } from "@/lib/utils"

const schema = z.object({
  name: z.string().trim().min(2, "Indiquez votre nom (2 caractères minimum)."),
  email: z.string().trim().email("Indiquez une adresse e-mail valide."),
  subject: z.string().trim().min(3, "Indiquez l'objet de votre message."),
  message: z.string().trim().min(10, "Votre message doit contenir au moins 10 caractères."),
})
type Field = keyof z.infer<typeof schema>
type Status = "idle" | "sending" | "success" | "error"

const fieldClass =
  "w-full rounded-lg border border-line bg-background/60 px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring aria-[invalid=true]:border-destructive"

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({})
  const [status, setStatus] = useState<Status>("idle")
  const [message, setMessage] = useState("")

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    const result = schema.safeParse(data)
    if (!result.success) {
      const next: Partial<Record<Field, string>> = {}
      for (const issue of result.error.issues) next[issue.path[0] as Field] ??= issue.message
      setErrors(next)
      setStatus("error")
      setMessage("Le formulaire contient des erreurs : corrigez les champs signalés.")
      formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus()
      return
    }
    setErrors({})
    setStatus("sending")
    setMessage("Ouverture de votre messagerie…")
    const { name, email, subject, message: body } = result.data
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nom : ${name}\nE-mail : ${email}\n\nMessage :\n${body}`)}`
    try {
      window.location.href = href
      window.setTimeout(() => {
        setStatus("success")
        setMessage("Votre messagerie devrait s'ouvrir avec le message prêt à envoyer.")
      }, 600)
    } catch {
      setStatus("error")
      setMessage("Impossible d'ouvrir votre messagerie.")
    }
  }

  const field = (name: Field, label: string) => ({
    id: `contact-${name}`,
    name,
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    className: fieldClass,
    "data-label": label,
  })
  const Label = ({ name, children }: { name: Field; children: string }) => (
    <label htmlFor={`contact-${name}`} className="t-label mb-2 block text-muted-foreground">
      <span aria-hidden className="mr-1.5 text-primary">&gt;</span>
      {children}
    </label>
  )
  const Err = ({ name }: { name: Field }) =>
    errors[name] ? (
      <p id={`contact-${name}-error`} className="mt-1.5 text-sm text-destructive">{errors[name]}</p>
    ) : null

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label name="name">Nom</Label>
          <input type="text" autoComplete="name" required placeholder="Votre nom" {...field("name", "Nom")} />
          <Err name="name" />
        </div>
        <div>
          <Label name="email">E-mail</Label>
          <input type="email" autoComplete="email" inputMode="email" required placeholder="vous@exemple.com" {...field("email", "E-mail")} />
          <Err name="email" />
        </div>
      </div>
      <div>
        <Label name="subject">Objet</Label>
        <input type="text" autoComplete="off" required placeholder="Opportunité de stage / Collaboration de recherche" {...field("subject", "Objet")} />
        <Err name="subject" />
      </div>
      <div>
        <Label name="message">Message</Label>
        <textarea rows={6} required placeholder="Parlez-moi de votre projet ou de votre opportunité…" {...field("message", "Message")} className={cn(fieldClass, "resize-y")} />
        <Err name="message" />
      </div>

      <div className="sticky bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-10 -mx-5 space-y-3 bg-gradient-to-t from-surface-1 from-70% to-transparent px-5 pb-1 pt-6 sm:-mx-8 sm:px-8 lg:static lg:mx-0 lg:bg-none lg:p-0">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? <Loader2 strokeWidth={1.75} className="size-4 animate-spin" aria-hidden /> : <Send strokeWidth={1.75} className="size-4" aria-hidden />}
          {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
        </button>
        <p
          role="status"
          aria-live="polite"
          className={cn("flex min-h-5 items-start gap-2 text-sm", status === "error" ? "text-destructive" : status === "success" ? "text-ok" : "text-muted-foreground")}
        >
          {status === "error" && <AlertCircle strokeWidth={1.75} className="mt-0.5 size-4 shrink-0" aria-hidden />}
          {status === "success" && <CheckCircle2 strokeWidth={1.75} className="mt-0.5 size-4 shrink-0" aria-hidden />}
          <span>{message}</span>
        </p>
      </div>
      <p className="text-sm text-muted-foreground">
        Ou écrivez-moi directement à{" "}
        <a href={`mailto:${profile.email}`} className="text-primary underline underline-offset-4 [overflow-wrap:anywhere]">{profile.email}</a>.
      </p>
    </form>
  )
}
