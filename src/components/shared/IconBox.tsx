import React from "react";

interface IconBoxProps {
  icon: React.ElementType;
  gradient?: string;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
}

const IconBox: React.FC<IconBoxProps> = ({
  icon: Icon,
  gradient = "from-[#FF6B35] to-[#e55a2b]",
  size = "md",
  animated = false,
  className = "",
}) => {
  const sizeStyles = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-24 h-24",
  };

  const iconSizeStyles = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <div
      className={`bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center ${
        sizeStyles[size]
      } ${
        animated
          ? "group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-glow"
          : ""
      } ${className}`}
    >
      <Icon className={`${iconSizeStyles[size]} text-white`} />
    </div>
  );
};

export default IconBox;
