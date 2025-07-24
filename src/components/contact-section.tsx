import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const { toast } = useToast()

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //
  //   // Basic validation
  //   if (!formData.name || !formData.email || !formData.message) {
  //     toast({
  //       title: "Please fill in all fields",
  //       description: "All fields are required to submit your pitch.",
  //       variant: "destructive"
  //     })
  //     return
  //   }
  //
  //   // Simulate form submission
  //   toast({
  //     title: "Pitch submitted successfully!",
  //     description: "We'll review your submission and get back to you within 48 hours.",
  //   })
  //
  //   // Reset form
  //   setFormData({ name: "", email: "", message: "" })
  // }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit your pitch.",
        variant: "destructive",
      });
      return;
    }

    const subject = encodeURIComponent("New Pitch Submission from Vilux Ventures");
    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Open user's email app
    window.location.href = `mailto:konnectnishant@gmail.com?subject=${subject}&body=${body}`;

    // Show confirmation toast (non-blocking)
    toast({
      title: "Opening Email App...",
      description: "Your pitch draft is ready to send. Please hit 'Send' to complete.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Pitch Us
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Building something extraordinary? We'd love to hear from you.
          </p>
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-body font-medium">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="h-12 bg-background border-border font-body"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-body font-medium">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@company.com"
                className="h-12 bg-background border-border font-body"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-base font-body font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your company, vision, and what makes it special. Include your deck if you have one."
                rows={6}
                className="bg-background border-border font-body resize-none"
              />
            </div>

            <Button 
              type="submit" 
              variant="premium" 
              size="lg" 
              className="w-full"
            >
              Send Pitch
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}