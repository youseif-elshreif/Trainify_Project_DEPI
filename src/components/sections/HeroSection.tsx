import React from "react";
import { HiCalculator, HiArrowRight } from "react-icons/hi";
import hero from "../../assets/imgs/landing/hero.jpg";

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative parallax-bg overflow-hidden"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/60 to-black/80"></div>

      {/* Floating particles */}
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
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#ff8c5a] to-[#2BC48A] animate-gradient">
              Body & Mind
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up opacity-90"
            style={{ animationDelay: "0.3s" }}
          >
            Join thousands of athletes who trust our platform to improve their
            health, track calories, optimize workouts, and master nutrition
            for peak performance.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              className="btn-premium text-white px-10 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 group shadow-2xl"
              onClick={() => onScrollToSection("services")}
            >
              <HiCalculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Try Calculator
            </button>
            <button
              className="glass border-2 border-[#2BC48A] text-[#2BC48A] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#2BC48A] hover:text-white transition-all duration-300 flex items-center gap-3 group hover-glow"
              onClick={() => onScrollToSection("contact")}
            >
              Join Now
              <HiArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="glass w-8 h-12 border-2 border-white/30 rounded-full flex justify-center items-start pt-2 hover-glow cursor-pointer">
          <div className="w-1.5 h-4 bg-gradient-to-b from-[#FF6B35] to-[#2BC48A] rounded-full animate-pulse"></div>
        </div>
        <p className="text-white/60 text-sm mt-2 font-medium">Scroll</p>
      </div>
    </section>
  );
};

export default HeroSection;