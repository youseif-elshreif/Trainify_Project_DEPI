import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  animated = true,
}) => {
  return (
    <span
      className={`text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#ff8c5a] to-[#2BC48A] ${
        animated ? "animate-gradient" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
};

export default GradientText;
