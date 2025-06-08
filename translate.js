// Configuration
const CONFIG_KEY = 'openai_tx_config';
const LANGUAGES = [
    // Asia
    { lang: "zh-CN", name: "Simplified Chinese", native: "简体中文" },
    { lang: "zh-TW", name: "Traditional Chinese", native: "繁體中文" },
    { lang: "ja", name: "Japanese", native: "日本語" },
    { lang: "ko", name: "Korean", native: "한국어" },
    { lang: "hi", name: "Hindi", native: "हिन्दी" },
    { lang: "th", name: "Thai", native: "ไทย" },
    
    // EU
    { lang: "en", name: "English", native: "English" },
    { lang: "fr", name: "French", native: "Français" },
    { lang: "de", name: "German", native: "Deutsch" },
    { lang: "es", name: "Spanish", native: "Español" },
    { lang: "it", name: "Italian", native: "Italiano" },
    { lang: "ru", name: "Russian", native: "Русский" },
    { lang: "pt", name: "Portuguese", native: "Português" },
    { lang: "nl", name: "Dutch", native: "Nederlands" },
    { lang: "pl", name: "Polish", native: "Polski" },
    
    // Middle Eastern
    { lang: "ar", name: "Arabic", native: "العربية" },
    { lang: "fa", name: "Persian", native: "فارسی" },
    { lang: "tr", name: "Turkish", native: "Türkçe" },
    
    // Other
    { lang: "vi", name: "Vietnamese", native: "Tiếng Việt" },
    { lang: "id", name: "Indonesian", native: "Bahasa Indonesia" }
];

// State
let config = {
    githubToken: '',
    openAiKey: '',
    openAiEndpoint: ''
};

// DOM Elements
const configForm = document.getElementById('configForm');
const searchForm = document.getElementById('searchForm');
const projectsList = document.getElementById('projectsList');
const translationModal = new bootstrap.Modal(document.getElementById('translationModal'));
const translationProgress = document.getElementById('translationProgress');
const translationResults = document.getElementById('translationResults');

// Load saved configuration
function loadConfig() {
    const savedConfig = localStorage.getItem(CONFIG_KEY);
    if (savedConfig) {
        config = JSON.parse(savedConfig);
        document.getElementById('githubToken').value = config.githubToken;
        document.getElementById('openAiKey').value = config.openAiKey;
        document.getElementById('openAiEndpoint').value = config.openAiEndpoint;
    }
}

// Save configuration
configForm.addEventListener('submit', (e) => {
    e.preventDefault();
    config = {
        githubToken: document.getElementById('githubToken').value,
        openAiKey: document.getElementById('openAiKey').value,
        openAiEndpoint: document.getElementById('openAiEndpoint').value
    };
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
    alert('Configuration saved!');
});

