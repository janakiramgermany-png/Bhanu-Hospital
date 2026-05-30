'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Brain, Bone, Eye, Smile, Stethoscope, Zap, Users } from 'lucide-react'
import { translations } from '@/lib/translations'
import { useLanguageContext } from '@/contexts/language-context'

const departments = [
  {
    icon: Stethoscope,
    title: 'General Medicine',
    doctor: 'Dr. S Chaitanya Sai Durga',
    description: 'Comprehensive primary healthcare and internal medicine services for all age groups.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    doctor: 'Dr. V Sai Sravan',
    description: 'Advanced orthopedic care including joint treatment and musculoskeletal disorders.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Heart,
    title: 'General Surgery',
    doctor: 'Dr. Raghu Varma',
    description: 'Expert surgical services for various general and emergency surgical procedures.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Urology',
    description: 'Specialized urological care with on-call doctors Dr. Tejo Krishna and Dr. Abhilash.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'Nephrology',
    doctor: 'Dr. Bodepudi Chowdary',
    description: 'Advanced kidney disease management and nephrology care services.',
    color: 'from-purple-500 to-blue-500',
  },
  {
    icon: Brain,
    title: 'Neurology',
    doctor: 'Dr. Sudeep Chakravarthy',
    description: 'Specialized neurological care for brain and nervous system disorders.',
    color: 'from-purple-600 to-indigo-600',
  },
  {
    icon: Smile,
    title: 'Plastic Surgery',
    doctor: 'Dr. B Vijay',
    description: 'Reconstructive and cosmetic surgical procedures with specialized expertise.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Users,
    title: 'ENT',
    doctor: 'Dr. Ch Jagadish Babu',
    description: 'Comprehensive ear, nose, and throat specialist services.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Heart,
    title: 'Gynecology',
    doctor: 'Dr. Ravali Nannapaneni',
    description: 'Comprehensive women&apos;s healthcare and obstetric services.',
    color: 'from-red-400 to-pink-400',
  },
  {
    icon: Smile,
    title: 'Pediatrics',
    doctor: 'Dr. Chandra Shekar',
    description: 'Specialized pediatric care for infants, children, and adolescents.',
    color: 'from-yellow-500 to-amber-500',
  },
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
    transition: {
      duration: 0.5,
    },
  },
}

export default function DepartmentsSection() {
  const { language, mounted } = useLanguageContext()

  if (!mounted) {
    return null
  }

  const t = translations[language]
  return (
    <section id="departments" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Our <span className="text-secondary">Departments</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our specialized departments staffed with expert doctors and equipped with cutting-edge medical technology.
          </p>
        </motion.div>

        {/* Departments Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {departments.map((dept, index) => {
            const Icon = dept.icon
            return (
              <motion.div
                key={dept.title}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden p-6 md:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${dept.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`} />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${dept.color} p-3 text-white`}>
                    <Icon className="w-full h-full" />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl md:text-2xl font-bold font-poppins text-foreground">
                    {dept.title}
                  </h3>
                  
                  {dept.doctor && (
                    <p className="text-secondary font-semibold text-sm">
                      {dept.doctor}
                    </p>
                  )}
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                {/* Border animation on hover */}
                <div className="absolute inset-0 border border-secondary/0 group-hover:border-secondary/20 rounded-2xl transition-all duration-300" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
