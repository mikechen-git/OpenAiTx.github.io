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
                const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
                return `
                    <h${level} id="${escapedText}">
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

// 添加目录生成和滚动监听功能
function generateTOC() {
    const tocList = document.getElementById('toc-list');
    const headings = document.querySelectorAll('.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6');
    
    if (headings.length === 0) {
        tocList.parentElement.style.display = 'none';
        return;
    }

    const fragment = document.createDocumentFragment();
    headings.forEach(heading => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = heading.textContent;
        a.href = `#${heading.id}`;
        a.className = `h${heading.tagName[1]}`;
        
        a.addEventListener('click', (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth' });
            // 更新 URL hash
            history.pushState(null, null, a.href);
        });
        
        li.appendChild(a);
        fragment.appendChild(li);
    });
    
    tocList.appendChild(fragment);
}

function updateActiveTOCLink() {
    const headings = document.querySelectorAll('.markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5, .markdown-body h6');
    const tocLinks = document.querySelectorAll('.toc a');
    
    // 移除所有活动状态
    tocLinks.forEach(link => link.classList.remove('active'));
    
    // 找到当前视口中的标题
    let currentHeading = null;
    const scrollPosition = window.scrollY;
    
    headings.forEach(heading => {
        const headingTop = heading.offsetTop - 100; // 添加一些偏移量
        if (scrollPosition >= headingTop) {
            currentHeading = heading;
        }
    });
    
    // 设置活动链接
    if (currentHeading) {
        const activeLink = document.querySelector(`.toc a[href="#${currentHeading.id}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
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