import React from "react";
import GradientText from "./GradientText";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  gradientWord?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  gradientWord,
  centered = true,
  className = "",
}) => {
  const renderTitle = () => {
    if (gradientWord) {
      const parts = title.split(gradientWord);
      return (
        <>
          {parts[0]}
          <GradientText>{gradientWord}</GradientText>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <div
      className={`${
        centered ? "text-center" : ""
      } mb-20 animate-fade-in-up ${className}`}
    >
      <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
