"use client";
import { useReveal } from "@/hooks/useReveal";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DoctorsSection from "@/components/DoctorsSection";
import DiseasesSection from "@/components/DiseasesSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ContactSection from "@/components/ContactSection";
import AppointmentForm from "@/components/AppointmentForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  useReveal();

  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DoctorsSection />
      <DiseasesSection />
      <FacilitiesSection />
      <ContactSection />
      <AppointmentForm />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <Chatbot />
      <ScrollToTop />
    </main>
  );
}
