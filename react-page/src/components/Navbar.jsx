import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import NavLanguageSelector from "./NavLanguageSelector";

const Navbar = ({ darkMode, setDarkMode }) => {
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const isActive = (path) => {
        if (path === "/" && location.pathname === "/") return true;
        if (path !== "/" && location.pathname.startsWith(path)) return true;
        return false;
    };

    const navItems = [
        { path: "/", label: t("nav.home") },
        { path: "/view", label: t("nav.view") },
    ];

    const availableLanguages = [
        { code: "en", name: "EN" },
        { code: "zh-CN", name: "简中" },
        { code: "zh-TW", name: "繁中" },
        { code: "ja", name: "日本語" },
        { code: "ko", name: "한국어" },
        { code: "th", name: "ไทย" },
        { code: "fr", name: "Français" },
        { code: "de", name: "Deutsch" },
        { code: "es", name: "Español" },
        { code: "it", name: "Italiano" },
        { code: "ru", name: "Русский" },
        { code: "pt", name: "Português" },
        { code: "nl", name: "Nederlands" },
        { code: "pl", name: "Polski" },
        { code: "ar", name: "العربية" },
        { code: "tr", name: "Türkçe" },
        { code: "vi", name: "Tiếng Việt" },
    ];

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <motion.nav className="navbar-fixed top-0 z-50 backdrop-blur-md border-b border-border/50 backdrop-blur-fallback" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                        <Link to="/" className="flex items-center space-x-3">
                            <motion.span className="text-xl font-bold text-foreground" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                OpenAITx
                            </motion.span>
                        </Link>
                    </motion.div>

                    {/* Navigation Links 
                    <motion.div className="hidden md:flex items-center space-x-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                        {navItems.map((item, index) => (
                            <motion.div key={item.path} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}>
                                <Link
                                    to={item.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(item.path) ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent/50"}`}>
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                    */}

                    {/* Right side controls */}
                    <motion.div className="flex items-center space-x-4" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                        {/* Language Selector */}
                        <NavLanguageSelector currentLanguage={i18n.language} availableLanguages={availableLanguages} changeLanguage={changeLanguage} />
                        {/* GitHub Badge */}
                        <motion.a
                            href="https://github.com/OpenAiTx/OpenAiTx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span>GitHub</span>
                        </motion.a>
                        {/* Dark Mode Toggle */}
                        <motion.button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200"
                            title={t("nav.darkMode")}
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}>
                            <motion.div key={darkMode ? "sun" : "moon"} initial={{ rotate: -180, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </motion.div>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Mobile Navigation */}
                <motion.div className="md:hidden border-t border-border py-2" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.5 }}>
                    <div className="flex flex-wrap gap-2">
                        {navItems.map((item, index) => (
                            <motion.div key={item.path} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2, delay: 0.6 + index * 0.1 }}>
                                <Link
                                    to={item.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(item.path) ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent/50"}`}>
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
