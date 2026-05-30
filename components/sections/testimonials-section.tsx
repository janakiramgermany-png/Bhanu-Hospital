'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Patient',
    content: 'Bhanu Hospital provided exceptional care during my treatment. The doctors were incredibly knowledgeable and the staff was very compassionate throughout my recovery journey.',
    rating: 5,
    avatar: '👩',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Patient Family',
    content: 'The facilities are top-notch and the medical team went above and beyond to ensure my father\'s comfort. Highly recommend for anyone seeking quality healthcare.',
    rating: 5,
    avatar: '👨',
  },
  {
    id: 3,
    name: 'Dr. Aisha Patel',
    role: 'Referred Patient',
    content: 'As a healthcare professional, I was impressed by their protocols and patient care standards. I confidently refer my patients and family members to Bhanu Hospital.',
    rating: 5,
    avatar: '👩‍⚕️',
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Surgery Patient',
    content: 'My surgery went smoothly thanks to the expert surgical team. The pre-operative guidance and post-operative care were exemplary. Worth every penny.',
    rating: 5,
    avatar: '👨',
  },
  {
    id: 5,
    name: 'Priya Desai',
    role: 'Long-term Patient',
    content: 'I\'ve been a patient here for years and the consistency in quality care is remarkable. The hospital truly puts patient wellness first.',
    rating: 5,
    avatar: '👩',
  },
  {
    id: 6,
    name: 'Robert Martinez',
    role: 'Emergency Patient',
    content: 'The emergency response was quick and professional. Despite the critical nature of my condition, I felt safe and well-cared for every step of the way.',
    rating: 5,
    avatar: '👨',
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

export default function TestimonialsSection() {
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
            What Our <span className="text-secondary">Patients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real patients about their experiences at Bhanu Hospital.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-secondary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="font-semibold text-foreground font-poppins">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <button className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-lg transition-colors duration-200">
            Share Your Experience
          </button>
        </motion.div>
      </div>
    </section>
  )
}
