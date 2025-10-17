import React from "react";
import about from "../../assets/imgs/landing/about.jpg";
import AboutContent from "./about/AboutContent";
import AboutImage from "./about/AboutImage";
import BackgroundDecoration from "../shared/BackgroundDecoration";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <BackgroundDecoration variant="gradient" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AboutContent />
          <AboutImage imageSrc={about} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
