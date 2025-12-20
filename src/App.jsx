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
  const [profileEnlarged, setProfileEnlarged] = useState(false)
  const mobileNavRef = useRef(null)

  // Soft skills data
  const softSkills = [
    {
      title: 'Problem Decomposition',
      description: 'Breaking complex features into manageable, testable components.'
    },
    {
      title: 'Clear Technical Communication',
      description: 'Documenting code and explaining technical decisions to teammates.'
    },
    {
      title: 'Ownership Mindset',
      description: 'Taking features from idea to deployment with accountability.'
    },
    {
      title: 'Debugging-Oriented Thinking',
      description: 'Systematic approach to identifying and resolving issues.'
    }
  ]

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

  // Close enlarged profile on escape key
  useEffect(() => {
    if (!profileEnlarged) return

    const handleEscape = (e) => {
      if (e.key === 'Escape') setProfileEnlarged(false)
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [profileEnlarged])

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
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)] z-[9999]" role="status" aria-label="Loading portfolio">
        <div className="relative">
          <div className="loading-spinner"></div>
          <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl animate-pulse"></div>
        </div>
        <p className="mt-6 text-[var(--text-muted)] text-sm font-medium tracking-wide animate-pulse">Loading portfolio...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] font-sans">
      {/* Skip to Content Link */}
      <a
        href="#main-content"
        className="absolute -top-full left-4 px-5 py-3 bg-[var(--accent)] text-white no-underline rounded-lg font-medium text-sm z-[1000] focus:top-4"
      >
        Skip to main content
      </a>

      {/* Header Navigation */}
      <header className="bg-[var(--bg-secondary)]/95 backdrop-blur-md sticky top-0 z-[100] border-b border-[var(--border)] shadow-sm" role="banner">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center min-h-[56px] sm:min-h-[64px] lg:min-h-[72px] gap-3">
            <a
              href="/"
              className="text-base lg:text-lg font-bold text-[var(--text-primary)] no-underline tracking-tight min-h-[44px] flex items-center hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 hover:scale-105"
              aria-label="Prashant Kumar - Home"
            >
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">Prashant</span>
              <span className="ml-1.5">Kumar</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-1" role="navigation" aria-label="Main navigation">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`bg-transparent border-none text-sm font-medium cursor-pointer px-3.5 py-2.5 rounded-lg transition-all min-h-[44px] flex items-center focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 ${
                    activeSection === section
                      ? 'text-[var(--accent)] bg-[var(--bg-tertiary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
                  }`}
                  aria-current={activeSection === section ? 'page' : undefined}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="flex lg:hidden bg-transparent border-none p-2 cursor-pointer w-[44px] h-[44px] items-center justify-center rounded-lg hover:bg-[var(--bg-tertiary)]"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
            </button>

            <button
              onClick={toggleTheme}
              className="bg-[var(--bg-tertiary)] border border-[var(--border)] text-base w-[44px] h-[44px] rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center flex-shrink-0 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/30 hover:scale-110 hover:rotate-12 focus-visible:outline-2 focus-visible:outline-green-600 focus-visible:outline-offset-2 shadow-sm"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav
            id="mobile-nav"
            ref={mobileNavRef}
            className={`${mobileMenuOpen ? 'flex' : 'hidden'} flex-col py-4 border-t border-[var(--border)] bg-[var(--bg-secondary)]`}
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`bg-transparent border-none text-base font-medium p-4 text-left cursor-pointer rounded-lg transition-all min-h-[44px] ${
                  activeSection === section
                    ? 'text-[var(--accent)] bg-[var(--bg-tertiary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-tertiary)]'
                }`}
                aria-current={activeSection === section ? 'page' : undefined}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Enlarged Profile Image Overlay */}
        {profileEnlarged && (
          <div
            className="fixed inset-0 z-[9998] bg-black/80 flex items-center justify-center cursor-pointer transition-opacity duration-300"
            onClick={() => setProfileEnlarged(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged profile photo"
          >
            <div className="relative">
              {hasProfileImage ? (
                <img
                  src="/picture.jpg"
                  alt="Profile photo enlarged"
                  className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full object-cover shadow-[0_0_0_4px_var(--bg-secondary),0_0_0_8px_var(--accent),0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-transform duration-300 scale-100"
                />
              ) : (
                <div
                  className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl font-bold text-white dark:text-zinc-900 shadow-[0_0_0_4px_var(--bg-secondary),0_0_0_8px_var(--accent),0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-transform duration-300 scale-100"
                >
                  <span>PK</span>
                </div>
              )}
              <p className="text-white/70 text-sm mt-4 text-center">Click anywhere to close</p>
            </div>
          </div>
        )}

        {/* Hero Section */}
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
              Computer Science student building full-stack web applications using React, Node.js, and MongoDB.
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

        {/* About Section */}
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

        {/* Skills Section */}
        <section
          id="skills"
          className="py-12 sm:py-14 lg:py-16 xl:py-20 bg-[var(--bg-secondary)] -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-12 px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-[var(--border)] animate-fade-in-up"
          aria-labelledby="skills-title"
        >
          <h2 id="skills-title" className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-7 lg:mb-8 xl:mb-10 text-[var(--text-primary)] tracking-tight flex items-center gap-3">
            <span className="inline-block w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-400 rounded-full"></span>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 xl:gap-7 max-w-[1200px] mx-auto">
            <article className="bg-[var(--bg-primary)] p-5 sm:p-6 xl:p-7 rounded-xl border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]">
              <h3 className="text-base font-semibold mb-4 text-[var(--text-primary)] flex items-center gap-2.5 pb-3 border-b-2 border-[var(--border)]">
                <span className="text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]" aria-hidden="true">🖥️</span>
                Backend
              </h3>
              <ul className="list-none">
                {skills.backend.map((skill, index) => (
                  <li
                    key={index}
                    className={`py-3 px-3.5 -mx-3.5 border-b border-[var(--border)] cursor-pointer transition-all duration-300 rounded-lg relative last:border-b-0 ${
                      hoveredSkill === `backend-${index}`
                        ? 'translate-x-1.5 bg-gradient-to-r from-[rgba(65,74,55,0.08)] to-transparent dark:from-[rgba(212,175,55,0.1)] shadow-[0_0_0_1px_rgba(65,74,55,0.15),0_4px_12px_rgba(65,74,55,0.1)] dark:shadow-[0_0_0_1px_rgba(212,175,55,0.2),0_4px_12px_rgba(212,175,55,0.15)]'
                        : ''
                    }`}
                    onMouseEnter={() => setHoveredSkill(`backend-${index}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium transition-colors ${hoveredSkill === `backend-${index}` ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-xs font-bold py-1.5 px-3 rounded-md whitespace-nowrap uppercase tracking-wider transition-transform border-2 border-transparent ${
                        hoveredSkill === `backend-${index}` ? 'scale-110 animate-pulse-badge' : ''
                      } ${
                        skill.level.toLowerCase() === 'strong'
                          ? 'bg-gradient-to-br from-[#414A37] to-[#5a6b4a] text-white border-[#414A37] shadow-[0_2px_8px_rgba(65,74,55,0.35)] dark:from-[#16a34a] dark:to-[#22c55e] dark:border-[#22c55e] dark:shadow-[0_2px_12px_rgba(34,197,94,0.5)]'
                          : skill.level.toLowerCase() === 'intermediate'
                          ? 'bg-gradient-to-br from-[#99744A] to-[#b8956a] text-white border-[#99744A] shadow-[0_2px_8px_rgba(153,116,74,0.35)] dark:from-[#ca8a04] dark:to-[#eab308] dark:text-zinc-900 dark:border-[#eab308] dark:shadow-[0_2px_12px_rgba(234,179,8,0.5)]'
                          : 'bg-gradient-to-br from-[#7a8a9a] to-[#9aa8b8] text-white border-[#7a8a9a] shadow-[0_2px_8px_rgba(122,138,154,0.35)] dark:from-[#2563eb] dark:to-[#3b82f6] dark:border-[#3b82f6] dark:shadow-[0_2px_12px_rgba(59,130,246,0.5)]'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1.5 bg-[var(--bg-tertiary)] rounded-sm overflow-hidden">
                      <div
                        className={`skill-progress h-full rounded-sm ${
                          skill.level.toLowerCase() === 'strong'
                            ? 'bg-gradient-to-r from-[#414A37] to-[#5a6b4a] shadow-[0_0_8px_rgba(65,74,55,0.4)] dark:from-[#22c55e] dark:to-[#4ade80] dark:shadow-[0_0_12px_rgba(34,197,94,0.5)]'
                            : skill.level.toLowerCase() === 'intermediate'
                            ? 'bg-gradient-to-r from-[#99744A] to-[#b8956a] shadow-[0_0_8px_rgba(153,116,74,0.4)] dark:from-[#eab308] dark:to-[#facc15] dark:shadow-[0_0_12px_rgba(234,179,8,0.5)]'
                            : 'bg-gradient-to-r from-[#a89080] to-[#c4b0a0] shadow-[0_0_8px_rgba(168,144,128,0.4)] dark:from-[#3b82f6] dark:to-[#60a5fa] dark:shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                        }`}
                        style={{ width: hoveredSkill === `backend-${index}` ? `${skill.percent}%` : '0%' }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
            <article className="bg-[var(--bg-primary)] p-5 sm:p-6 xl:p-7 rounded-xl border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]">
              <h3 className="text-base font-semibold mb-4 text-[var(--text-primary)] flex items-center gap-2.5 pb-3 border-b-2 border-[var(--border)]">
                <span className="text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]" aria-hidden="true">🎨</span>
                Frontend
              </h3>
              <ul className="list-none">
                {skills.frontend.map((skill, index) => (
                  <li
                    key={index}
                    className={`py-3 px-3.5 -mx-3.5 border-b border-[var(--border)] cursor-pointer transition-all duration-300 rounded-lg relative last:border-b-0 ${
                      hoveredSkill === `frontend-${index}`
                        ? 'translate-x-1.5 bg-gradient-to-r from-[rgba(65,74,55,0.08)] to-transparent dark:from-[rgba(212,175,55,0.1)] shadow-[0_0_0_1px_rgba(65,74,55,0.15),0_4px_12px_rgba(65,74,55,0.1)] dark:shadow-[0_0_0_1px_rgba(212,175,55,0.2),0_4px_12px_rgba(212,175,55,0.15)]'
                        : ''
                    }`}
                    onMouseEnter={() => setHoveredSkill(`frontend-${index}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium transition-colors ${hoveredSkill === `frontend-${index}` ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-xs font-bold py-1.5 px-3 rounded-md whitespace-nowrap uppercase tracking-wider transition-transform border-2 border-transparent ${
                        hoveredSkill === `frontend-${index}` ? 'scale-110 animate-pulse-badge' : ''
                      } ${
                        skill.level.toLowerCase() === 'strong'
                          ? 'bg-gradient-to-br from-[#414A37] to-[#5a6b4a] text-white border-[#414A37] shadow-[0_2px_8px_rgba(65,74,55,0.35)] dark:from-[#16a34a] dark:to-[#22c55e] dark:border-[#22c55e] dark:shadow-[0_2px_12px_rgba(34,197,94,0.5)]'
                          : skill.level.toLowerCase() === 'intermediate'
                          ? 'bg-gradient-to-br from-[#99744A] to-[#b8956a] text-white border-[#99744A] shadow-[0_2px_8px_rgba(153,116,74,0.35)] dark:from-[#ca8a04] dark:to-[#eab308] dark:text-zinc-900 dark:border-[#eab308] dark:shadow-[0_2px_12px_rgba(234,179,8,0.5)]'
                          : 'bg-gradient-to-br from-[#7a8a9a] to-[#9aa8b8] text-white border-[#7a8a9a] shadow-[0_2px_8px_rgba(122,138,154,0.35)] dark:from-[#2563eb] dark:to-[#3b82f6] dark:border-[#3b82f6] dark:shadow-[0_2px_12px_rgba(59,130,246,0.5)]'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1.5 bg-[var(--bg-tertiary)] rounded-sm overflow-hidden">
                      <div
                        className={`skill-progress h-full rounded-sm ${
                          skill.level.toLowerCase() === 'strong'
                            ? 'bg-gradient-to-r from-[#414A37] to-[#5a6b4a] shadow-[0_0_8px_rgba(65,74,55,0.4)] dark:from-[#22c55e] dark:to-[#4ade80] dark:shadow-[0_0_12px_rgba(34,197,94,0.5)]'
                            : skill.level.toLowerCase() === 'intermediate'
                            ? 'bg-gradient-to-r from-[#99744A] to-[#b8956a] shadow-[0_0_8px_rgba(153,116,74,0.4)] dark:from-[#eab308] dark:to-[#facc15] dark:shadow-[0_0_12px_rgba(234,179,8,0.5)]'
                            : 'bg-gradient-to-r from-[#a89080] to-[#c4b0a0] shadow-[0_0_8px_rgba(168,144,128,0.4)] dark:from-[#3b82f6] dark:to-[#60a5fa] dark:shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                        }`}
                        style={{ width: hoveredSkill === `frontend-${index}` ? `${skill.percent}%` : '0%' }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
            <article className="bg-[var(--bg-primary)] p-5 sm:p-6 xl:p-7 rounded-xl border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--accent)]">
              <h3 className="text-base font-semibold mb-4 text-[var(--text-primary)] flex items-center gap-2.5 pb-3 border-b-2 border-[var(--border)]">
                <span className="text-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[5deg]" aria-hidden="true">🛠️</span>
                Tools & Platforms
              </h3>
              <ul className="list-none">
                {skills.tools.map((skill, index) => (
                  <li
                    key={index}
                    className={`py-3 px-3.5 -mx-3.5 border-b border-[var(--border)] cursor-pointer transition-all duration-300 rounded-lg relative last:border-b-0 ${
                      hoveredSkill === `tools-${index}`
                        ? 'translate-x-1.5 bg-gradient-to-r from-[rgba(65,74,55,0.08)] to-transparent dark:from-[rgba(212,175,55,0.1)] shadow-[0_0_0_1px_rgba(65,74,55,0.15),0_4px_12px_rgba(65,74,55,0.1)] dark:shadow-[0_0_0_1px_rgba(212,175,55,0.2),0_4px_12px_rgba(212,175,55,0.15)]'
                        : ''
                    }`}
                    onMouseEnter={() => setHoveredSkill(`tools-${index}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium transition-colors ${hoveredSkill === `tools-${index}` ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-xs font-bold py-1.5 px-3 rounded-md whitespace-nowrap uppercase tracking-wider transition-transform border-2 border-transparent ${
                        hoveredSkill === `tools-${index}` ? 'scale-110 animate-pulse-badge' : ''
                      } ${
                        skill.level.toLowerCase() === 'strong'
                          ? 'bg-gradient-to-br from-[#414A37] to-[#5a6b4a] text-white border-[#414A37] shadow-[0_2px_8px_rgba(65,74,55,0.35)] dark:from-[#16a34a] dark:to-[#22c55e] dark:border-[#22c55e] dark:shadow-[0_2px_12px_rgba(34,197,94,0.5)]'
                          : skill.level.toLowerCase() === 'intermediate'
                          ? 'bg-gradient-to-br from-[#99744A] to-[#b8956a] text-white border-[#99744A] shadow-[0_2px_8px_rgba(153,116,74,0.35)] dark:from-[#ca8a04] dark:to-[#eab308] dark:text-zinc-900 dark:border-[#eab308] dark:shadow-[0_2px_12px_rgba(234,179,8,0.5)]'
                          : 'bg-gradient-to-br from-[#7a8a9a] to-[#9aa8b8] text-white border-[#7a8a9a] shadow-[0_2px_8px_rgba(122,138,154,0.35)] dark:from-[#2563eb] dark:to-[#3b82f6] dark:border-[#3b82f6] dark:shadow-[0_2px_12px_rgba(59,130,246,0.5)]'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-1.5 bg-[var(--bg-tertiary)] rounded-sm overflow-hidden">
                      <div
                        className={`skill-progress h-full rounded-sm ${
                          skill.level.toLowerCase() === 'strong'
                            ? 'bg-gradient-to-r from-[#414A37] to-[#5a6b4a] shadow-[0_0_8px_rgba(65,74,55,0.4)] dark:from-[#22c55e] dark:to-[#4ade80] dark:shadow-[0_0_12px_rgba(34,197,94,0.5)]'
                            : skill.level.toLowerCase() === 'intermediate'
                            ? 'bg-gradient-to-r from-[#99744A] to-[#b8956a] shadow-[0_0_8px_rgba(153,116,74,0.4)] dark:from-[#eab308] dark:to-[#facc15] dark:shadow-[0_0_12px_rgba(234,179,8,0.5)]'
                            : 'bg-gradient-to-r from-[#a89080] to-[#c4b0a0] shadow-[0_0_8px_rgba(168,144,128,0.4)] dark:from-[#3b82f6] dark:to-[#60a5fa] dark:shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                        }`}
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
        <section id="projects" className="py-12 sm:py-14 lg:py-16 xl:py-20 animate-fade-in-up" aria-labelledby="projects-title">
          <h2 id="projects-title" className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-7 lg:mb-8 xl:mb-10 text-[var(--text-primary)] tracking-tight flex items-center gap-3">
            <span className="inline-block w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-400 rounded-full"></span>
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 xl:gap-7">
            {projects.map((project) => (
              <article
                key={project.id}
                className={`bg-[var(--bg-secondary)] rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  project.featured ? 'border-green-500 border-2 col-span-full ring-2 ring-green-500/20 shadow-lg shadow-green-500/10' : 'border-[var(--border)] hover:border-green-500/50'
                } ${expandedProject === project.id ? 'col-span-full' : ''}`}
              >
                <div className="p-5 sm:p-6 xl:p-7">
                  {project.featured && (
                    <span className="inline-block bg-green-700 text-white py-1.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider mb-3 shadow-md border-2 border-green-800 drop-shadow-lg">
                      FEATURED PROJECT
                    </span>
                  )}
                  <div className="flex justify-between items-center gap-3 mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] tracking-tight">
                      {project.title}
                    </h3>
                    <button
                      className="bg-[var(--bg-tertiary)] border border-[var(--border)] text-[var(--text-secondary)] w-[44px] h-[44px] rounded-lg text-xl cursor-pointer transition-all flex items-center justify-center flex-shrink-0 hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] dark:hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      aria-expanded={expandedProject === project.id}
                      aria-label={expandedProject === project.id ? `Collapse ${project.title} details` : `Expand ${project.title} details`}
                    >
                      {expandedProject === project.id ? '−' : '+'}
                    </button>
                  </div>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-3">
                    {project.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5" role="list" aria-label="Technologies used">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-[var(--bg-tertiary)] text-[var(--text-secondary)] py-1 px-2.5 rounded text-xs font-medium" role="listitem">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Details */}
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

        {/* How I Work - Soft Skills Section */}
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

        {/* Education & Certifications */}
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
                <p className="text-[var(--accent)] font-semibold text-sm">CGPA: 6.76</p>
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

        {/* Achievements */}
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

        {/* Contact Section */}
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
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3">
              <a
                href="mailto:pk1819544@gmail.com"
                className="group flex items-center justify-center gap-2.5 text-[var(--text-secondary)] no-underline py-3.5 px-4 sm:px-5 bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl transition-all duration-300 text-sm font-medium min-h-[44px] hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-green-600 focus-visible:outline-offset-2"
                aria-label="Send email to pk1819544@gmail.com"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">📧</span> pk1819544@gmail.com
              </a>
              <a
                href="https://github.com/Prashant730"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 text-[var(--text-secondary)] no-underline py-3.5 px-4 sm:px-5 bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl transition-all duration-300 text-sm font-medium min-h-[44px] hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-green-600 focus-visible:outline-offset-2"
                aria-label="Visit GitHub profile"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">💻</span> github.com/Prashant730
              </a>
              <a
                href="https://www.linkedin.com/in/prashant-kumar-r13/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 text-[var(--text-secondary)] no-underline py-3.5 px-4 sm:px-5 bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl transition-all duration-300 text-sm font-medium min-h-[44px] hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-green-600 focus-visible:outline-offset-2"
                aria-label="Visit LinkedIn profile"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">💼</span> linkedin.com/in/prashant-kumar-r13
              </a>
              <a
                href="/generalCV.pdf"
                download
                className="group flex items-center justify-center gap-2.5 text-white no-underline py-3.5 px-4 sm:px-5 bg-gradient-to-r from-green-600 to-emerald-500 border-2 border-green-700 rounded-xl transition-all duration-300 text-sm font-bold min-h-[44px] shadow-md hover:shadow-xl hover:-translate-y-0.5 hover:from-green-700 hover:to-emerald-600 focus-visible:outline-2 focus-visible:outline-green-600 focus-visible:outline-offset-2"
                aria-label="Download resume (PDF)"
              >
                <span className="text-lg group-hover:scale-110 group-hover:animate-bounce transition-transform">📄</span> Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      <button
        className={`fixed bottom-6 sm:bottom-8 right-6 sm:right-8 w-11 h-11 rounded-full bg-green-600 dark:bg-green-700 text-white dark:text-white border border-green-700 dark:border-green-400 text-2xl cursor-pointer transition-all z-[9999] shadow-lg flex items-center justify-center p-0 ${
          showBackToTop
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible pointer-events-none translate-y-5'
        } hover:bg-green-700 hover:dark:bg-green-800 hover:border-green-800 hover:dark:border-green-500 hover:scale-105 focus-visible:outline-2 focus-visible:outline-green-700 focus-visible:outline-offset-2`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mx-auto">
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-[var(--bg-secondary)] to-[var(--bg-primary)] py-10 text-center border-t border-[var(--border)]" role="contentinfo">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <p className="text-[var(--text-muted)] text-sm mb-2">Built with React + Tailwind CSS</p>
          <p className="text-[var(--text-secondary)] text-sm font-medium">© 2025 <span className="text-green-600 dark:text-green-400">Prashant Kumar</span>. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
