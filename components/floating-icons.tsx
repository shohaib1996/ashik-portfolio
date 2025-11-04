"use client"

import { motion } from "framer-motion"

export default function FloatingIcons() {
  const icons = [
    { icon: "🧵", x: "10%", y: "20%", delay: 0 },
    { icon: "🎀", x: "85%", y: "30%", delay: 0.5 },
    { icon: "📊", x: "75%", y: "70%", delay: 1 },
    { icon: "✨", x: "15%", y: "70%", delay: 0.3 },
    { icon: "🏭", x: "80%", y: "15%", delay: 0.8 },
    { icon: "🎯", x: "20%", y: "50%", delay: 0.2 },
    { icon: "💼", x: "70%", y: "40%", delay: 1.1 },
    { icon: "⚙️", x: "25%", y: "85%", delay: 0.6 },
    { icon: "👕", x: "12%", y: "35%", delay: 0.4 },
    { icon: "🧶", x: "88%", y: "55%", delay: 0.9 },
    { icon: "📐", x: "65%", y: "25%", delay: 0.7 },
    { icon: "🔬", x: "35%", y: "15%", delay: 1.3 },
    { icon: "🎨", x: "92%", y: "75%", delay: 0.1 },
    { icon: "📈", x: "18%", y: "65%", delay: 1.2 },
    { icon: "🧬", x: "78%", y: "85%", delay: 0.4 },
    { icon: "💡", x: "8%", y: "45%", delay: 1.5 },
  ]

  return (
    <div className="absolute inset-0 opacity-10 dark:opacity-15">
      {icons.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ x: 0, y: 0 }}
          animate={{ y: [-20, 20, -20] }}
          transition={{
            duration: 5 + idx * 0.3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: item.delay,
          }}
          className="absolute text-6xl"
          style={{
            left: item.x,
            top: item.y,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  )
}
