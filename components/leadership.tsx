"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Landmark, Users } from "lucide-react"

const leadership = [
  {
    organization: "MUN ENSA Marrakech",
    icon: Landmark,
    image: "/bg1.png",
    roles: [
      {
        title: "Co-Founder",
        period: "May 2024 · 1 month",
        description: "Co-founded the first Model United Nations initiative at ENSA, contributing to the vision, structure, and strategic direction. Played a key role in launch planning, team coordination, and concept development.",
        skills: ["Vision Building", "Strategic Collaboration", "Initiative & Ownership"],
      },
      {
        title: "Vice President",
        period: "June 2024 - April 2025 · 11 months",
        description: "Led organizational strategy and operational execution for ENSA's flagship diplomatic simulation program. Oversaw project planning, internal coordination, and committee management.",
        skills: ["Leadership & Delegation", "Decision-Making Under Pressure", "Organizational Excellence"],
      },
    ],
  },
  {
    organization: "Club Self-Dev",
    icon: Users,
    image: "/bg2.png",
    roles: [
      {
        title: "President",
        period: "April 2024 - May 2025 · 1 year 2 months",
        description: "Guided the club's strategic vision and long-term development. Led personal development programs, workshops, and initiatives focusing on leadership, mindset, and critical thinking.",
        skills: ["Inspirational Leadership", "Strategic Thinking", "Community Building"],
      },
      {
        title: "General Secretary",
        period: "May 2023 - April 2024 · 1 year",
        description: "Managed administrative, organizational, and coordination activities. Played a central role in planning events, documenting activities, and structuring internal processes.",
        skills: ["Effective Communication", "Attention to Detail", "Reliability & Discipline"],
      },
    ],
  },
]

export function Leadership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="leadership" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-primary tracking-wider">LEADERSHIP</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4">Leadership & Activities</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Building communities and leading initiatives
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((org, index) => {
            const Icon = org.icon
            return (
              <motion.div
                key={org.organization}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                {/* Image Banner */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={org.image}
                    alt={org.organization}
                    className="w-full h-full object-cover"
                  />
                
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
                
                {/* Header */}
                <div className="p-6 border-b border-border flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{org.organization}</h3>
                </div>

                {/* Roles */}
                <div className="p-6 space-y-6">
                  {org.roles.map((role, roleIndex) => (
                    <div key={role.title} className={roleIndex > 0 ? "pt-6 border-t border-border" : ""}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{role.title}</h4>
                      </div>
                      <p className="text-xs font-mono text-muted-foreground mb-3">{role.period}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {role.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-xs bg-primary/10 text-primary border border-primary/20 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
