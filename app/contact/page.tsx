import { Metadata } from "next"
import MinimalContactForm from "@/components/contact/minimal-contact-form"
import SocialLinks from "@/components/contact/social-links"

export const metadata: Metadata = {
  title: "Contact | Tirsasaki",
  description: "Let's connect and create something amazing together",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#282a36]">
      <div className="container max-w-3xl py-16 animate-fade-in">
        <div className="bg-[#1a1f25] rounded-xl p-6 md:p-8 lg:p-12 shadow-lg relative overflow-hidden">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#f8f8f2] mb-4">
              Let's Talk
            </h1>
            <p className="text-[#6272a4]">
              Have something in mind? I'd love to hear about it.
            </p>
          </div>
          <MinimalContactForm />
          <div className="mt-12 pt-12 border-t border-[#44475a]/30">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )
}

