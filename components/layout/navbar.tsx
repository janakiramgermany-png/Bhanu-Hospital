'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Language, translations } from '@/lib/translations'
import { useLanguageContext } from '@/contexts/language-context'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, mounted } = useLanguageContext()

  if (!mounted) {
    return null
  }

  const t = translations[language]

  const navItems = [
    { label: t.home, href: '#' },
    { label: t.departments, href: '#departments' },
    { label: t.doctors, href: '#doctors' },
    { label: t.services, href: '#services' },
    { label: t.gallery, href: '#gallery' },
    { label: t.contact, href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition-opacity">
            <Image
              src="/bhanu-hospital-logo.jpg"
              alt="Bhanu Hospital Logo"
              width={48}
              height={48}
              priority
              className="object-contain"
            />
            <span className="hidden sm:inline text-lg font-bold font-poppins text-foreground">
              Bhanu Hospital
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            {/* Language selector */}
            <div className="hidden sm:flex items-center gap-1 border-l border-border pl-2">
              {(['en', 'te', 'hi'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                    language === lang
                      ? 'bg-secondary text-secondary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {lang === 'en' ? 'EN' : lang === 'te' ? 'TE' : 'HI'}
                </button>
              ))}
            </div>

            {/* Book appointment button */}
            <Button className="hidden sm:inline-flex bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              {t.appointment}
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 animate-slide-in-down">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2 pt-4 border-t border-border space-y-2">
                {/* Mobile Language Selector */}
                <div className="flex gap-1">
                  {(['en', 'te', 'hi'] as Language[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang)
                        setIsOpen(false)
                      }}
                      className={`flex-1 px-2 py-1 text-xs font-medium rounded transition-colors ${
                        language === lang
                          ? 'bg-secondary text-secondary-foreground'
                          : 'text-muted-foreground hover:text-foreground bg-muted'
                      }`}
                    >
                      {lang === 'en' ? 'EN' : lang === 'te' ? 'TE' : 'HI'}
                    </button>
                  ))}
                </div>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  {t.appointment}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
