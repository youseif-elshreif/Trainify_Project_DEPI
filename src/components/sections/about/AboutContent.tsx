import React from "react";
import GradientText from "../../shared/GradientText";
import AboutStats from "./AboutStats";

const AboutContent: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in-left">
      <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
        Your Journey to
        <span className="block">
          <GradientText> Excellence Starts Here</GradientText>
        </span>
      </h2>
      <p className="text-xl text-gray-600 leading-relaxed font-medium">
        At Tranfy, we believe that every athlete deserves the tools and
        knowledge to reach their full potential. Our comprehensive platform
        combines cutting-edge technology with proven fitness science to deliver
        personalized solutions for nutrition tracking, workout optimization, and
        performance enhancement.
      </p>
      <p className="text-xl text-gray-600 leading-relaxed font-medium">
        Whether you're a professional athlete, weekend warrior, or just starting
        your fitness journey, we provide the resources you need to transform
        your body, sharpen your mind, and achieve lasting results.
      </p>

      <AboutStats />
    </div>
  );
};

export default AboutContent;
