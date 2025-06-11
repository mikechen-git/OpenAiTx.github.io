document.addEventListener('DOMContentLoaded', function() {
    // Add translations object
    const translations = {
        'en': {
            'missingParams': 'Missing Parameters',
            'missingParamsDesc': 'Please provide both \'user\' and \'project\' parameters in the URL.',
            'missingParamsExample': 'Example: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'Error Loading Content',
            'errorLoadingDesc': 'Failed to load the markdown content. Please check:',
            'errorLoadingList1': 'The URL parameters are correct',
            'errorLoadingList2': 'The file exists at the specified path',
            'errorLoadingList3': 'You have an active internet connection',
            'errorDetails': 'Error details:',
            'repoNotFound': 'Repository Not Found',
            'repoNotFoundDesc': 'This GitHub repository does not exist. Please check the repository name and try again.',
            'docNotFound': 'Project Documentation Not Found',
            'docNotFoundDesc': 'The documentation for this project has not been indexed yet. Click the button below to submit for indexing.',
            'submit': 'Submit',
            'submissionCompleted': 'Submission completed',
            'submissionFailed': 'Submission failed: '
        },
        'zh-CN': {
            'missingParams': '缺少参数',
            'missingParamsDesc': '请在URL中提供\'user\'和\'project\'参数。',
            'missingParamsExample': '示例: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': '加载内容时出错',
            'errorLoadingDesc': '加载markdown内容失败。请检查：',
            'errorLoadingList1': 'URL参数正确',
            'errorLoadingList2': '指定路径的文件存在',
            'errorLoadingList3': '您有活跃的互联网连接',
            'errorDetails': '错误详情：',
            'repoNotFound': '仓库未找到',
            'repoNotFoundDesc': '此 GitHub 仓库不存在。请检查仓库名称后重试。',
            'docNotFound': '项目文档未找到',
            'docNotFoundDesc': '此项目的文档尚未被索引。点击下方按钮提交索引。',
            'submit': '提交',
            'submissionCompleted': '提交完成',
            'submissionFailed': '提交失败：'
        },
        'zh-TW': {
            'missingParams': '缺少參數',
            'missingParamsDesc': '請在URL中提供\'user\'和\'project\'參數。',
            'missingParamsExample': '示例: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': '載入內容時出錯',
            'errorLoadingDesc': '載入markdown內容失敗。請檢查：',
            'errorLoadingList1': 'URL參數正確',
            'errorLoadingList2': '指定路徑的檔案存在',
            'errorLoadingList3': '您有活躍的網際網路連線',
            'errorDetails': '錯誤詳情：',
            'repoNotFound': '倉庫未找到',
            'repoNotFoundDesc': '此 GitHub 倉庫不存在。請檢查倉庫名稱後重試。',
            'docNotFound': '項目文檔未找到',
            'docNotFoundDesc': '此項目的文檔尚未被索引。點擊下方按鈕提交索引。',
            'submit': '提交',
            'submissionCompleted': '提交完成',
            'submissionFailed': '提交失敗：'
        },
        'ja': {
            'missingParams': 'パラメータが不足しています',
            'missingParamsDesc': 'URLに\'user\'と\'project\'パラメータを提供してください。',
            'missingParamsExample': '例: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': 'コンテンツの読み込みエラー',
            'errorLoadingDesc': 'markdownコンテンツの読み込みに失敗しました。以下を確認してください：',
            'errorLoadingList1': 'URLパラメータが正しい',
            'errorLoadingList2': '指定されたパスにファイルが存在する',
            'errorLoadingList3': 'アクティブなインターネット接続がある',
            'errorDetails': 'エラー詳細：',
            'repoNotFound': 'リポジトリが見つかりません',
            'repoNotFoundDesc': 'この GitHub リポジトリは存在しません。リポジトリ名を確認して再試行してください。',
            'docNotFound': 'プロジェクトドキュメントが見つかりません',
            'docNotFoundDesc': 'このプロジェクトのドキュメントはまだインデックスされていません。下のボタンをクリックしてインデックスを提出してください。',
            'submit': '提出',
            'submissionCompleted': '提出完了',
            'submissionFailed': '提出失敗：'
        },
        'ko': {
            'missingParams': '매개변수 누락',
            'missingParamsDesc': 'URL에 \'user\'와 \'project\' 매개변수를 제공하세요.',
            'missingParamsExample': '예: view.html?user=mini-software&project=MiniExcel&lang=zh-CN',
            'errorLoading': '콘텐츠 로딩 오류',
            'errorLoadingDesc': 'markdown 콘텐츠 로딩에 실패했습니다. 다음을 확인하세요:',
            'errorLoadingList1': 'URL 매개변수가 올바름',
            'errorLoadingList2': '지정된 경로에 파일이 존재함',
            'errorLoadingList3': '활성 인터넷 연결이 있음',
            'errorDetails': '오류 세부사항:',
            'repoNotFound': '저장소를 찾을 수 없습니다',
            'repoNotFoundDesc': '이 GitHub 저장소가 존재하지 않습니다. 저장소 이름을 확인하고 다시 시도하세요.',
            'docNotFound': '프로젝트 문서를 찾을 수 없습니다',
            'docNotFoundDesc': '이 프로젝트의 문서가 아직 인덱싱되지 않았습니다. 아래 버튼을 클릭하여 인덱싱을 제출하세요.',
            'submit': '제출',
            'submissionCompleted': '제출 완료',
            'submissionFailed': '제출 실패: '
        }
    };

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

    // Get translations for current language
    const t = translations[lang] || translations['en'];

    // Update GitHub repository link
    const githubRepoLink = document.getElementById('githubRepoLink');
    if (githubRepoLink && user && project) {
        githubRepoLink.href = `https://github.com/${user}/${project}`;
        githubRepoLink.textContent = `${user}/${project}`;
    }

    // Generate language badges
    const languageBadges = document.getElementById('languageBadges');
    if (languageBadges && user && project) {
        const languages = [
            { code: 'en', name: 'EN' },
            { code: 'zh-CN', name: '简中' },
            { code: 'zh-TW', name: '繁中' },
            { code: 'ja', name: '日本語' },
            { code: 'ko', name: '한국어' },
            { code: 'th', name: 'ไทย' },
            { code: 'fr', name: 'Français' },
            { code: 'de', name: 'Deutsch' },
            { code: 'es', name: 'Español' },
            { code: 'it', name: 'Italiano' },
            { code: 'ru', name: 'Русский' },
            { code: 'pt', name: 'Português' },
            { code: 'nl', name: 'Nederlands' },
            { code: 'pl', name: 'Polski' },
            { code: 'ar', name: 'العربية' },
            { code: 'tr', name: 'Türkçe' },
            { code: 'vi', name: 'Tiếng Việt' }
        ];

        const badges = languages.map(lang =>
            `<a href="https://openaitx.github.io/view.html?user=${user}&project=${project}&lang=${lang.code}"><img src="https://img.shields.io/badge/${lang.name}-white" alt="version"></a>`
        ).join(' ');

        languageBadges.innerHTML = badges;
    }

    // Validate required parameters
    if (!user || !project) {
        document.getElementById('content').innerHTML = `
            <div class="error">
                <h2>${t.missingParams}</h2>
                <p>${t.missingParamsDesc}</p>
                <p>${t.missingParamsExample}</p>
            </div>
        `;
        return;
    }

    // Check if GitHub repository exists first
    const githubApiUrl = `https://api.github.com/repos/${user}/${project}`;
    
    fetch(githubApiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.message === "Not Found") {
                // Repository doesn't exist
                document.getElementById('content').innerHTML = `
                    <div class="error">
                        <h2>${t.repoNotFound}</h2>
                        <p>${t.repoNotFoundDesc}</p>
                    </div>
                `;
                return;
            }

            // Repository exists, now check if README exists
            const apiUrl = `https://raw.githubusercontent.com/OpenAiTx/OpenAiTx/refs/heads/main/projects/${user}/${project}/README-${lang}.md`;
            
            return fetch(apiUrl);
        })
        .then(response => {
            if (!response) return; // Repository doesn't exist, already handled

            if (response.status === 404) {
                // README doesn't exist, show submit button
                const submitButton = document.createElement('button');
                submitButton.textContent = t.submit;
                submitButton.className = 'submit-button';
                submitButton.onclick = async () => {
                    try {
                        const response = await fetch('https://openaitx.com/api/submit-project', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                project: `https://github.com/${user}/${project}`
                            })
                        });

                        const data = await response.json();

                        if (!response.ok) {
                            throw new Error(data.error || `HTTP error! status: ${response.status}`);
                        }

                        alert(t.submissionCompleted);
                    } catch (error) {
                        alert(`${t.submissionFailed}${error.message}`);
                    }
                };

                document.getElementById('content').innerHTML = `
                    <div class="error">
                        <h2>${t.docNotFound}</h2>
                        <p>${t.docNotFoundDesc}</p>
                    </div>
                `;
                document.getElementById('content').appendChild(submitButton);
                return;
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.text();
        })
        .then(markdown => {
            if (!markdown) return; // Already handled above

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
                    <h2>${t.errorLoading}</h2>
                    <p>${t.errorLoadingDesc}</p>
                    <ul>
                        <li>${t.errorLoadingList1}</li>
                        <li>${t.errorLoadingList2}</li>
                        <li>${t.errorLoadingList3}</li>
                    </ul>
                    <p>${t.errorDetails} ${error.message}</p>
                </div>
            `;
        });
}); 