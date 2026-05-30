'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { translations } from '@/lib/translations'
import { useLanguageContext } from '@/contexts/language-context'

interface Doctor {
  id: number
  name: string
  specialty: string
  experience: number
  image: string
  bio: string
  rating: number
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. S Chaitanya Sai Durga',
    specialty: 'General Medicine',
    experience: 10,
    image: '👨‍⚕️',
    bio: 'Expert general physician providing comprehensive primary healthcare and internal medicine services.',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Dr. V Sai Sravan',
    specialty: 'Orthopedics',
    experience: 12,
    image: '👨‍⚕️',
    bio: 'Specialist in orthopedic surgery with advanced training in joint care and musculoskeletal disorders.',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Dr. Raghu Varma',
    specialty: 'General Surgery',
    experience: 15,
    image: '👨‍⚕️',
    bio: 'Experienced general surgeon specializing in surgical interventions and emergency procedures.',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Dr. Tejo Krishna',
    specialty: 'Urology',
    experience: 11,
    image: '👨‍⚕️',
    bio: 'Skilled urologist providing comprehensive urological care and surgical expertise.',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Dr. Abhilash',
    specialty: 'Urology',
    experience: 10,
    image: '👨‍⚕️',
    bio: 'On-call urologist with specialized expertise in urological treatment and care.',
    rating: 4.7,
  },
  {
    id: 6,
    name: 'Dr. Bodepudi Chowdary',
    specialty: 'Nephrology',
    experience: 13,
    image: '👨‍⚕️',
    bio: 'Expert nephrologist specializing in kidney disease management and renal care.',
    rating: 4.8,
  },
  {
    id: 7,
    name: 'Dr. Sudeep Chakravarthy',
    specialty: 'Neurology',
    experience: 12,
    image: '👨‍⚕️',
    bio: 'Specialist neurologist with expertise in neurological disorders and brain health.',
    rating: 4.8,
  },
  {
    id: 8,
    name: 'Dr. B Vijay',
    specialty: 'Plastic Surgery',
    experience: 10,
    image: '👨‍⚕️',
    bio: 'Expert plastic surgeon providing reconstructive and cosmetic surgical solutions.',
    rating: 4.7,
  },
  {
    id: 9,
    name: 'Dr. Ch Jagadish Babu',
    specialty: 'ENT',
    experience: 11,
    image: '👨‍⚕️',
    bio: 'Specialist in ear, nose, and throat disorders with comprehensive ENT services.',
    rating: 4.8,
  },
  {
    id: 10,
    name: 'Dr. Ravali Nannapaneni',
    specialty: 'Gynecology',
    experience: 12,
    image: '👩‍⚕️',
    bio: 'Expert gynecologist providing comprehensive women&apos;s healthcare and obstetric services.',
    rating: 4.9,
  },
  {
    id: 11,
    name: 'Dr. Chandra Shekar',
    specialty: 'Pediatrics',
    experience: 10,
    image: '👨‍⚕️',
    bio: 'Dedicated pediatrician providing specialized care for infants and children.',
    rating: 4.8,
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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function DoctorsSection() {
  const { language, mounted } = useLanguageContext()

  if (!mounted) {
    return null
  }

  const t = translations[language]
  return (
    <section id="doctors" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            {t.doctorsTitle.split(' ').slice(0, 2).join(' ')} <span className="text-secondary">{t.doctorsTitle.split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.doctorsSubtitle}
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Avatar section */}
              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 h-40 flex items-center justify-center group-hover:from-secondary/30 group-hover:to-accent/30 transition-all duration-300">
                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {doctor.image}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-3">
                <h3 className="text-xl font-bold font-poppins text-foreground">{doctor.name}</h3>

                <div className="space-y-1">
                  <p className="text-secondary font-semibold text-sm">{doctor.specialty}</p>
                  <p className="text-muted-foreground text-sm">{doctor.experience} {t.years} {t.experience}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{doctor.bio}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{doctor.rating}</span>
                </div>

                {/* CTA */}
                <button className="w-full mt-4 py-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-lg transition-colors duration-200">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
