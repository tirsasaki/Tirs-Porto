"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { toast } from "sonner"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast.success("Message sent successfully!")
    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Input
                placeholder="Name"
                required
                className="bg-[#282a36] border-[#44475a] focus:border-[#bd93f9] text-[#f8f8f2]"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                required
                className="bg-[#282a36] border-[#44475a] focus:border-[#bd93f9] text-[#f8f8f2]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Subject"
              required
              className="bg-[#282a36] border-[#44475a] focus:border-[#bd93f9] text-[#f8f8f2]"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Message"
              required
              className="min-h-[150px] bg-[#282a36] border-[#44475a] focus:border-[#bd93f9] text-[#f8f8f2]"
            />
          </div>
        </div>
        <Button 
          type="submit" 
          className="w-full group bg-[#bd93f9] hover:bg-[#bd93f9]/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  )
}

