"use client"

import { motion } from "framer-motion"
import { Code2, Briefcase, GraduationCap, Trophy } from "lucide-react"

const timeline = [
  {
    year: "2024",
    title: "Senior Frontend Developer",
    company: "Freelance & Open Source",
    description: "Specializing in React, Next.js, and TypeScript. Building modern web applications and contributing to open source projects.",
    icon: Code2,
    color: "#ff79c6",
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "Tech Company",
    description: "Developed and maintained multiple web applications. Worked with React, Node.js, and various databases.",
    icon: Briefcase,
    color: "#bd93f9",
  },
  {
    year: "2020",
    title: "Web Developer",
    company: "Digital Agency",
    description: "Created responsive websites and e-commerce platforms. Focused on frontend development with HTML, CSS, and JavaScript.",
    icon: Trophy,
    color: "#50fa7b",
  },
  {
    year: "2018",
    title: "Started Coding Journey",
    company: "Self-taught Developer",
    description: "Began learning web development through online courses and tutorials. Started with HTML, CSS, and basic JavaScript.",
    icon: GraduationCap,
    color: "#8be9fd",
  },
]

export default function Journey() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff79c6] to-[#bd93f9] bg-clip-text text-transparent">
          My Journey
        </h2>
        <p className="text-[#6272a4] max-w-2xl mx-auto">
          From writing my first line of code to building complex applications
        </p>
      </motion.div>

      <div className="space-y-12 mt-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-[#ff79c6] before:via-[#bd93f9] before:to-[#8be9fd] md:before:mx-auto md:before:translate-x-0">
        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
              index !== timeline.length - 1 ? "pb-1" : ""
            }`}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 bg-[#282a36] shadow shrink-0 md:mx-auto dark:bg-slate-900 group-hover:scale-110 transition-transform duration-300"
                style={{ borderColor: item.color }}>
              <item.icon className="w-4 h-4" style={{ color: item.color }} />
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#44475a]/30 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-[#44475a]/50 transition-colors">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-mono text-sm text-[#bd93f9]">{item.year}</span>
                <span className="text-[#6272a4]">•</span>
                <span className="text-[#6272a4] text-sm">{item.company}</span>
              </div>
              <h3 className="text-lg font-bold text-[#f8f8f2] mb-2">{item.title}</h3>
              <p className="text-[#6272a4] text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
