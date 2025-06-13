import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

// LanguageLinks 組件 - 適應深色主題
const LanguageLinks = () => {
  const languages = [
    "English", "简体中文", "繁體中文", "日本語", "한국어", "हिन्दी", "ไทย", "Français",
    "Deutsch", "Español", "Italiano", "Русский", "Português", "Nederlands", "Polski",
    "فارسی", "العربية", "Türkçe", "Tiếng Việt", "Bahasa Indonesia"
  ];

  return (
    <div className="text-sm mb-4 leading-relaxed">
      {languages.map((lang, index) => (
        <span key={lang}>
          <a 
            href="#" 
            className="hover:underline transition-all no-underline"
            style={{ color: "#0366d6" }}
          >
            {lang}
          </a>
          {index < languages.length - 1 && <span> | </span>}
        </span>
      ))}
    </div>
  );
};

const BadgeGenerator = () => {
  const { t } = useTranslation()
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
      alert(t('badge.alertMissingParams'))
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
      alert(t('badge.alertCopied'))
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

      alert(t('badge.alertSubmissionCompleted'))
    } catch (error) {
      alert(`${t('badge.alertSubmissionFailed')}${error.message}`)
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
          {t('badge.title')}
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
          <h3 className="text-lg font-semibold text-foreground mb-2">{t('badge.repoNotFound')}</h3>
          <p className="text-muted-foreground">{t('badge.repoNotFoundDesc')}</p>
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
          <h3 className="text-lg font-semibold text-foreground mb-2">{t('badge.docNotFound')}</h3>
          <p className="text-muted-foreground mb-4">{t('badge.docNotFoundDesc')}</p>
          <motion.button
            onClick={submitProject}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('badge.submit')}
          </motion.button>
        </motion.div>
      )}

      {/* Style Option 1 (HTML Badges) */}
      {!repoNotFound && (userOrOrg && project) && (
        <>
          <motion.div 
            className="border border-border p-5 mb-5 rounded-md bg-muted/70"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-xl font-semibold text-card-foreground mb-4">{t('badge.style1')}</h2>
            <div className="bg-muted/30 p-4 mb-3 rounded text-center">
              <div dangerouslySetInnerHTML={{ __html: generateStyle1Html() }} />
            </div>
            <motion.button
              onClick={() => copyToClipboard(generateStyle1Html(), 'style1')}
              className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {copiedItem === 'style1' ? t('badge.copied') : t('badge.copyHtml')}
            </motion.button>
          </motion.div>

          {/* Style Option 2 (Markdown Links) */}
          <motion.div 
            className="border border-border p-5 mb-5 rounded-md bg-muted/70"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-xl font-semibold text-card-foreground mb-4">{t('badge.style2')}</h2>
            <LanguageLinks />
            <div className="bg-muted/30 p-4 mb-3 rounded whitespace-pre-wrap break-all text-sm text-muted-foreground">
              {generateStyle2Markdown()}
            </div>
            <motion.button
              onClick={() => copyToClipboard(generateStyle2Markdown(), 'style2')}
              className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {copiedItem === 'style2' ? t('badge.copied') : t('badge.copyMarkdown')}
            </motion.button>
          </motion.div>
        </>
      )}

      {/* Support/Contribution Section */}
      <motion.div 
        className="bg-muted/70 rounded-lg p-5 mb-5 border border-border"
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
      >
        <h2 className="text-lg font-semibold text-foreground mb-4">{t('badge.support')}</h2>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          {t('badge.supportDesc')}
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {t('badge.supportSteps')}
        </p>
        <div className="bg-red-50 dark:bg-red-900 border border-border rounded p-3 text-muted-foreground">
          <strong className="text-foreground">{t('badge.supportNote')}</strong>
        </div>
      </motion.div>

      {/* Input form for testing */}
      <motion.div 
        className="mt-8 p-4 bg-muted/70 rounded-lg border border-border"
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">{t('badge.testGeneration')}</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              {t('badge.githubUser')}
            </label>
            <motion.input
              type="text"
              value={userOrOrg}
              onChange={(e) => setUserOrOrg(e.target.value)}
              placeholder={t('badge.githubUserPlaceholder')}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              {t('badge.projectName')}
            </label>
            <motion.input
              type="text"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder={t('badge.projectNamePlaceholder')}
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
          {t('badge.generate')}
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default BadgeGenerator 