import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import '../styles/markdown.css'

const MarkdownViewer = () => {
  const [searchParams] = useSearchParams()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showSubmitButton, setShowSubmitButton] = useState(false)

  const user = searchParams.get('user')
  const project = searchParams.get('project')
  const lang = searchParams.get('lang') || 'en'

  // Translations object - exactly like original
  const translations = {
    'en': {
      'missingParams': 'Missing Parameters',
      'missingParamsDesc': 'Please provide both \'user\' and \'project\' parameters in the URL.',
      'missingParamsExample': 'Example: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
      'errorLoading': 'Error Loading Content',
      'errorLoadingDesc': 'Failed to load the markdown content. Please check:',
      'errorLoadingList1': 'The URL parameters are correct',
      'errorLoadingList2': 'The file exists at the specified path',
      'errorLoadingList3': 'You have an active internet connection',
      'errorDetails': 'Error details:',
      'repoNotFound': 'Repository Not Found',
      'repoNotFoundDesc': 'This GitHub repository does not exist. Please check the repository name and try again.',
      'docNotFound': 'Project Documentation Not Found',
      'docNotFoundDesc': 'The documentation for this project has not been indexed yet. Click the button below to submit for indexing.',
      'submit': 'Submit',
      'submissionCompleted': 'Submission completed',
      'submissionFailed': 'Submission failed: '
    },
    'zh-CN': {
      'missingParams': '缺少参数',
      'missingParamsDesc': '请在URL中提供\'user\'和\'project\'参数。',
      'missingParamsExample': '示例: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
      'errorLoading': '加载内容时出错',
      'errorLoadingDesc': '加载markdown内容失败。请检查：',
      'errorLoadingList1': 'URL参数正确',
      'errorLoadingList2': '指定路径的文件存在',
      'errorLoadingList3': '您有活跃的互联网连接',
      'errorDetails': '错误详情：',
      'repoNotFound': '仓库未找到',
      'repoNotFoundDesc': '此 GitHub 仓库不存在。请检查仓库名称后重试。',
      'docNotFound': '项目文档未找到',
      'docNotFoundDesc': '此项目的文档尚未被索引。点击下方按钮提交索引。',
      'submit': '提交',
      'submissionCompleted': '提交完成',
      'submissionFailed': '提交失败：'
    },
    'zh-TW': {
      'missingParams': '缺少參數',
      'missingParamsDesc': '請在URL中提供\'user\'和\'project\'參數。',
      'missingParamsExample': '示例: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
      'errorLoading': '載入內容時出錯',
      'errorLoadingDesc': '載入markdown內容失敗。請檢查：',
      'errorLoadingList1': 'URL參數正確',
      'errorLoadingList2': '指定路徑的檔案存在',
      'errorLoadingList3': '您有活躍的網際網路連線',
      'errorDetails': '錯誤詳情：',
      'repoNotFound': '倉庫未找到',
      'repoNotFoundDesc': '此 GitHub 倉庫不存在。請檢查倉庫名稱後重試。',
      'docNotFound': '項目文檔未找到',
      'docNotFoundDesc': '此項目的文檔尚未被索引。點擊下方按鈕提交索引。',
      'submit': '提交',
      'submissionCompleted': '提交完成',
      'submissionFailed': '提交失敗：'
    },
    'ja': {
      'missingParams': 'パラメータが不足しています',
      'missingParamsDesc': 'URLに\'user\'と\'project\'パラメータを提供してください。',
      'missingParamsExample': '例: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
      'errorLoading': 'コンテンツの読み込みエラー',
      'errorLoadingDesc': 'markdownコンテンツの読み込みに失敗しました。以下を確認してください：',
      'errorLoadingList1': 'URLパラメータが正しい',
      'errorLoadingList2': '指定されたパスにファイルが存在する',
      'errorLoadingList3': 'アクティブなインターネット接続がある',
      'errorDetails': 'エラー詳細：',
      'repoNotFound': 'リポジトリが見つかりません',
      'repoNotFoundDesc': 'この GitHub リポジトリは存在しません。リポジトリ名を確認して再試行してください。',
      'docNotFound': 'プロジェクトドキュメントが見つかりません',
      'docNotFoundDesc': 'このプロジェクトのドキュメントはまだインデックスされていません。下のボタンをクリックしてインデックスを提出してください。',
      'submit': '提出',
      'submissionCompleted': '提出完了',
      'submissionFailed': '提出失敗：'
    },
    'ko': {
      'missingParams': '매개변수 누락',
      'missingParamsDesc': 'URL에 \'user\'와 \'project\' 매개변수를 제공하세요.',
      'missingParamsExample': '예: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
      'errorLoading': '콘텐츠 로딩 오류',
      'errorLoadingDesc': 'markdown 콘텐츠 로딩에 실패했습니다. 다음을 확인하세요:',
      'errorLoadingList1': 'URL 매개변수가 올바름',
      'errorLoadingList2': '지정된 경로에 파일이 존재함',
      'errorLoadingList3': '활성 인터넷 연결이 있음',
      'errorDetails': '오류 세부사항:',
      'repoNotFound': '저장소를 찾을 수 없습니다',
      'repoNotFoundDesc': '이 GitHub 저장소가 존재하지 않습니다. 저장소 이름을 확인하고 다시 시도하세요.',
      'docNotFound': '프로젝트 문서를 찾을 수 없습니다',
      'docNotFoundDesc': '이 프로젝트의 문서가 아직 인덱싱되지 않았습니다. 아래 버튼을 클릭하여 인덱싱을 제출하세요.',
      'submit': '제출',
      'submissionCompleted': '제출 완료',
      'submissionFailed': '제출 실패: '
    }
  }

  const t = translations[lang] || translations['en']

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

  // Header component to avoid duplication
  const PageHeader = ({ user, project, languages, currentLang }) => (
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
        GitHub Repository: 
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

      alert(t.submissionCompleted)
    } catch (error) {
      alert(`${t.submissionFailed}${error.message}`)
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
        title: t.missingParams,
        description: t.missingParamsDesc,
        example: t.missingParamsExample
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
            title: t.repoNotFound,
            description: t.repoNotFoundDesc
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
            title: t.docNotFound,
            description: t.docNotFoundDesc
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
          title: t.errorLoading,
          description: t.errorLoadingDesc,
          details: error.message
        })
        setLoading(false)
      }
    }

    fetchContent()
  }, [user, project, lang, t])

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
              <li className="my-1.5">{t.errorLoadingList1}</li>
              <li className="my-1.5">{t.errorLoadingList2}</li>
              <li className="my-1.5">{t.errorLoadingList3}</li>
            </ul>
            <p className="my-2.5 text-muted-foreground leading-6">
              {t.errorDetails} {error.details}
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
            {t.submit}
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
            Loading...
          </motion.div>
        </ContentWrapper>
      </PageContainer>
    )
  }

  if (error) {
    return (
      <PageContainer>
        <PageHeader user={user} project={project} languages={languages} currentLang={lang} />
        <ContentWrapper>
          {renderError()}
        </ContentWrapper>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <PageHeader user={user} project={project} languages={languages} currentLang={lang} />
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
        Powered by{' '}
        <motion.a 
          href="https://github.com/OpenAiTx/OpenAiTx" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground no-underline hover:underline transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Open AI Tx
        </motion.a>
      </motion.footer>
    </PageContainer>
  )
}

export default MarkdownViewer 