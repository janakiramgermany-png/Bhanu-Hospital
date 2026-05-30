'use client'

import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'

export default function LanguageSwitchTest() {
  const { t, i18n } = useTranslation()

  const handleLanguageSwitch = (lang: string) => {
    console.log(`[v0] Switching language from ${i18n.language} to ${lang}`)
    i18n.changeLanguage(lang)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">{t('dashboard.title')}</h1>
        
        <div className="space-y-4">
          <p><strong>Current Language:</strong> {i18n.language}</p>
          <p><strong>Dashboard Title:</strong> {t('dashboard.title')}</p>
          <p><strong>Welcome Message:</strong> {t('dashboard.welcomeMessage')}</p>
          <p><strong>Total Patients:</strong> {t('dashboard.totalPatients')}</p>
          <p><strong>Today Appointments:</strong> {t('dashboard.todayAppointments')}</p>
          <p><strong>Doctors:</strong> {t('dashboard.doctors')}</p>
          <p><strong>Monthly Revenue:</strong> {t('dashboard.monthlyRevenue')}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Language Test</h2>
          <div className="flex gap-4">
            <Button 
              onClick={() => handleLanguageSwitch('en')}
              variant={i18n.language === 'en' ? 'default' : 'outline'}
            >
              English
            </Button>
            <Button 
              onClick={() => handleLanguageSwitch('te')}
              variant={i18n.language === 'te' ? 'default' : 'outline'}
            >
              Telugu
            </Button>
            <Button 
              onClick={() => handleLanguageSwitch('hi')}
              variant={i18n.language === 'hi' ? 'default' : 'outline'}
            >
              हिन्दी
            </Button>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Expected Values:</h3>
          <ul className="space-y-2 text-sm">
            <li><strong>EN:</strong> Dashboard, Welcome to Bhanu Hospital, Total Patients, Today Appointments, Doctors, Monthly Revenue</li>
            <li><strong>TE:</strong> డ్యాష్‌బోర్డ్, భాను ఆసుపత్రికకు స్వాగతం, మొత్తం రోగులు, ఈ రోజు నియామకాలు, డాక్టర్లు, నెలవారీ రాజస్వం</li>
            <li><strong>HI:</strong> डैशबोर्ड, भानु हॉस्पिटल में स्वागत है, कुल रोगी, आज की नियुक्तियां, डॉक्टर, मासिक राजस्व</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
