"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Publications() {
  const publications = [
    {
      title:
        "Predictive Modeling of Tearing Strength in Laser-Engraved Denim Garments Using Multiple Linear Regression",
      authors: "Rahaman, A., Khalil, E., Miah, M. H., Ahmed, S., Hossen, A., & Khatun, S.",
      journal: "Advanced Research Journal",
      date: "June 9, 2025",
      volume: "Vol. 6, No. 1",
      doi: "https://doi.org/10.71350/3062192558",
      description:
        "Developed an MLR model to predict denim tearing strength with high accuracy (R² = 0.9967 warp, 0.9911 weft), aiding optimization of laser engraving parameters.",
    },
    {
      title: "Comparative Study on the Quality Parameters of Ring and Rotor Spun Yarn: A Case Study",
      authors: "Rahaman, A., Hossain, S., Khalil, E., Akter, S., Roy, C. K., Saikat, P., Bala, P., & Amin, M. A.",
      journal: "Advanced Research Journal",
      date: "July 14, 2025",
      volume: "Vol. 8, No. 1",
      doi: "https://doi.org/10.71350/3062192577",
      description:
        "Conducted comparative analysis of ring and rotor spun yarns. Found ring spun exhibited higher tensile strength, while rotor spun showed better uniformity.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Publications & Research</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        {/* Publications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {publications.map((pub, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="border-border overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-muted/30">
                  <div className="flex flex-col gap-2">
                    <CardTitle className="text-lg text-primary">{pub.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{pub.authors}</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-foreground mb-4 leading-relaxed">{pub.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold">Journal:</span> {pub.journal}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-semibold">Volume:</span> {pub.volume}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        <span className="font-semibold">Date:</span> {pub.date}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-semibold">DOI:</span> {pub.doi.split("/").pop()}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                    onClick={() => window.open(pub.doi, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Paper
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
