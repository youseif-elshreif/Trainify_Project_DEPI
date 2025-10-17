import React from "react";
import hero from "../../assets/imgs/landing/hero.jpg";
import FloatingParticles from "./hero/FloatingParticles";
import HeroContent from "./hero/HeroContent";
import ScrollIndicator from "./hero/ScrollIndicator";

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative parallax-bg overflow-hidden"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/80"></div>

      {/* Floating particles */}
      <FloatingParticles />

      {/* Hero Content */}
      <HeroContent onScrollToSection={onScrollToSection} />

      {/* Premium Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
