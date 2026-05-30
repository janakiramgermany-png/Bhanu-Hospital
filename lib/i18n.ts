import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translation resources
import enTranslations from './locales/en.json'
import teTranslations from './locales/te.json'
import hiTranslations from './locales/hi.json'

i18n
  // Use language detector to detect user's language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources: {
      en: { translation: enTranslations },
      te: { translation: teTranslations },
      hi: { translation: hiTranslations },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  }, (err) => {
    if (err) console.error('[v0] i18n initialization error:', err)
    else console.log('[v0] i18n initialized successfully')
  })

export default i18n
