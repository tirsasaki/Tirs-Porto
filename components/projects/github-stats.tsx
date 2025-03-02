"use client"

import { motion } from "framer-motion"
import { Star, GitFork, Users, Code2 } from "lucide-react"
import { useState, useEffect } from "react"
import { fetchGitHubData } from "@/lib/github-api"

const stats = [
  { label: "Repositories", icon: Code2, color: "#ff79c6" },
  { label: "Stars", icon: Star, color: "#f1fa8c" },
  { label: "Forks", icon: GitFork, color: "#50fa7b" },
  { label: "Contributions", icon: Users, color: "#bd93f9" },
]

export default function GithubStats() {
  const [githubStats, setGithubStats] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchGitHubData()
        setGithubStats(data)
      } catch (error) {
        console.error('Error loading GitHub stats:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadStats()
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-[#44475a]/20 backdrop-blur-sm rounded-xl p-4 hover:bg-[#44475a]/30 transition-all"
        >
          <div className="flex items-center gap-3 mb-2">
            <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
            <span className="text-sm text-[#6272a4]">{stat.label}</span>
          </div>
          <p className="text-2xl font-bold" style={{ color: stat.color }}>
            {isLoading ? (
              <span className="animate-pulse">...</span>
            ) : (
              githubStats?.[stat.label.toLowerCase()] || 0
            )}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

