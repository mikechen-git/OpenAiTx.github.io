import { useState } from 'react'
import { Copy, Check, Github, ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const BadgeGenerator = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    username: '',
    project: ''
  })
  const [copiedItem, setCopiedItem] = useState(null)

  const languages = [
    { code: 'en', name: 'EN', displayName: 'English' },
    { code: 'zh-CN', name: '简中', displayName: '简体中文' },
    { code: 'zh-TW', name: '繁中', displayName: '繁體中文' },
    { code: 'ja', name: '日本語', displayName: '日本語' },
    { code: 'ko', name: '한국어', displayName: '한국어' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const generateBadges = () => {
    if (!formData.username || !formData.project) return ''
    
    return languages.map(lang =>
      `<a href="https://openaitx.github.io/view.html?user=${formData.username}&project=${formData.project}&lang=${lang.code}"><img src="https://img.shields.io/badge/${lang.name}-white" alt="${lang.displayName}"></a>`
    ).join(' ')
  }

  const generateMarkdown = () => {
    if (!formData.username || !formData.project) return ''
    
    return languages.map(lang =>
      `[![${lang.displayName}](https://img.shields.io/badge/${lang.name}-white)](https://openaitx.github.io/view.html?user=${formData.username}&project=${formData.project}&lang=${lang.code})`
    ).join(' ')
  }

  const copyToClipboard = async (text, itemId) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(itemId)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const CopyButton = ({ text, itemId, className = "" }) => (
    <button
      onClick={() => copyToClipboard(text, itemId)}
      className={`inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${className}`}
      disabled={!text}
    >
      {copiedItem === itemId ? (
        <>
          <Check className="h-4 w-4 mr-2 text-green-500" />
          {t('badge.copied')}
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 mr-2" />
          {t('badge.copy')}
        </>
      )}
    </button>
  )

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('badge.title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t('badge.description')}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('badge.username')}
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="mini-software"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="project" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('badge.project')}
            </label>
            <input
              type="text"
              id="project"
              name="project"
              value={formData.project}
              onChange={handleInputChange}
              placeholder="MiniExcel"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>
      </div>

      {(formData.username && formData.project) && (
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('badge.preview')}
              </h2>
              <CopyButton text={generateBadges()} itemId="html" />
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-md p-4 text-center">
              <div 
                className="inline-block space-x-1"
                dangerouslySetInnerHTML={{ __html: generateBadges() }}
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('badge.markdown')}
              </h2>
              <CopyButton text={generateMarkdown()} itemId="markdown" />
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-md p-4 overflow-x-auto">
              <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-all">
                {generateMarkdown()}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BadgeGenerator 