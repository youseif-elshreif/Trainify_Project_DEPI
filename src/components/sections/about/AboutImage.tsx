import React from "react";
import { HiPlay } from "react-icons/hi";

interface AboutImageProps {
  imageSrc: string;
  alt?: string;
}

const AboutImage: React.FC<AboutImageProps> = ({
  imageSrc,
  alt = "Fitness Training",
}) => {
  return (
    <div className="relative animate-fade-in-right">
      <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl hover-lift">
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Floating play button */}
      <div className="absolute -bottom-8 -right-[15px] w-28 h-28 bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] rounded-full flex items-center justify-center shadow-2xl hover-glow cursor-pointer animate-float">
        <HiPlay className="w-12 h-12 text-white ml-1" />
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -left-4 w-20 h-20 glass rounded-full flex items-center justify-center">
        <div className="w-8 h-8 bg-[#2BC48A] rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-1/2 -left-6 w-12 h-12 glass rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-[#FF6B35] rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default AboutImage;
