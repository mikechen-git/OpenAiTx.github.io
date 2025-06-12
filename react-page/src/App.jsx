import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import BadgeGenerator from './pages/BadgeGenerator'
import MarkdownViewer from './pages/MarkdownViewer'
import { LanguageProvider } from './contexts/LanguageContext'

// 重定向組件處理 view.html 到 view 的重定向
const ViewHtmlRedirect = () => {
  const location = useLocation()
  
  // 保持所有查詢參數
  const searchParams = location.search
  
  return <Navigate to={`/view${searchParams}`} replace />
}

// 重定向組件處理 index.html 到根路徑的重定向
const IndexHtmlRedirect = () => {
  const location = useLocation()
  
  // 保持所有查詢參數
  const searchParams = location.search
  
  return <Navigate to={`/${searchParams}`} replace />
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // 頁面轉場動畫配置
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 0.98
    }
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4
  }

  return (
    <LanguageProvider>
      <motion.div 
        className={`min-h-screen bg-background transition-colors duration-200`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </motion.div>
        
        <main className="container mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Routes location={location}>
                <Route path="/" element={<BadgeGenerator />} />
                <Route path="/view" element={<MarkdownViewer />} />
                {/* 向後兼容性：重定向舊的 HTML 路徑 */}
                <Route path="/view.html" element={<ViewHtmlRedirect />} />
                <Route path="/index.html" element={<IndexHtmlRedirect />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </main>

        <motion.footer 
          className="mt-16 border-t border-border bg-background"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
            <p className="text-sm">
              Powered by{' '}
              <a 
                href="https://github.com/OpenAiTx/OpenAiTx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                OpenAITx
              </a>
            </p>
          </div>
        </motion.footer>
      </motion.div>
    </LanguageProvider>
  )
}

export default App 