import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaJava, FaMobileAlt, FaNetworkWired, FaLock, FaDatabase, FaServer } from 'react-icons/fa'
import {
  SiBootstrap,
  SiC,
  SiCss,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiVscodium,
  SiWebpack,
  SiXampp,
  SiNpm,
} from 'react-icons/si'
import { skillDetails } from '../../data/skillDetails'

const GROUP_TO_TYPE = {
  languages: 'Language',
  backend: 'Backend',
  frontend: 'Frontend',
  databases: 'Database',
  tools: 'Tool',
}

const DEFAULT_CERTIFICATE_IMAGES = {
  Language: '/Screenshot 2026-03-13 150234.png',
  Frontend: '/Screenshot 2026-03-13 150242.png',
  Backend: '/Screenshot 2026-03-13 150311.png',
  Database: '/Screenshot 2026-03-13 150311.png',
  Tool: '/Screenshot 2026-03-13 150234.png',
}

const SKILL_META = {
  // Languages
  'C++': { Icon: SiCplusplus, color: '#2d7dbd' },
  'JavaScript (ES6+)': { Icon: SiJavascript, color: '#f7df1e' },
  Python: { Icon: SiPython, color: '#3776ab' },
  Java: { Icon: FaJava, color: '#e76f00' },
  C: { Icon: SiC, color: '#a8b9cc' },
  PHP: { Icon: SiPhp, color: '#8892bf' },
  HTML5: { Icon: SiHtml5, color: '#e34f26' },
  CSS3: { Icon: SiCss, color: '#1572b6' },
  Vite: { Icon: SiVercel, color: '#646cff' },
  // Frontend
  'React.js': { Icon: SiReact, color: '#61dafb' },
  Bootstrap: { Icon: SiBootstrap, color: '#7952b3' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06b6d4' },
  'Responsive UI': { Icon: FaMobileAlt, color: '#22c55e' },
  'REST API Integration': { Icon: FaNetworkWired, color: '#0ea5e9' },
  'Responsive Design': { Icon: FaMobileAlt, color: '#8b5cf6' },
  'DOM Manipulation': { Icon: SiJavascript, color: '#f7df1e' },
  // Backend
  'Node.js': { Icon: SiNodedotjs, color: '#5fa04e' },
  'Express.js': { Icon: SiExpress, color: '#000000' },
  'Socket.io': { Icon: FaNetworkWired, color: '#94a3b8' },
  'JWT Authentication': { Icon: FaLock, color: '#f43f5e' },
  'RESTful APIs': { Icon: FaNetworkWired, color: '#3b82f6' },
  'MVC Architecture': { Icon: FaServer, color: '#14b8a6' },
  'REST APIs': { Icon: FaNetworkWired, color: '#3b82f6' },
  Authentication: { Icon: FaLock, color: '#ec4899' },
  'Server-side Rendering': { Icon: FaServer, color: '#8b4513' },
  // Databases
  'MongoDB (schema design, indexing)': { Icon: SiMongodb, color: '#47a248' },
  MySQL: { Icon: SiMysql, color: '#4479a1' },
  PostgreSQL: { Icon: SiPostgresql, color: '#336791' },
  'Database Design': { Icon: FaDatabase, color: '#10b981' },
  // Tools
  Git: { Icon: SiGit, color: '#f05032' },
  GitHub: { Icon: SiGithub, color: '#cdd9e5' },
  'VS Code': { Icon: SiVscodium, color: '#007acc' },
  'AWS (EC2, S3, Lambda, IAM Roles)': { Icon: FaServer, color: '#f59e0b' },
  Postman: { Icon: FaNetworkWired, color: '#f97316' },
  Vercel: { Icon: SiVercel, color: '#ffffff' },
  XAMPP: { Icon: SiXampp, color: '#fb7a24' },
  npm: { Icon: SiNpm, color: '#cb3837' },
  Docker: { Icon: SiDocker, color: '#2496ed' },
  Webpack: { Icon: SiWebpack, color: '#8dd6f9' },
}

const DEFAULT_DETAIL = {
  learn: 'Learned through documentation, tutorials, and consistent project practice.',
  certification: 'Self-learning with project-based validation.',
  implementation: 'Applied in portfolio projects, assignments, and mini builds.',
  certificate: {
    title: 'Professional Learning Track',
    issuer: 'Self-paced + coursework',
    year: 'Ongoing',
    credentialId: 'N/A',
    verifyUrl: '',
    imageUrl: '',
    imageAlt: '',
  },
}

const SKILL_DETAILS = {
  'JavaScript (ES6+)': {
    proficiency: 85,
    level: 'Advanced',
    years: '2+',
    description: 'Proficient in modern ES6+ JavaScript with strong understanding of async patterns, DOM manipulation, and functional programming. Built multiple interactive web applications with clean, maintainable code.',
    competencies: [
      'ES6+ features (arrow functions, destructuring, modules)',
      'Async/await and Promise handling',
      'DOM manipulation and event handling',
      'Array methods and functional programming',
      'Error handling and debugging'
    ],
    projects: ['BidMaster', 'BirdNet', 'Learning Tutor'],
    relatedSkills: ['React', 'Node.js', 'HTML5', 'CSS3'],
    certificate: {
      title: 'JavaScript Programming',
      issuer: 'Self-paced + coursework',
      year: '2024',
      imageUrl: '/Screenshot 2026-03-13 150234.png',
    }
  },
  Python: {
    learn: 'Learned syntax, OOP, and scripting through coding practice and coursework.',
    certification: 'Python fundamentals certification path.',
    implementation: 'Used for problem-solving scripts and backend practice exercises.',
  },
  Java: {
    learn: 'Learned core Java, OOP, and collections in academic labs and coding tasks.',
    certification: 'Java programming coursework completion.',
    implementation: 'Used in academic projects and DSA implementations.',
  },
  'C++': {
    learn: 'Learned memory management, STL, and OOP through competitive coding practice.',
    certification: 'C/C++ academic and lab completion.',
    implementation: 'Used for DSA, algorithms, and systems-level assignments.',
  },
  C: {
    learn: 'Learned procedural programming and pointers through foundational labs.',
    certification: 'C language coursework completion.',
    implementation: 'Used in core programming assignments and logic building.',
  },
  PHP: {
    learn: 'Learned server-side basics, forms, and database integration with XAMPP.',
    certification: 'Web backend coursework modules.',
    implementation: 'Used to build dynamic pages and simple CRUD workflows.',
  },
  HTML5: {
    learn: 'Learned semantic markup and accessible structure through frontend projects.',
    certification: 'Frontend basics learning track.',
    implementation: 'Used to structure responsive pages and component layouts.',
  },
  CSS3: {
    learn: 'Learned layout systems, animations, and responsive design in real UI builds.',
    certification: 'Frontend styling modules and practice milestones.',
    implementation: 'Used for theme design, card layouts, and responsive interfaces.',
  },
  'React.js': {
    learn: 'Learned hooks, component architecture, and state management through portfolio development.',
    certification: 'React coursework and guided project practice.',
    implementation: 'Used to build reusable sections, filtering UI, and dynamic rendering.',
  },
  Bootstrap: {
    learn: 'Learned utility classes and responsive grid via rapid prototyping.',
    certification: 'Frontend framework practice modules.',
    implementation: 'Used for fast responsive sections and UI scaffolding.',
  },
  'Tailwind CSS': {
    learn: 'Learned utility-first styling and composition patterns through modern UI builds.',
    certification: 'Tailwind learning track and practical assignments.',
    implementation: 'Used for consistent spacing, typography, and responsive design.',
  },
  'Responsive Design': {
    learn: 'Learned mobile-first strategy with media queries and flexible layouts.',
    certification: 'Responsive web design module completion.',
    implementation: 'Implemented adaptive grids and typography across device sizes.',
  },
  'DOM Manipulation': {
    learn: 'Learned event handling and dynamic updates with vanilla JavaScript.',
    certification: 'JavaScript browser programming modules.',
    implementation: 'Used for interactions, toggles, and real-time UI updates.',
  },
  'Node.js': {
    learn: 'Learned runtime fundamentals, modules, and API development practices.',
    certification: 'Backend fundamentals track.',
    implementation: 'Used for server setup, routes, and API integration projects.',
  },
  'Express.js': {
    learn: 'Learned middleware, routing, and error handling through API projects.',
    certification: 'Express and API development modules.',
    implementation: 'Used to build REST endpoints and backend service layers.',
  },
  'REST APIs': {
    learn: 'Learned REST principles, request methods, and status code handling.',
    certification: 'API design and integration learning path.',
    implementation: 'Implemented CRUD endpoints and client-server data flow.',
  },
  Authentication: {
    learn: 'Learned login/session concepts and token-based auth basics.',
    certification: 'Security and auth concept modules.',
    implementation: 'Implemented protected routes and credential validation workflows.',
  },
  'Server-side Rendering': {
    learn: 'Learned SSR concepts for performance, SEO, and initial content delivery.',
    certification: 'Advanced web architecture learning modules.',
    implementation: 'Applied SSR principles in backend-rendered and hybrid page setups.',
  },
  'MongoDB (schema design, indexing)': {
    learn: 'Learned NoSQL schema design and queries through backend practice.',
    certification: 'MongoDB fundamentals learning path.',
    implementation: 'Used for document storage in CRUD and auth-based apps.',
  },
  MySQL: {
    learn: 'Learned relational modeling, joins, and normalization.',
    certification: 'SQL database coursework completion.',
    implementation: 'Used for structured data storage and query-driven features.',
  },
  PostgreSQL: {
    learn: 'Learned advanced SQL features and robust relational modeling.',
    certification: 'Database systems practical modules.',
    implementation: 'Used for reliable transactional data handling in backend tasks.',
  },
  'Database Design': {
    learn: 'Learned ER modeling, normalization, and indexing concepts.',
    certification: 'Database design and architecture modules.',
    implementation: 'Applied table design and relationship planning in project schemas.',
  },
  Git: {
    learn: 'Learned branching, commits, and collaborative workflows with daily usage.',
    certification: 'Version control fundamentals track.',
    implementation: 'Used for feature branches, merge workflows, and release history.',
  },
  GitHub: {
    learn: 'Learned repository management, pull requests, and issue tracking.',
    certification: 'GitHub collaboration workflow modules.',
    implementation: 'Used for remote version control, portfolio hosting, and collaboration.',
  },
  'VS Code': {
    learn: 'Learned productivity workflow through extensions, debugging, and integrated terminal.',
    certification: 'Hands-on developer tooling practice.',
    implementation: 'Used as primary IDE for frontend/backend development and refactoring.',
  },
  Vercel: {
    learn: 'Learned deployment setup, environment variables, and domain configuration.',
    certification: 'Deployment and hosting practice milestones.',
    implementation: 'Used to deploy and host frontend portfolio builds.',
  },
  XAMPP: {
    learn: 'Learned local Apache/MySQL/PHP stack setup and configuration.',
    certification: 'Local server environment training modules.',
    implementation: 'Used for local backend testing and PHP/MySQL projects.',
  },
  npm: {
    learn: 'Learned package management, script automation, and dependency handling.',
    certification: 'Node ecosystem fundamentals practice.',
    implementation: 'Used to manage libraries and run build/dev scripts.',
  },
  Docker: {
    learn: 'Learned container basics, images, and environment consistency workflows.',
    certification: 'Containerization fundamentals modules.',
    implementation: 'Used to standardize development and deployment environments.',
  },
  Webpack: {
    learn: 'Learned bundling concepts, loaders, and optimization strategies.',
    certification: 'Build tooling and optimization practice modules.',
    implementation: 'Used for asset bundling and production-ready frontend builds.',
  },
}

export default function SkillsSection({ skills }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedSkillKey, setSelectedSkillKey] = useState(null)
  const [popupPosition, setPopupPosition] = useState({ top: 24, left: 24 })
  const popupRef = useRef(null)

  const updatePopupPosition = useCallback((targetEl) => {
    if (!targetEl || typeof window === 'undefined') return

    const rect = targetEl.getBoundingClientRect()
    const margin = 16
    const popupHeightEstimate = 450
    const gap = 12

    // Start by positioning below the card
    let top = rect.bottom + gap

    // If popup extends below viewport, try positioning above
    if (top + popupHeightEstimate > window.innerHeight - margin) {
      const topAbove = rect.top - popupHeightEstimate - gap
      if (topAbove >= margin) {
        top = topAbove
      } else {
        // If neither fits well, center vertically in viewport
        top = Math.max(margin, (window.innerHeight - popupHeightEstimate) / 2)
      }
    }

    // Left is handled by CSS (centered with transform)
    setPopupPosition({ top, left: 0 })
  }, [])

  const closeSelectedSkill = useCallback(() => {
    setSelectedSkillKey(null)
  }, [])

  const handleSkillClick = useCallback((skillKey, targetEl) => {
    if (selectedSkillKey === skillKey) {
      closeSelectedSkill()
      return
    }

    updatePopupPosition(targetEl)
    setSelectedSkillKey(skillKey)
  }, [closeSelectedSkill, selectedSkillKey, updatePopupPosition])

  const allSkills = useMemo(
    () =>
      Object.entries(skills).flatMap(([group, items]) =>
        items.map((skill) => ({
          name: skill.name,
          type: GROUP_TO_TYPE[group] || 'Tool',
        }))
      ),
    [skills]
  )

  const filteredSkills =
    activeFilter === 'All' ? allSkills : allSkills.filter((skill) => skill.type === activeFilter)
  const isPopupEnabled = activeFilter === 'All'

  const selectedSkill = useMemo(
    () => allSkills.find((skill) => `${skill.type}-${skill.name}` === selectedSkillKey) || null,
    [allSkills, selectedSkillKey]
  )

  useEffect(() => {
    if (!isPopupEnabled && selectedSkillKey) {
      closeSelectedSkill()
    }
  }, [closeSelectedSkill, isPopupEnabled, selectedSkillKey])

  useEffect(() => {
    if (!selectedSkillKey) return

    const handleOutsideClick = (event) => {
      if (!(event.target instanceof Element)) return
      if (popupRef.current?.contains(event.target)) return
      if (event.target.closest('.skills-card-trigger')) return
      closeSelectedSkill()
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
    }
  }, [closeSelectedSkill, selectedSkillKey])

  const filters = ['All', 'Language', 'Frontend', 'Backend', 'Database', 'Tool']

  return (
    <section
      id="skills"
      className="skills-showcase-section py-12 sm:py-14 lg:py-16 xl:py-20 -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-12 px-4 sm:px-6 lg:px-8 xl:px-12 animate-fade-in-up"
      aria-labelledby="skills-title"
    >
      <h2 id="skills-title" className="skills-showcase-title text-xl sm:text-2xl lg:text-3xl font-bold mb-5 sm:mb-6 lg:mb-7 text-[var(--text-primary)] tracking-tight">
        Technical Skills
      </h2>

      <div className="skills-filter-bar" role="tablist" aria-label="Filter skills by category">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`skills-filter-pill ${activeFilter === filter ? 'is-active' : ''}`}
            onClick={() => setActiveFilter(filter)}
            role="tab"
            aria-selected={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="skills-card-grid" role="list" aria-live="polite">
        {filteredSkills.map((skill) => {
          const meta = SKILL_META[skill.name] || {}
          const Icon = meta.Icon

          return (
            <article
              key={`${skill.type}-${skill.name}`}
              className="skills-card"
              role="listitem"
            >
              <button
                type="button"
                className="skills-card-trigger"
                onClick={isPopupEnabled ? (event) => handleSkillClick(`${skill.type}-${skill.name}`, event.currentTarget) : undefined}
                aria-haspopup={isPopupEnabled ? 'dialog' : undefined}
                aria-expanded={isPopupEnabled ? selectedSkillKey === `${skill.type}-${skill.name}` : undefined}
                aria-controls={isPopupEnabled ? 'skills-popup' : undefined}
                title={skillDetails[skill.name] ? `Click to see how I mastered ${skill.name}` : `Click to learn more about ${skill.name}`}
              >
                <div className="skills-card-icon-wrap" style={{ color: meta.color || '#d1d5db' }}>
                  {Icon ? <Icon className="skills-card-icon" aria-hidden="true" /> : <span className="skills-card-fallback">{skill.name[0]}</span>}
                </div>
                <p className="skills-card-name">{skill.name}</p>
              </button>
            </article>
          )
        })}
      </div>

      {isPopupEnabled && selectedSkill && createPortal(
        <div
          className="skills-popup-overlay"
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeSelectedSkill()
          }}
        >
          <div
            id="skills-popup"
            className="skills-popup"
            style={{ top: popupPosition.top, left: popupPosition.left }}
            ref={popupRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="skills-popup-title"
          >
            <button
              type="button"
              className="skills-popup-close"
              onClick={closeSelectedSkill}
              aria-label="Close skill details"
            >
              ×
            </button>

            <div className="skills-popup-header">
              <h3 id="skills-popup-title" className="skills-popup-title">{selectedSkill.name}</h3>
              <p className="skills-popup-type">{selectedSkill.type}</p>
            </div>

            <div className="skills-popup-scroll-container">
              {skillDetails[selectedSkill.name] ? (
                <>
                  {/* Proficiency Level */}
                  <div className="skills-popup-proficiency">
                    <div className="skills-popup-proficiency-header">
                      <span className="skills-popup-proficiency-label">Expertise Level</span>
                      <span className="skills-popup-proficiency-value" style={{ fontSize: '1.2rem' }}>
                        {skillDetails[selectedSkill.name].level}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
                      {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((level, i) => {
                        const currentLevelIndex = ['Beginner', 'Intermediate', 'Advanced', 'Expert'].indexOf(skillDetails[selectedSkill.name].level);
                        const isActive = i <= (currentLevelIndex >= 0 ? currentLevelIndex : 2);
                        return (
                          <div
                            key={level}
                            style={{
                              flex: 1,
                              height: '6px',
                              borderRadius: '3px',
                              background: isActive ? 'var(--accent)' : 'var(--bg-secondary)',
                              boxShadow: isActive ? '0 0 10px rgba(212, 175, 55, 0.4)' : 'none',
                              opacity: isActive ? 1 : 0.4,
                              transform: isActive ? 'scaleY(1.2)' : 'scaleY(1)',
                              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                              animation: isActive ? `fadeInUp 0.4s ease ${i * 0.1}s both` : 'none'
                            }}
                            title={level}
                          />
                        );
                      })}
                    </div>
                    <div className="skills-popup-meta-row">
                      <span className="skills-popup-years">
                        {skillDetails[selectedSkill.name].years} Experience
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="skills-popup-content">
                    <p className="skills-popup-section-title">
                      About
                    </p>
                    <p>{skillDetails[selectedSkill.name].description}</p>
                  </div>

                  {/* Key Competencies */}
                  <div className="skills-popup-content">
                    <p className="skills-popup-section-title">
                      Key Competencies
                    </p>
                    <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                      {skillDetails[selectedSkill.name].competencies.map((comp, idx) => (
                        <li key={idx}>{comp}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects Using This Skill */}
                  <div className="skills-popup-content">
                    <p className="skills-popup-section-title">
                      Used In Projects
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                      {skillDetails[selectedSkill.name].projects.map((project, idx) => (
                        <span key={idx} className="skills-popup-project-badge">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Related Skills */}
                  <div className="skills-popup-content">
                    <p className="skills-popup-section-title">
                      Related Skills
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                      {skillDetails[selectedSkill.name].relatedSkills.map((relSkill, idx) => (
                        <span key={idx} className="skills-popup-badge">
                          {relSkill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate */}
                  {skillDetails[selectedSkill.name].certificate && (
                    <div className="skills-certificate-section">
                      <p className="skills-popup-section-title" style={{ marginBottom: '0.5rem' }}>
                        Practical Experience
                      </p>
                      <p style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 700 }}>
                        {skillDetails[selectedSkill.name].certificate.title}
                      </p>
                      <p style={{ margin: '0.3rem 0 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        {skillDetails[selectedSkill.name].certificate.issuer} • {skillDetails[selectedSkill.name].certificate.year}
                      </p>
                      {skillDetails[selectedSkill.name].certificate.imageUrl && (
                        <div className="skills-certificate-image-wrap">
                          <img
                            className="skills-certificate-image"
                            src={encodeURI(skillDetails[selectedSkill.name].certificate.imageUrl)}
                            alt={`${selectedSkill.name} certificate`}
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <div className="skills-popup-content">
                  <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem' }}>
                    No detailed information available for this skill yet.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      , document.body)}
    </section>
  )
}