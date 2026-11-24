import { heroContent } from "@/lib/content/site"
import { CountUp } from "./count-up"

export function HeroStats() {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 lg:grid-cols-4">
      {heroContent.stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse gap-1.5">
          <dt className="max-w-[22ch] text-sm leading-snug text-muted-foreground">{stat.label}</dt>
          <dd className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {stat.parts.map((part, i) =>
              "to" in part ? (
                <CountUp key={i} to={part.to} suffix={"suffix" in part ? part.suffix : undefined} />
              ) : (
                <span key={i} className="text-muted-foreground">
                  {part.sep}
                </span>
              ),
            )}
          </dd>
        </div>
      ))}
    </dl>
  )
}