// Search GitHub projects
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!config.githubToken) {
        alert('Please save your GitHub token first!');
        return;
    }

    const minStars = document.getElementById('minStars').value;
    const daysAgo = document.getElementById('daysAgo').value;
    const perPage = document.getElementById('perPage').value;

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - daysAgo);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 2);

    const query = `q=created:${startDate.toISOString().split('T')[0]}..${endDate.toISOString().split('T')[0]} stars:>=${minStars} fork:false&sort=updated&order=desc&per_page=${perPage}`;

    try {
        const response = await fetch(`https://api.github.com/search/repositories?${query}`, {
            headers: {
                'Authorization': `Bearer ${config.githubToken}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (response.status === 403) {
            throw new Error('Rate limit exceeded. Please try again later.');
        }

        const data = await response.json();
        displayProjects(data.items);
    } catch (error) {
        alert(error.message);
    }
});

// Display projects in the list
function displayProjects(projects) {
    projectsList.innerHTML = '';
    projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'list-group-item';
        item.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h5 class="mb-1">
                        <a href="${project.html_url}" target="_blank">${project.full_name}</a>
                        <span class="stars ms-2">⭐ ${project.stargazers_count}</span>
                    </h5>
                    <p class="mb-1 text-muted">${project.description || 'No description'}</p>
                </div>
                <button class="btn btn-primary translate-btn" data-repo="${project.full_name}">
                    Translate README
                </button>
            </div>
        `;
        projectsList.appendChild(item);
    });

    // Add event listeners to translate buttons
    document.querySelectorAll('.translate-btn').forEach(btn => {
        btn.addEventListener('click', () => translateProject(btn.dataset.repo));
    });
}

// Translate project README
async function translateProject(repoFullName) {
    if (!config.openAiKey || !config.openAiEndpoint) {
        alert('Please save your OpenAI configuration first!');
        return;
    }

    translationModal.show();
    translationProgress.innerHTML = '';
    translationResults.innerHTML = '';

    try {
        // Get README content
        const readmeResponse = await fetch(`https://api.github.com/repos/${repoFullName}/readme`, {
            headers: {
                'Authorization': `Bearer ${config.githubToken}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!readmeResponse.ok) {
            throw new Error('Failed to fetch README');
        }

        const readmeData = await readmeResponse.json();
        const readmeContent = atob(readmeData.content);
        const blobUrl = readmeData.html_url.replace('/blob/', '/raw/');

        // Translate for each language
        for (const lang of LANGUAGES) {
            const progressItem = document.createElement('div');
            progressItem.className = 'translation-progress';
            progressItem.innerHTML = `
                <div class="d-flex align-items-center">
                    <div class="loading-spinner me-2"></div>
                    <span>Translating to ${lang.native}...</span>
                </div>
            `;
            translationProgress.appendChild(progressItem);

            try {
                const { translatedText, usage } = await translateText(
                    readmeContent,
                    `Translate the following technical document into ${lang.name}, preserving the original Markdown format. Relative paths in markdown, please complete with ${blobUrl}:`
                );

                progressItem.innerHTML = `
                    <div class="d-flex justify-content-between align-items-center">
                        <span>✅ Translated to ${lang.native}</span>
                        <span class="token-usage">
                            Tokens: ${usage.total_tokens} (Prompt: ${usage.prompt_tokens}, Completion: ${usage.completion_tokens})
                        </span>
                    </div>
                `;

                const resultDiv = document.createElement('div');
                resultDiv.className = 'translation-result';
                resultDiv.innerHTML = `
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="language-badge">${lang.native}</span>
                        <button class="btn btn-sm btn-outline-primary copy-btn" data-content="${encodeURIComponent(translatedText)}">
                            Copy to Clipboard
                        </button>
                    </div>
                    <pre>${escapeHtml(translatedText)}</pre>
                `;
                translationResults.appendChild(resultDiv);

                // Add copy button functionality
                resultDiv.querySelector('.copy-btn').addEventListener('click', (e) => {
                    const content = decodeURIComponent(e.target.dataset.content);
                    navigator.clipboard.writeText(content);
                    e.target.textContent = 'Copied!';
                    setTimeout(() => {
                        e.target.textContent = 'Copy to Clipboard';
                    }, 2000);
                });

            } catch (error) {
                progressItem.innerHTML = `
                    <div class="text-danger">
                        ❌ Failed to translate to ${lang.native}: ${error.message}
                    </div>
                `;
            }
        }
    } catch (error) {
        translationProgress.innerHTML = `
            <div class="alert alert-danger">
                Error: ${error.message}
            </div>
        `;
    }
}

// Translate text using Azure OpenAI
async function translateText(text, instruction) {
    const response = await fetch(config.openAiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': config.openAiKey
        },
        body: JSON.stringify({
            messages: [
                {
                    role: "system",
                    content: "You are a professional translation assistant, specializing in the translation of technical documents. Please don't add your remark or thinking content."
                },
                {
                    role: "user",
                    content: `${instruction}\n\n${text}`
                }
            ],
            temperature: 0.7,
            top_p: 0.95,
            frequency_penalty: 0,
            presence_penalty: 0,
            max_tokens: 32768
        })
    });

    if (!response.ok) {
        throw new Error(`Translation failed: ${response.statusText}`);
    }

    const data = await response.json();
    return {
        translatedText: data.choices[0].message.content,
        usage: data.usage
    };
}

// Helper function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize
loadConfig(); 