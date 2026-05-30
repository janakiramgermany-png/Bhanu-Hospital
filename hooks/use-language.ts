'use client'

import { useState, useEffect, useCallback } from 'react'
import { Language, translations } from '@/lib/translations'

// Custom event for language changes
const LANGUAGE_CHANGE_EVENT = 'language-change'

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  // Initialize language from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('language-preference') as Language | null
    if (stored && (stored === 'en' || stored === 'te' || stored === 'hi')) {
      setLanguageState(stored)
    }

    // Listen for language changes from other components
    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<Language>
      setLanguageState(customEvent.detail)
    }

    window.addEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange)
    return () => {
      window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange)
    }
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language-preference', lang)
    // Dispatch custom event to notify all components
    const event = new CustomEvent(LANGUAGE_CHANGE_EVENT, { detail: lang })
    window.dispatchEvent(event)
  }, [])

  const t = translations[language]

  return { language, setLanguage, t, mounted }
}
