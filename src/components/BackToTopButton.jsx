export default function BackToTopButton({ showBackToTop, scrollToTop }) {
  return (
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
  )
}
