"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, GitFork, Github, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function GithubStats() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const stats = [
    {
      label: "Repositories",
      value: "40+",
      icon: <Github className="h-5 w-5 text-primary" />,
      delay: 0,
    },
    {
      label: "Stars",
      value: "200+",
      icon: <Star className="h-5 w-5 text-primary" />,
      delay: 0.1,
    },
    {
      label: "Forks",
      value: "50+",
      icon: <GitFork className="h-5 w-5 text-primary" />,
      delay: 0.2,
    },
    {
      label: "Contributions",
      value: "500+",
      icon: <Code className="h-5 w-5 text-primary" />,
      delay: 0.3,
    },
  ]

  return (
    <div className="py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: stat.delay }}
          >
            <Card className="border border-border/50 bg-secondary/20 hover:bg-secondary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  {stat.icon}
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

