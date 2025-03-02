import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/tirsasaki",
      icon: <Github className="h-5 w-5" />,
      username: "@tirsasaki",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/tirsasaki",
      icon: <Twitter className="h-5 w-5" />,
      username: "@tirsasaki",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/tirsasaki",
      icon: <Linkedin className="h-5 w-5" />,
      username: "Tirsasaki",
    },
    {
      name: "Email",
      href: "mailto:contact@tirsasaki.com",
      icon: <Mail className="h-5 w-5" />,
      username: "contact@tirsasaki.com",
    },
  ]

  return (
    <div className="space-y-4">
      {socialLinks.map((link) => (
        <Button key={link.name} variant="outline" className="w-full justify-start gap-3" asChild>
          <Link href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
            <span className="font-medium">{link.name}</span>
            <span className="text-muted-foreground ml-auto">{link.username}</span>
          </Link>
        </Button>
      ))}
    </div>
  )
}

