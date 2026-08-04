"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Award, ArrowDown, Download, MapPin } from "lucide-react"
import { useEffect } from "react"

const stats = [
  { value: "38+", label: "Security Projects" },
  { value: "3", label: "Certifications" },
  { value: "2", label: "Scientific Articles" },
  { value: "4", label: "Leadership Roles" },
]

const techStack = [
  "Docker", "Terraform", "Kubernetes", "Python", "Linux", "Wazuh", "Ollama"
]

export function Hero() {
  // Load Credly embed script once
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//cdn.credly.com/assets/utilities/embed.js'
    script.async = true
    script.type = 'text/javascript'
    document.body.appendChild(script)

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll('script[src="//cdn.credly.com/assets/utilities/embed.js"]')
      scripts.forEach(s => s.remove())
    }
  }, [])

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative px-6 lg:px-12 pt-20">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.25_0.01_250)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.25_0.01_250)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">Available for PFE Internship</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-muted-foreground font-mono text-sm tracking-wide">Cybersecurity Engineering Student</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                <span className="text-foreground">Mourad</span>{" "}
                <span className="text-primary">EL OUATIK</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              I design and implement resilient cybersecurity solutions, specializing in{" "}
              <span className="text-foreground font-medium">DevSecOps automation</span>,{" "}
              <span className="text-foreground font-medium">cloud security architecture</span>, and{" "}
              <span className="text-foreground font-medium">AI-powered threat detection</span>.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
              <a
                href="./CV_Mourad_EL_OUATIK_COMPLET_FR.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6 pt-4"
            >
              <a href="https://github.com/mourad-el-ouatik" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/mourad-el-ouatik" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.credly.com/users/mourad-el-ouatik" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Award className="w-5 h-5" />
              </a>
              <span className="h-4 w-px bg-border" />
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Marrakech, Morocco
              </span>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-2 pt-4"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Credly Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="bg-secondary/30 backdrop-blur-sm p-4 rounded-2xl border border-border">
              <p className="text-xs font-mono text-muted-foreground text-center mb-3">Certifications</p>
              <div className="flex flex-col gap-4 items-center">
                {/* Badge 1 */}
                <div 
                  data-iframe-width="150" 
                  data-iframe-height="270" 
                  data-share-badge-id="03f5945d-b591-4cc6-beb6-dec540bc578d" 
                  data-share-badge-host="https://www.credly.com"
                />
                
                {/* Badge 2 */}
                <div 
                  data-iframe-width="150" 
                  data-iframe-height="270" 
                  data-share-badge-id="ea29b4f1-b0b8-4e32-bdde-bc2838616cad" 
                  data-share-badge-host="https://www.credly.com"
                />
                
                {/* Badge 3 */}
                <div 
                  data-iframe-width="150" 
                  data-iframe-height="270" 
                  data-share-badge-id="53c8d5cb-fdc6-4d78-9326-4d86d16adc1f" 
                  data-share-badge-host="https://www.credly.com"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-mono">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
