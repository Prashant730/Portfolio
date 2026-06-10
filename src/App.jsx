import { useEffect, useRef, useState } from 'react'
import './App.css'
import { skills, projects, achievements } from './data'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ProfileOverlay from './components/ProfileOverlay'
import BackToTopButton from './components/BackToTopButton'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import SoftSkillsSection from './components/sections/SoftSkillsSection'
import EducationSection from './components/sections/EducationSection'
import AchievementsSection from './components/sections/AchievementsSection'
import ContactSection from './components/sections/ContactSection'

const lockBodyScroll = () => {
  const body = document.body
  const currentLocks = Number(body.dataset.scrollLocks || '0')

  if (currentLocks === 0) {
    body.dataset.prevOverflow = body.style.overflow || ''
    body.style.overflow = 'hidden'
  }

  body.dataset.scrollLocks = String(currentLocks + 1)
}

const unlockBodyScroll = () => {
  const body = document.body
  const currentLocks = Number(body.dataset.scrollLocks || '0')

  if (currentLocks <= 1) {
    body.style.overflow = body.dataset.prevOverflow || ''
    delete body.dataset.scrollLocks
    delete body.dataset.prevOverflow
    return
  }

  body.dataset.scrollLocks = String(currentLocks - 1)
}

const navItems = ['about', 'skills', 'projects', 'education', 'contact']

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

const getInitialTheme = () => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('theme') === 'dark'
}

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [darkMode, setDarkMode] = useState(getInitialTheme)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [expandedProject, setExpandedProject] = useState(null)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [hasProfileImage, setHasProfileImage] = useState(true)
  const [profileEnlarged, setProfileEnlarged] = useState(false)
  const mobileNavRef = useRef(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000)
    return () => clearTimeout(timer)
  }, [])

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

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!profileEnlarged) return

    const handleEscape = (e) => {
      if (e.key === 'Escape') setProfileEnlarged(false)
    }

    document.addEventListener('keydown', handleEscape)
    lockBodyScroll()

    return () => {
      document.removeEventListener('keydown', handleEscape)
      unlockBodyScroll()
    }
  }, [profileEnlarged])

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
    setDarkMode((prev) => !prev)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
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

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] font-sans">
      <a
        href="#main-content"
        className="absolute -top-full left-4 px-5 py-3 bg-[var(--accent)] text-white no-underline rounded-lg font-medium text-sm z-[1000] focus:top-4"
      >
        Skip to main content
      </a>

      <Header
        navItems={navItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        mobileNavRef={mobileNavRef}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <main id="main-content" className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <ProfileOverlay
          profileEnlarged={profileEnlarged}
          setProfileEnlarged={setProfileEnlarged}
          hasProfileImage={hasProfileImage}
        />

        <HeroSection
          hasProfileImage={hasProfileImage}
          setHasProfileImage={setHasProfileImage}
          setProfileEnlarged={setProfileEnlarged}
          scrollToSection={scrollToSection}
        />
        <AboutSection />
        <SkillsSection skills={skills} />
        <ProjectsSection
          projects={projects}
          expandedProject={expandedProject}
          setExpandedProject={setExpandedProject}
          handleExternalLink={handleExternalLink}
        />
        <SoftSkillsSection softSkills={softSkills} />
        <EducationSection />
        <AchievementsSection achievements={achievements} />
        <ContactSection />
      </main>

      <BackToTopButton showBackToTop={showBackToTop} scrollToTop={scrollToTop} />
      <Footer />
    </div>
  )
}

export default App
