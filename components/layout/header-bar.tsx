'use client'

import React from 'react'
import { Phone, Mail, Clock } from 'lucide-react'

export default function HeaderBar() {
  return (
    <div className="hidden md:block bg-primary text-primary-foreground text-sm py-2 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left side - Emergency and Contact */}
          <div className="flex items-center gap-6">
            <a 
              href="tel:+91-7799722188" 
              className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
              title="Call emergency"
            >
              <Phone className="w-4 h-4" />
              <span>Emergency: +91-7799722188</span>
            </a>
            <a 
              href="mailto:info@bhanuhospital.co.in" 
              className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
              title="Send email"
            >
              <Mail className="w-4 h-4" />
              <span>info@bhanuhospital.co.in</span>
            </a>
          </div>

          {/* Right side - Services */}
          <div className="flex items-center gap-2 opacity-90">
            <Clock className="w-4 h-4" />
            <span>24/7 Emergency Services</span>
          </div>
        </div>
      </div>
    </div>
  )
}
