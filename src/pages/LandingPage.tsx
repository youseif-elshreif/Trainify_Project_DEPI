import React, { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import ContactSection from "../components/sections/ContactSection";

const LandingPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar isLoggedIn={isLoggedIn} onScrollToSection={scrollToSection} />
      <HeroSection onScrollToSection={scrollToSection} />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
