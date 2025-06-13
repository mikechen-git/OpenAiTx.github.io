# Open AI Tx - React 版本

這是 Open AI Tx 專案的 React 重構版本，使用現代化的前端技術棧來提供更好的用戶體驗和開發效率。

## 🚀 技術棧

- **React 18** - 現代化的前端框架
- **Vite** - 快速的建構工具
- **Tailwind CSS** - 實用優先的 CSS 框架
- **React Router** - 客戶端路由
- **Lucide React** - 現代化的圖標庫
- **Marked** - Markdown 解析器
- **Highlight.js** - 程式碼語法高亮

## 📁 專案結構

```
src/
├── components/          # 可重用組件
│   └── Navbar.jsx      # 導航欄組件
├── contexts/           # React Context
│   └── LanguageContext.jsx  # 多語言上下文
├── pages/              # 頁面組件
│   ├── BadgeGenerator.jsx   # 標章產生器
│   ├── Translator.jsx       # 翻譯工具
│   └── MarkdownViewer.jsx   # Markdown 檢視器
├── App.jsx             # 主應用組件
├── main.jsx            # 入口點
└── index.css           # 全域樣式
```

## 🛠️ 開發環境設置

### 前提條件

- Node.js 18 或更高版本
- pnpm (推薦) 或 npm

### 安裝依賴

```bash
# 進入 react-page 目錄
cd react-page

# 使用 pnpm (推薦)
pnpm install

# 或使用 npm
npm install
```

### 開發模式

```bash
# 在 react-page 目錄中啟動開發服務器
cd react-page
pnpm dev

# 或
npm run dev
```

開發服務器將在 `http://localhost:3000` 啟動。

### 建構生產版本

```bash
# 在 react-page 目錄中建構生產版本
cd react-page
pnpm build

# 或
npm run build
```

建構後的檔案將輸出到 `react-page/dist/` 目錄。

### 本地預覽生產版本

```bash
# 在 react-page 目錄中預覽生產版本
cd react-page
pnpm preview

# 或
npm run preview
```

## 🌐 功能特色

### 1. 標章產生器
- 輸入 GitHub 使用者名稱和專案名稱
- 自動產生多語言標章
- 支援 HTML 和 Markdown 格式
- 一鍵複製功能

### 2. 翻譯工具
- 配置 GitHub 和 Azure OpenAI API
- 搜尋 GitHub 專案
- 自動翻譯 README 檔案

### 3. Markdown 檢視器
- GitHub 風格的 Markdown 渲染
- 程式碼語法高亮
- 多語言支援
- 響應式設計

### 4. 多語言支援
- 繁體中文
- 简体中文
- English
- 基於 i18next 的國際化系統

### 5. 深色模式
- 自動切換深色/淺色主題
- 保存用戶偏好設定

## 🚀 自動部署

專案配置了 GitHub Actions 自動部署到 GitHub Pages：

1. 推送代碼到 `main` 分支
2. GitHub Actions 自動觸發建構
3. 自動部署到 GitHub Pages

### 部署配置

部署配置位於 `.github/workflows/react-deploy.yml`：

```yaml
name: Deploy React App to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - uses: pnpm/action-setup@v2
      - run: cd react-page && pnpm install
      - run: cd react-page && pnpm build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './react-page/dist'

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
```

## 📝 開發指南

### 添加新頁面

1. 在 `src/pages/` 目錄創建新組件
2. 在 `src/App.jsx` 中添加路由
3. 在 `src/components/Navbar.jsx` 中添加導航鏈接
4. 在語言文件中添加翻譯

### 添加新翻譯

在 `src/i18n/locales/` 目錄的語言文件中添加：

```javascript
// src/i18n/locales/zh-TW.json
{
  "new": {
    "key": "新的翻譯內容"
  }
}

// src/i18n/locales/en.json
{
  "new": {
    "key": "New translation content"
  }
}
```

### 使用翻譯

```javascript
import { useTranslation } from 'react-i18next'

const MyComponent = () => {
  const { t, i18n } = useTranslation()
  
  return (
    <div>
      <h1>{t('new.key')}</h1>
      <button onClick={() => i18n.changeLanguage('zh-TW')}>
        切換語言
      </button>
    </div>
  )
}
```

## 🔧 自定義配置

### Vite 配置

`vite.config.js` 包含了專案特定的配置：

- 設置 `base` 路徑為 GitHub Pages
- 配置建構輸出目錄
- 開發服務器設定

### Tailwind 配置

`tailwind.config.js` 包含了自定義主題：

- 自定義色彩系統
- 擴展字體配置
- 響應式斷點

## 🤝 貢獻指南

1. Fork 專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權

本專案採用與原專案相同的授權條款。

## 🔗 相關連結

- [原始專案](https://github.com/OpenAiTx/OpenAiTx)
- [GitHub Pages 部署](https://openaitx.github.io/)
- [React 官方文檔](https://react.dev/)
- [Vite 官方文檔](https://vitejs.dev/)
- [Tailwind CSS 官方文檔](https://tailwindcss.com/) 