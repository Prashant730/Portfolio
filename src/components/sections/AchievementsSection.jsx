export default function AchievementsSection({ achievements }) {
  return (
    <section className="py-12 sm:py-14 lg:py-16 xl:py-20 animate-fade-in-up" aria-labelledby="achievements-title">
      <h2 id="achievements-title" className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-7 lg:mb-8 xl:mb-10 text-[var(--text-primary)] tracking-tight flex items-center gap-3">
        <span className="inline-block w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-400 rounded-full"></span>
        Achievements
      </h2>
      <div className="hover-card bg-[var(--bg-secondary)] p-5 sm:p-6 xl:p-7 rounded-xl border border-[var(--border)] shadow-sm hover:shadow-lg hover:border-green-500/50 transition-all duration-300">
        {achievements.map((achievement, index) => (
          <article key={index} className={`achievement-item flex gap-4 py-4 ${index === 0 ? 'pt-0' : ''} ${index === achievements.length - 1 ? 'pb-0 border-b-0' : 'border-b border-[var(--border)]'}`}>
            <span className="text-2xl flex-shrink-0 w-8 text-center" aria-hidden="true">{achievement.icon}</span>
            <div>
              <h4 className="text-base font-semibold text-[var(--text-primary)] mb-1">{achievement.title}</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{achievement.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
