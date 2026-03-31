import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.92 }}
      className="relative w-9 h-9 rounded-full flex items-center justify-center
                 bg-cream-200 dark:bg-ink-700 text-ink-700 dark:text-cream-200
                 hover:bg-cream-200/80 dark:hover:bg-ink-600 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </motion.div>
    </motion.button>
  )
}
