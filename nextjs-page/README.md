# NextJS Page

這是一個使用 Next.js 建立的靜態網站專案，支援 SSG（Static Site Generation）導出，專為部署到 GitHub Pages 而設計。整合了 shadcn/ui 組件庫和 Lucide React 圖標。

## 特色功能

- ✅ 使用 Next.js 15.3.3 和 Page Router
- ✅ 支援 TypeScript
- ✅ 整合 Tailwind CSS 4.1.10
- ✅ 整合 shadcn/ui 組件庫
- ✅ 使用 Lucide React 圖標
- ✅ 響應式 Sidebar 設計
- ✅ 支援 SSG 靜態導出
- ✅ 可從 URL 參數獲取值
- ✅ 針對 GitHub Pages 優化
- ✅ 使用 pnpm 作為套件管理器

## 組件展示

### Sidebar 功能
- 🎨 現代化的 shadcn/ui 設計風格
- 📱 響應式設計（桌面版固定側邊欄，移動版抽屜式）
- 🔍 內建搜尋功能
- 🏷️ 支援徽章和通知數量顯示
- ⚡ 快速操作區域
- 💳 升級提示卡片
- 🔗 社交媒體連結

### UI 組件
- Button（按鈕）
- Card（卡片）
- Separator（分隔線）
- Sheet（抽屜）
- 以及更多 shadcn/ui 組件

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
│   ├── components/         # React 組件
│   │   ├── ui/            # shadcn/ui 組件
│   │   ├── sidebar.tsx    # Sidebar 組件
│   │   └── layout.tsx     # Layout 組件
│   ├── lib/               # 工具函數
│   │   └── utils.ts       # shadcn/ui 工具函數
│   ├── pages/             # 頁面檔案
│   │   ├── index.tsx      # 主頁面
│   │   ├── _app.tsx       # App 組件
│   │   └── _document.tsx  # Document 組件
│   └── styles/            # 樣式檔案
│       └── globals.css    # 全域樣式（包含 shadcn/ui 變數）
├── public/                # 靜態資源
├── .github/workflows/     # GitHub Actions
├── out/                   # 導出的靜態檔案
├── components.json        # shadcn/ui 配置
├── next.config.ts         # Next.js 設定
├── deploy.sh              # 部署腳本
└── package.json           # 專案設定
```

## 技術棧

- **框架**: Next.js 15.3.3
- **語言**: TypeScript
- **樣式**: Tailwind CSS 4.1.10
- **UI 組件**: shadcn/ui
- **圖標**: Lucide React
- **套件管理**: pnpm
- **部署**: GitHub Pages (SSG)

## 開發說明

- 使用 Page Router 而非 App Router
- 設定了 `output: 'export'` 以支援靜態導出
- 圖片使用 `unoptimized: true` 以支援靜態部署
- 支援 `trailingSlash: true` 以符合 GitHub Pages 需求
- shadcn/ui 組件已配置為支援靜態導出

## 添加新的 shadcn/ui 組件

```bash
npx shadcn@latest add [component-name]
```

例如：
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add table
```

## 學習資源

- [Next.js 文檔](https://nextjs.org/docs) - 了解 Next.js 功能和 API
- [Next.js 教學](https://nextjs.org/learn-pages-router) - 互動式 Next.js 教學
- [Tailwind CSS 文檔](https://tailwindcss.com/docs) - Tailwind CSS 使用指南
- [shadcn/ui 文檔](https://ui.shadcn.com/) - shadcn/ui 組件庫文檔
- [Lucide React](https://lucide.dev/) - Lucide React 圖標庫
