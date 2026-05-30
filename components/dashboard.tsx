'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Calendar, Stethoscope, TrendingUp, Activity, Settings, LogOut, Bell, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { translations } from '@/lib/translations'

type Language = 'en' | 'te' | 'hi'

// Stats data - values are constant, only labels change
const statsData = [
  { icon: Users, value: '1,248', labelKey: 'totalPatients' as const, color: 'from-blue-500 to-blue-600' },
  { icon: Calendar, value: '42', labelKey: 'todayAppointments' as const, color: 'from-purple-500 to-purple-600' },
  { icon: Stethoscope, value: '28', labelKey: 'doctors' as const, color: 'from-green-500 to-green-600' },
  { icon: TrendingUp, value: '₹2.4M', labelKey: 'monthlyRevenue' as const, color: 'from-orange-500 to-orange-600' },
]

export default function Dashboard() {
  const [currentLang, setCurrentLang] = useState<Language>('en')
  const t = translations[currentLang]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border/40 bg-background/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold font-poppins bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                {t.dashboardTitle}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              {/* Language Buttons */}
              <div className="flex gap-2 items-center border border-border rounded-lg p-1 bg-background">
                <button
                  onClick={() => setCurrentLang('en')}
                  className={`px-3 py-1.5 text-sm font-medium rounded transition-all ${
                    currentLang === 'en'
                      ? 'bg-secondary text-white font-bold'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setCurrentLang('te')}
                  className={`px-3 py-1.5 text-sm font-medium rounded transition-all ${
                    currentLang === 'te'
                      ? 'bg-secondary text-white font-bold'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  TE
                </button>
                <button
                  onClick={() => setCurrentLang('hi')}
                  className={`px-3 py-1.5 text-sm font-medium rounded transition-all ${
                    currentLang === 'hi'
                      ? 'bg-secondary text-white font-bold'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  HI
                </button>
              </div>

              {/* Quick Actions */}
              <Button variant="ghost" size="icon" className="hover:bg-secondary/10">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary/10">
                <Mail className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary/10">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold font-poppins text-foreground mb-2">
            {t.welcome}
          </h2>
          <p className="text-muted-foreground">
            {t.description}
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {statsData.map((stat) => {
            const Icon = stat.icon
            const label = t[stat.labelKey]
            return (
              <motion.div
                key={stat.labelKey}
                variants={itemVariants}
                className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <Activity className="w-4 h-4 opacity-50" />
                </div>
                <div className="text-3xl font-bold font-poppins mb-1">{stat.value}</div>
                <div className="text-sm opacity-90">{label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Recent Activities */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold font-poppins">
                  {t.recentActivities}
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  { type: 'appointment', name: 'Dr. Raj Varma', time: '10:30 AM' },
                  { type: 'surgery', name: 'Dr. Sai Sravan', time: '02:15 PM' },
                  { type: 'checkup', name: 'Dr. Chaitanya', time: '04:45 PM' },
                ].map((activity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-3 bg-background rounded-lg hover:bg-secondary/5 transition-colors"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.type === 'appointment'
                          ? 'bg-blue-500'
                          : activity.type === 'surgery'
                          ? 'bg-purple-500'
                          : 'bg-green-500'
                      }`}
                    />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{activity.name}</p>
                      <p className="text-sm text-muted-foreground">{t[activity.type as keyof typeof t]}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operations Overview */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold font-poppins mb-6">
                {t.bedOperations}
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">{t.availableBeds}</span>
                    <span className="font-bold text-lg">24</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-gradient-to-r from-green-500 to-green-600" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">{t.occupiedBeds}</span>
                    <span className="font-bold text-lg">21</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full w-7/12 bg-gradient-to-r from-orange-500 to-orange-600" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            {/* Quick Stats */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold font-poppins mb-4">
                Overview
              </h3>

              <div className="space-y-4">
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <p className="text-sm text-muted-foreground">{t.scheduled}</p>
                  <p className="text-2xl font-bold text-blue-600">156</p>
                </div>
                <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <p className="text-sm text-muted-foreground">{t.completed}</p>
                  <p className="text-2xl font-bold text-purple-600">89</p>
                </div>
                <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <p className="text-sm text-muted-foreground">{t.pending}</p>
                  <p className="text-2xl font-bold text-orange-600">12</p>
                </div>
              </div>
            </div>

            {/* Quick Actions Sidebar */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold font-poppins mb-4">
                {t.support}
              </h3>

              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2 hover:bg-secondary/10">
                  <Settings className="w-4 h-4" />
                  Profile
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2 hover:bg-secondary/10">
                  <Bell className="w-4 h-4" />
                  Notifications
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 hover:bg-red-500/10 text-red-600 hover:text-red-700"
                >
                  <LogOut className="w-4 h-4" />
                  {t.logout}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

