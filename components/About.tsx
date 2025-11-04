"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import skillsImage from "../public/skills.jpg"
import Image from "next/image"

export default function About() {
  const skills = [
    {
      category: "Technical",
      items: [
        "Yarn Testing & Analysis",
        "Fiber Identification",
        "Quality Control",
        "Fabric Property Evaluation",
        "Defect Analysis",
      ],
    },
    { category: "Software", items: ["MS Excel", "MS Word", "MS PowerPoint", "Data Analysis", "Documentation"] },
    { category: "Professional", items: ["Leadership", "Teamwork", "Research", "Communication", "Problem Solving"] },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About & Skills</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 grid md:grid-cols-3 gap-8"
        >
          <div className="flex flex-col justify-center text-left">
            <h3 className="text-xl font-semibold text-primary mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground">B.Sc. In Textile Engineering</h4>
                <p className="text-muted-foreground">Tangail Textile Engineering College</p>
                <p className="text-sm text-muted-foreground">2022 - Present | CGPA: 3.12/4.0</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Diploma In Textile Engineering</h4>
                <p className="text-muted-foreground">National Polytechnic Institute</p>
                <p className="text-sm text-muted-foreground">2016 - 2021 | CGPA: 3.81/4.0</p>
              </div>
            </div>
          </div>
          <div>
            <Image src={skillsImage} alt="skills" width={400} height={400} className="rounded-xl" />
          </div>
          <div className="flex flex-col justify-end text-right">
            <h3 className="text-xl font-semibold text-primary mb-4">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground">Research Assistant</h4>
                <p className="text-muted-foreground">Tangail Textile Engineering College</p>
                <p className="text-sm text-muted-foreground">Feb 2024 - April 2024</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Class Representative</h4>
                <p className="text-muted-foreground">Department of Yarn Engineering</p>
                <p className="text-sm text-muted-foreground">2024 - Present</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="border-border bg-background hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <li key={i} className="text-foreground flex items-start">
                        <span className="text-accent mr-3">•</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
