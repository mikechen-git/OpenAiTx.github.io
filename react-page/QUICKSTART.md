# 🚀 Open AI Tx React 版本 - 快速啟動指南

## 📋 專案概況

✅ **已完成的 React 重構**
- ✅ 現代化 React 18 + Vite + Tailwind CSS 架構
- ✅ 三個主要功能頁面（標章產生器、翻譯工具、Markdown檢視器）
- ✅ 多語言支援（繁體中文、English）
- ✅ 深色模式切換
- ✅ 響應式設計
- ✅ GitHub Actions 自動部署設定

## 🎯 立即開始

### 1. 進入 React 專案目錄
```bash
cd react-page
```

### 2. 安裝依賴
```bash
pnpm install
```

### 3. 啟動開發環境
```bash
pnpm dev
```
訪問: http://localhost:3000

### 4. 建構生產版本
```bash
pnpm build
```

### 5. 預覽生產版本
```bash
pnpm preview
```

## 🚀 部署到 GitHub Pages

### 自動部署（推薦）
1. 推送代碼到 `main` 分支：
```bash
git add .
git commit -m "Add React version"
git push origin main
```

2. GitHub Actions 將自動：
   - 建構 React 應用
   - 部署到 GitHub Pages
   - 可在 `https://YOUR_USERNAME.github.io/OpenAiTx.github.io/` 訪問

### 手動部署
```bash
cd react-page
./deploy.sh
```

## 📁 專案結構
```
src/
├── components/
│   └── Navbar.jsx          # 導航欄
├── contexts/
│   └── LanguageContext.jsx  # 多語言管理
├── pages/
│   ├── BadgeGenerator.jsx   # 標章產生器（首頁）
│   ├── Translator.jsx       # GitHub README 翻譯工具
│   └── MarkdownViewer.jsx   # Markdown 檢視器
├── App.jsx                 # 主應用
├── main.jsx               # 入口點
└── index.css              # 全域樣式（Tailwind）
```

## 🌟 功能亮點

### 1. 標章產生器 (`/`)
- 輸入 GitHub 用戶名和專案名
- 一鍵產生多語言標章
- 支援 HTML 和 Markdown 格式
- 複製到剪貼板功能

### 2. 翻譯工具 (`/translate`)
- Azure OpenAI 整合
- GitHub API 配置
- 專案搜索和翻譯

### 3. Markdown 檢視器 (`/view`)
- GitHub 風格渲染
- 程式碼語法高亮
- 多語言標章導航

## 🔧 開發提示

### 添加新語言
在 `src/contexts/LanguageContext.jsx` 中：
```javascript
const translations = {
  'zh-TW': { 'key': '繁體中文翻譯' },
  'en': { 'key': 'English translation' },
  'ja': { 'key': '日本語翻訳' }, // 新增
}
```

### 添加新頁面
1. 在 `src/pages/` 建立組件
2. 在 `src/App.jsx` 添加路由
3. 在 `src/components/Navbar.jsx` 添加導航

### 自定義樣式
- 修改 `tailwind.config.js` 自定義主題
- 在 `src/index.css` 添加全域樣式

## 🐛 常見問題

### Q: 開發服務器啟動失敗？
A: 確保 Node.js 版本 >= 18，並執行 `pnpm install`

### Q: 建構時出現警告？
A: 套件大小警告是正常的，可以忽略或使用動態導入優化

### Q: GitHub Pages 部署失敗？
A: 檢查 GitHub 倉庫設定中的 Pages 選項，確保來源設為 "GitHub Actions"

## 📞 支援

- 查看完整文檔：`README-React.md`
- 原始專案：https://github.com/OpenAiTx/OpenAiTx
- 提交問題：在 GitHub Issues 中報告

---

🎉 **恭喜！您的 React 版本已準備就緒！** 