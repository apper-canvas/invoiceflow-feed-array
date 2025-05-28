import { useState } from 'react'
import { motion } from 'framer-motion'
import ApperIcon from '../ApperIcon'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navigationLinks = [
    { name: 'Home', href: '/', active: true },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Login', href: '#login' },
    { name: 'Signup', href: '#signup' }
  ]


  return (
    <header className="relative z-50 bg-white/80 dark:bg-surface-900/80 backdrop-blur-lg border-b border-surface-200/50 dark:border-surface-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <ApperIcon name="Zap" className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gradient">InvoiceFlow</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navigationLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  link.active 
                    ? 'text-primary' 
                    : 'text-surface-600 dark:text-surface-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.nav>

          {/* Desktop Actions */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors duration-200"
            >
              <ApperIcon 
                name={darkMode ? 'Sun' : 'Moon'} 
                className="w-5 h-5 text-surface-600 dark:text-surface-300" 
              />
            </button>
            <button className="btn-secondary">Login</button>
            <button className="btn-primary">Start Free Trial</button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden flex items-center space-x-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors duration-200"
            >
              <ApperIcon 
                name={darkMode ? 'Sun' : 'Moon'} 
                className="w-5 h-5 text-surface-600 dark:text-surface-300" 
              />
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-surface-100 dark:bg-surface-800 hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors duration-200"
            >
              <ApperIcon 
                name={mobileMenuOpen ? 'X' : 'Menu'} 
                className="w-5 h-5 text-surface-600 dark:text-surface-300" 
              />
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 border-t border-surface-200/50 dark:border-surface-700/50"
          >
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                    link.active 
                      ? 'text-primary' 
                      : 'text-surface-600 dark:text-surface-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <button className="btn-secondary w-full">Login</button>
                <button className="btn-primary w-full">Start Free Trial</button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header