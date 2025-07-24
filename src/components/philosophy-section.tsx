export function PhilosophySection() {
  const pillars = [
    {
      title: "Vision with Execution",
      description: "We back founders who not only dream big but can build. Great companies thrive on vision paired with operational strength, ensuring they scale globally from day one."
    },
    {
      title: "Focused and Selective",
      description: "We invest in a concentrated portfolio, partnering with only a select few companies each year. This allows us to provide deep, hands-on support and reserve capital for follow-on rounds."
    },
    {
      title: "Operational Depth",
      description: "Beyond capital, we bring decades of experience in technology, operations, and supply chains. Our team helps founders build scalable products, resilient systems, and access global markets."
    },
    {
      title: "Long-Term Partnership",
      description: "We're committed to backing our founders from first check through Series B and beyond, helping turn breakthrough ideas into enduring, industry-shaping enterprises."
    }
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Investment Philosophy
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            The 4 Pillars
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
              style={{ '--animation-order': index } as React.CSSProperties}
            >
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-body">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}