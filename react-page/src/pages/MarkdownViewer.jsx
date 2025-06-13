import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import '../styles/markdown.css'
import { useTranslation } from 'react-i18next'
import TableOfContents from '../components/TableOfContents'

const MarkdownViewer = () => {
  const [searchParams] = useSearchParams()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showSubmitButton, setShowSubmitButton] = useState(false)
  const [tocOpen, setTocOpen] = useState(false)
  const { t: contextT } = useTranslation()

  const user = searchParams.get('user')
  const project = searchParams.get('project')
  const lang = searchParams.get('lang') || 'en'

  // Header component to avoid duplication
  const PageHeader = ({ user, project }) => (
    <motion.header 
      className="text-center mb-8 p-5 bg-muted/30 border-b border-border"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <button 
        onClick={() => window.history.back()}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground text-sm px-2.5 py-1.5 border border-border rounded-md bg-background hover:bg-accent transition-colors duration-200 flex items-center"
      >
        ← Back
      </button> */}
      
      <motion.div 
        className="mt-2.5 text-base text-foreground"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {contextT('viewer.githubRepo')} 
        <motion.a 
          href={user && project ? `https://github.com/${user}/${project}` : '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary no-underline ml-1.5 hover:underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {user && project ? `${user}/${project}` : 'N/A'}
        </motion.a>
      </motion.div>
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
    <div className="mx-auto w-full px-5">
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

      alert(contextT('viewer.submissionCompleted'))
    } catch (error) {
      alert(`${contextT('viewer.submissionFailed')}${error.message}`)
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
        const apiUrl = `https://raw.githubusercontent.com/OpenAiTx/OpenAiTx/refs/heads/main/projects/${user}/${project}/README-${lang}.md`
        
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
  }, [user, project, lang, contextT])

  // Apply syntax highlighting after content is rendered
  useEffect(() => {
    if (content) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        document.querySelectorAll('pre code').forEach((block) => {
          hljs.highlightElement(block)
        })
      }, 100)
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </ContentWrapper>
            
            <motion.footer 
              className="text-center mt-10 py-5 px-5 text-muted-foreground text-sm border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {contextT('viewer.poweredBy')}{' '}
              <motion.a 
                href="https://github.com/OpenAiTx/OpenAiTx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground no-underline hover:underline transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {contextT('viewer.openAiTx')}
              </motion.a>
            </motion.footer>
          </PageContainer>
        </motion.div>
      </>
  )
}

export default MarkdownViewer 