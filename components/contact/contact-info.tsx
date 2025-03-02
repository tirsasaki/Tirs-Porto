"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@tirsasaki.com",
    link: "mailto:hello@tirsasaki.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indonesia",
  }
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/tirsasaki",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/tirsasaki",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/tirsasaki",
  }
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#f8f8f2]">Contact Information</h2>
        <div className="space-y-4">
          {contactInfo.map((item) => (
            <div key={item.label} className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-[#44475a]/30">
                <item.icon className="w-5 h-5 text-[#bd93f9]" />
              </div>
              <div>
                <p className="text-sm text-[#6272a4]">{item.label}</p>
                {item.link ? (
                  <a 
                    href={item.link}
                    className="text-[#f8f8f2] hover:text-[#bd93f9] transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-[#f8f8f2]">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#f8f8f2]">Follow Me</h2>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#44475a]/30 hover:bg-[#44475a]/50 transition-colors group"
            >
              <social.icon className="w-5 h-5 text-[#6272a4] group-hover:text-[#bd93f9] transition-colors" />
              <span className="sr-only">{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
