export default function Header({
  navItems,
  activeSection,
  scrollToSection,
  mobileMenuOpen,
  toggleMobileMenu,
  mobileNavRef,
  darkMode,
  toggleTheme,
}) {
  return (
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
  )
}
