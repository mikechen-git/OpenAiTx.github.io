import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <LanguageProvider>
      <div className={`min-h-screen bg-background transition-colors duration-200`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<BadgeGenerator />} />
            <Route path="/view" element={<MarkdownViewer />} />
            {/* 向後兼容性：重定向舊的 HTML 路徑 */}
            <Route path="/view.html" element={<ViewHtmlRedirect />} />
            <Route path="/index.html" element={<IndexHtmlRedirect />} />
          </Routes>
        </main>

        <footer className="mt-16 border-t border-border bg-background">
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
        </footer>
      </div>
    </LanguageProvider>
  )
}

export default App 