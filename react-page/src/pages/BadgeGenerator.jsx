import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

/* global URL, URLSearchParams */

// LanguageLinks 組件 - 適應深色主題
const LanguageLinks = () => {
    const languages = [
        "English",
        "简体中文",
        "繁體中文",
        "日本語",
        "한국어",
        "हिन्दी",
        "ไทย",
        "Français",
        "Deutsch",
        "Español",
        "Italiano",
        "Русский",
        "Português",
        "Nederlands",
        "Polski",
        "فارسی",
        "العربية",
        "Türkçe",
        "Tiếng Việt",
        "Bahasa Indonesia",
    ];

    return (
        <div className="text-sm mb-4 leading-relaxed">
            {languages.map((lang, index) => (
                <span key={lang}>
                    <a href="#" className="hover:underline transition-all no-underline" style={{ color: "#0366d6" }}>
                        {lang}
                    </a>
                    {index < languages.length - 1 && <span> | </span>}
                </span>
            ))}
        </div>
    );
};

const BadgeGenerator = () => {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const [userOrOrg, setUserOrOrg] = useState("");
    const [project, setProject] = useState("");
    const [copiedItem, setCopiedItem] = useState(null);
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    const [repoNotFound, setRepoNotFound] = useState(false);
    const [repoUrl, setRepoUrl] = useState("");
    const [urlError, setUrlError] = useState("");

    const style1Languages = [
        { code: "en", name: "EN" },
        { code: "zh-CN", name: "简中" },
        { code: "zh-TW", name: "繁中" },
        { code: "ja", name: "日本語" },
        { code: "ko", name: "한국어" },
        { code: "th", name: "ไทย" },
        { code: "fr", name: "Français" },
        { code: "de", name: "Deutsch" },
        { code: "es", name: "Español" },
        { code: "it", name: "Italiano" },
        { code: "ru", name: "Русский" },
        { code: "pt", name: "Português" },
        { code: "nl", name: "Nederlands" },
        { code: "pl", name: "Polski" },
        { code: "ar", name: "العربية" },
        { code: "tr", name: "Türkçe" },
        { code: "vi", name: "Tiếng Việt" },
    ];

    const style2Languages = [
        { code: "en", name: "English" },
        { code: "zh-CN", name: "简体中文" },
        { code: "zh-TW", name: "繁體中文" },
        { code: "ja", name: "日本語" },
        { code: "ko", name: "한국어" },
        { code: "hi", name: "हिन्दी" },
        { code: "th", name: "ไทย" },
        { code: "fr", name: "Français" },
        { code: "de", name: "Deutsch" },
        { code: "es", name: "Español" },
        { code: "it", name: "Italiano" },
        { code: "ru", name: "Русский" },
        { code: "pt", name: "Português" },
        { code: "nl", name: "Nederlands" },
        { code: "pl", name: "Polski" },
        { code: "ar", name: "العربية" },
        { code: "fa", name: "فارسی" },
        { code: "tr", name: "Türkçe" },
        { code: "vi", name: "Tiếng Việt" },
        { code: "id", name: "Bahasa Indonesia" },
    ];

    useEffect(() => {
        // 修正URL路徑，確保以斜線結尾
        const currentPath = window.location.pathname;
        const basePath = "/OpenAiTx.github.io";

        if (currentPath === basePath) {
            const newPath = `${basePath}/`;
            window.history.replaceState({}, "", newPath + window.location.search);
        }

        // Get URL parameters on load
        const userParam = searchParams.get("userOrOrg");
        const projectParam = searchParams.get("project");

        if (userParam) setUserOrOrg(userParam);
        if (projectParam) setProject(projectParam);

        // Check project status if both parameters exist
        if (userParam && projectParam) {
            checkProjectStatus(userParam, projectParam);
        }
    }, [searchParams]);

    const checkProjectStatus = async (user, proj) => {
        try {
            // Check if GitHub repository exists
            const githubApiUrl = `https://api.github.com/repos/${user}/${proj}`;
            const repoResponse = await fetch(githubApiUrl);
            const repoData = await repoResponse.json();

            if (repoData.message === "Not Found") {
                setRepoNotFound(true);
                return;
            }

            // Check if project is in OpenAiTx repository
            const apiUrl = `https://raw.githubusercontent.com/OpenAiTx/OpenAiTx/refs/heads/main/projects/${user}/${proj}/README-en.md`;
            const response = await fetch(apiUrl);

            if (response.status === 404) {
                setShowSubmitButton(true);
            }
        } catch (error) {
            console.error("Error checking project status:", error);
        }
    };

    const generateStyle1Html = () => {
        if (!userOrOrg || !project) return "";

        const badges = style1Languages.map((lang) => `<a href="https://openaitx.github.io/view?user=${userOrOrg}&project=${project}&lang=${lang.code}"><img src="https://img.shields.io/badge/${lang.name}-white" alt="version"></a>`).join("");

        return `<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px;">${badges}</div>`;
    };

    const generateStyle2Markdown = () => {
        if (!userOrOrg || !project) return "";

        return style2Languages.map((lang) => `[${lang.name}](https://openaitx.github.io/view?user=${userOrOrg}&project=${project}&lang=${lang.code})`).join(" | ");
    };

    const copyToClipboard = async (text, itemId) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedItem(itemId);
            setTimeout(() => setCopiedItem(null), 2000);
            alert(t("badge.alertCopied"));
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    const submitProject = async () => {
        try {
            const response = await fetch("https://openaitx.com/api/submit-project", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    project: `https://github.com/${userOrOrg}/${project}`,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || `HTTP error! status: ${response.status}`);
            }

            alert(t("badge.alertSubmissionCompleted"));
        } catch (error) {
            alert(`${t("badge.alertSubmissionFailed")}${error.message}`);
        }
    };

    // 解析GitHub URL
    const parseGitHubUrl = (url) => {
        try {
            const urlObj = new URL(url);
            if (urlObj.hostname !== "github.com") {
                return { error: t("badge.invalidGitHubUrl") };
            }

            const pathParts = urlObj.pathname.split("/").filter(Boolean);
            if (pathParts.length < 2) {
                return { error: t("badge.invalidRepoUrl") };
            }

            return {
                userOrOrg: pathParts[0],
                project: pathParts[1],
            };
        } catch {
            return { error: t("badge.invalidUrl") };
        }
    };

    // 處理URL提交
    const handleUrlSubmit = async () => {
        setUrlError("");
        const result = parseGitHubUrl(repoUrl);

        if (result.error) {
            setUrlError(result.error);
            return;
        }

        // 更新URL參數，確保路徑正確
        const newParams = new URLSearchParams();
        newParams.set("userOrOrg", result.userOrOrg);
        newParams.set("project", result.project);

        // 使用當前路徑，確保包含斜線
        const currentPath = window.location.pathname.endsWith("/") ? window.location.pathname : `${window.location.pathname}/`;

        // 更新URL，保持當前路徑並添加參數
        window.history.pushState({}, "", `${currentPath}?${newParams.toString()}`);

        // 更新狀態
        setUserOrOrg(result.userOrOrg);
        setProject(result.project);

        // 檢查項目狀態
        await checkProjectStatus(result.userOrOrg, result.project);
    };

    // 動畫配置
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
            },
        },
    };

    return (
        <motion.div className="max-w-4xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
            {/* Header */}
            <motion.div className="text-center mb-8" variants={itemVariants}>
                <motion.h1 className="text-2xl font-bold text-foreground mb-4" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                    {t("badge.title")}
                </motion.h1>
                <motion.a
                    href="https://github.com/OpenAiTx/OpenAiTx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2 py-1 text-sm rounded-md bg-[#393939] text-white hover:bg-[#121212] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                </motion.a>
            </motion.div>

            {/* Hidden inputs for URL parameters */}
            <input type="hidden" value={userOrOrg} />
            <input type="hidden" value={project} />

            {/* Repository Not Found Message */}
            {repoNotFound && (
                <motion.div className="text-center p-6 mb-6 bg-muted/30 rounded-lg border border-border" variants={itemVariants} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 100 }}>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{t("badge.repoNotFound")}</h3>
                    <p className="text-muted-foreground">{t("badge.repoNotFoundDesc")}</p>
                </motion.div>
            )}

            {/* GitHub URL Input */}
            <motion.div className="text-center p-6 mb-6 bg-muted/30 rounded-lg border border-border" variants={itemVariants} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 100 }}>
                {!userOrOrg || !project ? (
                    <>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{t("badge.enterGitHubUrl")}</h3>
                        <p className="text-muted-foreground mb-4">{t("badge.enterGitHubUrlDesc")}</p>
                        <div className="flex gap-2 max-w-xl mx-auto">
                            <input
                                type="text"
                                value={repoUrl}
                                onChange={(e) => setRepoUrl(e.target.value)}
                                placeholder={t("badge.githubUrlPlaceholder")}
                                className="flex-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                            />
                            <motion.button onClick={handleUrlSubmit} className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                {t("badge.submit")}
                            </motion.button>
                        </div>
                        {urlError && (
                            <motion.p className="mt-2 text-sm text-destructive" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                                {urlError}
                            </motion.p>
                        )}
                    </>
                ) : (
                    <motion.button
                        onClick={() => {
                            setRepoUrl("");
                            setUserOrOrg("");
                            setProject("");
                        }}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t("badge.changeRepo")}
                    </motion.button>
                )}
            </motion.div>
            {!urlError && userOrOrg && project && (
                <motion.div className="my-4 flex gap-8 text-sm" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <div className="text-muted-foreground text-xl">
                        {t("badge.githubUser")}: <span className="text-foreground font-medium">{userOrOrg}</span>
                    </div>
                    <div className="text-muted-foreground text-xl">
                        {t("badge.projectName")}: <span className="text-foreground font-medium">{project}</span>
                    </div>
                </motion.div>
            )}

            {/* Submit Project Button */}
            {showSubmitButton && (
                <motion.div className="text-center p-6 mb-6 bg-muted/30 rounded-lg border border-border" variants={itemVariants} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 100 }}>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{t("badge.docNotFound")}</h3>
                    <p className="text-muted-foreground mb-4">{t("badge.docNotFoundDesc")}</p>
                    <motion.button onClick={submitProject} className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        {t("badge.submit")}
                    </motion.button>
                </motion.div>
            )}

            {/* Style Option 1 (HTML Badges) */}
            {!repoNotFound && userOrOrg && project && (
                <>
                    <motion.div className="border border-border p-5 mb-5 rounded-md bg-muted/70" variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <h2 className="text-xl font-semibold text-card-foreground mb-4">{t("badge.style1")}</h2>
                        <div className="bg-muted/30 p-4 mb-3 rounded text-center">
                            <div dangerouslySetInnerHTML={{ __html: generateStyle1Html() }} />
                        </div>
                        <motion.button
                            onClick={() => copyToClipboard(generateStyle1Html(), "style1")}
                            className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            {copiedItem === "style1" ? t("badge.copied") : t("badge.copyHtml")}
                        </motion.button>
                    </motion.div>

                    {/* Style Option 2 (Markdown Links) */}
                    <motion.div className="border border-border p-5 mb-5 rounded-md bg-muted/70" variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                        <h2 className="text-xl font-semibold text-card-foreground mb-4">{t("badge.style2")}</h2>
                        <LanguageLinks />
                        <div className="bg-muted/30 p-4 mb-3 rounded whitespace-pre-wrap break-all text-sm text-muted-foreground">{generateStyle2Markdown()}</div>
                        <motion.button
                            onClick={() => copyToClipboard(generateStyle2Markdown(), "style2")}
                            className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            {copiedItem === "style2" ? t("badge.copied") : t("badge.copyMarkdown")}
                        </motion.button>
                    </motion.div>
                </>
            )}

            {/* Support/Contribution Section */}
            <motion.div className="bg-muted/70 rounded-lg p-5 mb-5 border border-border" variants={itemVariants} whileHover={{ scale: 1.01 }}>
                <h2 className="text-lg font-semibold text-foreground mb-4">{t("badge.support")}</h2>
                <p className="text-muted-foreground mb-3 leading-relaxed">{t("badge.supportDesc")}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">{t("badge.supportSteps")}</p>
                <div className="bg-red-50 dark:bg-red-900 border border-border rounded p-3 text-muted-foreground">
                    <strong className="text-foreground">{t("badge.supportNote")}</strong>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default BadgeGenerator;
