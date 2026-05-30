'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { translations } from '@/lib/translations'
import { useLanguageContext } from '@/contexts/language-context'

export default function GallerySection() {
  const { language, mounted } = useLanguageContext()

  if (!mounted) {
    return null
  }

  const t = translations[language]

  const galleryImages = [
    {
      src: '/health-camp-event-1.jpg',
      alt: 'Health camp celebration - balloon decorations and patient gathering',
      caption: language === 'en' ? 'Community Health Camp' : language === 'te' ? 'కమ్యూనిటీ హెల్థ్ క్యాంప్' : 'सामुदायिक स्वास्थ्य शिविर',
    },
    {
      src: '/health-camp-event-2.jpg',
      alt: 'Health camp team members and participants',
      caption: language === 'en' ? 'Our Team & Community' : language === 'te' ? 'మన టీమ్ & కమ్యూనిటీ' : 'हमारी टीम और समुदाय',
    },
    {
      src: '/health-camp-poster.jpg',
      alt: 'Bhanu Hospital 2nd Anniversary Health Camp - April 26-28, 2026',
      caption: language === 'en' ? '2nd Anniversary Event' : language === 'te' ? '2వ సంవత్సర సందర్భం' : '2वीं वर्षगांठ समारोह',
    },
    {
      src: '/hospital-entrance-decorated.jpg',
      alt: 'Hospital entrance decorated for health camp with festive banner',
      caption: language === 'en' ? 'Festive Celebrations' : language === 'te' ? 'పండుగ వేడుకలు' : 'त्योहार समारोह',
    },
    {
      src: '/health-camp-entrance.jpg',
      alt: 'Health camp entrance with blue and orange balloons',
      caption: language === 'en' ? 'Camp Entrance' : language === 'te' ? 'క్యాంప్ ప్రవేశద్వారం' : 'शिविर प्रवेश द्वार',
    },
  ]

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            <span className="text-foreground">Our </span>
            <span className="text-secondary">Events & Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'en'
              ? 'Celebrating community health and wellness through our health camps and hospital events'
              : language === 'te'
                ? 'సమాజ ఆరోగ్య మరియు సుస్థిరత కోసం మా ఆరోగ్య శిబిరాలు మరియు ఆసుపత్రి ఈవెంట్‌ల ద్వారా జరుపుకుంటుంది'
                : 'हमारे स्वास्थ्य शिविरों और अस्पताल के आयोजनों के माध्यम से सामुदायिक स्वास्थ्य और कल्याण का जश्न मनाते हैं'}
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-lg">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
