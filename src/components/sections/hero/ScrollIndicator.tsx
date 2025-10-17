import React from "react";

const ScrollIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="glass w-8 h-12 border-2 border-white/30 rounded-full flex justify-center items-start pt-2 hover-glow cursor-pointer">
        <div className="w-1.5 h-4 bg-gradient-to-b from-[#FF6B35] to-[#2BC48A] rounded-full animate-pulse"></div>
      </div>
      <p className="text-white/60 text-sm mt-2 font-medium">Scroll</p>
    </div>
  );
};

export default ScrollIndicator;
