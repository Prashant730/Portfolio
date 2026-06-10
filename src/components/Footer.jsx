export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[var(--bg-secondary)] to-[var(--bg-primary)] py-10 text-center border-t border-[var(--border)]" role="contentinfo">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <p className="text-[var(--text-muted)] text-sm mb-2">Built with React + Tailwind CSS</p>
        <p className="text-[var(--text-secondary)] text-sm font-medium">© 2025 <span className="text-green-600 dark:text-green-400">Prashant Kumar</span>. All rights reserved.</p>
      </div>
    </footer>
  )
}
