import React from "react";
import { HiArrowRight } from "react-icons/hi";
import type { Service } from "./types";
import IconBox from "../../shared/IconBox";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div
      className="group relative animate-scale-in"
      style={{ animationDelay: service.delay }}
    >
      <div className="card-hover rounded-3xl p-8 h-full relative overflow-hidden">
        {/* Gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        ></div>

        <div className="relative z-10">
          <IconBox
            icon={service.icon}
            gradient={service.color}
            size="md"
            animated
            className="mb-6"
          />
          <h3
            className={`text-2xl font-black text-white mb-4 group-hover:${service.hoverColor} transition-colors`}
          >
            {service.title}
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {service.description}
          </p>
          <div
            className={`flex items-center ${service.hoverColor} font-semibold group-hover:translate-x-2 transition-transform`}
          >
            <span>{service.actionText}</span>
            <HiArrowRight className="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
