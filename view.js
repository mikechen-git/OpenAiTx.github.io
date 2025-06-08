document.addEventListener('DOMContentLoaded', function() {
    // Configure marked options
    marked.setOptions({
        highlight: function(code, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(code, { language: lang }).value;
                } catch (e) {
                    console.error(e);
                }
            }
            return hljs.highlightAuto(code).value;
        },
        breaks: true,
        gfm: true
    });

    // 在 marked 配置后添加
    marked.use({
        renderer: {
            heading(text, level) {
                // 生成更友好的 ID，保留中文和特殊字符
                const escapedText = text
                    .toLowerCase()
                    .replace(/[^\u4e00-\u9fa5a-z0-9]+/g, '-') // 保留中文、英文和数字
                    .replace(/^-+|-+$/g, '') // 移除首尾的连字符
                    .replace(/-+/g, '-'); // 将多个连字符替换为单个
                
                // 确保 ID 唯一性
                const baseId = escapedText;
                let id = baseId;
                let counter = 1;
                while (document.getElementById(id)) {
                    id = `${baseId}-${counter++}`;
                }
                
                return `
                    <h${level} id="${id}" class="markdown-heading">
                        ${text}
                    </h${level}>
                `;
            }
        }
    });

    // Get URL parameters while preserving case
    const searchParams = window.location.search.substring(1).split('&');
    const params = {};
    searchParams.forEach(param => {
        const [key, value] = param.split('=');
        if (key && value) {
            params[key] = decodeURIComponent(value);
        }
    });

    const user = params['user'];
    const project = params['project'];
    const lang = params['lang'] || 'en'; // Default to English if no language specified

    // Update GitHub repository link immediately
    const githubRepoLink = document.getElementById('githubRepoLink');
    if (githubRepoLink && user && project) {
        const repoUrl = `https://github.com/${user}/${project}`;
        githubRepoLink.href = repoUrl;
        githubRepoLink.textContent = `${user}/${project}`;
    } else {
        // Hide the link container if no valid parameters
        document.querySelector('.header .links').style.display = 'none';
    }

    // Validate required parameters
    if (!user || !project) {
        document.getElementById('content').innerHTML = `
            <div class="error">
                <h2>Missing Parameters</h2>
                <p>Please provide both 'user' and 'project' parameters in the URL.</p>
                <p>Example: view.html?user=mini-software&project=MiniExcel&lang=zh-CN</p>
            </div>
        `;
        return;
    }

    // Construct the API URL
    const apiUrl = `https://raw.githubusercontent.com/OpenAiTx/OpenAiTx/refs/heads/main/projects/${user}/${project}/README-${lang}.md`;

    // Fetch and render the markdown
    fetchAndRenderMarkdown();
});

