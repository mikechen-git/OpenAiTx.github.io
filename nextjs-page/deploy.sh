#!/bin/bash

# OpenAiTxNext 部署腳本
# 用於將靜態檔案部署到 GitHub Pages

echo "🚀 開始部署 OpenAiTxNext 到 GitHub Pages..."

# 建置和導出靜態檔案
echo "📦 建置專案..."
pnpm export

# 檢查是否建置成功
if [ $? -eq 0 ]; then
    echo "✅ 建置成功！"
    echo "📁 靜態檔案已導出到 'out' 資料夾"
    echo ""
    echo "📋 接下來的步驟："
    echo "1. 將 'out' 資料夾的內容複製到您的 GitHub Pages 儲存庫"
    echo "2. 或者將 'out' 資料夾的內容推送到 gh-pages 分支"
    echo ""
    echo "💡 提示：您可以使用以下指令來測試靜態檔案："
    echo "   cd out && python3 -m http.server 8000"
    echo "   然後在瀏覽器中開啟 http://localhost:8000"
else
    echo "❌ 建置失敗！請檢查錯誤訊息。"
    exit 1
fi 