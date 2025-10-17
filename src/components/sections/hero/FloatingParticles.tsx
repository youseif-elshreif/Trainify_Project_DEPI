import React from "react";

const FloatingParticles: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FF6B35] rounded-full animate-float opacity-60"></div>
      <div
        className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#2BC48A] rounded-full animate-float opacity-40"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full animate-float opacity-80"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#FF6B35] rounded-full animate-float opacity-50"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  );
};

export default FloatingParticles;