// 优化目录生成函数
function generateTOC() {
    const tocList = document.getElementById('toc-list');
    const headings = document.querySelectorAll('.markdown-body .markdown-heading');
    
    // 清空现有目录
    tocList.innerHTML = '';
    
    if (headings.length === 0) {
        tocList.parentElement.style.display = 'none';
        return;
    }

    // 显示目录容器
    tocList.parentElement.style.display = 'block';
    
    // 创建目录树结构
    const tocTree = [];
    let currentLevel = 0;
    let currentParent = tocTree;
    const parentStack = [tocTree];

    headings.forEach(heading => {
        const level = parseInt(heading.tagName[1]);
        const text = heading.textContent.trim();
        const id = heading.id;
        
        // 创建目录项
        const tocItem = {
            level,
            text,
            id,
            children: []
        };

        // 调整层级
        while (currentLevel < level - 1) {
            const newParent = parentStack[parentStack.length - 1];
            if (newParent.children.length > 0) {
                currentParent = newParent.children[newParent.children.length - 1].children;
                parentStack.push(currentParent);
            }
            currentLevel++;
        }
        while (currentLevel > level - 1) {
            parentStack.pop();
            currentParent = parentStack[parentStack.length - 1];
            currentLevel--;
        }

        // 添加到当前层级
        currentParent.push(tocItem);
    });

    // 递归生成目录 HTML
    function generateTOCHTML(items, level = 0) {
        if (items.length === 0) return '';
        
        const ul = document.createElement('ul');
        items.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = item.text;
            a.href = `#${item.id}`;
            a.className = `h${item.level}`;
            
            // 添加点击事件
            a.addEventListener('click', (e) => {
                e.preventDefault();
                const targetHeading = document.getElementById(item.id);
                if (targetHeading) {
                    // 计算目标位置，考虑固定头部的高度
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetHeading.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    // 平滑滚动
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // 更新 URL hash
                    history.pushState(null, null, a.href);
                }
            });
            
            li.appendChild(a);
            
            // 递归处理子项
            if (item.children && item.children.length > 0) {
                const childUl = generateTOCHTML(item.children, level + 1);
                li.appendChild(childUl);
            }
            
            ul.appendChild(li);
        });
        
        return ul;
    }

    // 生成并添加目录 HTML
    const tocHTML = generateTOCHTML(tocTree);
    tocList.appendChild(tocHTML);
}

// 优化滚动监听函数
function updateActiveTOCLink() {
    const headings = document.querySelectorAll('.markdown-body .markdown-heading');
    const tocLinks = document.querySelectorAll('.toc a');
    
    if (headings.length === 0 || tocLinks.length === 0) return;
    
    // 移除所有活动状态
    tocLinks.forEach(link => link.classList.remove('active'));
    
    // 获取视口位置和头部高度
    const headerHeight = document.querySelector('.header').offsetHeight;
    const scrollPosition = window.scrollY + headerHeight + 10; // 添加一些偏移量
    
    // 找到当前视口中的标题
    let currentHeading = null;
    let minDistance = Infinity;
    
    headings.forEach(heading => {
        const headingTop = heading.offsetTop;
        const distance = Math.abs(scrollPosition - headingTop);
        
        if (distance < minDistance) {
            minDistance = distance;
            currentHeading = heading;
        }
    });
    
    // 设置活动链接
    if (currentHeading) {
        const activeLink = document.querySelector(`.toc a[href="#${currentHeading.id}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
            
            // 确保活动链接在目录中可见
            const tocContainer = document.querySelector('.toc-container');
            const linkRect = activeLink.getBoundingClientRect();
            const containerRect = tocContainer.getBoundingClientRect();
            
            if (linkRect.top < containerRect.top) {
                tocContainer.scrollTop += linkRect.top - containerRect.top - 10;
            } else if (linkRect.bottom > containerRect.bottom) {
                tocContainer.scrollTop += linkRect.bottom - containerRect.bottom + 10;
            }
        }
    }
}

// 修改 fetchAndRenderMarkdown 函数
async function fetchAndRenderMarkdown() {
    // ... existing fetch and render code ...

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdown = await response.text();
        
        // 渲染 Markdown
        document.getElementById('content').innerHTML = marked.parse(markdown);
        
        // 应用代码高亮
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
        
        // 生成目录
        generateTOC();
        
        // 添加滚动监听
        window.addEventListener('scroll', updateActiveTOCLink);
        // 初始更新一次活动链接
        updateActiveTOCLink();
        
        // 更新页面标题
        const firstH1 = document.querySelector('.markdown-body h1');
        if (firstH1) {
            document.title = `${firstH1.textContent} - Open AI Tx`;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('content').innerHTML = `
            <div class="error">
                <h2>Error Loading Content</h2>
                <p>Failed to load the markdown content. Please check:</p>
                <ul>
                    <li>The URL parameters are correct</li>
                    <li>The file exists at the specified path</li>
                    <li>You have an active internet connection</li>
                </ul>
                <p>Error details: ${error.message}</p>
            </div>
        `;
    }
} 