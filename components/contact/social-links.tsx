"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Mail, Linkedin } from "lucide-react"

const links = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:hello@tirsasaki.com",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/tirsasaki",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/tirsasaki",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/tirsasaki",
  },
]

export default function SocialLinks() {
  return (
    <div className="text-center">
      <p className="text-[#6272a4] mb-6">Or connect with me on</p>
      <div className="flex justify-center gap-6">
        {links.map((link, i) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-3 rounded-lg bg-[#282a36] hover:bg-[#44475a] transition-colors group"
          >
            <link.icon className="w-6 h-6 text-[#6272a4] group-hover:text-[#bd93f9] transition-colors" />
            <span className="sr-only">{link.name}</span>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

