import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-poppins">Bhanu Hospital</h3>
            <p className="text-sm opacity-90">
              Excellence in healthcare with compassionate care and advanced medical technology.
            </p>
            <div className="flex gap-3 pt-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61588866261000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                title="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/BhanuHospital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                title="Follow us on X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/bhanuhospitalvijayawada/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                title="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/bhanu-hospital-258a21405/?skipRedirect=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                title="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold font-poppins">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Our Departments
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold font-poppins">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold font-poppins">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">BRT5 Road, Main Rd, Vijayawada, Andhra Pradesh 520003</span>
              </div>
              <div className="flex gap-2 items-center">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+91-7799722188" className="opacity-90 hover:opacity-100 transition-opacity">
                  +91-7799722188
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@bhanuhospital.co.in" className="opacity-90 hover:opacity-100 transition-opacity">
                  info@bhanuhospital.co.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-90">
          <p>&copy; {currentYear} Bhanu Hospital. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
