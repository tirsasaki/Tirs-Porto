import ContactForm from "@/components/contact/contact-form"
import SocialLinks from "@/components/contact/social-links"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Contact | Tirsasaki",
  description: "Get in touch with me for collaborations or opportunities",
}

export default function ContactPage() {
  return (
    <div className="container py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        Have a project in mind or want to discuss a potential collaboration? Feel free to reach out through the form
        below or connect with me on social media.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactForm />

        <div>
          <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
          <SocialLinks />

          <Separator className="my-8" />

          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4">Availability</h3>
            <p className="mb-4">I'm currently available for:</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Freelance projects
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Consulting work
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Collaborations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

