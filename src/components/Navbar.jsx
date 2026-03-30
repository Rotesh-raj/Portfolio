import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as Icons from "lucide-react"

// ✅ Safe Icons
const SunIcon = Icons.Sun || (() => <span />)
const MoonIcon = Icons.Moon || (() => <span />)
const MenuIcon = Icons.Menu || (() => <span />)
const CloseIcon = Icons.X || (() => <span />)

const Navbar = () => {
  const [isDark, setIsDark] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  // 🌙 Dark Mode Sync
  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
    localStorage.setItem('darkMode', JSON.stringify(isDark))
  }, [isDark])

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) setIsDark(JSON.parse(saved))
  }, [])

  const scrollToSection = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 mx-6 mt-6 rounded-3xl px-6 py-4 backdrop-blur-xl bg-white/10 border border-white/10 shadow-xl"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* 🔥 Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-black text-2xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          RR
        </motion.div>

        {/* 🧭 Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {['home', 'about', 'skills', 'projects', 'education', 'goals', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(section)
                }}
                className="relative font-medium text-white/80 hover:text-white transition"
              >
                {section}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* 🎯 Right Controls */}
        <div className="flex items-center gap-4">

          {/* 🌙 PRO 3D DARK MODE BUTTON */}
          <motion.button
            onClick={() => setIsDark(!isDark)}
            whileHover={{
              scale: 1.15,
              boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
            }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isDark ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative p-3 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 overflow-hidden group"
          >
            {/* Glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition" />

            <span className="relative z-10">
              {isDark ? (
                <SunIcon className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_10px_rgba(255,200,0,0.8)]" />
              ) : (
                <MoonIcon className="w-5 h-5 text-blue-400 drop-shadow-[0_0_10px_rgba(100,150,255,0.8)]" />
              )}
            </span>
          </motion.button>

          {/* 📱 Mobile Menu */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* 📱 Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 p-6 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 space-y-4"
          >
            {['home', 'about', 'skills', 'projects', 'education', 'goals', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(section)
                  }}
                  className="block text-white/80 hover:text-blue-400 transition"
                >
                  {section}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar