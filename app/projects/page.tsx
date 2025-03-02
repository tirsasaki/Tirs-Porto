import { Metadata } from "next"
import ProjectsList from "@/components/projects/projects-list"
import GithubStats from "@/components/projects/github-stats"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Projects | Tirsasaki",
  description: "Explore my portfolio of projects and GitHub contributions",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#282a36]">
      <div className="container py-16 animate-fade-in">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ff79c6] to-[#bd93f9] bg-clip-text text-transparent mb-4">
              My Projects
            </h1>
            <p className="text-lg text-[#6272a4]">
              A showcase of my work, side projects, and open source contributions. Each project represents a unique challenge and solution.
            </p>
          </div>

          {/* GitHub Stats */}
          <GithubStats />
          
          <Separator className="my-16" />

          {/* Projects List */}
          <ProjectsList />
      </div>
    </div>
  )
}

