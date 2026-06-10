export default function ProjectsSection({ projects, expandedProject, setExpandedProject, handleExternalLink }) {
  return (
    <section id="projects" className="py-12 sm:py-14 lg:py-16 xl:py-20 animate-fade-in-up" aria-labelledby="projects-title">
      <h2 id="projects-title" className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-7 lg:mb-8 xl:mb-10 text-[var(--text-primary)] tracking-tight flex items-center gap-3">
        <span className="inline-block w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-400 rounded-full"></span>
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 xl:gap-7">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`project-card bg-[var(--bg-secondary)] rounded-xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] ${
              project.featured ? 'border-green-500 border-2 col-span-full ring-2 ring-green-500/20 shadow-2xl shadow-green-500/10' : 'border-[var(--border)] hover:border-green-500/50 hover:shadow-2xl'
            } ${expandedProject === project.id ? 'col-span-full' : ''}`}
          >
            <div className="p-5 sm:p-6 xl:p-7">
              <div className="mb-4 relative">
                <div
                  className="project-visual w-full h-48 rounded-lg overflow-hidden bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-primary)] bg-cover bg-center bg-no-repeat relative"
                  style={{
                    backgroundImage: project.image ? `url(${project.image})` : 'none'
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 hover:bg-black/30 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="text-sm font-semibold mb-1">{project.title}</div>
                    <div className="text-xs opacity-90">{project.shortDesc}</div>
                  </div>
                  {!project.image && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-[var(--text-muted)]">
                        <div className="text-4xl mb-2">📁</div>
                        <div className="text-sm">Project Preview</div>
                      </div>
                    </div>
                  )}
                </div>
                {project.featured && (
                  <div className="absolute -top-2 -right-2">
                    <span className="inline-block bg-green-700 text-white py-1.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md border-2 border-green-800 drop-shadow-lg">
                      FEATURED
                    </span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center gap-3 mb-2">
                <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] tracking-tight">{project.title}</h3>
                <button
                  className="bg-[var(--bg-tertiary)] border border-[var(--border)] text-[var(--text-secondary)] w-[44px] h-[44px] rounded-lg text-xl cursor-pointer transition-all flex items-center justify-center flex-shrink-0 hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] dark:hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  aria-expanded={expandedProject === project.id}
                  aria-label={expandedProject === project.id ? `Collapse ${project.title} details` : `Expand ${project.title} details`}
                >
                  {expandedProject === project.id ? '−' : '+'}
                </button>
              </div>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-3">{project.shortDesc}</p>
              <div className="flex flex-wrap gap-1.5" role="list" aria-label="Technologies used">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-[var(--bg-tertiary)] text-[var(--text-secondary)] py-1 px-2.5 rounded text-xs font-medium" role="listitem">
                    {tech}
                  </span>
                ))}
              </div>

              <div className={`overflow-hidden transition-all duration-300 ${
                expandedProject === project.id ? 'max-h-[1200px] opacity-100 mt-5 pt-5 border-t border-[var(--border)]' : 'max-h-0 opacity-0'
              }`}>
                <div className="mb-4">
                  <h4 className="font-medium text-[var(--text-muted)] mb-1.5 text-xs uppercase tracking-wider">Problem</h4>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-base">{project.problem}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-[var(--text-muted)] mb-1.5 text-xs uppercase tracking-wider">Solution</h4>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-base">{project.solution}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-[var(--text-muted)] mb-1.5 text-xs uppercase tracking-wider">Key Features</h4>
                  <ul className="list-none">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-[var(--text-secondary)] leading-relaxed text-base pl-5 relative mb-1.5 last:mb-0 before:content-['•'] before:absolute before:left-0 before:text-[var(--accent)] before:font-bold">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text-muted)] mb-1.5 text-xs uppercase tracking-wider">Why This Matters</h4>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-base">{project.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap gap-2.5 pt-4 mt-4 border-t border-[var(--border)]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] no-underline font-medium inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] transition-all text-sm min-h-[44px] flex-1 sm:flex-initial sm:min-w-[120px] hover:border-[var(--text-muted)] hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
                  onClick={(e) => handleExternalLink(e, project.github)}
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <span aria-hidden="true">📁</span> View Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 text-white font-bold no-underline inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg border-2 border-green-800 shadow-md text-base min-h-[44px] flex-1 sm:flex-initial sm:min-w-[120px] transition-all hover:bg-green-600 hover:border-green-900 focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2"
                    onClick={(e) => handleExternalLink(e, project.demo)}
                    aria-label={`View ${project.title} live demo`}
                  >
                    <span aria-hidden="true">🔗</span> Live Site
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
