import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const translations = {
  'en': {
    // Navigation
    'nav.home': 'Badge Generator',
    'nav.translate': 'Translator',
    'nav.view': 'Viewer',
    'nav.darkMode': 'Dark Mode',
    
    // Badge Generator
    'badge.title': 'Language Badge Generator',
    'badge.description': 'Generate language badges for your GitHub project with automatic AI translation support.',
    'badge.username': 'GitHub Username',
    'badge.project': 'Project Name',
    'badge.generate': 'Generate Badge',
    'badge.preview': 'Preview',
    'badge.markdown': 'Markdown Code',
    'badge.copy': 'Copy',
    'badge.copied': 'Copied!',
    
    // Translator
    'translate.title': 'GitHub README Translator',
    'translate.description': 'Automatically translate GitHub README files using AI.',
    'translate.githubToken': 'GitHub Personal Access Token',
    'translate.openAiKey': 'Azure OpenAI API Key',
    'translate.openAiEndpoint': 'Azure OpenAI API Endpoint',
    'translate.save': 'Save Configuration',
    'translate.search': 'Search Projects',
    'translate.minStars': 'Minimum Stars',
    'translate.daysAgo': 'Days Ago',
    'translate.perPage': 'Results Per Page',
    
    // Viewer
    'viewer.title': 'Markdown Viewer',
    'viewer.description': 'View translated README files in GitHub style.',
    'viewer.loading': 'Loading...',
    'viewer.error': 'Error loading content',
    'viewer.back': 'Back',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
  },
  'zh-TW': {
    // Navigation
    'nav.home': '標章產生器',
    'nav.translate': '翻譯工具',
    'nav.view': '檢視器',
    'nav.darkMode': '深色模式',
    
    // Badge Generator
    'badge.title': '語言標章產生器',
    'badge.description': '為您的 GitHub 專案產生語言標章，支援自動 AI 翻譯功能。',
    'badge.username': 'GitHub 使用者名稱',
    'badge.project': '專案名稱',
    'badge.generate': '產生標章',
    'badge.preview': '預覽',
    'badge.markdown': 'Markdown 程式碼',
    'badge.copy': '複製',
    'badge.copied': '已複製！',
    
    // Translator
    'translate.title': 'GitHub README 翻譯工具',
    'translate.description': '使用 AI 自動翻譯 GitHub README 檔案。',
    'translate.githubToken': 'GitHub 個人存取權杖',
    'translate.openAiKey': 'Azure OpenAI API 金鑰',
    'translate.openAiEndpoint': 'Azure OpenAI API 端點',
    'translate.save': '儲存設定',
    'translate.search': '搜尋專案',
    'translate.minStars': '最少星星數',
    'translate.daysAgo': '天數前',
    'translate.perPage': '每頁結果數',
    
    // Viewer
    'viewer.title': 'Markdown 檢視器',
    'viewer.description': '以 GitHub 風格檢視翻譯後的 README 檔案。',
    'viewer.loading': '載入中...',
    'viewer.error': '載入內容時發生錯誤',
    'viewer.back': '返回',
    
    // Common
    'common.loading': '載入中...',
    'common.error': '錯誤',
    'common.success': '成功',
    'common.cancel': '取消',
    'common.confirm': '確認',
  }
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language')
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setCurrentLanguage(lang)
      localStorage.setItem('preferred-language', lang)
    }
  }

  const t = (key) => {
    return translations[currentLanguage]?.[key] || translations['en']?.[key] || key
  }

  const availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'zh-TW', name: '繁體中文' }
  ]

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeLanguage,
      t,
      availableLanguages
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 