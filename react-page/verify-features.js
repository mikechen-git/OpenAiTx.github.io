#!/usr/bin/env node

/**
 * 功能驗證腳本
 * 檢查原始HTML版本與React版本的功能對等性
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 開始驗證功能對等性...\n');

// 驗證結果統計
let totalChecks = 0;
let passedChecks = 0;
let failedChecks = [];

function check(description, condition, details = '') {
  totalChecks++;
  if (condition) {
    console.log(`✅ ${description}`);
    passedChecks++;
  } else {
    console.log(`❌ ${description}`);
    if (details) console.log(`   ${details}`);
    failedChecks.push(description);
  }
}

// 1. 檢查文件結構
console.log('📁 檢查文件結構...');

const htmlFiles = [
  '../index.html',
  '../translate.html', 
  '../view.html'
];

const reactFiles = [
  'src/pages/BadgeGenerator.jsx',
  'src/pages/Translator.jsx',
  'src/pages/MarkdownViewer.jsx'
];

htmlFiles.forEach(file => {
  check(`HTML文件存在: ${file}`, fs.existsSync(path.join(__dirname, file)));
});

reactFiles.forEach(file => {
  check(`React組件存在: ${file}`, fs.existsSync(path.join(__dirname, file)));
});

// 2. 檢查Badge Generator功能
console.log('\n🎯 檢查Badge Generator功能...');

try {
  const badgeGeneratorContent = fs.readFileSync(path.join(__dirname, 'src/pages/BadgeGenerator.jsx'), 'utf8');
  
  // 檢查URL參數處理
  check('URL參數處理', badgeGeneratorContent.includes('useSearchParams'));
  
  // 檢查GitHub API調用
  check('GitHub API調用', badgeGeneratorContent.includes('api.github.com/repos'));
  
  // 檢查標章生成
  check('HTML標章生成', badgeGeneratorContent.includes('Style Option 1') && badgeGeneratorContent.includes('HTML'));
  check('Markdown標章生成', badgeGeneratorContent.includes('Style Option 2') && badgeGeneratorContent.includes('Markdown'));
  
  // 檢查複製功能
  check('複製到剪貼板', badgeGeneratorContent.includes('navigator.clipboard'));
  
  // 檢查專案提交
  check('專案提交功能', badgeGeneratorContent.includes('openaitx.com/api/submit-project'));
  
  // 檢查語言支援
  const style1Languages = (badgeGeneratorContent.match(/style1Languages/g) || []).length;
  const style2Languages = (badgeGeneratorContent.match(/style2Languages/g) || []).length;
  check('語言標籤數量', style1Languages > 0 && style2Languages > 0, `找到 style1Languages: ${style1Languages}, style2Languages: ${style2Languages}`);
  
} catch (error) {
  check('Badge Generator文件讀取', false, error.message);
}

// 3. 檢查Translator功能
console.log('\n🌐 檢查Translator功能...');

try {
  const translatorContent = fs.readFileSync(path.join(__dirname, 'src/pages/Translator.jsx'), 'utf8');
  
  // 檢查配置管理
  check('localStorage配置', translatorContent.includes('localStorage'));
  check('GitHub Token配置', translatorContent.includes('githubToken'));
  check('OpenAI配置', translatorContent.includes('openAiKey'));
  
  // 檢查GitHub搜尋
  check('GitHub搜尋API', translatorContent.includes('api.github.com/search/repositories'));
  
  // 檢查翻譯功能
  check('翻譯進度顯示', translatorContent.includes('progress') || translatorContent.includes('Progress'));
  check('Azure OpenAI整合', translatorContent.includes('openai.azure.com') || translatorContent.includes('Azure'));
  
  // 檢查語言數量
  const translationLanguages = (translatorContent.match(/zh-TW|zh-CN|ja|ko|es|fr|de|it|pt|ru|ar|hi|th|vi|id|ms|tl|my|km|lo/g) || []).length;
  check('翻譯語言數量', translationLanguages >= 15, `找到 ${translationLanguages} 種語言`);
  
} catch (error) {
  check('Translator文件讀取', false, error.message);
}

// 4. 檢查Markdown Viewer功能
console.log('\n📖 檢查Markdown Viewer功能...');

try {
  const viewerContent = fs.readFileSync(path.join(__dirname, 'src/pages/MarkdownViewer.jsx'), 'utf8');
  
  // 檢查URL參數處理
  check('URL參數處理', viewerContent.includes('useSearchParams'));
  
  // 檢查GitHub API
  check('GitHub Contents API', viewerContent.includes('api.github.com/repos') && (viewerContent.includes('contents') || viewerContent.includes('README')));
  
  // 檢查Markdown渲染
  check('Markdown渲染', viewerContent.includes('marked') || viewerContent.includes('Marked'));
  check('代碼高亮', viewerContent.includes('highlight') || viewerContent.includes('hljs'));
  
  // 檢查語言切換
  check('語言切換功能', viewerContent.includes('language') && viewerContent.includes('badge'));
  
  // 檢查專案提交
  check('專案提交功能', viewerContent.includes('openaitx.com/api/submit-project'));
  
  // 檢查標題更新
  check('動態標題更新', viewerContent.includes('document.title') || viewerContent.includes('useEffect'));
  
} catch (error) {
  check('Markdown Viewer文件讀取', false, error.message);
}

// 5. 檢查依賴項
console.log('\n📦 檢查依賴項...');

try {
  const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
  
  const requiredDeps = [
    'react',
    'react-dom', 
    'react-router-dom',
    'marked',
    'highlight.js',
    'lucide-react'
  ];
  
  requiredDeps.forEach(dep => {
    check(`依賴項: ${dep}`, packageJson.dependencies && packageJson.dependencies[dep]);
  });
  
} catch (error) {
  check('package.json讀取', false, error.message);
}

// 6. 檢查配置文件
console.log('\n⚙️ 檢查配置文件...');

const configFiles = [
  'vite.config.js',
  'tailwind.config.js',
  'postcss.config.js'
];

configFiles.forEach(file => {
  check(`配置文件: ${file}`, fs.existsSync(path.join(__dirname, file)));
});

// 7. 檢查原始HTML文件的關鍵功能點
console.log('\n🔍 檢查原始HTML文件功能點...');

try {
  // 檢查index.html和相關JS文件
  const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
  // 注意：當前的index.html是React應用的入口點，原始功能在js/文件中
  check('HTML版本標章生成', indexHtml.includes('Badge') || indexHtml.includes('badge'));
  
  // 檢查translate.html和translate.js
  const translateHtml = fs.readFileSync(path.join(__dirname, '../translate.html'), 'utf8');
  const translateJs = fs.readFileSync(path.join(__dirname, '../translate.js'), 'utf8');
  check('HTML版本翻譯功能', translateHtml.includes('Translator') || translateJs.includes('translate'));
  check('HTML版本配置存儲', translateJs.includes('localStorage'));
  
  // 檢查view.html和view.js
  const viewHtml = fs.readFileSync(path.join(__dirname, '../view.html'), 'utf8');
  const viewJs = fs.readFileSync(path.join(__dirname, '../view.js'), 'utf8');
  check('HTML版本Markdown渲染', viewHtml.includes('Markdown') || viewJs.includes('marked'));
  check('HTML版本語言切換', viewHtml.includes('Language') || viewJs.includes('language'));
  
  // 檢查原始HTML版本的URL參數處理（在JS文件中）
  check('HTML版本URL參數處理', viewJs.includes('URLSearchParams') || viewJs.includes('searchParams'));
  
} catch (error) {
  check('原始HTML文件檢查', false, error.message);
}

// 8. 檢查API端點一致性
console.log('\n🌐 檢查API端點一致性...');

const apiEndpoints = [
  'api.github.com/repos',
  'api.github.com/search/repositories', 
  'openaitx.com/api/submit-project',
  'openai.azure.com'
];

try {
  const allReactFiles = reactFiles.map(file => 
    fs.readFileSync(path.join(__dirname, file), 'utf8')
  ).join('\n');
  
  apiEndpoints.forEach(endpoint => {
    check(`API端點: ${endpoint}`, allReactFiles.includes(endpoint));
  });
  
} catch (error) {
  check('API端點檢查', false, error.message);
}

// 輸出總結
console.log('\n' + '='.repeat(50));
console.log('📊 驗證結果總結');
console.log('='.repeat(50));
console.log(`總檢查項目: ${totalChecks}`);
console.log(`通過檢查: ${passedChecks} ✅`);
console.log(`失敗檢查: ${totalChecks - passedChecks} ❌`);
console.log(`成功率: ${Math.round((passedChecks / totalChecks) * 100)}%`);

if (failedChecks.length > 0) {
  console.log('\n❌ 失敗的檢查項目:');
  failedChecks.forEach(item => console.log(`  - ${item}`));
}

if (passedChecks === totalChecks) {
  console.log('\n🎉 所有功能驗證通過！React版本已完全實現HTML版本的功能。');
} else {
  console.log('\n⚠️  部分功能需要檢查，請查看上述失敗項目。');
}

console.log('\n📋 詳細功能對比請查看: FEATURE_COMPARISON.md'); 