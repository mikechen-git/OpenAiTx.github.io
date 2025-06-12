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
    'badge.title': 'OpenAITx - Language Auto AI Translate Badge Generator',
    'badge.description': 'Generate language badges for your GitHub project with automatic AI translation support.',
    'badge.username': 'GitHub Username',
    'badge.project': 'Project Name',
    'badge.generate': 'Generate Badges',
    'badge.preview': 'Preview',
    'badge.markdown': 'Markdown Code',
    'badge.copy': 'Copy',
    'badge.copied': 'Copied!',
    'badge.repoNotFound': 'Repository Not Found',
    'badge.repoNotFoundDesc': 'This GitHub repository does not exist. Please check the repository name and try again.',
    'badge.docNotFound': 'Project Documentation Not Found',
    'badge.docNotFoundDesc': 'The documentation for this project has not been indexed yet. Click the button below to submit for indexing.',
    'badge.submit': 'Submit',
    'badge.style1': 'Style Option 1 (HTML Badges)',
    'badge.style2': 'Style Option 2 (Markdown Links)',
    'badge.copyHtml': 'Copy HTML',
    'badge.copyMarkdown': 'Copy Markdown',
    'badge.support': 'Support/Contribution',
    'badge.supportDesc': 'If you would like to have a contribution in the project, all you need to do is:',
    'badge.supportSteps': 'Fork project => Clone project => Choose a script in your language => Fill in your AI token => Run it => Commit & push & create a PR',
    'badge.supportNote': 'Note: Please do not upload or leak your tokens!',
    'badge.testGeneration': 'Test Badge Generation',
    'badge.githubUser': 'GitHub User/Organization',
    'badge.githubUserPlaceholder': 'Enter GitHub user/organization name',
    'badge.projectName': 'Project Name',
    'badge.projectNamePlaceholder': 'Enter project name',
    'badge.alertMissingParams': 'Please enter both User/Organization and Project name',
    'badge.alertCopied': 'Copy to clipboard!',
    'badge.alertSubmissionCompleted': 'Submission completed',
    'badge.alertSubmissionFailed': 'Submission failed: ',
    
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
    'viewer.githubRepo': 'GitHub Repository:',
    'viewer.poweredBy': 'Powered by',
    'viewer.openAiTx': 'Open AI Tx',
    
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
    'badge.title': 'OpenAITx - 語言自動 AI 翻譯標章產生器',
    'badge.description': '為您的 GitHub 專案產生語言標章，支援自動 AI 翻譯功能。',
    'badge.username': 'GitHub 使用者名稱',
    'badge.project': '專案名稱',
    'badge.generate': '產生標章',
    'badge.preview': '預覽',
    'badge.markdown': 'Markdown 程式碼',
    'badge.copy': '複製',
    'badge.copied': '已複製！',
    'badge.repoNotFound': '找不到儲存庫',
    'badge.repoNotFoundDesc': '此 GitHub 儲存庫不存在。請檢查儲存庫名稱後重試。',
    'badge.docNotFound': '找不到專案文件',
    'badge.docNotFoundDesc': '此專案的文件尚未被索引。點擊下方按鈕提交索引。',
    'badge.submit': '提交',
    'badge.style1': '樣式選項 1 (HTML 標章)',
    'badge.style2': '樣式選項 2 (Markdown 連結)',
    'badge.copyHtml': '複製 HTML',
    'badge.copyMarkdown': '複製 Markdown',
    'badge.support': '支援/貢獻',
    'badge.supportDesc': '如果您想要為專案做出貢獻，您只需要：',
    'badge.supportSteps': 'Fork 專案 => Clone 專案 => 選擇您語言的腳本 => 填入您的 AI token => 執行 => Commit & push & 建立 PR',
    'badge.supportNote': '注意：請不要上傳或洩露您的 tokens！',
    'badge.testGeneration': '測試標章產生',
    'badge.githubUser': 'GitHub 使用者/組織',
    'badge.githubUserPlaceholder': '輸入 GitHub 使用者/組織名稱',
    'badge.projectName': '專案名稱',
    'badge.projectNamePlaceholder': '輸入專案名稱',
    'badge.alertMissingParams': '請輸入使用者/組織和專案名稱',
    'badge.alertCopied': '已複製到剪貼簿！',
    'badge.alertSubmissionCompleted': '提交完成',
    'badge.alertSubmissionFailed': '提交失敗：',
    
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
    'viewer.githubRepo': 'GitHub 儲存庫：',
    'viewer.poweredBy': '技術支援',
    'viewer.openAiTx': 'Open AI Tx',
    
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