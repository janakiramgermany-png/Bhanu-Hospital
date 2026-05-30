'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919966645187"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      title="Chat with us on WhatsApp"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Floating button container */}
      <div className="relative flex items-center justify-center">
        {/* Animated background circle */}
        <div className="absolute inset-0 bg-secondary/30 rounded-full animate-pulse" />
        
        {/* Main button */}
        <div className="relative w-14 h-14 bg-secondary hover:bg-secondary/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95">
          <MessageCircle className="w-7 h-7 text-white" fill="currentColor" />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md">
          WhatsApp
        </div>
      </div>
    </a>
  )
}
