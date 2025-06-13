import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// 導入語言資源
import en from './locales/en.json'
import zhTW from './locales/zh-TW.json'
import zhCN from './locales/zh-CN.json'
import ja from './locales/ja.json'
import ko from './locales/ko.json'
import th from './locales/th.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import es from './locales/es.json'
import it from './locales/it.json'
import ru from './locales/ru.json'
import pt from './locales/pt.json'
import nl from './locales/nl.json'
import pl from './locales/pl.json'
import ar from './locales/ar.json'
import tr from './locales/tr.json'
import vi from './locales/vi.json'

const resources = {
  en: {
    translation: en
  },
  'zh-TW': {
    translation: zhTW
  },
  'zh-CN': {
    translation: zhCN
  },
  ja: {
    translation: ja
  },
  ko: {
    translation: ko
  },
  th: {
    translation: th
  },
  fr: {
    translation: fr
  },
  de: {
    translation: de
  },
  es: {
    translation: es
  },
  it: {
    translation: it
  },
  ru: {
    translation: ru
  },
  pt: {
    translation: pt
  },
  nl: {
    translation: nl
  },
  pl: {
    translation: pl
  },
  ar: {
    translation: ar
  },
  tr: {
    translation: tr
  },
  vi: {
    translation: vi
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'preferred-language'
    },

    interpolation: {
      escapeValue: false
    }
  })

export default i18n 