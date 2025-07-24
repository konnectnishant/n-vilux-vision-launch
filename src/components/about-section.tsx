export function AboutSection() {
  const sections = [
    {
      title: "Who We Are",
      content: "Vilux Ventures is an early-stage venture capital firm based in India. We invest in Seed and Series A founders building bold, scalable businesses designed to compete—and win—on the global stage."
    },
    {
      title: "More Than Capital", 
      content: "Our edge is deep product and operational expertise. With over a decade of building and scaling products at a global tech giant combined with hands-on experience in operations, supply chains, and process engineering, we don't just write checks. We help founders build the foundations to scale."
    },
    {
      title: "A Focused Portfolio",
      content: "We keep our portfolio intentionally small, backing only a select few companies each year. This lets us go beyond board meetings, working side by side with founders and reserving significant capital to back them through Series B and beyond."
    },
    {
      title: "Our Mission",
      content: "We exist to help exceptional founders turn bold ideas into resilient, industry-defining companies. By pairing early belief with practical expertise and long-term partnership, we help build ventures that don't just grow—they endure."
    }
  ]

  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            About Us
          </h2>
        </div>

        {/* Content blocks */}
        <div className="space-y-12 stagger-children">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="animate-slide-up"
              style={{ '--animation-order': index } as React.CSSProperties}
            >
              <h3 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-foreground">
                {section.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-body">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}