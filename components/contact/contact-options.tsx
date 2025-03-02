"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Clock, Phone, Globe2 } from "lucide-react"

const contactOptions = [
  {
    icon: Mail,
    label: "Email",
    value: "tirsasaki@gmail.com",
    link: "mailto:tirsasaki@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 123 456 789",
    link: "tel:+62123456789"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jakarta, Indonesia",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Fri, 9AM - 6PM",
  },
  {
    icon: Globe2,
    label: "Website",
    value: "tirsasaki.com",
    link: "https://tirsasaki.com"
  }
]

export default function ContactOptions() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-[#f8f8f2] mb-8">Contact Details</h2>
      {contactOptions.map((option, index) => (
        <motion.div
          key={option.label}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start space-x-4 p-4 rounded-lg bg-[#44475a]/20 hover:bg-[#44475a]/30 transition-colors"
        >
          <div className="p-2 rounded-lg bg-[#44475a]/30">
            <option.icon className="w-5 h-5 text-[#bd93f9]" />
          </div>
          <div>
            <p className="text-sm text-[#6272a4]">{option.label}</p>
            {option.link ? (
              <a 
                href={option.link}
                className="text-[#f8f8f2] hover:text-[#ff79c6] transition-colors"
              >
                {option.value}
              </a>
            ) : (
              <p className="text-[#f8f8f2]">{option.value}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
