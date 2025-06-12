# 📁 項目重組說明

## 🔄 重組完成

所有 React 相關的文件已成功移動到 `react-page/` 資料夾中，根目錄保持原始專案的架構。

## 📂 新的目錄結構

```
OpenAiTx.github.io/                 # 根目錄（原始版本）
├── 📄 index.html                   # ✅ 原始標章產生器
├── 📄 translate.html               # ✅ 原始翻譯工具
├── 📄 view.html                   # ✅ 原始 Markdown 檢視器
├── 📄 README.md                   # 🆕 專案總覽說明
├── 📁 css/                        # ✅ 原始樣式文件
├── 📁 js/                         # ✅ 原始腳本文件
├── 📁 react-page/                 # 🆕 React 版本目錄
│   ├── 📁 src/                    # React 源碼
│   │   ├── 📁 components/         # React 組件
│   │   ├── 📁 contexts/           # React Context
│   │   ├── 📁 pages/              # 頁面組件
│   │   ├── 📄 App.jsx             # 主應用
│   │   ├── 📄 main.jsx            # 入口點
│   │   └── 📄 index.css           # 全域樣式
│   ├── 📄 package.json            # React 依賴
│   ├── 📄 vite.config.js          # Vite 配置
│   ├── 📄 tailwind.config.js      # Tailwind 配置
│   ├── 📄 README-React.md         # React 版本文檔
│   ├── 📄 QUICKSTART.md           # 快速開始指南
│   ├── 📄 FEATURE_TEST.md         # 功能測試說明
│   └── 📄 deploy.sh               # 部署腳本
└── 📁 .github/                    # GitHub Actions 配置
    └── 📁 workflows/
        ├── 📄 react-deploy.yml     # ✅ 已更新路徑
        └── 📄 static.yml           # 原始版本部署
```

## 🔧 已更新的配置

### 1. GitHub Actions (`.github/workflows/react-deploy.yml`)
```yaml
# 已更新為在 react-page 目錄中執行
- run: cd react-page && pnpm install
- run: cd react-page && pnpm build
- path: './react-page/dist'
```

### 2. 文檔更新
- ✅ `react-page/README-React.md` - 更新了所有路徑引用
- ✅ `react-page/QUICKSTART.md` - 更新了開發指令
- ✅ `README.md` - 新增根目錄總覽說明

### 3. 開發指令更新
```bash
# 舊的指令（根目錄）
pnpm install
pnpm dev

# 新的指令（需要先進入 react-page）
cd react-page
pnpm install
pnpm dev
```

## 🚀 使用方式

### 原始版本（生產環境）
- 直接訪問：https://openaitx.github.io/
- 無需任何安裝，純靜態文件

### React 版本（開發環境）
```bash
# 1. 克隆專案
git clone https://github.com/OpenAiTx/OpenAiTx.github.io.git
cd OpenAiTx.github.io

# 2. 進入 React 目錄
cd react-page

# 3. 安裝依賴並啟動
pnpm install
pnpm dev
```

## ✅ 驗證清單

- [x] 原始文件保持在根目錄
- [x] React 文件移動到 `react-page/`
- [x] GitHub Actions 路徑已更新
- [x] 文檔路徑引用已更新
- [x] 開發服務器正常運行
- [x] 建構流程正常工作
- [x] 部署配置已更新

## 🎯 優點

1. **清晰分離**：原始版本和 React 版本完全分離
2. **保持兼容**：原始專案結構完全保留
3. **獨立開發**：React 版本可以獨立開發和部署
4. **易於維護**：兩個版本互不干擾

## 📞 支援

如有任何問題，請參考：
- React 版本文檔：`react-page/README-React.md`
- 快速開始：`react-page/QUICKSTART.md`
- 專案總覽：`README.md` 