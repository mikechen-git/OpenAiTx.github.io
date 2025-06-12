import { useState } from 'react'
import { Save, Search, Settings, ExternalLink } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Translator = () => {
  const { t } = useLanguage()
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
    // 在實際應用中，這裡會保存配置到本地存儲或後端
    console.log('Config saved:', config)
    alert('Configuration saved!')
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // 在實際應用中，這裡會執行搜索邏輯
    console.log('Search params:', searchParams)
    alert('Search functionality will be implemented!')
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('translate.title')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t('translate.description')}
        </p>
      </div>

      <div className="space-y-8">
        {/* Configuration Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <Settings className="h-5 w-5 text-gray-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                配置設定
              </h2>
            </div>
          </div>
          <div className="p-6">
            <form onSubmit={handleSaveConfig} className="space-y-6">
              <div>
                <label htmlFor="githubToken" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('translate.githubToken')}
                </label>
                <input
                  type="password"
                  id="githubToken"
                  name="githubToken"
                  value={config.githubToken}
                  onChange={handleConfigChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="ghp_..."
                  required
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  需要 GitHub API 存取權限
                </p>
              </div>

              <div>
                <label htmlFor="openAiKey" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('translate.openAiKey')}
                </label>
                <input
                  type="password"
                  id="openAiKey"
                  name="openAiKey"
                  value={config.openAiKey}
                  onChange={handleConfigChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="openAiEndpoint" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('translate.openAiEndpoint')}
                </label>
                <input
                  type="url"
                  id="openAiEndpoint"
                  name="openAiEndpoint"
                  value={config.openAiEndpoint}
                  onChange={handleConfigChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="https://your-resource.openai.azure.com/..."
                  required
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  範例: https://your-resource.openai.azure.com/openai/deployments/gpt-4/chat/completions?api-version=2024-02-15-preview
                </p>
              </div>

              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
              >
                <Save className="h-4 w-4 mr-2" />
                {t('translate.save')}
              </button>
            </form>
          </div>
        </div>

        {/* Search Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <Search className="h-5 w-5 text-gray-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                搜尋專案
              </h2>
            </div>
          </div>
          <div className="p-6">
            <form onSubmit={handleSearch}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="minStars" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('translate.minStars')}
                  </label>
                  <input
                    type="number"
                    id="minStars"
                    name="minStars"
                    value={searchParams.minStars}
                    onChange={handleSearchChange}
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="daysAgo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('translate.daysAgo')}
                  </label>
                  <input
                    type="number"
                    id="daysAgo"
                    name="daysAgo"
                    value={searchParams.daysAgo}
                    onChange={handleSearchChange}
                    min="0"
                    max="365"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="perPage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('translate.perPage')}
                  </label>
                  <input
                    type="number"
                    id="perPage"
                    name="perPage"
                    value={searchParams.perPage}
                    onChange={handleSearchChange}
                    min="1"
                    max="10"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
                >
                  <Search className="h-4 w-4 mr-2" />
                  {t('translate.search')}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Results Area */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              搜尋結果
            </h2>
          </div>
          <div className="p-6">
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              <p>配置完成後點擊搜尋按鈕來查找專案</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Translator 