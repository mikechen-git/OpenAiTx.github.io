import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { marked } from 'marked'
import hljs from 'highlight.js'
// import 'highlight.js/styles/github.css' // 移除預設樣式，使用自定義樣式
import '../styles/markdown.css'
import { useTranslation } from 'react-i18next'
import TableOfContents from '../components/TableOfContents'
import { toast } from 'sonner'

const MarkdownViewer = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showSubmitButton, setShowSubmitButton] = useState(false)
  const [tocOpen, setTocOpen] = useState(false)
  const { t: contextT, i18n } = useTranslation()

  const user = searchParams.get('user')
  const project = searchParams.get('project')
  const urlLang = searchParams.get('lang') || 'en'

  // 同步 URL 參數中的 lang 與系統當前語言
  useEffect(() => {
    // 當 URL 中的 lang 參數與當前系統語言不同時，更新系統語言
    if (urlLang !== i18n.language) {
      i18n.changeLanguage(urlLang)
    }
  }, [urlLang, i18n])

  // 監聽系統語言變化，同步到 URL
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      // 檢查當前語言是否與 URL 參數不同
      if (lng !== searchParams.get('lang')) {
        // 手動構建新的查詢字符串
        const params = {}
        searchParams.forEach((value, key) => {
          params[key] = value
        })
        params.lang = lng
        
        // 構建新的查詢字符串
        const queryString = Object.entries(params)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join('&')
        
        setSearchParams(queryString, { replace: true })
      }
    }

    // 監聽 i18next 語言變化事件
    i18n.on('languageChanged', handleLanguageChange)

    // 清理事件監聽器
    return () => {
      i18n.off('languageChanged', handleLanguageChange)
    }
  }, [searchParams, setSearchParams, i18n])

  // Header component to avoid duplication
  const PageHeader = ({ user, project }) => (
    <motion.header 
      className="text-center p-5"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {user && project && (
        <motion.div 
          className="my-4 flex gap-8 justify-center" 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
        >
          <div className="text-muted-foreground text-2xl">
            {contextT('badge.githubUser')}: <span className="text-foreground font-medium">{user}</span>
          </div>
          <div className="text-muted-foreground text-2xl">
            {contextT('badge.projectName')}: <span className="text-foreground font-medium">{project}</span>
          </div>
        </motion.div>
      )}
    </motion.header>
  )

  // Container component to avoid duplication
  const PageContainer = ({ children }) => (
    <div className="font-sans leading-6 text-foreground m-0 p-0 bg-background flex flex-col min-h-screen">
      {children}
    </div>
  )

  // Content wrapper component
  const ContentWrapper = ({ children }) => (
    <div className="mx-auto w-full">
      {children}
    </div>
  )

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://openaitx.com/api/submit-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project: `https://github.com/${user}/${project}`
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`)
      }

      toast.success(contextT('viewer.submissionCompleted'))
    } catch (error) {
      toast.error(`${contextT('viewer.submissionFailed')}${error.message}`)
    }
  }

  useEffect(() => {
    // Configure marked options - exactly like original
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

    // Validate required parameters
    if (!user || !project) {
      setError({
        type: 'missingParams',
        title: contextT('viewer.missingParams'),
        description: contextT('viewer.missingParamsDesc'),
        example: contextT('viewer.missingParamsExample')
      })
      setLoading(false)
      return
    }

    const fetchContent = async () => {
      try {
        // Check if GitHub repository exists first - exactly like original
        const githubApiUrl = `https://api.github.com/repos/${user}/${project}`
        
        const repoResponse = await fetch(githubApiUrl)
        const repoData = await repoResponse.json()
        
        if (repoData.message === "Not Found") {
          // Repository doesn't exist
          setError({
            type: 'repoNotFound',
            title: contextT('viewer.repoNotFound'),
            description: contextT('viewer.repoNotFoundDesc')
          })
          setLoading(false)
          return
        }

        // Repository exists, now check if README exists
        const apiUrl = `https://raw.githubusercontent.com/OpenAiTx/OpenAiTx/refs/heads/main/projects/${user}/${project}/README-${urlLang}.md`
        
        const response = await fetch(apiUrl)
        
        if (response.status === 404) {
          // README doesn't exist, show submit button
          setError({
            type: 'docNotFound',
            title: contextT('viewer.docNotFound'),
            description: contextT('viewer.docNotFoundDesc')
          })
          setShowSubmitButton(true)
          setLoading(false)
          return
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const markdown = await response.text()
        
        // Render the markdown
        const renderedContent = marked.parse(markdown)
        setContent(renderedContent)
        
        // Update page title with the first h1 from the markdown
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = renderedContent
        const firstH1 = tempDiv.querySelector('h1')
        if (firstH1) {
          document.title = `${firstH1.textContent} - Open AI Tx`
        }
        
        setLoading(false)
      } catch (error) {
        console.error('Error:', error)
        setError({
          type: 'errorLoading',
          title: contextT('viewer.errorLoading'),
          description: contextT('viewer.errorLoadingDesc'),
          details: error.message
        })
        setLoading(false)
      }
    }

    fetchContent()
  }, [user, project, urlLang, contextT])

  // 重新高亮代碼的函數
  const rehighlightCode = () => {
    const codeBlocks = document.querySelectorAll('.markdown-body pre code')
    
    codeBlocks.forEach((block) => {
      // 清除之前的高亮狀態
      if (block.dataset.highlighted) {
        delete block.dataset.highlighted
        // 清除之前的高亮類名
        block.className = block.className.replace(/hljs[^\s]*/g, '').trim()
      }
      
      // 重新高亮
      hljs.highlightElement(block)
    })
  }

  // Apply syntax highlighting after content is rendered
  useEffect(() => {
    if (content) {
      // 等待DOM更新後再高亮
      setTimeout(() => {
        rehighlightCode()
      }, 100)
    }
  }, [content])

  // 監聽主題變化並重新高亮代碼
  useEffect(() => {
    if (content) {
      // 使用更簡單的方法：定期檢查主題變化
      let lastTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
      
      const checkThemeChange = () => {
        const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
        if (currentTheme !== lastTheme) {
          lastTheme = currentTheme
          // 主題變化了，重新高亮代碼
          setTimeout(() => {
            rehighlightCode()
          }, 100)
        }
      }

      // 每100ms檢查一次主題變化
      const themeCheckInterval = setInterval(checkThemeChange, 100)

      // 清理interval
      return () => {
        clearInterval(themeCheckInterval)
      }
    }
  }, [content])

  const renderError = () => {
    return (
      <motion.div 
        className="text-center py-10 px-5 my-5 mx-auto max-w-2xl bg-muted/30 rounded-lg border border-border"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <motion.h2 
          className="mb-4 text-foreground text-2xl font-semibold m-0"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {error.title}
        </motion.h2>
        <motion.p 
          className="my-2.5 text-muted-foreground leading-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {error.description}
        </motion.p>
        {error.example && (
          <motion.p 
            className="my-2.5 text-muted-foreground leading-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {error.example}
          </motion.p>
        )}
        {error.type === 'errorLoading' && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ul className="text-left max-w-sm my-4 mx-auto text-muted-foreground list-disc list-inside">
              <li className="my-1.5">{contextT('viewer.errorLoadingList1')}</li>
              <li className="my-1.5">{contextT('viewer.errorLoadingList2')}</li>
              <li className="my-1.5">{contextT('viewer.errorLoadingList3')}</li>
            </ul>
            <p className="my-2.5 text-muted-foreground leading-6">
              {contextT('viewer.errorDetails')} {error.details}
            </p>
          </motion.div>
        )}
        {showSubmitButton && (
          <motion.button
            onClick={handleSubmit}
            className="py-3 px-6 bg-primary text-primary-foreground border-none rounded-lg cursor-pointer text-base font-semibold mt-6 mx-auto block transition-all duration-200 hover:bg-primary/90 hover:-translate-y-px min-w-30"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {contextT('viewer.submit')}
          </motion.button>
        )}
      </motion.div>
    )
  }

  if (loading) {
    return (
      <PageContainer>
        <ContentWrapper>
          <motion.div 
            className="text-center py-5 text-muted-foreground"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 1,
              ease: "easeInOut"
            }}
          >
            {contextT('viewer.loading')}
          </motion.div>
        </ContentWrapper>
      </PageContainer>
    )
  }

  if (error) {
    return (
      <PageContainer>
        <PageHeader user={user} project={project} />
        <ContentWrapper>
          {renderError()}
        </ContentWrapper>
      </PageContainer>
    )
  }

      return (
      <>
        {/* Table of Contents */}
        <TableOfContents content={content} isOpen={tocOpen} setIsOpen={setTocOpen} />
        
        {/* 主要內容區域 - 整個頁面 */}
        <motion.div 
          initial={false}
          animate={{ 
            marginLeft: tocOpen ? (window.innerWidth >= 768 ? 320 : 0) : 0 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <PageContainer>
            <PageHeader user={user} project={project} />
            <ContentWrapper>
              <motion.div 
                className="markdown-body"
                dangerouslySetInnerHTML={{ __html: content }}
                initial={false}
                animate={{ opacity: 1}}
              />
            </ContentWrapper>
          </PageContainer>
        </motion.div>
      </>
  )
}

export default MarkdownViewer 