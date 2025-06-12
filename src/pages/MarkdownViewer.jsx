import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink, FileText } from 'lucide-react'
import { marked } from 'marked'
import hljs from 'highlight.js'
import { useLanguage } from '../contexts/LanguageContext'
import 'highlight.js/styles/github.css'

const MarkdownViewer = () => {
  const { t } = useLanguage()
  const [searchParams] = useSearchParams()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const user = searchParams.get('user')
  const project = searchParams.get('project')
  const lang = searchParams.get('lang') || 'en'

  const languages = [
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

  useEffect(() => {
    // Configure marked
    marked.setOptions({
      highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(code, { language: lang }).value
          } catch (e) {
            console.error(e)
          }
        }
        return hljs.highlightAuto(code).value
      },
      breaks: true,
      gfm: true
    })

    if (user && project) {
      loadMarkdownContent()
    } else {
      setError('Missing user or project parameter')
      setLoading(false)
    }
  }, [user, project, lang])

  const loadMarkdownContent = async () => {
    setLoading(true)
    setError(null)

    try {
      // 首先檢查 GitHub 儲存庫是否存在
      const githubApiUrl = `https://api.github.com/repos/${user}/${project}`
      const repoResponse = await fetch(githubApiUrl)
      const repoData = await repoResponse.json()

      if (repoData.message === "Not Found") {
        setError('Repository not found')
        setLoading(false)
        return
      }

      // 嘗試載入翻譯版本的 README
      const apiUrl = `https://raw.githubusercontent.com/OpenAiTx/OpenAiTx/refs/heads/main/projects/${user}/${project}/README-${lang}.md`
      const response = await fetch(apiUrl)

      if (!response.ok) {
        setError('Translated README not found')
        setLoading(false)
        return
      }

      const markdownText = await response.text()
      const htmlContent = marked(markdownText)
      setContent(htmlContent)
    } catch (err) {
      setError('Failed to load content: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const generateLanguageBadges = () => {
    if (!user || !project) return []
    
    return languages.map(language => (
      <a 
        key={language.code}
        href={`/OpenAiTx.github.io/view?user=${user}&project=${project}&lang=${language.code}`}
        className="inline-block m-1"
      >
        <img 
          src={`https://img.shields.io/badge/${language.name}-white`}
          alt={language.name}
          className="h-5 rounded"
        />
      </a>
    ))
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">{t('viewer.loading')}</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <div className="flex items-center">
            <FileText className="h-6 w-6 text-red-500 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-100">
                {t('viewer.error')}
              </h3>
              <p className="text-red-700 dark:text-red-200 mt-1">{error}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 mb-8 rounded-t-lg">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t('viewer.back')}
        </button>
        
        <div className="text-center">
          <div className="mb-2">
            <span className="text-gray-600 dark:text-gray-400">GitHub Repository: </span>
            <a 
              href={`https://github.com/${user}/${project}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium inline-flex items-center"
            >
              {user}/{project}
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
          
          {/* Language Badges */}
          <div className="flex flex-wrap justify-center gap-1 mt-4">
            {generateLanguageBadges()}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div 
          className="prose prose-lg dark:prose-invert max-w-none p-8"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}

export default MarkdownViewer 