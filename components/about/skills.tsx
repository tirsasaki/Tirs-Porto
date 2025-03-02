"use client"

import { motion } from "framer-motion"

const skills = {
  "Frontend": [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 95 },
  ],
  "Backend": [
    { name: "Node.js", level: 75 },
    { name: "Express", level: 70 },
    { name: "PostgreSQL", level: 65 },
    { name: "MongoDB", level: 70 },
  ],
  "Tools": [
    { name: "Git", level: 85 },
    { name: "Docker", level: 60 },
    { name: "VS Code", level: 90 },
    { name: "Figma", level: 75 },
  ]
}

export default function Skills() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff79c6] to-[#bd93f9] bg-clip-text text-transparent">
        Skills & Technologies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-[#f8f8f2] mb-4">{category}</h3>
            <div className="space-y-4">
              {items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-[#6272a4]">{skill.name}</span>
                    <span className="text-sm text-[#6272a4]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-[#44475a] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#ff79c6] to-[#bd93f9]"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

