import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/tirsasaki",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/tirsasaki",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/tirsasaki",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:hello@tirsasaki.com",
    icon: Mail,
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#44475a]/50 bg-[#282a36]/50 backdrop-blur-sm">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-primary animate-pulse-slow" />
              <span className="text-lg font-bold bg-gradient-to-r from-[#ff79c6] to-[#bd93f9] bg-clip-text text-transparent">
                Tirsasaki
              </span>
            </Link>
            <p className="text-sm text-[#6272a4]">
              Building digital experiences with passion and precision
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#f8f8f2]">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-[#6272a4] hover:text-[#ff79c6] transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-sm text-[#6272a4] hover:text-[#ff79c6] transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-sm text-[#6272a4] hover:text-[#ff79c6] transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#f8f8f2]">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6272a4] hover:text-[#ff79c6] transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-[#44475a]/30 flex flex-col items-center space-y-4">
          <p className="text-xs flex items-center text-[#6272a4]">
            Developed with <Heart className="h-3 w-3 mx-1 text-[#ff5555] animate-pulse-slow" /> by{" "}
            <span className="text-[#ff79c6] ml-1">Tirsasaki</span>
          </p>
          <p className="text-xs text-[#6272a4]">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

