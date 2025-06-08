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

    // Update GitHub repository link
    const githubRepoLink = document.getElementById('githubRepoLink');
    if (githubRepoLink && user && project) {
        githubRepoLink.href = `https://github.com/${user}/${project}`;
        githubRepoLink.textContent = `${user}/${project}`;
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
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(markdown => {
            // Render the markdown
            const content = marked.parse(markdown);
            document.getElementById('content').innerHTML = content;

            // Apply syntax highlighting to all code blocks
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });

            // Update page title with the first h1 from the markdown
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = content;
            const firstH1 = tempDiv.querySelector('h1');
            if (firstH1) {
                document.title = `${firstH1.textContent} - Open AI Tx`;
            }
        })
        .catch(error => {
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
        });
}); 