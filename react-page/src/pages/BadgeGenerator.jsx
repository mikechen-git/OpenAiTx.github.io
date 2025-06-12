import { useState, useEffect } from 'react'
import { Copy, Check } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useSearchParams } from 'react-router-dom'

const BadgeGenerator = () => {
  const { t } = useLanguage()
  const [searchParams, setSearchParams] = useSearchParams()
  const [userOrOrg, setUserOrOrg] = useState('')
  const [project, setProject] = useState('')
  const [copiedItem, setCopiedItem] = useState(null)
  const [showSubmitButton, setShowSubmitButton] = useState(false)
  const [repoNotFound, setRepoNotFound] = useState(false)

  const style1Languages = [
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

  const style2Languages = [
    { code: 'en', name: 'English' },
    { code: 'zh-CN', name: '简体中文' },
    { code: 'zh-TW', name: '繁體中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'hi', name: 'हिन्दी' },
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
    { code: 'fa', name: 'فارسی' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'vi', name: 'Tiếng Việt' },
    { code: 'id', name: 'Bahasa Indonesia' }
  ]

  useEffect(() => {
    // Get URL parameters on load
    const userParam = searchParams.get('userOrOrg')
    const projectParam = searchParams.get('project')
    
    if (userParam) setUserOrOrg(userParam)
    if (projectParam) setProject(projectParam)
    
    // Check project status if both parameters exist
    if (userParam && projectParam) {
      checkProjectStatus(userParam, projectParam)
    }
  }, [searchParams])

  const checkProjectStatus = async (user, proj) => {
    try {
      // Check if GitHub repository exists
      const githubApiUrl = `https://api.github.com/repos/${user}/${proj}`
      const repoResponse = await fetch(githubApiUrl)
      const repoData = await repoResponse.json()

      if (repoData.message === "Not Found") {
        setRepoNotFound(true)
        return
      }

      // Check if project is in OpenAiTx repository
      const apiUrl = `https://raw.githubusercontent.com/OpenAiTx/OpenAiTx/refs/heads/main/projects/${user}/${proj}/README-en.md`
      const response = await fetch(apiUrl)
      
      if (response.status === 404) {
        setShowSubmitButton(true)
      }
    } catch (error) {
      console.error('Error checking project status:', error)
    }
  }

  const updateBadges = () => {
    if (!userOrOrg || !project) {
      alert('Please enter both User/Organization and Project name')
      return
    }
    
    setSearchParams({ userOrOrg, project })
    checkProjectStatus(userOrOrg, project)
  }

  const generateStyle1Html = () => {
    if (!userOrOrg || !project) return ''
    
    const badges = style1Languages.map(lang =>
      `<a href="https://openaitx.github.io/view?user=${userOrOrg}&project=${project}&lang=${lang.code}"><img src="https://img.shields.io/badge/${lang.name}-white" alt="version"></a>`
    ).join(' ')
    
    return `<div style="text-align: center"><p>${badges}</p></div>`
  }

  const generateStyle2Markdown = () => {
    if (!userOrOrg || !project) return ''
    
    return style2Languages.map(lang =>
      `[${lang.name}](https://openaitx.github.io/view?user=${userOrOrg}&project=${project}&lang=${lang.code})`
    ).join(' | ')
  }

  const copyToClipboard = async (text, itemId) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(itemId)
      setTimeout(() => setCopiedItem(null), 2000)
      alert('Copy to clipboard!')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const submitProject = async () => {
    try {
      const response = await fetch('https://openaitx.com/api/submit-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          project: `https://github.com/${userOrOrg}/${project}`
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`)
      }

      alert('Submission completed')
    } catch (error) {
      alert(`Submission failed: ${error.message}`)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="logo mb-4">
          <img src="/logo_crop.png" alt="Open AI Tx Logo" className="mx-auto max-w-md" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Open AI Tx - Language Auto AI Translate Badge Generator
        </h1>
        <a 
          href="https://github.com/OpenAiTx/OpenAiTx" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
        >
          @https://github.com/OpenAiTx/OpenAiTx
        </a>
      </div>

      {/* Hidden inputs for URL parameters */}
      <input type="hidden" value={userOrOrg} />
      <input type="hidden" value={project} />

      {/* Repository Not Found Message */}
      {repoNotFound && (
        <div className="text-center p-6 mb-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Repository Not Found</h3>
          <p className="text-gray-600 dark:text-gray-400">This GitHub repository does not exist. Please check the repository name and try again.</p>
        </div>
      )}

      {/* Submit Project Button */}
      {showSubmitButton && (
        <div className="text-center p-6 mb-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Project Documentation Not Found</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">The documentation for this project has not been indexed yet. Click the button below to submit for indexing.</p>
          <button
            onClick={submitProject}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Submit
          </button>
        </div>
      )}

      {/* Style Option 1 (HTML Badges) */}
      {!repoNotFound && (userOrOrg && project) && (
        <>
          <div className="border border-gray-300 dark:border-gray-600 p-5 mb-5 rounded-md bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Style Option 1 (HTML Badges)</h2>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 mb-3 rounded text-center">
              <div dangerouslySetInnerHTML={{ __html: generateStyle1Html() }} />
            </div>
            <button
              onClick={() => copyToClipboard(generateStyle1Html(), 'style1')}
              className="bg-gray-800 dark:bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors"
            >
              Copy HTML
            </button>
          </div>

          {/* Style Option 2 (Markdown Links) */}
          <div className="border border-gray-300 dark:border-gray-600 p-5 mb-5 rounded-md bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Style Option 2 (Markdown Links)</h2>
            <img 
              src="https://github.com/user-attachments/assets/68aaf016-a29d-4ca0-899e-d039f4a9f7fd" 
              alt="" 
              className="mb-4"
            />
            <div className="bg-gray-50 dark:bg-gray-900 p-4 mb-3 rounded whitespace-pre-wrap break-all text-sm text-gray-700 dark:text-gray-300">
              {generateStyle2Markdown()}
            </div>
            <button
              onClick={() => copyToClipboard(generateStyle2Markdown(), 'style2')}
              className="bg-gray-800 dark:bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors"
            >
              Copy Markdown
            </button>
          </div>
        </>
      )}

      {/* Support/Contribution Section */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 mb-5 border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Support/Contribution</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
          If you would like to have a contribution in the project, all you need to do is:
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Fork project {'=>'} Clone project {'=>'} Choose a script in your language {'=>'} Fill in your AI token {'=>'} Run it {'=>'} Commit {'&'} push {'&'} create a PR
        </p>
        <div className="bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded p-3 text-yellow-800 dark:text-yellow-200">
          <strong>Note:</strong> Please do not upload or leak your tokens!
        </div>
      </div>

      {/* Input form for testing */}
      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Test Badge Generation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
              GitHub User/Organization
            </label>
            <input
              type="text"
              value={userOrOrg}
              onChange={(e) => setUserOrOrg(e.target.value)}
              placeholder="Enter GitHub user/organization name"
              className="w-full px-3 py-2 border border-blue-300 dark:border-blue-600 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
              Project Name
            </label>
            <input
              type="text"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="Enter project name"
              className="w-full px-3 py-2 border border-blue-300 dark:border-blue-600 rounded-md"
            />
          </div>
        </div>
        <button
          onClick={updateBadges}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Generate Badges
        </button>
      </div>
    </div>
  )
}

export default BadgeGenerator 