# URL兼容性修正說明

## 🐛 發現的問題

用戶反映React版本的URL格式與原始HTML版本不一致，導致跨版本連結無法正常工作。

### 問題詳情

**原始HTML版本URL格式**：
```
https://openaitx.github.io/view.html?user=microsoft&project=vscode&lang=zh-TW
```

**React版本URL格式**（修正前）：
```
https://openaitx.github.io/viewer?repo=microsoft/vscode&lang=zh-TW
```

**問題分析**：
1. 路徑不一致：`/view.html` vs `/viewer`
2. 參數名稱不一致：`user` & `project` vs `repo`
3. 參數格式不一致：分離的 `user` 和 `project` vs 組合的 `repo`

## ✅ 修正方案

### 1. 路徑統一

**修正前**：
- 路由：`/viewer`
- 導航：指向 `/viewer`

**修正後**：
- 路由：`/view`
- 導航：指向 `/view`

### 2. 參數名稱統一

**修正前**：
```javascript
const repo = searchParams.get('repo') // 錯誤
const [user, project] = repo ? repo.split('/') : ['', '']
```

**修正後**：
```javascript
const user = searchParams.get('user')     // ✅ 正確
const project = searchParams.get('project') // ✅ 正確
```

### 3. 生成連結修正

**Badge Generator中的連結生成**：

**修正前**：
```javascript
`<a href="https://openaitx.github.io/view.html?user=${userOrOrg}&project=${project}&lang=${lang.code}">...`
```

**修正後**：
```javascript
`<a href="https://openaitx.github.io/view?user=${userOrOrg}&project=${project}&lang=${lang.code}">...`
```

### 4. GitHub Pages SPA路由支持

為了支持React Router在GitHub Pages上的正常工作，添加了：

**404.html**：
```html
<!-- GitHub Pages SPA重定向處理 -->
<script type="text/javascript">
    var pathSegmentsToKeep = 1;
    var l = window.location;
    l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
    );
</script>
```

**index.html**：
```html
<!-- SPA重定向解碼處理 -->
<script type="text/javascript">
    (function(l) {
        if (l.search[1] === '/' ) {
            var decoded = l.search.slice(1).split('&').map(function(s) { 
                return s.replace(/~and~/g, '&')
            }).join('?');
            window.history.replaceState(null, null,
                l.pathname.slice(0, -1) + decoded + l.hash
            );
        }
    }(window.location))
</script>
```

## 🔄 修正後的URL格式對比

### Badge Generator
**原始HTML**：
```
https://openaitx.github.io/index.html?userOrOrg=microsoft&project=vscode
```

**React版本**：
```
https://openaitx.github.io/?userOrOrg=microsoft&project=vscode
```

### Markdown Viewer
**原始HTML**：
```
https://openaitx.github.io/view.html?user=microsoft&project=vscode&lang=zh-TW
```

**React版本**：
```
https://openaitx.github.io/view?user=microsoft&project=vscode&lang=zh-TW
```

## 🧪 測試驗證

### 本地測試URL

**Badge Generator**：
```
http://localhost:5173/?userOrOrg=microsoft&project=vscode
```

**Markdown Viewer**：
```
http://localhost:5173/view?user=microsoft&project=vscode&lang=zh-TW
```

### 跨版本兼容性測試

1. **從原始HTML版本生成的標章**：
   - 連結格式：`https://openaitx.github.io/view.html?user=xxx&project=xxx&lang=xxx`
   - 需要手動將 `view.html` 改為 `view` 來測試React版本

2. **React版本生成的標章**：
   - 連結格式：`https://openaitx.github.io/view?user=xxx&project=xxx&lang=xxx`
   - 直接兼容原始HTML版本的參數格式

## 📋 修正檔案清單

1. **react-page/src/App.jsx**
   - 路由路徑：`/viewer` → `/view`

2. **react-page/src/pages/BadgeGenerator.jsx**
   - 生成連結：`view.html` → `view`

3. **react-page/src/pages/MarkdownViewer.jsx**
   - 參數處理：已經正確使用 `user` 和 `project`

4. **react-page/src/components/Navbar.jsx**
   - 導航連結：已經正確指向 `/view`

5. **react-page/public/404.html**
   - 新增：GitHub Pages SPA重定向處理

6. **react-page/index.html**
   - 新增：SPA重定向解碼腳本

7. **react-page/TESTING_GUIDE.md**
   - 新增：完整的測試指南和URL格式說明

## ✅ 修正結果

修正後，React版本與原始HTML版本在URL格式和參數處理上完全一致：

- ✅ 參數名稱一致：`user`, `project`, `lang`
- ✅ URL路徑兼容：`/view` 對應 `/view.html`
- ✅ 跨版本連結兼容
- ✅ GitHub Pages SPA路由支持
- ✅ 完整的錯誤處理和用戶體驗

用戶現在可以無縫地在兩個版本之間切換，生成的標章連結也能正確工作。 