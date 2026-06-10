export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-14 lg:py-16 xl:py-20 animate-fade-in-up" aria-labelledby="about-title">
      <h2 id="about-title" className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-7 lg:mb-8 xl:mb-10 text-[var(--text-primary)] tracking-tight flex items-center gap-3">
        <span className="inline-block w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-400 rounded-full"></span>
        About Me
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr] xl:grid-cols-[1.4fr_1fr] gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
        <div>
          <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base mb-4">
            I am a Computer Science student focused on full-stack and backend development, building scalable applications through clean, efficient code.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
            My interests include API design, distributed systems, and performance optimization. Currently exploring cloud technologies and microservices architecture.
          </p>
        </div>
        <div className="bg-[var(--bg-secondary)] p-5 sm:p-6 xl:p-7 rounded-xl border border-[var(--border)] shadow-sm hover:shadow-lg hover:border-green-500/50 transition-all duration-300">
          <h3 className="text-xs font-bold mb-4 text-green-600 dark:text-green-400 uppercase tracking-wider flex items-center gap-2">
            <span className="w-5 h-0.5 bg-green-500 rounded"></span>
            Quick Facts
          </h3>
          <ul className="list-none">
            <li className="flex items-center gap-3 py-3 text-[var(--text-secondary)] text-base border-b border-[var(--border)] min-h-[44px]">
              <span className="text-lg w-6 text-center flex-shrink-0" aria-hidden="true">🎓</span>
              <span>Expected Graduation: 2027</span>
            </li>
            <li className="flex items-center gap-3 py-3 text-[var(--text-secondary)] text-base border-b border-[var(--border)] min-h-[44px]">
              <span className="text-lg w-6 text-center flex-shrink-0" aria-hidden="true">📍</span>
              <span>Open to Remote & On-site opportunities</span>
            </li>
            <li className="flex items-center gap-3 py-3 text-[var(--text-secondary)] text-base min-h-[44px]">
              <span className="text-lg w-6 text-center flex-shrink-0" aria-hidden="true">💼</span>
              <span>Open to Internship & Full-time roles</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
