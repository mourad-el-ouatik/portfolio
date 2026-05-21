"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Award, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Mourad EL OUATIK. All rights reserved.
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mourad-el-ouatik"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mourad-el-ouatik"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.credly.com/users/mourad-el-ouatik"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Award className="w-5 h-5" />
            </a>
          </div>

          {/* Right - Built with */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground font-mono">
              <span className="text-primary">&lt;/html&gt;</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
