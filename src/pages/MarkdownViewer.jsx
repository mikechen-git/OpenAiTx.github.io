import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

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

        // Repository exists, now check if README exists in OpenAiTx repo
        const apiUrl = `https://raw.githubusercontent.com/OpenAiTx/OpenAiTx/refs/heads/main/projects/${user}/${project}/README-${lang}.md`
        
        const response = await fetch(apiUrl)
        
        if (response.status === 404) {
          // README doesn't exist, show submit button
          setError({
            type: 'docNotFound',
            title: t.docNotFound,
            description: t.docNotFoundDesc,
            showSubmit: true
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
        const parsedContent = marked.parse(markdown)
        setContent(parsedContent)

        // Update page title with the first h1 from the markdown - like original
        const tempDiv = document.createElement('div')
        tempDiv.innerHTML = parsedContent
        const firstH1 = tempDiv.querySelector('h1')
        if (firstH1) {
          document.title = `${firstH1.textContent} - Open AI Tx`
        }
        
      } catch (err) {
        setError({
          type: 'errorLoading',
          title: t.errorLoading,
          description: t.errorLoadingDesc,
          details: err.message,
          list: [t.errorLoadingList1, t.errorLoadingList2, t.errorLoadingList3]
        })
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [user, project, lang, t])

  // Apply syntax highlighting after content is rendered
  useEffect(() => {
    if (content) {
      // Apply syntax highlighting to all code blocks
      document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block)
      })
    }
  }, [content])

  const renderError = () => {
    if (!error) return null

    const styles = {
      error: {
        textAlign: 'center',
        padding: '40px 20px',
        margin: '20px auto',
        maxWidth: '600px',
        background: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      },
      h2: {
        margin: '0 0 15px 0',
        color: '#2c3e50',
        fontSize: '24px'
      },
      p: {
        margin: '10px 0',
        color: '#666',
        lineHeight: '1.6'
      },
      ul: {
        textAlign: 'left',
        maxWidth: '400px',
        margin: '15px auto',
        color: '#666'
      },
      li: {
        margin: '5px 0'
      },
      submitButton: {
        padding: '12px 24px',
        background: '#2ea44f',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        margin: '25px auto 0 auto',
        display: 'block',
        transition: 'all 0.2s ease',
        boxShadow: '0 2px 4px rgba(46, 164, 79, 0.2)',
        minWidth: '120px'
      }
    }

    return (
      <div style={styles.error}>
        <h2 style={styles.h2}>{error.title}</h2>
        <p style={styles.p}>{error.description}</p>
        {error.example && <p style={styles.p}>{error.example}</p>}
        {error.list && (
          <ul style={styles.ul}>
            {error.list.map((item, index) => (
              <li key={index} style={styles.li}>{item}</li>
            ))}
          </ul>
        )}
        {error.details && <p style={styles.p}>{t.errorDetails} {error.details}</p>}
        {error.showSubmit && (
          <button
            style={styles.submitButton}
            onClick={handleSubmit}
            onMouseOver={(e) => {
              e.target.style.background = '#2c974b'
              e.target.style.transform = 'translateY(-1px)'
              e.target.style.boxShadow = '0 4px 8px rgba(46, 164, 79, 0.3)'
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#2ea44f'
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 2px 4px rgba(46, 164, 79, 0.2)'
            }}
          >
            {t.submit}
          </button>
        )}
      </div>
    )
  }

  const styles = {
    body: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
      lineHeight: 1.6,
      color: '#24292e',
      margin: 0,
      padding: 0,
      backgroundColor: '#ffffff'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      padding: '20px',
      backgroundColor: '#f6f8fa',
      borderBottom: '1px solid #e1e4e8',
      position: 'relative'
    },
    backButton: {
      position: 'absolute',
      left: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#0366d6',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
      padding: '5px 10px',
      border: '1px solid #e1e4e8',
      borderRadius: '6px',
      backgroundColor: '#fff',
      cursor: 'pointer'
    },
    links: {
      marginTop: '10px',
      fontSize: '16px'
    },
    link: {
      color: '#0366d6',
      textDecoration: 'none',
      marginLeft: '5px'
    },
    languageBadges: {
      marginTop: '15px',
      textAlign: 'center'
    },
    languageBadge: {
      display: 'inline-block',
      margin: '2px',
      textDecoration: 'none'
    },
    badgeImg: {
      height: '20px',
      borderRadius: '3px'
    },
    mainContainer: {
      margin: '0 auto',
      width: '100%',
      maxWidth: '980px',
      padding: '0 20px'
    },
    markdownBody: {
      boxSizing: 'border-box',
      minWidth: '200px',
      maxWidth: '980px',
      margin: '0 auto',
      padding: '45px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
      fontSize: '16px',
      lineHeight: 1.5,
      wordWrap: 'break-word'
    },
    loading: {
      textAlign: 'center',
      padding: '20px',
      color: '#666'
    }
  }

  if (loading) {
    return (
      <div style={styles.body}>
        <div style={styles.mainContainer}>
          <div style={styles.loading}>Loading...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div style={styles.body}>
        <div style={styles.header}>
          <button 
            style={styles.backButton}
            onClick={() => window.history.back()}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#f6f8fa'
              e.target.style.borderColor = '#0366d6'
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#fff'
              e.target.style.borderColor = '#e1e4e8'
            }}
          >
            ← Back
          </button>
          <div style={styles.links}>
            GitHub Repository: 
            <a 
              href={user && project ? `https://github.com/${user}/${project}` : '#'}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
              onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}
            >
              {user && project ? `${user}/${project}` : 'N/A'}
            </a>
          </div>
          {user && project && (
            <div style={styles.languageBadges}>
              {languages.map(lang => (
                <a 
                  key={lang.code}
                  href={`/OpenAiTx.github.io/view?user=${user}&project=${project}&lang=${lang.code}`}
                  style={styles.languageBadge}
                  onMouseOver={(e) => e.target.querySelector('img').style.opacity = '0.8'}
                  onMouseOut={(e) => e.target.querySelector('img').style.opacity = '1'}
                >
                  <img 
                    src={`https://img.shields.io/badge/${lang.name}-white`}
                    alt="version"
                    style={styles.badgeImg}
                  />
                </a>
              ))}
            </div>
          )}
        </div>
        <div style={styles.mainContainer}>
          {renderError()}
        </div>
      </div>
    )
  }

  return (
    <div style={styles.body}>
      <div style={styles.header}>
        <button 
          style={styles.backButton}
          onClick={() => window.history.back()}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#f6f8fa'
            e.target.style.borderColor = '#0366d6'
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#fff'
            e.target.style.borderColor = '#e1e4e8'
          }}
        >
          ← Back
        </button>
        <div style={styles.links}>
          GitHub Repository: 
          <a 
            href={`https://github.com/${user}/${project}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
            onMouseOut={(e) => e.target.style.textDecoration = 'none'}
          >
            {user}/{project}
          </a>
        </div>
        <div style={styles.languageBadges}>
          {languages.map(lang => (
            <a 
              key={lang.code}
              href={`/OpenAiTx.github.io/view?user=${user}&project=${project}&lang=${lang.code}`}
              style={styles.languageBadge}
              onMouseOver={(e) => e.target.querySelector('img').style.opacity = '0.8'}
              onMouseOut={(e) => e.target.querySelector('img').style.opacity = '1'}
            >
              <img 
                src={`https://img.shields.io/badge/${lang.name}-white`}
                alt="version"
                style={styles.badgeImg}
              />
            </a>
          ))}
        </div>
      </div>
      <div style={styles.mainContainer}>
        <div 
          style={styles.markdownBody}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}

export default MarkdownViewer 