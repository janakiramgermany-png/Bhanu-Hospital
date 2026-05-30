'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { translations } from '@/lib/translations'
import { useLanguageContext } from '@/contexts/language-context'

interface Counter {
  label: string
  value: number
  suffix: string
}

const counters: Counter[] = [
  { label: 'Patients Treated', value: 50000, suffix: '+' },
  { label: 'Expert Doctors', value: 200, suffix: '+' },
  { label: 'Years Experience', value: 25, suffix: '+' },
  { label: 'Success Rate', value: 99, suffix: '%' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = value / 60 // Spread animation over 60 frames
    let animationId: NodeJS.Timeout

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function HeroSection() {
  const { language, mounted } = useLanguageContext()

  if (!mounted) {
    return null
  }

  const t = translations[language]
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-secondary rounded-full opacity-10 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full opacity-10 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20"
            >
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
              <span className="text-sm font-medium text-secondary">Welcome to Bhanu Hospital</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
              {t.heroTitle.split(' ').slice(0, 3).join(' ')}{' '}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                {t.heroTitle.split(' ').slice(3).join(' ')}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base"
              >
                {t.bookNow}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-muted"
              >
                {t.learnMore}
              </Button>
            </div>
          </motion.div>

          {/* Right side - Hospital image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hospital-building-exterior.jpg"
                alt="Bhanu Hospital - Modern healthcare facility"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

              {/* Floating stats cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg max-w-xs"
              >
                <div className="text-sm text-muted-foreground">Patient Satisfaction</div>
                <div className="text-2xl font-bold text-secondary">98.5%</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg max-w-xs"
              >
                <div className="text-sm text-muted-foreground">Surgery Success</div>
                <div className="text-2xl font-bold text-accent">99.8%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Counter section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 pt-12 border-t border-border/50"
        >
          {counters.map((counter, index) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="space-y-2"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-secondary">
                <AnimatedCounter value={counter.value} suffix={counter.suffix} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium">{counter.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
