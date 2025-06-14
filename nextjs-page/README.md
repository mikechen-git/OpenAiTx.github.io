# NextJS Page

這是一個使用 Next.js 建立的靜態網站專案，支援 SSG（Static Site Generation）導出，專為部署到 GitHub Pages 而設計。

## 特色功能

- ✅ 使用 Next.js 15.3.3 和 Page Router
- ✅ 支援 TypeScript
- ✅ 整合 Tailwind CSS 4.1.10
- ✅ 支援 SSG 靜態導出
- ✅ 可從 URL 參數獲取值
- ✅ 針對 GitHub Pages 優化
- ✅ 使用 pnpm 作為套件管理器

## 開始使用

### 安裝依賴

```bash
pnpm install
```

### 開發模式

```bash
pnpm dev
```

在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000) 查看結果。

### 建置和導出

```bash
pnpm export
```

這會建立一個 `out` 資料夾，包含所有靜態檔案，可以直接部署到 GitHub Pages。

## URL 參數支援

這個專案支援從 URL 參數獲取值。例如：

- `http://localhost:3000/?name=OpenAI&type=demo`
- `http://localhost:3000/?user=admin&lang=zh-TW`

所有的 URL 參數都會在頁面上顯示出來。

## 部署到 GitHub Pages

### 方法一：手動部署
1. 執行 `pnpm export` 建立靜態檔案
2. 將 `out` 資料夾的內容推送到 GitHub Pages 分支

### 方法二：使用部署腳本
```bash
./deploy.sh
```

### 方法三：GitHub Actions 自動化部署
專案已包含 GitHub Actions 工作流程檔案，推送到 main/master 分支時會自動部署。

## 專案結構

```
nextjs-page/
├── src/
│   ├── pages/          # 頁面檔案
│   │   ├── index.tsx   # 主頁面
│   │   ├── _app.tsx    # App 組件
│   │   └── _document.tsx # Document 組件
│   └── styles/         # 樣式檔案
├── public/             # 靜態資源
├── .github/workflows/  # GitHub Actions
├── out/                # 導出的靜態檔案
├── next.config.ts      # Next.js 設定
├── deploy.sh           # 部署腳本
└── package.json        # 專案設定
```

## 技術棧

- **框架**: Next.js 15.3.3
- **語言**: TypeScript
- **樣式**: Tailwind CSS 4.1.10
- **套件管理**: pnpm
- **部署**: GitHub Pages (SSG)

## 開發說明

- 使用 Page Router 而非 App Router
- 設定了 `output: 'export'` 以支援靜態導出
- 圖片使用 `unoptimized: true` 以支援靜態部署
- 支援 `trailingSlash: true` 以符合 GitHub Pages 需求

## 學習資源

- [Next.js 文檔](https://nextjs.org/docs) - 了解 Next.js 功能和 API
- [Next.js 教學](https://nextjs.org/learn-pages-router) - 互動式 Next.js 教學
- [Tailwind CSS 文檔](https://tailwindcss.com/docs) - Tailwind CSS 使用指南
