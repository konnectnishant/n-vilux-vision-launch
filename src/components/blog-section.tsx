// export function BlogSection() {
//   const articles = [
//     {
//       title: "The Art of Early-Stage Due Diligence",
//       summary: "How we evaluate founders and opportunities in the rapidly evolving startup landscape.",
//       readTime: "5 min read"
//     },
//     {
//       title: "Building for Global Scale from Day One",
//       summary: "Operational strategies that help Indian startups compete on the international stage.",
//       readTime: "7 min read"
//     },
//     {
//       title: "AI's Next Frontier: From Research to Real-World Impact",
//       summary: "Exploring the gap between AI innovation and practical implementation in enterprise solutions.",
//       readTime: "6 min read"
//     }
//   ]
//
//   return (
//     <section className="py-20 md:py-32 px-6 bg-background">
//       <div className="max-w-6xl mx-auto">
//         {/* Section header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
//             Insights
//           </h2>
//           <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
//             Thoughts on building, scaling, and investing in transformative companies
//           </p>
//         </div>
//
//         {/* Articles grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
//           {articles.map((article, index) => (
//             <article
//               key={index}
//               className="group bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer animate-slide-up"
//               style={{ '--animation-order': index } as React.CSSProperties}
//             >
//               {/* Article image placeholder */}
//               <div className="w-full h-48 bg-gradient-rose rounded-xl mb-6 flex items-center justify-center">
//                 <span className="text-accent-foreground font-body font-medium">
//                   Article {index + 1}
//                 </span>
//               </div>
//
//               {/* Article content */}
//               <div className="space-y-4">
//                 <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-rose-dark transition-colors">
//                   {article.title}
//                 </h3>
//
//                 <p className="text-muted-foreground font-body leading-relaxed">
//                   {article.summary}
//                 </p>
//
//                 <div className="flex items-center justify-between pt-4">
//                   <span className="text-sm text-muted-foreground font-body">
//                     {article.readTime}
//                   </span>
//                   <span className="text-sm text-rose-dark font-body font-medium group-hover:underline">
//                     Read More →
//                   </span>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }