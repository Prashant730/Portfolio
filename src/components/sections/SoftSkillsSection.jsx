export default function SoftSkillsSection({ softSkills }) {
  return (
    <section className="py-10 sm:py-12 lg:py-14" aria-labelledby="how-i-work-title">
      <h2 id="how-i-work-title" className="text-lg sm:text-xl font-bold mb-4 sm:mb-5 text-[var(--text-primary)] tracking-tight flex items-center gap-3">
        <span className="inline-block w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-400 rounded-full"></span>
        How I Work
      </h2>
      <p className="text-[var(--text-muted)] text-sm mb-6 max-w-2xl">
        I focus on building maintainable software through clear communication, structured problem-solving, and ownership of features from idea to deployment.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {softSkills.map((skill, index) => (
          <div
            key={index}
            tabIndex={0}
            className="group flex items-start gap-4 py-5 px-6 rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-green-600 dark:focus-within:ring-green-400 hover:shadow-lg hover:-translate-y-1 hover:border-green-600 dark:hover:border-green-400 cursor-pointer outline-none"
            aria-label={skill.title}
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-green-600/90 dark:bg-green-700/80 text-white text-lg shadow group-hover:scale-110 group-focus:scale-110 transition-transform">
              {index === 0 && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M4 17l6-6 4 4 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )}
              {index === 1 && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M8 17h8M8 13h8M8 9h8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )}
              {index === 2 && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )}
              {index === 3 && (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )}
            </span>
            <div>
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">{skill.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
