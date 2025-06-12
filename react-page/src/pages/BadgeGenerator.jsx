import { useState, useEffect } from 'react'
import { Copy, Check } from 'lucide-react'
import { motion } from 'framer-motion'
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
    ).join('')
    
    return `<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px;">${badges}</div>`
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

  // 動畫配置
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div className="text-center mb-8" variants={itemVariants}>
        <motion.h1 
          className="text-2xl font-bold text-foreground mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          OpenAITx - Language Auto AI Translate Badge Generator
        </motion.h1>
        <motion.a 
          href="https://github.com/OpenAiTx/OpenAiTx" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          @https://github.com/OpenAiTx/OpenAiTx
        </motion.a>
      </motion.div>

      {/* Hidden inputs for URL parameters */}
      <input type="hidden" value={userOrOrg} />
      <input type="hidden" value={project} />

      {/* Repository Not Found Message */}
      {repoNotFound && (
        <motion.div 
          className="text-center p-6 mb-6 bg-muted/30 rounded-lg border border-border"
          variants={itemVariants}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">Repository Not Found</h3>
          <p className="text-muted-foreground">This GitHub repository does not exist. Please check the repository name and try again.</p>
        </motion.div>
      )}

      {/* Submit Project Button */}
      {showSubmitButton && (
        <motion.div 
          className="text-center p-6 mb-6 bg-muted/30 rounded-lg border border-border"
          variants={itemVariants}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">Project Documentation Not Found</h3>
          <p className="text-muted-foreground mb-4">The documentation for this project has not been indexed yet. Click the button below to submit for indexing.</p>
          <motion.button
            onClick={submitProject}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </motion.div>
      )}

      {/* Style Option 1 (HTML Badges) */}
      {!repoNotFound && (userOrOrg && project) && (
        <>
          <motion.div 
            className="border border-border p-5 mb-5 rounded-md bg-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-xl font-semibold text-card-foreground mb-4">Style Option 1 (HTML Badges)</h2>
            <div className="bg-muted/30 p-4 mb-3 rounded text-center">
              <div dangerouslySetInnerHTML={{ __html: generateStyle1Html() }} />
            </div>
            <motion.button
              onClick={() => copyToClipboard(generateStyle1Html(), 'style1')}
              className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Copy HTML
            </motion.button>
          </motion.div>

          {/* Style Option 2 (Markdown Links) */}
          <motion.div 
            className="border border-border p-5 mb-5 rounded-md bg-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-xl font-semibold text-card-foreground mb-4">Style Option 2 (Markdown Links)</h2>
            <img 
              src="https://github.com/user-attachments/assets/68aaf016-a29d-4ca0-899e-d039f4a9f7fd" 
              alt="" 
              className="mb-4"
            />
            <div className="bg-muted/30 p-4 mb-3 rounded whitespace-pre-wrap break-all text-sm text-muted-foreground">
              {generateStyle2Markdown()}
            </div>
            <motion.button
              onClick={() => copyToClipboard(generateStyle2Markdown(), 'style2')}
              className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Copy Markdown
            </motion.button>
          </motion.div>
        </>
      )}

      {/* Support/Contribution Section */}
      <motion.div 
        className="bg-muted/30 rounded-lg p-5 mb-5 border border-border"
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
      >
        <h2 className="text-lg font-semibold text-foreground mb-4">Support/Contribution</h2>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          If you would like to have a contribution in the project, all you need to do is:
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Fork project {'=>'} Clone project {'=>'} Choose a script in your language {'=>'} Fill in your AI token {'=>'} Run it {'=>'} Commit {'&'} push {'&'} create a PR
        </p>
        <div className="bg-muted/50 border border-border rounded p-3 text-muted-foreground">
          <strong className="text-foreground">Note:</strong> Please do not upload or leak your tokens!
        </div>
      </motion.div>

      {/* Input form for testing */}
      <motion.div 
        className="mt-8 p-4 bg-muted/50 rounded-lg border border-border"
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Test Badge Generation</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              GitHub User/Organization
            </label>
            <motion.input
              type="text"
              value={userOrOrg}
              onChange={(e) => setUserOrOrg(e.target.value)}
              placeholder="Enter GitHub user/organization name"
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Project Name
            </label>
            <motion.input
              type="text"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="Enter project name"
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
              whileFocus={{ scale: 1.02 }}
            />
          </div>
        </div>
        <motion.button
          onClick={updateBadges}
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Generate Badges
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default BadgeGenerator 