'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Pill, Microscope, Radio, Heart, Clock, AlertCircle } from 'lucide-react'
import { translations } from '@/lib/translations'
import { useLanguageContext } from '@/contexts/language-context'

interface Facility {
  icon: any
  title: string
  description: string
  color: string
}

const facilities: Facility[] = [
  {
    icon: Pill,
    title: 'In-House Pharmacy',
    description: 'Fully stocked pharmacy with essential and specialized medications available round the clock.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Microscope,
    title: 'Pathology Lab',
    description: 'Advanced laboratory services with rapid and accurate diagnostic testing capabilities.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Radio,
    title: 'Radiology Lab (X-Ray)',
    description: 'State-of-the-art X-ray imaging facility for quick and precise radiological diagnostics.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Heart,
    title: 'Operation Theater (OT)',
    description: 'Fully equipped surgical operation theater with modern instruments and sterile environment.',
    color: 'from-red-500 to-orange-500',
  },
]

interface TimingPeriod {
  day: string
  time: string
}

const timings: TimingPeriod[] = [
  { day: 'Monday - Saturday', time: '10:00 AM - 01:30 PM' },
  { day: '', time: '06:00 PM - 08:00 PM' },
  { day: 'Sunday', time: '10:00 AM - 01:30 PM' },
  { day: 'Emergency', time: 'Available 24/7' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function FacilitiesSection() {
  const { language, mounted } = useLanguageContext()

  if (!mounted) {
    return null
  }

  const t = translations[language]
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Our <span className="text-secondary">Facilities & Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare infrastructure equipped with modern technology and expert professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Facilities Grid */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {facilities.map((facility) => {
                const Icon = facility.icon
                return (
                  <motion.div
                    key={facility.title}
                    variants={itemVariants}
                    className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg hover:border-secondary/50 transition-all duration-300"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${facility.color} p-3 text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full" />
                    </div>
                    <h3 className="text-xl font-bold font-poppins text-foreground mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {facility.description}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Timings Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">
              {/* Consultation Hours */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-secondary" />
                  <h3 className="text-2xl font-bold font-poppins text-foreground">
                    Consultation Hours
                  </h3>
                </div>
                <div className="space-y-2 border-t border-border pt-4">
                  {timings.map((timing, idx) => (
                    <div key={idx} className="space-y-1">
                      {timing.day && (
                        <p className="text-sm font-semibold text-foreground">{timing.day}</p>
                      )}
                      <p className={`${timing.day ? 'text-sm text-muted-foreground ml-2' : 'text-sm font-semibold text-secondary'}`}>
                        {timing.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Rooms Info */}
              <div className="space-y-2 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">Consultation Rooms: <span className="text-secondary text-lg font-bold">3</span></p>
              </div>

              {/* Emergency Notice */}
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                  <p className="font-semibold text-destructive">24/7 Emergency Services</p>
                </div>
                <p className="text-sm text-destructive/80">
                  Emergency medical assistance available round the clock for urgent cases.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
