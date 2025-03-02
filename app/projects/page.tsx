import { Suspense } from "react"
import ProjectsList from "@/components/projects/projects-list"
import ProjectsLoading from "@/components/projects/projects-loading"
import GithubStats from "@/components/projects/github-stats"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Projects | Tirsasaki",
  description: "Explore my portfolio of projects and GitHub repositories",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#282a36]">
      <div className="container py-16 animate-fade-in">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#ff79c6] to-[#bd93f9] bg-clip-text text-transparent mb-4">
              My Projects
            </h1>
            <p className="text-lg text-[#6272a4]">
              Browse through my latest projects and GitHub repositories. Each project represents a unique challenge and solution.
            </p>
          </div>

          <GithubStats />
          <Separator className="my-16" />
          <Suspense fallback={<ProjectsLoading />}>
            <ProjectsList />
          </Suspense>
      </div>
    </div>
  )
}

