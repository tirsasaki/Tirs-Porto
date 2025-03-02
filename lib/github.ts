// This is a mock implementation for demo purposes
// In a real application, you would use the GitHub API

export interface GithubProject {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string | null
  topics: string[]
  stars: number
  forks: number
  updatedAt: string
  featuredImage: string // Tambahan properti untuk gambar
}

export async function fetchGithubProjects(): Promise<GithubProject[]> {
  // In a real implementation, this would fetch from GitHub API
  // For now, we'll return mock data

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    {
      id: 1,
      name: "Kasa Blog Astro",
      description: "Kasa Blog is a modern and minimalistic blog website designed for sharing and distributing content seamlessly.",
      html_url: "https://github.com/tirsasaki/kasa-blog-astro.git",
      homepage: "https://kasa-blog.vercel.app/",
      topics: ["astro-js", "tailwind-css"],
      stars: 45,
      forks: 12,
      updatedAt: "2 weeks ago",
      featuredImage: "/projects/kasa.png"
    },
    {
      id: 2,
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      html_url: "https://github.com/tirsasaki/task-management",
      homepage: "https://tasks.tirsasaki.com",
      topics: ["react", "firebase", "redux", "material-ui"],
      stars: 32,
      forks: 8,
      updatedAt: "1 month ago",
      featuredImage: "/projects/task-management.png"
    },
    {
      id: 3,
      name: "Portfolio Generator",
      description: "A tool that helps developers create beautiful portfolio websites quickly.",
      html_url: "https://github.com/tirsasaki/portfolio-generator",
      homepage: "https://portfolio-gen.tirsasaki.com",
      topics: ["vue-js", "node-js", "mongodb", "express"],
      stars: 78,
      forks: 23,
      updatedAt: "3 weeks ago",
      featuredImage: "/projects/portfolio-generator.png"
    },
  ]
}

export async function fetchGithubStats() {
  // In a real implementation, this would fetch from GitHub API
  // For now, we'll return mock data

  return {
    repositories: 40,
    stars: 234,
    forks: 56,
    contributions: 527,
  }
}

