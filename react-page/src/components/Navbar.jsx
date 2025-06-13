import { useState, useEffect } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { Moon, Sun, Menu, X, Globe, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { t, i18n } = useTranslation()
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()

    // 全站語言與 URL 同步（方案二）
    useEffect(() => {
        const handleLanguageChange = (lng) => {
            // 如果當前頁面有 lang 參數，則更新它
            if (searchParams.has('lang') && lng !== searchParams.get('lang')) {
                const params = {}
                searchParams.forEach((value, key) => {
                    params[key] = value
                })
                params.lang = lng
                
                const queryString = Object.entries(params)
                    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                    .join('&')
                
                setSearchParams(queryString, { replace: true })
            }
        }

        i18n.on('languageChanged', handleLanguageChange)
        return () => i18n.off('languageChanged', handleLanguageChange)
    }, [searchParams, setSearchParams, i18n])

    // 從 URL 同步語言到系統（方案二）
    useEffect(() => {
        const urlLang = searchParams.get('lang')
        if (urlLang && urlLang !== i18n.language) {
            i18n.changeLanguage(urlLang)
        }
    }, [searchParams, i18n])

    const availableLanguages = [
        { code: 'en', name: 'EN' },
        { code: 'zh-CN', name: '简中' },
        { code: 'zh-TW', name: '繁中' },
        { code: 'ja', name: '日本語' },
        { code: 'ko', name: '한국어' },
        { code: 'th', name: 'ไทย' },
        { code: 'fr', name: 'Français' },
        { code: 'de', name: 'Deutsch' },
        { code: 'es', name: 'Español' },
        { code: 'it', name: 'Italiano' },
        { code: 'ru', name: 'Русский' },
        { code: 'pt', name: 'Português' },
        { code: 'nl', name: 'Nederlands' },
        { code: 'pl', name: 'Polski' },
        { code: 'ar', name: 'العربية' },
        { code: 'tr', name: 'Türkçe' },
        { code: 'vi', name: 'Tiếng Việt' }
    ]

    const currentLanguage = availableLanguages.find(lang => lang.code === i18n.language) || availableLanguages[0]

    const handleLanguageChange = (langCode) => {
        i18n.changeLanguage(langCode)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <motion.nav 
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link 
                            to="/" 
                            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                            onClick={closeMenu}
                        >
                            OpenAITx
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {/* Language Selector - 使用原來的樣式 */}
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <Button 
                                    variant="ghost" 
                                    size="sm" 
                                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                                >
                                    <Globe className="h-4 w-4" />
                                    {currentLanguage?.name || 'Language'}
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-36" sideOffset={8}>
                                {availableLanguages.map((language) => (
                                    <DropdownMenuItem 
                                        key={language.code} 
                                        onClick={() => handleLanguageChange(language.code)}
                                        className="flex items-center justify-between cursor-pointer"
                                    >
                                        <span>{language.name}</span>
                                        {language.code === i18n.language && (
                                            <span className="text-primary">✓</span>
                                        )}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* GitHub Badge */}
                        <motion.a
                            href="https://github.com/OpenAiTx/OpenAiTx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span>GitHub</span>
                        </motion.a>

                        {/* Theme Toggle */}
                        <motion.button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={darkMode ? t('nav.lightMode') : t('nav.darkMode')}
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <motion.button
                            onClick={toggleMenu}
                            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={t('nav.menu')}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-border"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link 
                                to="/" 
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                    location.pathname === '/' 
                                        ? 'text-primary bg-primary/10' 
                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                                }`}
                                onClick={closeMenu}
                            >
                                {t('nav.home')}
                            </Link>

                            {/* Mobile Language Selector */}
                            <div className="px-3 py-2">
                                <div className="text-sm font-medium text-muted-foreground mb-2">
                                    {t('nav.language')}
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {availableLanguages.map((lang) => (
                                        <motion.button
                                            key={lang.code}
                                            onClick={() => {
                                                handleLanguageChange(lang.code)
                                                closeMenu()
                                            }}
                                            className={`text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center justify-between ${
                                                i18n.language === lang.code 
                                                    ? 'bg-primary/10 text-primary' 
                                                    : 'text-foreground hover:bg-muted/50'
                                            }`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span className="truncate">{lang.name}</span>
                                            {lang.code === i18n.language && (
                                                <span className="text-primary">✓</span>
                                            )}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile GitHub Link */}
                            <motion.a
                                href="https://github.com/OpenAiTx/OpenAiTx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors flex items-center space-x-2"
                                onClick={closeMenu}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span>GitHub</span>
                            </motion.a>

                            {/* Mobile Theme Toggle */}
                            <motion.button
                                onClick={() => {
                                    setDarkMode(!darkMode)
                                    closeMenu()
                                }}
                                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors flex items-center space-x-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                                <span>{darkMode ? t('nav.lightMode') : t('nav.darkMode')}</span>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    )
}

export default Navbar
