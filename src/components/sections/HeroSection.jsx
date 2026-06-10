export default function HeroSection({ hasProfileImage, setHasProfileImage, setProfileEnlarged, scrollToSection }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 flex flex-col sm:flex-row gap-10 sm:gap-5 items-center justify-between animate-fade-in-up" aria-labelledby="hero-title">
      <div className="w-full sm:flex-1 sm:max-w-[600px] lg:max-w-[700px]">
        <div className="mb-5">
          {hasProfileImage ? (
            <button
              onClick={() => setProfileEnlarged(true)}
              className="p-0 border-none bg-transparent cursor-pointer transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-4 rounded-full"
              aria-label="Click to enlarge profile photo"
            >
              <img
                src="/picture.jpg"
                alt="Profile photo"
                className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full object-cover shadow-[0_0_0_3px_var(--bg-secondary),0_0_0_5px_var(--accent),0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-transform duration-300"
                onError={() => setHasProfileImage(false)}
              />
            </button>
          ) : (
            <button
              onClick={() => setProfileEnlarged(true)}
              className="p-0 border-none bg-transparent cursor-pointer transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-4 rounded-full"
              aria-label="Click to enlarge profile photo"
            >
              <div
                className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center text-4xl font-bold text-white dark:text-zinc-900 shadow-[0_0_0_3px_var(--bg-secondary),0_0_0_5px_var(--accent),0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-transform duration-300"
                aria-hidden="true"
              >
                <span>PK</span>
              </div>
            </button>
          )}
        </div>
        <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-2">
          <span className="bg-gradient-to-r from-[var(--text-primary)] via-green-600 to-emerald-500 dark:via-green-400 dark:to-emerald-400 bg-clip-text text-transparent">Prashant Kumar</span>
        </h1>
        <p className="text-lg sm:text-xl text-green-600 dark:text-green-400 mb-4 font-semibold flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Full-Stack Developer
        </p>
        <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-6 max-w-prose">
          Computer Science student building scalable, high-performance, full-stack web applications.
          <br />
          Actively seeking internship opportunities in software development.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-green-600 dark:bg-green-700 text-white dark:text-white px-5 py-2.5 rounded-md text-sm font-extrabold uppercase tracking-wider shadow border border-green-700 dark:border-green-800 transition-all min-h-[40px] min-w-[130px] hover:bg-green-700 hover:dark:bg-green-800 hover:border-green-800 hover:dark:border-green-900 focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2"
          >
            VIEW PROJECTS
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-transparent text-green-700 dark:text-green-400 px-5 py-2.5 rounded-md text-sm font-extrabold uppercase tracking-wider border border-green-700 dark:border-green-400 shadow transition-all min-h-[40px] min-w-[130px] hover:bg-green-50 hover:dark:bg-green-900 hover:text-green-900 hover:dark:text-green-200 hover:border-green-800 hover:dark:border-green-500 focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
      <figure className="developer-animation" aria-hidden="true">
        <div className="developer">
          <div className="developer__head">
            <span className="developer__eye developer__eye--left"></span>
            <span className="developer__eye developer__eye--right"></span>
            <span className="developer__glasses"></span>
            <span className="developer__smile"></span>
          </div>
          <div className="developer__body">
            <span className="developer__tie"></span>
          </div>
          <div className="developer__arm developer__arm--left"></div>
          <div className="developer__arm developer__arm--right"></div>
          <div className="developer__laptop">
            <span className="developer__screen">
              <span className="developer__code developer__code--1"></span>
              <span className="developer__code developer__code--2"></span>
              <span className="developer__code developer__code--3"></span>
            </span>
            <span className="developer__keyboard"></span>
          </div>
          <div className="developer__legs">
            <span className="developer__leg developer__leg--left"></span>
            <span className="developer__leg developer__leg--right"></span>
          </div>
          <div className="developer__shadow"></div>
        </div>
        <div className="floating-icons">
          <span className="floating-icon floating-icon--react">&lt;/&gt;</span>
          <span className="floating-icon floating-icon--js">JS</span>
          <span className="floating-icon floating-icon--git">⚙</span>
        </div>
      </figure>
    </section>
  )
}
