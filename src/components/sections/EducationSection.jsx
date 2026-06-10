export default function EducationSection() {
  return (
    <section id="education" className="py-12 sm:py-14 lg:py-16 xl:py-20 animate-fade-in-up" aria-labelledby="education-title">
      <h2 id="education-title" className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-7 lg:mb-8 xl:mb-10 text-[var(--text-primary)] tracking-tight flex items-center gap-3">
        <span className="inline-block w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-400 rounded-full"></span>
        Education & Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 xl:gap-7">
        <article className="hover-card education-card bg-[var(--bg-secondary)] p-5 sm:p-6 xl:p-7 rounded-xl border border-[var(--border)] shadow-sm hover:shadow-lg hover:border-green-500/50 transition-all duration-300">
          <h3 className="text-xs font-bold mb-4 text-green-600 dark:text-green-400 uppercase tracking-wider flex items-center gap-2">
            <span className="text-base">🎓</span>
            Education
          </h3>
          <div className="education-item">
            <h4 className="text-base font-semibold text-[var(--text-primary)] mb-1">B.Tech in Computer Science</h4>
            <p className="text-[var(--text-secondary)] text-base mb-1">Lovely Professional University (2023 - 2027)</p>
            <p className="text-[var(--accent)] font-semibold text-sm">CGPA: 6.95</p>
          </div>
          <div className="border-b border-[var(--border)] my-2"></div>
          <div className="education-item">
            <h4 className="text-base font-semibold text-[var(--text-primary)] mb-1">Class 12th (Intermediate)</h4>
            <p className="text-[var(--text-secondary)] text-base mb-1">Dr. D Ram D.A.V Public School, March 2022</p>
            <p className="text-[var(--accent)] font-semibold text-sm">Percentage: 78%</p>
          </div>
          <div className="border-b border-[var(--border)] my-2"></div>
          <div className="education-item">
            <h4 className="text-base font-semibold text-[var(--text-primary)] mb-1">Class 10th (Matriculation)</h4>
            <p className="text-[var(--text-secondary)] text-base mb-1">Dr. D Ram D.A.V Public School, March 2020</p>
            <p className="text-[var(--accent)] font-semibold text-sm">Percentage: 86.40%</p>
          </div>
        </article>
        <article className="hover-card education-card bg-[var(--bg-secondary)] p-5 sm:p-6 xl:p-7 rounded-xl border border-[var(--border)] shadow-sm hover:shadow-lg hover:border-green-500/50 transition-all duration-300">
          <h3 className="text-xs font-bold mb-4 text-green-600 dark:text-green-400 uppercase tracking-wider flex items-center gap-2">
            <span className="text-base">📜</span>
            Certifications
          </h3>
          <div className="cert-item">
            <div className="flex justify-between items-start gap-3">
              <div>
                <h4 className="text-base font-semibold text-[var(--text-primary)] mb-0.5">Cloud Computing</h4>
                <p className="text-[var(--text-secondary)] text-sm mb-0.5">NPTEL — IIT Kharagpur</p>
                <span className="block text-[var(--text-muted)] text-[13px]">Jan 2025 – Apr 2025 • 12-week certified course</span>
              </div>
              <a
                href="/Cloud Computing.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors py-1.5 px-3 rounded-md border border-green-600/30 dark:border-green-400/30 hover:bg-green-50 dark:hover:bg-green-900/20"
                aria-label="View Cloud Computing certificate"
              >
                <span aria-hidden="true">📄</span>
              </a>
            </div>
          </div>
          <div className="border-b border-[var(--border)] my-2"></div>
          <div className="cert-item">
            <div className="flex justify-between items-start gap-3">
              <div>
                <h4 className="text-base font-semibold text-[var(--text-primary)] mb-0.5">C++ Programming (OOPs & DSA)</h4>
                <p className="text-[var(--text-secondary)] text-sm mb-0.5">CSE Pathshala</p>
                <span className="block text-[var(--text-muted)] text-[13px]">Jun 2025 – Jul 2025 • 35+ hours summer training</span>
              </div>
              <a
                href="/cpp.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors py-1.5 px-3 rounded-md border border-green-600/30 dark:border-green-400/30 hover:bg-green-50 dark:hover:bg-green-900/20"
                aria-label="View C++ Programming certificate"
              >
                <span aria-hidden="true">📄</span>
              </a>
            </div>
          </div>
          <div className="border-b border-[var(--border)] my-2"></div>
          <div className="cert-item">
            <div className="flex justify-between items-start gap-3">
              <div>
                <h4 className="text-base font-semibold text-[var(--text-primary)] mb-0.5">Mind Sprint 48-Hour International Hackathon</h4>
                <p className="text-[var(--text-secondary)] text-sm mb-0.5">Unstop — Participant</p>
                <span className="block text-[var(--text-muted)] text-[13px]">2025</span>
              </div>
              <a
                href="/hackathon.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors py-1.5 px-3 rounded-md border border-green-600/30 dark:border-green-400/30 hover:bg-green-50 dark:hover:bg-green-900/20"
                aria-label="View Mind Sprint Hackathon certificate"
              >
                <span aria-hidden="true">📄</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
