#!/bin/bash

# 建構並部署 React 應用到 GitHub Pages
echo "🚀 開始建構 React 應用..."

# 安裝依賴
echo "📦 安裝依賴..."
pnpm install

# 建構應用
echo "🔨 建構應用..."
pnpm build

# 檢查建構是否成功
if [ -d "dist" ]; then
    echo "✅ 建構成功！"
    echo "📁 建構檔案位於 dist/ 目錄"
    echo "🌐 可以將 dist/ 目錄部署到任何靜態託管服務"
    echo ""
    echo "📋 下一步："
    echo "1. 提交並推送代碼到 main 分支"
    echo "2. GitHub Actions 將自動部署到 GitHub Pages"
    echo "3. 或手動將 dist/ 目錄內容上傳到您的託管服務"
else
    echo "❌ 建構失敗，請檢查錯誤訊息"
    exit 1
fi 