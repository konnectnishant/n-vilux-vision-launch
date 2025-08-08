import React from "react";
import NishantImg from "@/assets/team/nishant.jpeg";
import AdityaImg from "@/assets/team/aditya.jpeg";

const team = [
  {
    name: "Nishant Jain",
    role: "Co-Founder",
    image: NishantImg,
    bio: "Nishant spent over a decade at Apple’s Cupertino HQ, leading teams that built and scaled 0→1 AI-powered platforms used by millions. At Vilux Ventures, he helps founders lay strong tech foundations and craft globally scalable product strategies.",
    quote:
        "We’re not just investing in ideas; we’re investing in the people bold enough to build the future.",
  },
  {
    name: "Aditya Jain",
    role: "Co-Founder",
    image: AdityaImg,
    bio: "Aditya brings expertise in manufacturing excellence, lean operations, and global supply chains across Southeast Asia, Europe, and the Middle East. At Vilux Ventures, he helps founders scale efficiently through sourcing, process engineering, and cost optimization.",
    quote:
        "We chase clarity, not chaos. Great companies are built with long-term conviction and ruthless focus.",
  },
];

const TeamSection = () => {
  return (
      <section id="team" className="py-24 bg-background text-foreground">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            We’re operators, investors, and builders. We’ve shipped products at
            scale, advised category leaders, and now back ambitious founders with
            capital and craft.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {team.map((member, index) => (
                <div
                    key={index}
                    className="bg-card border border-border rounded-2xl p-6 shadow-md transition-transform hover:scale-105"
                >
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.bio}
                  </p>
                  <p className="italic text-foreground border-l-4 pl-4 border-rose-400">
                    “{member.quote}”
                  </p>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default TeamSection;
//
// export function TeamSection() {
//   const team = [
//     {
//       name: "Aditya Jain",
//       bio: "Aditya brings experience in manufacturing excellence, lean operations, and global supply chains. He has worked across Southeast Asia, Europe, and the Middle East. As a leader in technical textiles, Aditya has mastered sourcing, process engineering, and cost optimization.",
//       quote: "Great ideas only change the world when they can be built, scaled, and delivered."
//     },
//     {
//       name: "Nishant Jain",
//       bio: "Nishant spent over a decade at Apple's Cupertino HQ, leading teams that built and scaled AI-powered systems used by millions worldwide. He helps founders lay strong technology foundations and craft product strategies built for international growth.",
//       quote: "Innovation isn't about adding more rather it's about making the complex simple and the future seamless."
//     }
//   ]
//
//   return (
//     <section className="py-20 md:py-32 px-6 bg-gradient-subtle">
//       <div className="max-w-6xl mx-auto">
//         {/* Section header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
//             Our Team
//           </h2>
//           <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
//             Experienced operators and builders backing the next generation of visionary founders
//           </p>
//         </div>
//
//         {/* Team grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-children">
//           {team.map((member, index) => (
//             <div
//               key={index}
//               className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
//               style={{ '--animation-order': index } as React.CSSProperties}
//             >
//               {/* Profile placeholder */}
//               <div className="w-20 h-20 bg-gradient-rose rounded-full mb-6 flex items-center justify-center">
//                 <span className="text-2xl font-display font-bold text-accent-foreground">
//                   {member.name.split(' ').map(n => n[0]).join('')}
//                 </span>
//               </div>
//
//               {/* Name */}
//               <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
//                 {member.name}
//               </h3>
//
//               {/* Bio */}
//               <p className="text-muted-foreground leading-relaxed font-body mb-6">
//                 {member.bio}
//               </p>
//
//               {/* Quote */}
//               <blockquote className="border-l-4 border-rose-medium pl-4 italic text-foreground font-body">
//                 "{member.quote}"
//               </blockquote>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
