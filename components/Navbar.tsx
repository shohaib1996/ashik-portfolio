"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import ThemeSwitcher from "./theme-switcher"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="shrink-0">
            <a
              href="#home"
              className="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Ashikur
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:text-primary hover:bg-secondary/50 transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
            <div className="ml-4 pl-4 border-l border-border">
              <ThemeSwitcher />
            </div>
          </div>

          {/* Mobile menu button and theme switcher */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-secondary/50 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t border-border"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-secondary/50 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}
