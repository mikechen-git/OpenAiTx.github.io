# React版本測試指南

## 🚀 啟動應用

```bash
cd react-page
pnpm dev
```

應用將在 `http://localhost:5173` 啟動

## 📋 正確的測試URL

### 🎯 Badge Generator 測試

**基本訪問**：
```
http://localhost:5173/
```

**帶參數測試**（自動填入並生成標章）：
```
http://localhost:5173/?userOrOrg=microsoft&project=vscode
http://localhost:5173/?userOrOrg=facebook&project=react
http://localhost:5173/?userOrOrg=OpenAiTx&project=OpenAiTx
```

### 📖 Markdown Viewer 測試

**基本訪問**：
```
http://localhost:5173/view
```

**帶參數測試**（與原始HTML版本完全一致）：
```
http://localhost:5173/view?user=microsoft&project=vscode
http://localhost:5173/view?user=facebook&project=react
http://localhost:5173/view?user=OpenAiTx&project=OpenAiTx
```

**帶語言參數測試**：
```
http://localhost:5173/view?user=microsoft&project=vscode&lang=zh-TW
http://localhost:5173/view?user=microsoft&project=vscode&lang=zh-CN
http://localhost:5173/view?user=microsoft&project=vscode&lang=ja
http://localhost:5173/view?user=microsoft&project=vscode&lang=ko
http://localhost:5173/view?user=facebook&project=react&lang=en
```

## 🔄 向後兼容性測試

### 重要：舊版本URL自動重定向

React版本現在完全支持舊版本的URL格式，會自動重定向到新格式：

**Badge Generator 向後兼容**：
```
舊格式: http://localhost:5173/index.html?userOrOrg=microsoft&project=vscode
自動重定向到: http://localhost:5173/?userOrOrg=microsoft&project=vscode
```

**Markdown Viewer 向後兼容**：
```
舊格式: http://localhost:5173/view.html?user=mini-software&project=MiniExcel&lang=zh-CN
自動重定向到: http://localhost:5173/view?user=mini-software&project=MiniExcel&lang=zh-CN
```

### 🧪 向後兼容性測試URL

**測試這些舊格式URL，應該會自動重定向並正常工作**：

```
http://localhost:5173/index.html?userOrOrg=microsoft&project=vscode
http://localhost:5173/view.html?user=mini-software&project=MiniExcel&lang=zh-CN
http://localhost:5173/view.html?user=facebook&project=react&lang=en
http://localhost:5173/view.html?user=OpenAiTx&project=OpenAiTx&lang=zh-TW
```

## 🔄 與原始HTML版本的對比

### 原始HTML版本URL格式：
```
http://localhost:8080/view.html?user=microsoft&project=vscode&lang=zh-TW
```

### React版本URL格式：
```
http://localhost:5173/view?user=microsoft&project=vscode&lang=zh-TW
```

### React版本向後兼容（自動重定向）：
```
http://localhost:5173/view.html?user=microsoft&project=vscode&lang=zh-TW
↓ 自動重定向到 ↓
http://localhost:5173/view?user=microsoft&project=vscode&lang=zh-TW
```

**重要**：參數名稱完全一致（`user`, `project`, `lang`），舊的 `.html` 路徑會自動重定向到新路徑。

## 🧪 完整測試流程

### 1. Badge Generator 功能測試

1. **URL參數自動填入測試**：
   ```
   http://localhost:5173/?userOrOrg=microsoft&project=vscode
   ```
   - ✅ 表單應自動填入
   - ✅ 自動檢查GitHub倉庫
   - ✅ 自動生成兩種樣式標章

2. **向後兼容性測試**：
   ```
   http://localhost:5173/index.html?userOrOrg=microsoft&project=vscode
   ```
   - ✅ 應自動重定向到根路徑
   - ✅ 保持所有查詢參數
   - ✅ 功能正常工作

3. **生成的連結測試**：
   - 複製生成的HTML或Markdown代碼
   - 檢查連結格式是否為：`https://openaitx.github.io/view?user=xxx&project=xxx&lang=xxx`
   - 點擊生成的連結應能正確跳轉到viewer頁面

