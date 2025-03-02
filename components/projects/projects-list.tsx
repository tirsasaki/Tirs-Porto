"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fetchGithubProjects } from "@/lib/github"
import type { GithubProject } from "@/lib/github"

export default function ProjectsList() {
  const [projects, setProjects] = useState<GithubProject[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchGithubProjects().then(data => {
      setProjects(data)
      setIsLoading(false)
    })
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  if (isLoading) {
    return <div className="text-center py-12 text-muted-foreground">Loading projects...</div>
  }

  return (
    <div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            className="group relative bg-[#44475a]/30 rounded-lg overflow-hidden hover:bg-[#44475a]/50 transition-all duration-300"
          >
            <div className="aspect-video relative overflow-hidden bg-[#282a36]">
              <Image
                src={project.featuredImage}
                alt={project.name}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[#282a36]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <Button variant="secondary" size="sm" className="text-xs" asChild>
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </a>
                </Button>
                {project.homepage && (
                  <Button variant="default" size="sm" className="text-xs" asChild>
                    <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-[#f8f8f2]">{project.name}</h3>
                <div className="flex items-center text-xs text-[#6272a4]">
                  <Star className="h-3 w-3 mr-1" />
                  {project.stars}
                </div>
              </div>
              <p className="text-[#6272a4] mb-3 text-sm line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.topics.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-[#6272a4]/20 text-[#bd93f9]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

