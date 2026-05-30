import HeroSection from '@/components/sections/hero-section'
import DepartmentsSection from '@/components/sections/departments-section'
import FacilitiesSection from '@/components/sections/facilities-section'
import DoctorsSection from '@/components/sections/doctors-section'
import GallerySection from '@/components/sections/gallery-section'
import TestimonialsSection from '@/components/sections/testimonials-section'
import ContactSection from '@/components/sections/contact-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <DepartmentsSection />
      <FacilitiesSection />
      <DoctorsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
