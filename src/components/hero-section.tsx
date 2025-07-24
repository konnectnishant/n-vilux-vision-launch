import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-subtle px-6">
      {/* Theme toggle in top right */}
      <div className="absolute top-8 right-8">
        <ThemeToggle />
      </div>

      {/* Hero content */}
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight">
            <span className="text-gradient-rose">VILUX</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-body font-light text-muted-foreground mb-12 leading-relaxed">
          Backing Visionaries. Scaling Excellence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="min-w-[160px]"
          >
            Pitch Us
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('about')}
            className="min-w-[160px]"
          >
            About Us
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}