# i18next 多語言系統遷移說明

## 概述

本專案已成功從自定義的 LanguageContext 遷移到 i18next 國際化框架。

## 主要變更

### 1. 依賴項
新增了以下依賴項：
- `i18next` - 核心國際化框架
- `react-i18next` - React 整合
- `i18next-browser-languagedetector` - 瀏覽器語言檢測

### 2. 文件結構
```
src/
├── i18n/
│   ├── index.js              # i18next 配置
│   └── locales/
│       ├── en.json           # 英文翻譯
│       ├── zh-CN.json        # 簡體中文翻譯
│       └── zh-TW.json        # 繁體中文翻譯
├── components/
│   └── Navbar.jsx            # 更新為使用 useTranslation
├── pages/
│   ├── BadgeGenerator.jsx    # 更新為使用 useTranslation
│   └── MarkdownViewer.jsx    # 更新為使用 useTranslation
└── contexts/
    └── LanguageContext.jsx   # 已刪除
```

### 3. 使用方式

#### 在組件中使用翻譯
```jsx
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t, i18n } = useTranslation()
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <button onClick={() => i18n.changeLanguage('zh-TW')}>
        切換到繁體中文
      </button>
    </div>
  )
}
```

#### 語言切換
```jsx
const { i18n } = useTranslation()

// 切換語言
i18n.changeLanguage('zh-CN')  // 簡體中文
i18n.changeLanguage('zh-TW')  // 繁體中文
i18n.changeLanguage('en')     // 英文

// 獲取當前語言
const currentLanguage = i18n.language
```

### 4. 語言檢測

i18next 會自動檢測用戶的語言偏好，檢測順序為：
1. localStorage 中的 'preferred-language'
2. 瀏覽器語言設定
3. HTML lang 屬性
4. 預設語言 (英文)

### 5. 支援的語言

目前支援的語言：
- `en` - English
- `zh-CN` - 简体中文
- `zh-TW` - 繁體中文

### 6. 新增語言

要新增新語言：

1. 在 `src/i18n/locales/` 中創建新的 JSON 文件
2. 在 `src/i18n/index.js` 中導入並添加到 resources
3. 在 `src/components/Navbar.jsx` 中添加到 availableLanguages 陣列

### 7. 翻譯鍵值結構

翻譯鍵值按功能模組組織：
```json
{
  "nav": {
    "home": "首頁",
    "view": "檢視器"
  },
  "badge": {
    "title": "標章產生器",
    "description": "描述文字"
  },
  "viewer": {
    "loading": "載入中...",
    "error": "錯誤"
  },
  "common": {
    "loading": "載入中...",
    "error": "錯誤"
  }
}
```

## 優勢

1. **標準化**: 使用業界標準的 i18next 框架
2. **自動檢測**: 自動檢測用戶語言偏好
3. **持久化**: 語言選擇會保存在 localStorage
4. **擴展性**: 容易添加新語言和翻譯
5. **類型安全**: 可以配合 TypeScript 使用
6. **豐富功能**: 支援插值、複數形式等高級功能

## 遷移完成

✅ 移除舊的 LanguageContext  
✅ 安裝 i18next 相關依賴  
✅ 創建語言資源文件  
✅ 更新所有組件使用 useTranslation  
✅ 配置語言檢測和持久化  
✅ 測試建置成功  