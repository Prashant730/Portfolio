export default function ProfileOverlay({ profileEnlarged, setProfileEnlarged, hasProfileImage }) {
  if (!profileEnlarged) {
    return null
  }

  return (
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
          <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl font-bold text-white dark:text-zinc-900 shadow-[0_0_0_4px_var(--bg-secondary),0_0_0_8px_var(--accent),0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-transform duration-300 scale-100">
            <span>PK</span>
          </div>
        )}
        <p className="text-white/70 text-sm mt-4 text-center">Click anywhere to close</p>
      </div>
    </div>
  )
}
