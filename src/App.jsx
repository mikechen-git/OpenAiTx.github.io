import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import BadgeGenerator from './pages/BadgeGenerator'

import MarkdownViewer from './pages/MarkdownViewer'
import { LanguageProvider } from './contexts/LanguageContext'

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
      <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<BadgeGenerator />} />
            <Route path="/view" element={<MarkdownViewer />} />
          </Routes>
        </main>

        <footer className="mt-16 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
            <p className="text-sm">
              Powered by{' '}
              <a 
                href="https://github.com/OpenAiTx/OpenAiTx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
              >
                Open AI Tx
              </a>
            </p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  )
}

export default App 