'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function AnimatedThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 cursor-pointer"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      layout
    >
      <motion.div
        className="w-6 h-6 bg-white dark:bg-gray-300 rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 32 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
      >
        <motion.div
          animate={{
            rotate: theme === 'dark' ? 360 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}