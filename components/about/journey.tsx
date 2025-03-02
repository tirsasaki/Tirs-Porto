"use client"

import { motion } from "framer-motion"

const timeline = [
  {
    year: "2024",
    title: "Senior Frontend Developer",
    company: "Tech Company",
    description: "Leading frontend development team and implementing modern web solutions."
  },
  {
    year: "2023",
    title: "Frontend Developer",
    company: "Startup",
    description: "Developed and maintained multiple web applications using React and Next.js."
  },
  {
    year: "2022",
    title: "Junior Developer",
    company: "Agency",
    description: "Started my journey in web development, working on various client projects."
  }
]

export default function Journey() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff79c6] to-[#bd93f9] bg-clip-text text-transparent">
        My Journey
      </h2>

      <div className="space-y-12">
        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 border-l-2 border-[#44475a]"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#ff79c6]" />
            <div className="space-y-2">
              <span className="text-[#bd93f9] font-mono">{item.year}</span>
              <h3 className="text-xl font-bold text-[#f8f8f2]">{item.title}</h3>
              <p className="text-[#6272a4] font-medium">{item.company}</p>
              <p className="text-[#6272a4]">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
