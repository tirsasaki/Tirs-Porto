"use client"

import { motion } from "framer-motion"
import { Code2, Briefcase, Coffee, Star } from "lucide-react"

const stats = [
  {
    title: "Projects",
    value: "20+",
    description: "Completed",
    icon: Briefcase,
    color: "#bd93f9", // Purple
  },
  {
    title: "Experience",
    value: "5+",
    description: "Years",
    icon: Code2,
    color: "#ff79c6", // Pink
  },
  {
    title: "Coffee",
    value: "∞",
    description: "Consumed",
    icon: Coffee,
    color: "#ffb86c", // Orange
  },
  {
    title: "Stars",
    value: "100+",
    description: "On GitHub",
    icon: Star,
    color: "#f1fa8c", // Yellow
  },
]

export default function Stats() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff79c6] to-[#bd93f9] bg-clip-text text-transparent">
          Achievement Unlocked
        </h2>
        <p className="text-[#6272a4] max-w-2xl mx-auto">
          A snapshot of my journey in numbers
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            variants={item}
            className="bg-[#44475a]/50 backdrop-blur-sm rounded-xl p-6 text-center group hover:bg-[#44475a]/70 transition-all"
          >
            <div className="flex justify-center mb-4">
              <div 
                className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon 
                  className="w-6 h-6 transition-all duration-300"
                  style={{ color: stat.color }}
                />
              </div>
            </div>
            <div className="space-y-1">
              <h3 
                className="text-3xl font-bold transition-all duration-300 group-hover:text-white"
                style={{ color: stat.color }}
              >
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-white/80">{stat.title}</p>
              <p className="text-xs text-white/60">{stat.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

