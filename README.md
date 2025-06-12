# Open AI Tx - Language Auto AI Translate Badge Generator

[![GitHub stars](https://img.shields.io/github/stars/OpenAiTx/OpenAiTx.github.io?style=social)](https://github.com/OpenAiTx/OpenAiTx.github.io/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/OpenAiTx/OpenAiTx.github.io?style=social)](https://github.com/OpenAiTx/OpenAiTx.github.io/network/members)

## 🌟 專案概述

Open AI Tx 是一個多語言標章產生器和 GitHub README 翻譯工具，支援自動 AI 翻譯功能。本專案提供兩個版本：

### 📁 專案結構

```
OpenAiTx.github.io/
├── 📄 index.html              # 原始版本 - 標章產生器
├── 📄 translate.html          # 原始版本 - 翻譯工具  
├── 📄 view.html              # 原始版本 - Markdown 檢視器
├── 📁 css/                   # 原始版本樣式
├── 📁 js/                    # 原始版本腳本
├── 📁 react-page/            # 🆕 React 現代化版本
│   ├── 📁 src/              # React 源碼
│   ├── 📄 package.json      # React 依賴
│   ├── 📄 README-React.md   # React 版本文檔
│   └── 📄 QUICKSTART.md     # React 快速開始
└── 📁 .github/              # GitHub Actions 配置
```

## 🚀 兩個版本選擇

### 🔥 原始版本（推薦用於生產）
- **訪問地址**: https://openaitx.github.io/
- **特點**: 純 HTML/CSS/JavaScript，輕量快速
- **功能**: 標章產生器、翻譯工具、Markdown 檢視器

### ⚡ React 版本（現代化開發）
- **訪問地址**: https://openaitx.github.io/react-page/
- **特點**: React 18 + Vite + Tailwind CSS
- **功能**: 相同功能的現代化實現

## 🛠️ 快速開始

### 原始版本
直接訪問 https://openaitx.github.io/ 即可使用。

### React 版本開發
```bash
# 克隆專案
git clone https://github.com/OpenAiTx/OpenAiTx.github.io.git
cd OpenAiTx.github.io

# 進入 React 版本目錄
cd react-page

# 安裝依賴
pnpm install

# 啟動開發服務器
pnpm dev
```

詳細說明請參考：
- React 版本：[react-page/README-React.md](react-page/README-React.md)
- 快速開始：[react-page/QUICKSTART.md](react-page/QUICKSTART.md)

## 🌐 主要功能

### 1. 標章產生器
- 輸入 GitHub 使用者名稱和專案名稱
- 自動產生多語言標章
- 支援 HTML 和 Markdown 格式
- 一鍵複製功能

### 2. 翻譯工具
- 配置 GitHub 和 Azure OpenAI API
- 搜尋 GitHub 專案
- 自動翻譯 README 檔案到 20 種語言

### 3. Markdown 檢視器
- GitHub 風格的 Markdown 渲染
- 程式碼語法高亮
- 多語言支援
- 響應式設計

## 🌍 支援語言

- 🇺🇸 English
- 🇨🇳 简体中文
- 🇹🇼 繁體中文
- 🇯🇵 日本語
- 🇰🇷 한국어
- 🇹🇭 ไทย
- 🇫🇷 Français
- 🇩🇪 Deutsch
- 🇪🇸 Español
- 🇮🇹 Italiano
- 🇷🇺 Русский
- 🇵🇹 Português
- 🇳🇱 Nederlands
- 🇵🇱 Polski
- 🇸🇦 العربية
- 🇹🇷 Türkçe
- 🇻🇳 Tiếng Việt
- 🇮🇩 Bahasa Indonesia
- 🇮🇳 हिन्दी
- 🇮🇷 فارسی

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

## 📄 授權

MIT License

## 🔗 相關連結

- [GitHub Repository](https://github.com/OpenAiTx/OpenAiTx.github.io)
- [Live Demo - 原始版本](https://openaitx.github.io/)
- [Live Demo - React 版本](https://openaitx.github.io/react-page/)
- [OpenAI Tx 主專案](https://github.com/OpenAiTx/OpenAiTx) 