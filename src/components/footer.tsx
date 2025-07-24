import { Linkedin } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-16 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">
              <span className="text-gradient-rose">VILUX</span>
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Backing Visionaries. Scaling Excellence.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-body font-semibold text-foreground">
              Navigation
            </h4>
            <nav className="space-y-2">
              <button 
                onClick={scrollToTop}
                className="block text-muted-foreground hover:text-rose-dark transition-colors font-body"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-rose-dark transition-colors font-body"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-rose-dark transition-colors font-body"
              >
                Pitch Us
              </button>
            </nav>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h4 className="text-lg font-body font-semibold text-foreground">
              Connect
            </h4>
            <div className="space-y-3">
              {/*<a*/}
              {/*    href="#"*/}
              {/*    className="flex items-center gap-3 text-muted-foreground hover:text-rose-dark transition-colors"*/}
              {/*    aria-label="Aditya Jain LinkedIn"*/}
              {/*>*/}
              <a
                  href="https://www.linkedin.com/in/nishant-jain-38748a29/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-rose-dark transition-colors"
                  aria-label="Aditya Jain LinkedIn"
              >
                <Linkedin className="w-5 h-5"/>
                <span className="font-body">Aditya Jain</span>
              </a>
              {/*<a */}
              {/*  href="#" */}
              {/*  className="flex items-center gap-3 text-muted-foreground hover:text-rose-dark transition-colors"*/}
              {/*  aria-label="Nishant Jain LinkedIn"*/}
              {/*>*/}

              <a
                  href="https://www.linkedin.com/in/nishant-jain-38748a29/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-rose-dark transition-colors"
                  aria-label="Nishant Jain LinkedIn"
              >
                <Linkedin className="w-5 h-5"/>
                <span className="font-body">Nishant Jain</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground font-body">
            © 2025 Vilux Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}