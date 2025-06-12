import { useState, useEffect } from 'react'

const Translator = () => {
  // Configuration
  const CONFIG_KEY = 'openai_tx_config'
  const LANGUAGES = [
    // Asia
    { lang: "zh-CN", name: "Simplified Chinese", native: "简体中文" },
    { lang: "zh-TW", name: "Traditional Chinese", native: "繁體中文" },
    { lang: "ja", name: "Japanese", native: "日本語" },
    { lang: "ko", name: "Korean", native: "한국어" },
    { lang: "hi", name: "Hindi", native: "हिन्दी" },
    { lang: "th", name: "Thai", native: "ไทย" },
    
    // EU
    { lang: "en", name: "English", native: "English" },
    { lang: "fr", name: "French", native: "Français" },
    { lang: "de", name: "German", native: "Deutsch" },
    { lang: "es", name: "Spanish", native: "Español" },
    { lang: "it", name: "Italian", native: "Italiano" },
    { lang: "ru", name: "Russian", native: "Русский" },
    { lang: "pt", name: "Portuguese", native: "Português" },
    { lang: "nl", name: "Dutch", native: "Nederlands" },
    { lang: "pl", name: "Polish", native: "Polski" },
    
    // Middle Eastern
    { lang: "ar", name: "Arabic", native: "العربية" },
    { lang: "fa", name: "Persian", native: "فارسی" },
    { lang: "tr", name: "Turkish", native: "Türkçe" },
    
    // Other
    { lang: "vi", name: "Vietnamese", native: "Tiếng Việt" },
    { lang: "id", name: "Indonesian", native: "Bahasa Indonesia" }
  ]

  const [config, setConfig] = useState({
    githubToken: '',
    openAiKey: '',
    openAiEndpoint: ''
  })
  const [searchParams, setSearchParams] = useState({
    minStars: 20,
    daysAgo: 30,
    perPage: 3
  })
  const [projects, setProjects] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [showTranslationModal, setShowTranslationModal] = useState(false)
  const [translationProgress, setTranslationProgress] = useState([])
  const [translationResults, setTranslationResults] = useState([])
  const [currentTranslatingRepo, setCurrentTranslatingRepo] = useState('')

  // Load saved configuration
  useEffect(() => {
    const savedConfig = localStorage.getItem(CONFIG_KEY)
    if (savedConfig) {
      setConfig(JSON.parse(savedConfig))
    }
  }, [])

  const handleConfigChange = (e) => {
    const { name, value } = e.target
    setConfig(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSearchChange = (e) => {
    const { name, value } = e.target
    setSearchParams(prev => ({
      ...prev,
      [name]: parseInt(value) || 0
    }))
  }

  const handleSaveConfig = (e) => {
    e.preventDefault()
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config))
    alert('Configuration saved!')
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!config.githubToken) {
      alert('Please save your GitHub token first!')
      return
    }

    setIsSearching(true)
    setProjects([])

    const { minStars, daysAgo, perPage } = searchParams
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - daysAgo)
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + 2)

    const query = `q=created:${startDate.toISOString().split('T')[0]}..${endDate.toISOString().split('T')[0]} stars:>=${minStars} fork:false&sort=updated&order=desc&per_page=${perPage}`

    try {
      const response = await fetch(`https://api.github.com/search/repositories?${query}`, {
        headers: {
          'Authorization': `Bearer ${config.githubToken}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      })

      if (response.status === 403) {
        throw new Error('Rate limit exceeded. Please try again later.')
      }

      const data = await response.json()
      setProjects(data.items || [])
    } catch (error) {
      alert(error.message)
    } finally {
      setIsSearching(false)
    }
  }

  const translateProject = async (repoFullName) => {
    if (!config.openAiKey || !config.openAiEndpoint) {
      alert('Please save your OpenAI configuration first!')
      return
    }

    setCurrentTranslatingRepo(repoFullName)
    setShowTranslationModal(true)
    setTranslationProgress([])
    setTranslationResults([])

    try {
      // Get README content
      const readmeResponse = await fetch(`https://api.github.com/repos/${repoFullName}/readme`, {
        headers: {
          'Authorization': `Bearer ${config.githubToken}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      })

      if (!readmeResponse.ok) {
        throw new Error('Failed to fetch README')
      }

      const readmeData = await readmeResponse.json()
      const readmeContent = atob(readmeData.content)
      const blobUrl = readmeData.html_url.replace('/blob/', '/raw/')

      // Translate for each language
      for (const lang of LANGUAGES) {
        const progressItem = {
          id: lang.lang,
          language: lang.native,
          status: 'translating',
          message: `Translating to ${lang.native}...`
        }
        setTranslationProgress(prev => [...prev, progressItem])

        try {
          const { translatedText, usage } = await translateText(
            readmeContent,
            `Translate the following technical document into ${lang.name}, preserving the original Markdown format. Relative paths in markdown, please complete with ${blobUrl}:`
          )

          // Update progress
          setTranslationProgress(prev => 
            prev.map(item => 
              item.id === lang.lang 
                ? { ...item, status: 'completed', message: `✅ Translated to ${lang.native}`, usage }
                : item
            )
          )

          // Add result
          const result = {
            id: lang.lang,
            language: lang.native,
            content: translatedText,
            usage
          }
          setTranslationResults(prev => [...prev, result])

        } catch (error) {
          setTranslationProgress(prev => 
            prev.map(item => 
              item.id === lang.lang 
                ? { ...item, status: 'error', message: `❌ Failed to translate to ${lang.native}: ${error.message}` }
                : item
            )
          )
        }
      }
    } catch (error) {
      setTranslationProgress([{
        id: 'error',
        status: 'error',
        message: `Error: ${error.message}`
      }])
    }
  }

  const translateText = async (text, instruction) => {
    const response = await fetch(config.openAiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': config.openAiKey
      },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content: "You are a professional translation assistant, specializing in the translation of technical documents. Please don't add your remark or thinking content."
          },
          {
            role: "user",
            content: `${instruction}\n\n${text}`
          }
        ],
        temperature: 0.7,
        top_p: 0.95,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 32768
      })
    })

    if (!response.ok) {
      throw new Error(`Translation failed: ${response.statusText}`)
    }

    const data = await response.json()
    return {
      translatedText: data.choices[0].message.content,
      usage: data.usage
    }
  }

  const copyToClipboard = async (content, buttonId) => {
    try {
      await navigator.clipboard.writeText(content)
      const button = document.getElementById(buttonId)
      const originalText = button.textContent
      button.textContent = 'Copied!'
      setTimeout(() => {
        button.textContent = originalText
      }, 2000)
    } catch (error) {
      alert('Failed to copy to clipboard')
    }
  }

  const styles = {
    body: {
      backgroundColor: '#f8f9fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '20px'
    },
    cardHeader: {
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #dee2e6',
      padding: '15px 20px',
      borderRadius: '8px 8px 0 0'
    },
    cardBody: {
      padding: '20px'
    },
    formControl: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid #ced4da',
      borderRadius: '4px',
      fontSize: '14px',
      marginBottom: '10px'
    },
    btn: {
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.2s ease'
    },
    btnPrimary: {
      backgroundColor: '#007bff',
      color: 'white'
    },
    btnOutlinePrimary: {
      backgroundColor: 'transparent',
      color: '#007bff',
      border: '1px solid #007bff'
    },
    listGroupItem: {
      padding: '15px 20px',
      border: '1px solid #dee2e6',
      borderTop: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.2s ease'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    },
    modalDialog: {
      backgroundColor: 'white',
      borderRadius: '8px',
      width: '90%',
      maxWidth: '1200px',
      maxHeight: '90%',
      overflow: 'hidden'
    },
    modalHeader: {
      padding: '15px 20px',
      borderBottom: '1px solid #dee2e6',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    modalBody: {
      padding: '20px',
      maxHeight: '70vh',
      overflowY: 'auto'
    },
    translationProgress: {
      marginBottom: '15px',
      padding: '10px',
      border: '1px solid #dee2e6',
      borderRadius: '4px'
    },
    translationResult: {
      border: '1px solid #dee2e6',
      borderRadius: '4px',
      padding: '15px',
      marginBottom: '15px',
      backgroundColor: 'white'
    },
    pre: {
      backgroundColor: '#f8f9fa',
      padding: '15px',
      borderRadius: '4px',
      overflow: 'auto',
      fontSize: '12px',
      lineHeight: '1.4',
      maxHeight: '300px'
    },
    languageBadge: {
      fontSize: '14px',
      padding: '4px 8px',
      marginRight: '8px',
      backgroundColor: '#e9ecef',
      borderRadius: '4px'
    },
    tokenUsage: {
      fontSize: '12px',
      color: '#6c757d',
      marginTop: '8px'
    },
    loadingSpinner: {
      display: 'inline-block',
      width: '16px',
      height: '16px',
      border: '2px solid #f3f3f3',
      borderTop: '2px solid #3498db',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginRight: '8px'
    }
  }

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px', fontWeight: 'bold' }}>
          OpenAI TX - GitHub README Translator
        </h1>

        {/* Configuration Form */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h5 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Configuration</h5>
          </div>
          <div style={styles.cardBody}>
            <form onSubmit={handleSaveConfig}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                  GitHub Personal Access Token
                </label>
                <input
                  type="password"
                  name="githubToken"
                  value={config.githubToken}
                  onChange={handleConfigChange}
                  style={styles.formControl}
                  required
                />
                <div style={{ fontSize: '12px', color: '#6c757d' }}>Required for GitHub API access</div>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                  Azure OpenAI API Key
                </label>
                <input
                  type="password"
                  name="openAiKey"
                  value={config.openAiKey}
                  onChange={handleConfigChange}
                  style={styles.formControl}
                  required
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                  Azure OpenAI API Endpoint
                </label>
                <input
                  type="url"
                  name="openAiEndpoint"
                  value={config.openAiEndpoint}
                  onChange={handleConfigChange}
                  style={styles.formControl}
                  required
                />
                <div style={{ fontSize: '12px', color: '#6c757d' }}>
                  Example: https://your-resource.openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2024-02-15-preview
                </div>
              </div>
              <button type="submit" style={{ ...styles.btn, ...styles.btnPrimary }}>
                Save Configuration
              </button>
            </form>
          </div>
        </div>

        {/* Search Form */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h5 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Search Projects</h5>
          </div>
          <div style={styles.cardBody}>
            <form onSubmit={handleSearch}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                    Minimum Stars
                  </label>
                  <input
                    type="number"
                    name="minStars"
                    value={searchParams.minStars}
                    onChange={handleSearchChange}
                    min="0"
                    style={styles.formControl}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                    Days Ago
                  </label>
                  <input
                    type="number"
                    name="daysAgo"
                    value={searchParams.daysAgo}
                    onChange={handleSearchChange}
                    min="0"
                    max="365"
                    style={styles.formControl}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                    Results Per Page
                  </label>
                  <input
                    type="number"
                    name="perPage"
                    value={searchParams.perPage}
                    onChange={handleSearchChange}
                    min="1"
                    max="10"
                    style={styles.formControl}
                  />
                </div>
              </div>
              <button 
                type="submit" 
                style={{ ...styles.btn, ...styles.btnPrimary }}
                disabled={isSearching}
              >
                {isSearching ? 'Searching...' : 'Search Projects'}
              </button>
            </form>
          </div>
        </div>

        {/* Results Area */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h5 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Search Results</h5>
          </div>
          <div style={styles.cardBody}>
            {projects.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#6c757d', padding: '40px' }}>
                {isSearching ? 'Searching...' : 'Projects will be listed here'}
              </div>
            ) : (
              <div>
                {projects.map((project, index) => (
                  <div 
                    key={project.id} 
                    style={{
                      ...styles.listGroupItem,
                      borderTop: index === 0 ? '1px solid #dee2e6' : 'none'
                    }}
                  >
                    <div>
                      <h5 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>
                        <a 
                          href={project.html_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: '#007bff', textDecoration: 'none' }}
                        >
                          {project.full_name}
                        </a>
                        <span style={{ marginLeft: '10px', color: '#ffc107' }}>
                          ⭐ {project.stargazers_count}
                        </span>
                      </h5>
                      <p style={{ margin: 0, color: '#6c757d', fontSize: '14px' }}>
                        {project.description || 'No description'}
                      </p>
                    </div>
                    <button
                      onClick={() => translateProject(project.full_name)}
                      style={{ ...styles.btn, ...styles.btnPrimary }}
                    >
                      Translate README
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Translation Modal */}
        {showTranslationModal && (
          <div style={styles.modal} onClick={(e) => e.target === e.currentTarget && setShowTranslationModal(false)}>
            <div style={styles.modalDialog}>
              <div style={styles.modalHeader}>
                <h5 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>
                  Translation Progress - {currentTranslatingRepo}
                </h5>
                <button
                  onClick={() => setShowTranslationModal(false)}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    fontSize: '24px', 
                    cursor: 'pointer',
                    color: '#6c757d'
                  }}
                >
                  ×
                </button>
              </div>
              <div style={styles.modalBody}>
                {/* Translation Progress */}
                <div style={{ marginBottom: '20px' }}>
                  {translationProgress.map((item) => (
                    <div key={item.id} style={styles.translationProgress}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          {item.status === 'translating' && (
                            <div style={styles.loadingSpinner}></div>
                          )}
                          <span>{item.message}</span>
                        </div>
                        {item.usage && (
                          <span style={styles.tokenUsage}>
                            Tokens: {item.usage.total_tokens} (Prompt: {item.usage.prompt_tokens}, Completion: {item.usage.completion_tokens})
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Translation Results */}
                <div>
                  {translationResults.map((result) => (
                    <div key={result.id} style={styles.translationResult}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <span style={styles.languageBadge}>{result.language}</span>
                        <button
                          id={`copy-btn-${result.id}`}
                          onClick={() => copyToClipboard(result.content, `copy-btn-${result.id}`)}
                          style={{ ...styles.btn, ...styles.btnOutlinePrimary, fontSize: '12px', padding: '4px 8px' }}
                        >
                          Copy to Clipboard
                        </button>
                      </div>
                      <pre style={styles.pre}>{result.content}</pre>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  )
}

export default Translator 