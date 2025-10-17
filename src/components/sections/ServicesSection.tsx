import React from "react";
import SectionTitle from "../shared/SectionTitle";
import BackgroundDecoration from "../shared/BackgroundDecoration";
import ServiceCard from "./services/ServiceCard";
import { servicesData } from "./services/servicesData";

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <BackgroundDecoration variant="particles" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          title="Our  Services"
          gradientWord="Premium"
          subtitle="Comprehensive tools and resources designed to elevate your fitness journey to professional levels"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
