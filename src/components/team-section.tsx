export function TeamSection() {
  const team = [
    {
      name: "Aditya Jain",
      bio: "Aditya brings experience in manufacturing excellence, lean operations, and global supply chains. He has worked across Southeast Asia, Europe, and the Middle East. As a leader in technical textiles, Aditya has mastered sourcing, process engineering, and cost optimization.",
      quote: "Great ideas only change the world when they can be built, scaled, and delivered."
    },
    {
      name: "Nishant Jain", 
      bio: "Nishant spent over a decade at Apple's Cupertino HQ, leading teams that built and scaled AI-powered systems used by millions worldwide. He helps founders lay strong technology foundations and craft product strategies built for international growth.",
      quote: "Innovation isn't about adding more—it's about making the complex simple and the future seamless."
    }
  ]

  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Our Team
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Experienced operators and builders backing the next generation of visionary founders
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-children">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
              style={{ '--animation-order': index } as React.CSSProperties}
            >
              {/* Profile placeholder */}
              <div className="w-20 h-20 bg-gradient-rose rounded-full mb-6 flex items-center justify-center">
                <span className="text-2xl font-display font-bold text-accent-foreground">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                {member.name}
              </h3>

              {/* Bio */}
              <p className="text-muted-foreground leading-relaxed font-body mb-6">
                {member.bio}
              </p>

              {/* Quote */}
              <blockquote className="border-l-4 border-rose-medium pl-4 italic text-foreground font-body">
                "{member.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}