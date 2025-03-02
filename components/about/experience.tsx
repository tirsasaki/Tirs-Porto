"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Leading the frontend development team, implementing modern web technologies and best practices. Improved application performance by 40% through code optimization.",
      technologies: ["React", "Next.js", "TypeScript", "GraphQL"],
      delay: 0,
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed and maintained multiple web applications for clients across various industries. Collaborated with design and backend teams to deliver high-quality products.",
      technologies: ["Vue.js", "Node.js", "Express", "MongoDB"],
      delay: 0.1,
    },
    {
      title: "Web Developer",
      company: "Creative Agency",
      period: "2016 - 2018",
      description:
        "Designed and developed responsive websites for small to medium businesses. Worked directly with clients to understand requirements and deliver solutions that met their needs.",
      technologies: ["HTML/CSS", "JavaScript", "WordPress", "PHP"],
      delay: 0.2,
    },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: experience.delay }}
          >
            <Card className="border border-border/50">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{experience.title}</CardTitle>
                    <CardDescription>{experience.company}</CardDescription>
                  </div>
                  <Badge variant="outline">{experience.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

