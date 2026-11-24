import Image from "next/image"
import { ChipList } from "@/components/primitives/chip"
import { NodeHeader } from "@/components/primitives/node-header"
import { NodeSection } from "@/components/primitives/node-section"
import { Reveal } from "@/components/primitives/reveal"
import { highlights, idCard, interests } from "@/lib/content/about"
import { profile } from "@/lib/content/site"

export function About() {
  return (
    <NodeSection id="about">
      <NodeHeader id="about" title="Profil" description="Qui je suis, ce que je cherche, et sur quoi je m'appuie." />
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <aside className="lg:col-span-5 lg:self-start xl:col-span-4 lg:sticky lg:top-10">
          <Reveal>
            <div className="card-surface overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="t-label text-primary">Carte d&apos;accès</span>
                <span aria-hidden className="h-1.5 w-12 rounded-full bg-line" />
              </div>
              <div className="flex items-center gap-4 p-5">
                <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl border border-line">
                  <Image
                    src="/profile.jpeg"
                    alt="Portrait de Mourad EL OUATIK"
                    fill
                    sizes="96px"
                    className="object-cover [filter:saturate(0.85)_contrast(1.05)]"
                    style={{ objectPosition: "55% 30%" }}
                  />
                </div>
                <div>
                  <p className="font-display text-xl font-semibold leading-tight">{profile.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Consultant Cybersécurité & GRC (PFE)</p>
                </div>
              </div>
              <dl className="divide-y divide-line border-t border-line text-sm">
                {idCard.map(({ k, v }) => (
                  <div key={k} className="grid grid-cols-[6.5rem_1fr] gap-3 px-5 py-3">
                    <dt className="t-label self-center text-muted-foreground">{k}</dt>
                    <dd className="text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <ul className="mt-5 grid grid-cols-2 gap-3">
            {highlights.map(({ icon: Icon, label }, i) => (
              <Reveal as="li" key={label} delay={i * 0.06}>
                <div className="flex h-full items-center gap-3 rounded-xl border border-line bg-surface-1 p-3.5">
                  <Icon strokeWidth={1.75} className="size-5 shrink-0 text-primary" aria-hidden />
                  <span className="text-sm leading-snug">{label}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </aside>

        <div className="space-y-6 text-muted-foreground lg:col-span-7 xl:col-span-8">
          <Reveal>
            <p className="prose-fit text-xl font-medium leading-relaxed text-foreground">
              Étudiant en dernière année d&apos;ingénierie à l&apos;ENSA Marrakech, spécialisation Cyber Défense & Télécommunications Embarquées,
              je recherche un stage de fin d&apos;études en <mark className="hl">conseil Cybersécurité & GRC</mark>.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="prose-fit">
              Mon parcours technique (Architectures, IAM, Zero Trust) associé à une expertise en gouvernance et protection des données
              (<mark className="hl">certifié IBM GRC & Data Privacy</mark>) me permet d&apos;apporter une vision concrète et pragmatique. Mes rôles
              associatifs en tant que Président du Club Self-Dev et Vice-Président du MUN ENSA Marrakech ont renforcé mes compétences en
              gestion de projet et en collaboration.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="prose-fit">
              Passionné par l&apos;évaluation de solutions IT et la gestion des risques, je souhaite mettre mes compétences au service de clients pour
              piloter des chantiers de <mark className="hl">conformité ISO 27001</mark>, <mark className="hl">NIST CSF</mark>, tout en m&apos;appuyant sur
              des fondations techniques solides en <mark className="hl">Zero Trust</mark> et{" "}
              <mark className="hl">IA appliquée à la cybersécurité</mark>.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="border-t border-line pt-6">
            <h3 className="mb-4 font-display text-lg font-semibold text-foreground">Centres d&apos;intérêt</h3>
            <ChipList items={interests} variant="skill" />
          </Reveal>
        </div>
      </div>
    </NodeSection>
  )
}
