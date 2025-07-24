export function FocusSectors() {
  const sectors = [
    "Artificial Intelligence and Intelligent Systems",
    "Industrial Tech and Advanced Manufacturing", 
    "Consumer and Digital-First Brands (D2C)",
    "Enterprise Software and Digital Infrastructure",
    "Climate and Sustainability Solutions"
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Focus Sectors
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            We invest in transformative companies across five key sectors
          </p>
        </div>

        {/* Sectors list */}
        <div className="space-y-6 stagger-children">
          {sectors.map((sector, index) => (
            <div 
              key={index}
              className="group p-6 bg-card border border-border rounded-xl hover:bg-gradient-rose hover:border-rose-medium transition-all duration-300 cursor-pointer animate-slide-up"
              style={{ '--animation-order': index } as React.CSSProperties}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-body font-medium text-foreground group-hover:text-accent-foreground">
                  {sector}
                </h3>
                <div className="w-2 h-2 rounded-full bg-rose-medium opacity-60 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}