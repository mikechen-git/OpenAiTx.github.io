import { useState, useEffect, useCallback } from "react";

interface TranslationData {
    [key: string]: any;
}

interface AllTranslations {
    [locale: string]: TranslationData;
}

const STORAGE_KEY = "preferred-language";
const DEFAULT_LOCALE = "en";
const AVAILABLE_LOCALES = ["en", "zh-TW", "zh-CN", "ja", "ko", "es", "fr", "de", "it", "pt", "ru", "ar", "th", "vi", "tr", "pl", "nl"];

export function useTranslation() {
    const [locale, setLocale] = useState<string>(DEFAULT_LOCALE);
    const [allTranslations, setAllTranslations] = useState<AllTranslations>({});
    const [loading, setLoading] = useState(true);
    const [isClient, setIsClient] = useState(false);
    const [forceUpdate, setForceUpdate] = useState(0);

    // 確保在客戶端環境
    useEffect(() => {
        setIsClient(true);
    }, []);

    // 預載入所有翻譯文件
    useEffect(() => {
        if (!isClient) return;

        const loadAllTranslations = async () => {
            try {
                setLoading(true);
                const translations: AllTranslations = {};

                // 並行載入所有語言文件
                const loadPromises = AVAILABLE_LOCALES.map(async (localeCode) => {
                    try {
                        const response = await fetch(`/locales/${localeCode}.json`);
                        if (response.ok) {
                            const data = await response.json();
                            translations[localeCode] = data;
                        } else {
                            console.warn(`Failed to load translation for ${localeCode}`);
                        }
                    } catch (error) {
                        console.error(`Error loading translation for ${localeCode}:`, error);
                    }
                });

                await Promise.all(loadPromises);
                setAllTranslations(translations);

                // 設定初始語言（只在客戶端執行）
                let initialLocale = DEFAULT_LOCALE;

                try {
                    const savedLocale = localStorage.getItem(STORAGE_KEY);
                    const browserLocale = navigator.language;

                    if (savedLocale && AVAILABLE_LOCALES.includes(savedLocale)) {
                        initialLocale = savedLocale;
                    } else if (AVAILABLE_LOCALES.includes(browserLocale)) {
                        initialLocale = browserLocale;
                    } else if (browserLocale.includes("-")) {
                        const shortLocale = browserLocale.split("-")[0];
                        const matchedLocale = AVAILABLE_LOCALES.find((loc) => loc.startsWith(shortLocale));
                        if (matchedLocale) {
                            initialLocale = matchedLocale;
                        }
                    }
                } catch (error) {
                    console.warn("Error accessing localStorage or navigator:", error);
                }

                console.log("Setting initial locale to:", initialLocale);
                setLocale(initialLocale);
            } catch (error) {
                console.error("Failed to load translations:", error);
            } finally {
                setLoading(false);
            }
        };

        loadAllTranslations();
    }, [isClient]);

    const t = useCallback(
        (key: string, fallback?: string): string => {
            if (!isClient || loading) {
                return fallback || key;
            }

            const currentTranslations = allTranslations[locale] || allTranslations[DEFAULT_LOCALE] || {};
            const keys = key.split(".");
            let value: any = currentTranslations;

            for (const k of keys) {
                if (value && typeof value === "object" && k in value) {
                    value = value[k];
                } else {
                    // 如果當前語言沒有該翻譯，嘗試使用英文作為後備
                    if (locale !== DEFAULT_LOCALE) {
                        const fallbackTranslations = allTranslations[DEFAULT_LOCALE] || {};
                        let fallbackValue: any = fallbackTranslations;
                        const fallbackKeys = key.split(".");

                        for (const fk of fallbackKeys) {
                            if (fallbackValue && typeof fallbackValue === "object" && fk in fallbackValue) {
                                fallbackValue = fallbackValue[fk];
                            } else {
                                return fallback || key;
                            }
                        }

                        return typeof fallbackValue === "string" ? fallbackValue : fallback || key;
                    }
                    return fallback || key;
                }
            }

            return typeof value === "string" ? value : fallback || key;
        },
        [isClient, loading, allTranslations, locale, forceUpdate]
    );

    const changeLanguage = useCallback(
        (newLocale: string) => {
            if (!isClient) return;

            console.log("Changing language from", locale, "to", newLocale);

            if (AVAILABLE_LOCALES.includes(newLocale) && newLocale !== locale) {
                setLocale(newLocale);
                setForceUpdate((prev) => prev + 1); // 強制重新渲染

                try {
                    localStorage.setItem(STORAGE_KEY, newLocale);
                    console.log("Language saved to localStorage:", newLocale);
                } catch (error) {
                    console.warn("Error saving to localStorage:", error);
                }
            }
        },
        [isClient, locale]
    );

    // 檢查是否已載入翻譯文件
    const isTranslationLoaded = useCallback(
        (localeCode: string) => {
            return !!allTranslations[localeCode];
        },
        [allTranslations]
    );

    // 獲取載入進度
    const getLoadingProgress = useCallback(() => {
        const loadedCount = Object.keys(allTranslations).length;
        const totalCount = AVAILABLE_LOCALES.length;
        return { loaded: loadedCount, total: totalCount, percentage: Math.round((loadedCount / totalCount) * 100) };
    }, [allTranslations]);

    return {
        t,
        locale,
        changeLanguage,
        loading: loading || !isClient,
        availableLocales: AVAILABLE_LOCALES,
        isTranslationLoaded,
        getLoadingProgress,
        allTranslations, // 可選：暴露所有翻譯數據供調試使用
    };
}
