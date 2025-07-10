'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function AnimatedThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="p-2 rounded-md bg-[hsl(var(--accent))] border border-[hsl(var(--border))]">
        <div className="w-5 h-5 bg-[hsl(var(--muted))] rounded" />
      </div>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <motion.button
      className="p-2 rounded-md bg-[hsl(var(--accent))] hover:bg-[hsl(var(--muted))] border border-[hsl(var(--border))] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))]"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Basculer vers le mode ${isDark ? 'clair' : 'sombre'}`}
    >
      <motion.div
        animate={{
          rotate: isDark ? 180 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
        className="text-[hsl(var(--foreground))] flex items-center justify-center"
      >
        {isDark ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        )}
      </motion.div>
    </motion.button>
  )
}