4. **複製功能測試**：
   - 點擊 "Copy HTML" 或 "Copy Markdown" 按鈕
   - 檢查剪貼板內容

### 2. Markdown Viewer 功能測試

1. **URL參數處理測試**：
   ```
   http://localhost:5173/view?user=microsoft&project=vscode&lang=zh-TW
   ```
   - ✅ 自動載入README內容
   - ✅ 顯示正確的語言版本
   - ✅ 頁面標題更新

2. **向後兼容性測試**：
   ```
   http://localhost:5173/view.html?user=mini-software&project=MiniExcel&lang=zh-CN
   ```
   - ✅ 應自動重定向到 `/view`
   - ✅ 保持所有查詢參數
   - ✅ 正常載入內容

3. **語言切換測試**：
   - 點擊不同語言標籤
   - URL應更新為對應語言
   - 內容應重新載入

4. **錯誤處理測試**：
   ```
   http://localhost:5173/view?user=nonexistent&project=repo
   ```
   - ✅ 應顯示倉庫不存在錯誤

5. **缺少參數測試**：
   ```
   http://localhost:5173/view
   ```
   - ✅ 應顯示缺少參數錯誤

### 3. 跨版本兼容性測試

**測試場景**：用戶從原始HTML版本的標章點擊跳轉到React版本

1. 在原始HTML版本生成標章：
   ```
   http://localhost:8080/index.html?userOrOrg=microsoft&project=vscode
   ```

2. 複製生成的標章代碼，檢查連結格式

3. 測試舊格式連結在React版本中的重定向：
   ```
   原始舊格式: https://openaitx.github.io/view.html?user=microsoft&project=vscode&lang=zh-TW
   React自動重定向: https://openaitx.github.io/view?user=microsoft&project=vscode&lang=zh-TW
   ```

## ⚠️ 重要注意事項

1. **參數名稱一致性**：
   - Badge Generator: `userOrOrg`, `project`
   - Markdown Viewer: `user`, `project`, `lang`
   - 這與原始HTML版本完全一致

2. **URL路徑變更與兼容性**：
   - 新格式: `/view`
   - 舊格式: `/view.html` （自動重定向到新格式）
   - 完全向後兼容，用戶無需更改現有連結

3. **生成的標章連結**：
   - React版本生成的標章連結使用新格式 `/view`
   - 但仍然支持舊格式的訪問

4. **重定向行為**：
   - 使用 `replace` 重定向，不會在瀏覽器歷史中留下舊URL
   - 保持所有查詢參數不變
   - SEO友好的301重定向行為

## 🔧 部署考慮

部署到GitHub Pages時，需要考慮：

1. **路由處理**：設置適當的fallback到 `index.html`
2. **重定向規則**：React Router會自動處理 `/view.html` 到 `/view` 的重定向
3. **基礎路徑**：確保所有資源路徑正確
4. **向後兼容性**：現有的公開連結會繼續正常工作

## 📊 測試檢查清單

### 基本功能測試
- [ ] Badge Generator URL參數自動填入
- [ ] Badge Generator 標章生成
- [ ] Badge Generator 複製功能
- [ ] Badge Generator 專案提交功能
- [ ] Markdown Viewer URL參數處理
- [ ] Markdown Viewer README載入
- [ ] Markdown Viewer 語言切換
- [ ] Markdown Viewer 錯誤處理

### 向後兼容性測試
- [ ] `/index.html` 重定向到 `/`
- [ ] `/view.html` 重定向到 `/view`
- [ ] 重定向保持查詢參數
- [ ] 舊格式連結正常工作
- [ ] 重定向後功能完全正常

### 跨版本兼容性測試
- [ ] 從HTML版本生成的連結在React版本中工作
- [ ] React版本生成的連結格式正確
- [ ] 響應式設計測試
- [ ] 暗色模式測試

## 🎯 重點測試案例

**最重要的向後兼容性測試**：
```
http://localhost:5173/view.html?user=mini-software&project=MiniExcel&lang=zh-CN
```
這個URL應該：
1. 自動重定向到 `http://localhost:5173/view?user=mini-software&project=MiniExcel&lang=zh-CN`
2. 正常載入MiniExcel專案的中文README
3. 顯示正確的語言版本
4. 所有功能正常工作 