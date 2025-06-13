# 🚀 GitHub Pages 部署指南

## 📋 Fork 後的部署設定

### 1. **修改 Vite 配置**
編輯 `react-page/vite.config.js`：

```javascript
// 將這行：
base: '/OpenAiTx.github.io/'

// 改為您的倉庫名稱：
base: '/您的倉庫名稱/'
// 例如：base: '/my-openai-tx/'
```

### 2. **啟用 GitHub Pages**
1. 進入您的 GitHub 倉庫
2. 點擊 **Settings** 標籤
3. 滾動到 **Pages** 部分
4. 在 **Source** 下選擇 **GitHub Actions**

### 3. **觸發部署**
推送任何變更到 `main` 分支即可自動觸發部署：

```bash
git add .
git commit -m "Enable GitHub Pages deployment"
git push origin main
```

### 4. **訪問您的網站**
- 原始版本：`https://您的用戶名.github.io/您的倉庫名稱/`
- React版本：`https://您的用戶名.github.io/您的倉庫名稱/react-page/`

## 🔧 **部署工作流程說明**

### **自動部署觸發條件**
- ✅ 推送到 `main` 分支
- ✅ 對 `main` 分支的 Pull Request
- ✅ 手動觸發 (static.yml)

### **構建過程**
1. **React 應用構建**：
   - 安裝 Node.js 18 + pnpm 8
   - 安裝依賴：`cd react-page && pnpm install`
   - 構建應用：`cd react-page && pnpm run build`
   - 上傳 `./react-page/dist` 到 GitHub Pages

2. **靜態文件部署**：
   - 直接上傳整個倉庫根目錄
   - 包含原始版本的 HTML/CSS/JS 文件

## 🎯 **發 PR 回原倉庫的注意事項**

### **保持配置一致**
發 PR 前請確保：
- `vite.config.js` 中的 `base` 路徑保持為 `/OpenAiTx.github.io/`
- 不要修改 GitHub Actions 工作流程文件
- 確保所有功能在原始配置下正常運作

### **測試流程**
1. 在您的 fork 上測試部署
2. 確認功能正常
3. 將 `base` 路徑改回原始設定
4. 提交 PR

## 🛠️ **本地開發**

```bash
# 克隆您的 fork
git clone https://github.com/您的用戶名/您的倉庫名稱.git
cd 您的倉庫名稱

# 進入 React 版本
cd react-page

# 安裝依賴
pnpm install

# 啟動開發服務器
pnpm dev
```

## 🔍 **故障排除**

### **常見問題**
1. **404 錯誤**：檢查 `base` 路徑是否正確
2. **資源載入失敗**：確認 GitHub Pages 已啟用
3. **構建失敗**：檢查 Node.js 版本和依賴

### **檢查部署狀態**
- 進入 **Actions** 標籤查看工作流程狀態
- 檢查 **Settings > Pages** 確認部署源設定

## 📞 **需要幫助？**
如有問題，請在原倉庫提交 Issue：
https://github.com/OpenAiTx/OpenAiTx.github.io/issues 