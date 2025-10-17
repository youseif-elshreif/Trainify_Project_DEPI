import React from "react";
import { HiCalculator, HiArrowRight } from "react-icons/hi";
import GradientText from "../../shared/GradientText";
import Button from "../../shared/Button";

interface HeroContentProps {
  onScrollToSection: (sectionId: string) => void;
}

const HeroContent: React.FC<HeroContentProps> = ({ onScrollToSection }) => {
  return (
    <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
      <div className="animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
          Transform Your
          <span className="block">
            <GradientText>Body & Mind</GradientText>
          </span>
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up opacity-90"
          style={{ animationDelay: "0.3s" }}
        >
          Join thousands of athletes who trust our platform to improve their
          health, track calories, optimize workouts, and master nutrition for
          peak performance.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => onScrollToSection("services")}
            icon={
              <HiCalculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            }
            iconPosition="left"
          >
            Try Calculator
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => onScrollToSection("contact")}
            icon={
              <HiArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            }
            iconPosition="right"
          >
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
