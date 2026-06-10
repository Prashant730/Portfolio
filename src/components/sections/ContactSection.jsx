export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-14 lg:py-16 xl:py-20 bg-[var(--bg-secondary)] -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-12 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-[var(--border)] animate-fade-in-up"
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title" className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-7 lg:mb-8 xl:mb-10 text-[var(--text-primary)] tracking-tight flex items-center justify-center gap-3">
        <span className="inline-block w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-400 rounded-full"></span>
        Get In Touch
        <span className="inline-block w-1 h-8 bg-gradient-to-b from-emerald-400 to-green-500 rounded-full"></span>
      </h2>
      <div className="max-w-full sm:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] mx-auto text-center">
        <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
          I'm currently seeking internship and new grad opportunities. Feel free to reach out if you think
          I'd be a good fit for your team.
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3 mt-8">
          <a
            href="mailto:pk1819544@gmail.com"
            className="group flex items-center justify-center gap-2.5 text-[var(--text-secondary)] no-underline py-3.5 px-4 sm:px-5 bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl transition-all duration-300 text-sm font-medium min-h-[44px] hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-green-600 focus-visible:outline-offset-2"
            aria-label="Send email to pk1819544@gmail.com"
          >
            <span className="text-lg group-hover:scale-110 transition-transform">📧</span>Email
          </a>
          <a
            href="https://github.com/Prashant730"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 text-[var(--text-secondary)] no-underline py-3.5 px-4 sm:px-5 bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl transition-all duration-300 text-sm font-medium min-h-[44px] hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-green-600 focus-visible:outline-offset-2"
            aria-label="Visit GitHub profile"
          >
            <span className="text-lg group-hover:scale-110 transition-transform">💻</span>GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/prashant-kumar-r13/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2.5 text-[var(--text-secondary)] no-underline py-3.5 px-4 sm:px-5 bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl transition-all duration-300 text-sm font-medium min-h-[44px] hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-green-600 focus-visible:outline-offset-2"
            aria-label="Visit LinkedIn profile"
          >
            <span className="text-lg group-hover:scale-110 transition-transform">💼</span>LinkedIn
          </a>
        </div>
        <div className="flex justify-center mt-6">
          <a
            href="/generalCV.pdf"
            download
            className="group flex items-center justify-center gap-2.5 text-white no-underline py-3.5 px-6 sm:px-7 bg-gradient-to-r from-green-600 to-emerald-500 border-2 border-green-700 rounded-xl transition-all duration-300 text-sm font-bold min-h-[44px] shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:from-green-700 hover:to-emerald-600 focus-visible:outline-2 focus-visible:outline-green-600 focus-visible:outline-offset-2"
            aria-label="Download resume (PDF)"
          >
            <span className="text-lg group-hover:scale-110 group-hover:animate-bounce transition-transform">📄</span> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
