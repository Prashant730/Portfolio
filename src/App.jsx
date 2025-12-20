import { useState, useEffect, useRef } from 'react'
import './App.css'
import { skills, projects, achievements } from './data'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [expandedProject, setExpandedProject] = useState(null)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [hasProfileImage, setHasProfileImage] = useState(true)
  const mobileNavRef = useRef(null)

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }

    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  // Scroll Spy with IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [isLoading])

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileMenuOpen || !mobileNavRef.current) return

    const focusableElements = mobileNavRef.current.querySelectorAll('button')
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleTabKey)
    return () => document.removeEventListener('keydown', handleTabKey)
  }, [mobileMenuOpen])

  const toggleTheme = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light')
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleExternalLink = (e, url) => {
    if (!url || url === '#' || url === '') {
      e.preventDefault()
      alert('This link is currently unavailable. Please check back later.')
    }
  }

  const navItems = ['about', 'skills', 'projects', 'education', 'contact']

  if (isLoading) {
    return (
      <div className="loading-screen" role="status" aria-label="Loading portfolio">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="portfolio">
      {/* Skip to Content Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Header Navigation */}
      <header className="header-nav" role="banner">
        <div className="container">
          <div className="nav-content">
            <a href="/" className="logo" aria-label="Prashant Kumar - Home">
              Prashant Kumar
            </a>

            {/* Desktop Navigation */}
            <nav className="nav-menu" role="navigation" aria-label="Main navigation">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  aria-current={activeSection === section ? 'page' : undefined}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
            </button>

            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav
            id="mobile-nav"
            ref={mobileNavRef}
            className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`mobile-nav-link ${activeSection === section ? 'active' : ''}`}
                aria-current={activeSection === section ? 'page' : undefined}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" className="container">
        {/* Hero Section */}
        <section className="hero-section animate-on-scroll" aria-labelledby="hero-title">
          <div className="hero-content">
            <div className="hero-profile">
              {hasProfileImage ? (
                <img
                  src="/picture.jpg"
                  alt="Profile photo"
                  className="profile-image"
                  onError={() => setHasProfileImage(false)}
                />
              ) : (
                <div className="profile-image-placeholder" aria-label="Profile photo">
                  <span>PK</span>
                </div>
              )}
            </div>
            <h1 id="hero-title" className="hero-title">Prashant Kumar</h1>
            <p className="hero-subtitle">Full-Stack Developer</p>
            <p className="hero-description">
              CS student building web applications with React, Node.js, and MongoDB.
              Looking for internship opportunities in software development.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('projects')} className="btn-primary">
                View Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-secondary">
                Get in Touch
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

        {/* About Section */}
        <section id="about" className="section animate-on-scroll" aria-labelledby="about-title">
          <h2 id="about-title" className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a second-year Computer Science student with a focus on full-stack development and backend engineering.
                I enjoy solving complex problems through clean, efficient code and building applications that deliver tangible value.
              </p>
              <p>
                My technical interests include distributed systems, API design, and performance optimization.
                I'm currently exploring cloud technologies and microservices architecture.
              </p>
            </div>
            <div className="quick-facts">
              <h3>Quick Facts</h3>
              <ul>
                <li>
                  <span className="icon" aria-hidden="true">🎓</span>
                  <span>Expected Graduation: 2027</span>
                </li>
                <li>
                  <span className="icon" aria-hidden="true">📍</span>
                  <span>Open to Remote & On-site opportunities</span>
                </li>
                <li>
                  <span className="icon" aria-hidden="true">💼</span>
                  <span>Open to Internship & Full-time roles</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills-section animate-on-scroll" aria-labelledby="skills-title">
          <h2 id="skills-title" className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <article className="skill-card">
              <h3>
                <span className="skill-icon" aria-hidden="true">🖥️</span>
                Backend
              </h3>
              <ul className="skill-list">
                {skills.backend.map((skill, index) => (
                  <li
                    key={index}
                    className={`skill-item ${hoveredSkill === `backend-${index}` ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredSkill(`backend-${index}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level ${skill.level.toLowerCase()}`}>{skill.level}</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-progress ${skill.level.toLowerCase()}`}
                        style={{ width: hoveredSkill === `backend-${index}` ? `${skill.percent}%` : '0%' }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
            <article className="skill-card">
              <h3>
                <span className="skill-icon" aria-hidden="true">🎨</span>
                Frontend
              </h3>
              <ul className="skill-list">
                {skills.frontend.map((skill, index) => (
                  <li
                    key={index}
                    className={`skill-item ${hoveredSkill === `frontend-${index}` ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredSkill(`frontend-${index}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level ${skill.level.toLowerCase()}`}>{skill.level}</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-progress ${skill.level.toLowerCase()}`}
                        style={{ width: hoveredSkill === `frontend-${index}` ? `${skill.percent}%` : '0%' }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
            <article className="skill-card">
              <h3>
                <span className="skill-icon" aria-hidden="true">🛠️</span>
                Tools & Platforms
              </h3>
              <ul className="skill-list">
                {skills.tools.map((skill, index) => (
                  <li
                    key={index}
                    className={`skill-item ${hoveredSkill === `tools-${index}` ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredSkill(`tools-${index}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className={`skill-level ${skill.level.toLowerCase()}`}>{skill.level}</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-progress ${skill.level.toLowerCase()}`}
                        style={{ width: hoveredSkill === `tools-${index}` ? `${skill.percent}%` : '0%' }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section animate-on-scroll" aria-labelledby="projects-title">
          <h2 id="projects-title" className="section-title">Projects</h2>
          <div className="projects-container">
            {projects.map((project) => (
              <article
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''} ${expandedProject === project.id ? 'expanded' : ''}`}
              >
                <div className="project-content">
                  {project.featured && <span className="featured-badge">Featured Project</span>}
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <button
                      className="expand-btn"
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      aria-expanded={expandedProject === project.id}
                      aria-label={expandedProject === project.id ? `Collapse ${project.title} details` : `Expand ${project.title} details`}
                    >
                      {expandedProject === project.id ? '−' : '+'}
                    </button>
                  </div>
                  <p className="project-short-desc">{project.shortDesc}</p>
                  <div className="tech-tags" role="list" aria-label="Technologies used">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag" role="listitem">{tech}</span>
                    ))}
                  </div>

                  {/* Expanded Details */}
                  <div className={`project-details ${expandedProject === project.id ? 'visible' : ''}`}>
                    <div className="detail-block">
                      <h4>Problem</h4>
                      <p>{project.problem}</p>
                    </div>
                    <div className="detail-block">
                      <h4>Solution</h4>
                      <p>{project.solution}</p>
                    </div>
                    <div className="detail-block">
                      <h4>Key Features</h4>
                      <ul className="features-list">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="detail-block">
                      <h4>Why This Matters</h4>
                      <p>{project.impact}</p>
                    </div>
                  </div>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
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
                        className="project-link primary"
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

        {/* Education & Certifications */}
        <section id="education" className="section animate-on-scroll" aria-labelledby="education-title">
          <h2 id="education-title" className="section-title">Education & Certifications</h2>
          <div className="education-grid">
            <article className="education-card">
              <h3>Education</h3>
              <div className="education-item">
                <h4>B.Tech in Computer Science</h4>
                <p className="institution">Lovely Professional University (2023 - 2027)</p>
                <p className="gpa">CGPA: 6.39</p>
              </div>
              <div className="education-item">
                <h4>Class 12th (Intermediate)</h4>
                <p className="institution">Dr. D Ram D.A.V Public School, March 2022</p>
                <p className="gpa">Percentage: 78%</p>
              </div>
              <div className="education-item">
                <h4>Class 10th (Matriculation)</h4>
                <p className="institution">Dr. D Ram D.A.V Public School, March 2020</p>
                <p className="gpa">Percentage: 86.40%</p>
              </div>
            </article>
            <article className="education-card">
              <h3>Certifications</h3>
              <ul className="certifications-list">
                <li>
                  <h4>Cloud Computing</h4>
                  <p>NPTEL — IIT Kharagpur</p>
                  <span className="cert-duration">Jan 2025 – Apr 2025 • 12-week certified course</span>
                </li>
                <li>
                  <h4>C++ Programming (OOPs & DSA)</h4>
                  <p>CSE Pathshala</p>
                  <span className="cert-duration">Jun 2025 – Jul 2025 • 35+ hours summer training</span>
                </li>
                <li>
                  <h4>Mind Sprint 48-Hour International Hackathon</h4>
                  <p>Unstop — Participant</p>
                  <span className="cert-duration">2025</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* Achievements */}
        <section className="section animate-on-scroll" aria-labelledby="achievements-title">
          <h2 id="achievements-title" className="section-title">Achievements</h2>
          <div className="achievements-container">
            {achievements.map((achievement, index) => (
              <article key={index} className="achievement-card">
                <span className="achievement-icon" aria-hidden="true">{achievement.icon}</span>
                <div>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section animate-on-scroll" aria-labelledby="contact-title">
          <h2 id="contact-title" className="section-title">Get In Touch</h2>
          <div className="contact-card">
            <p className="contact-intro">
              I'm currently seeking internship and new grad opportunities. Feel free to reach out if you think
              I'd be a good fit for your team.
            </p>
            <div className="contact-links">
              <a
                href="mailto:pk1819544@gmail.com"
                className="contact-link"
                aria-label="Send email to pk1819544@gmail.com"
              >
                <span aria-hidden="true">📧</span> pk1819544@gmail.com
              </a>
              <a
                href="https://github.com/Prashant730"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="Visit GitHub profile"
              >
                <span aria-hidden="true">💻</span> github.com/Prashant730
              </a>
              <a
                href="https://www.linkedin.com/in/prashant-kumar-r13/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="Visit LinkedIn profile"
              >
                <span aria-hidden="true">💼</span> linkedin.com/in/prashant-kumar-r13
              </a>
              <a
                href="/resume.pdf"
                download
                className="contact-link"
                aria-label="Download resume (PDF)"
              >
                <span aria-hidden="true">📄</span> Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <p>© 2025 Prashant Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
