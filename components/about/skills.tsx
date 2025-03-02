"use client"

import { motion } from "framer-motion"
import { Code2, Server, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "#ff79c6",
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "#bd93f9",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "MongoDB", level: 70 },
    ]
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    color: "#50fa7b",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Docker", level: 60 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 75 },
    ]
  }
]

export default function Skills() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff79c6] to-[#bd93f9] bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="text-[#6272a4] max-w-2xl mx-auto">
          A collection of technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="bg-[#44475a]/20 backdrop-blur-sm rounded-xl p-6 hover:bg-[#44475a]/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <category.icon 
                className="w-5 h-5"
                style={{ color: category.color }} 
              />
              <h3 className="text-lg font-semibold text-[#f8f8f2]">
                {category.title}
              </h3>
            </div>

            <div className="space-y-6">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-[#f8f8f2]">{skill.name}</span>
                    <span 
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ 
                        backgroundColor: `${category.color}20`,
                        color: category.color
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#282a36] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: category.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

