import { HeroSection } from "@/components/hero-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { FocusSectors } from "@/components/focus-sectors";
import { AboutSection } from "@/components/about-section";
import  TeamSection  from "@/components/team-section";
// import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PhilosophySection />
      <FocusSectors />
      <AboutSection />
      <TeamSection />
      {/*<BlogSection />*/}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
