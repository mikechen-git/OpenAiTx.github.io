import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';

interface IntlContextType {
  locale: string;
  changeLocale: (newLocale: string) => void;
  availableLocales: string[];
}

const IntlContext = createContext<IntlContextType | undefined>(undefined);

const AVAILABLE_LOCALES = ['en', 'zh-TW', 'zh-CN', 'ja', 'ko', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ar', 'th', 'vi', 'tr', 'pl', 'nl'];
const DEFAULT_LOCALE = 'en';
const STORAGE_KEY = 'preferred-language';

interface IntlProviderProps {
  children: ReactNode;
}

export function IntlProvider({ children }: IntlProviderProps) {
  const [locale, setLocale] = useState(DEFAULT_LOCALE);
  const [messages, setMessages] = useState({});
  const [isClient, setIsClient] = useState(false);
  const [forceRenderKey, setForceRenderKey] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // 設定初始語言
    let initialLocale = DEFAULT_LOCALE;
    try {
      const savedLocale = localStorage.getItem(STORAGE_KEY);
      const browserLocale = navigator.language;
      
      if (savedLocale && AVAILABLE_LOCALES.includes(savedLocale)) {
        initialLocale = savedLocale;
      } else if (AVAILABLE_LOCALES.includes(browserLocale)) {
        initialLocale = browserLocale;
      } else if (browserLocale.includes('-')) {
        const shortLocale = browserLocale.split('-')[0];
        const matchedLocale = AVAILABLE_LOCALES.find(loc => loc.startsWith(shortLocale));
        if (matchedLocale) {
          initialLocale = matchedLocale;
        }
      }
    } catch (error) {
      console.warn('Error accessing localStorage or navigator:', error);
    }
    
    setLocale(initialLocale);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    const loadMessages = async () => {
      try {
        const response = await fetch(`/locales/${locale}.json`);
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
          // 強制重新渲染整個組件樹
          setForceRenderKey(prev => prev + 1);
        }
      } catch (error) {
        console.error('Failed to load messages:', error);
      }
    };

    loadMessages();
  }, [locale, isClient]);

  const changeLocale = (newLocale: string) => {
    if (!isClient || !AVAILABLE_LOCALES.includes(newLocale)) return;
    
    console.log('IntlProvider: Changing locale to', newLocale);
    setLocale(newLocale);
    
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch (error) {
      console.warn('Error saving to localStorage:', error);
    }
  };

  const contextValue: IntlContextType = {
    locale,
    changeLocale,
    availableLocales: AVAILABLE_LOCALES,
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <IntlContext.Provider value={contextValue}>
      <NextIntlClientProvider key={`${locale}-${forceRenderKey}`} locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </IntlContext.Provider>
  );
}

export function useIntlContext() {
  const context = useContext(IntlContext);
  if (context === undefined) {
    throw new Error('useIntlContext must be used within an IntlProvider');
  }
  return context;
} 