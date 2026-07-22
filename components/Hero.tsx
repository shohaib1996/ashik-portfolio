"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import FloatingIcons from "./floating-icons"
import Image from "next/image"
import ashik from "../public/ashik.png"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      {/* 🔵 Glowing Backgrounds */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,204,255,0.4),transparent_90%)] animate-glow-pulse  z-10"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,204,255,0.4),transparent_90%)] animate-glow-pulse z-10"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* ✨ Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingIcons />
      </div>

      {/* 🧵 Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              className="w-64 h-64 sm:w-96 sm:h-96 md:w-100 md:h-100 rounded-2xl bg-linear-to-br from-primary to-secondary p-1 shadow-2xl"
            >
              <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                <Image
                  src={ashik}
                  alt="Ashikur Rahaman"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            {/* Name and Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            >
              Ashikur Rahaman
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl sm:text-2xl text-primary font-semibold mb-6"
            >
              Textile Engineer | Yarn Engineering Specialist
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl"
            >
              I am a Textile Engineering graduate specializing in Yarn Engineering, with practical industrial exposure to knit composite and garment manufacturing. My areas of interest include production monitoring, quality control, batch tracking, process analysis, technical reporting, and continuous improvement. I have completed two industrial internships and contributed to three textile research publications, which strengthened my research, data analysis, and problem-solving abilities. My academic project on sustainable antibacterial treatment of bamboo-cotton blended yarn further developed my knowledge of textile innovation and sustainable processing. Alongside my technical background, my experience as a Class Representative has enhanced my leadership, communication, teamwork, and coordination skills. I am motivated to build a career in the textile industry where I can apply my knowledge, learn from experienced professionals, and contribute to production efficiency, product quality, and organizational growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/ashik-resume.pdf"
                download="Ashikur_Rahaman_Resume.pdf"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 rounded-lg bg-transparent"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
