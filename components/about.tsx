"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Cloud, GitBranch, LineChart } from "lucide-react"

const highlights = [
  { icon: Shield, label: "Security Architect" },
  { icon: Cloud, label: "Cloud Security" },
  { icon: GitBranch, label: "CI/CD Security" },
  { icon: LineChart, label: "Threat Analytics" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Labels */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24"
          >
            <span className="font-mono text-sm text-primary tracking-wider">ABOUT</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6">
              Who I Am
            </h2>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p className="text-foreground text-lg font-medium">
              4th year Engineering student specializing in Cyber Defense and Embedded 
              Telecommunications at ENSA Marrakech, with a strong focus on cryptography, 
              Linux/Unix systems security, and intrusion detection systems.
            </p>

            <p>
              With extensive experience developing academic and professional security projects, 
              I have strengthened my expertise in DevSecOps practices, cloud security architecture, 
              and real-time threat monitoring. My leadership roles as President of Self-Dev Club 
              and Vice-President of MUN ENSA Marrakech have honed my project management and 
              collaborative skills.
            </p>

            <p>
              I am passionate about designing innovative and resilient cybersecurity solutions, 
              leveraging cutting-edge technologies like{" "}
              <span className="text-primary">post-quantum cryptography</span>,{" "}
              <span className="text-primary">SDN firewalls</span>, and{" "}
              <span className="text-primary">AI-powered threat detection</span>{" "}
              to protect modern infrastructure.
            </p>

            <div className="pt-6 border-t border-border">
              <h3 className="text-foreground font-semibold mb-4">Research Interests</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Post-Quantum Cryptography",
                  "AI in Cybersecurity",
                  "Threat Intelligence",
                  "Cloud Security",
                  "Zero-Trust Architecture",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
