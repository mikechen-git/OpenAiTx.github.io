import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import NavLanguageSelector from './NavLanguageSelector'

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation()
  const { t, currentLanguage, changeLanguage, availableLanguages } = useLanguage()

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/view', label: t('nav.view') },
  ]

  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">

            <span className="text-xl font-bold text-foreground">
              OpenAITx
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <NavLanguageSelector 
              currentLanguage={currentLanguage}
              availableLanguages={availableLanguages}
              changeLanguage={changeLanguage}
            />

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200"
              title={t('nav.darkMode')}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-border py-2">
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 