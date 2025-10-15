import React from "react";
import { HiLightningBolt, HiPlay } from "react-icons/hi";
import { FaDumbbell } from "react-icons/fa";
import about from "../../assets/imgs/landing/about.jpg";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#FF6B35]/10 to-[#2BC48A]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#2BC48A]/10 to-[#FF6B35]/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Your Journey to
              <span className="block gradient-text animate-gradient">
                {" "}
                Excellence Starts Here
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              At Tranfy, we believe that every athlete deserves the tools and
              knowledge to reach their full potential. Our comprehensive
              platform combines cutting-edge technology with proven fitness
              science to deliver personalized solutions for nutrition tracking,
              workout optimization, and performance enhancement.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Whether you're a professional athlete, weekend warrior, or just
              starting your fitness journey, we provide the resources you need
              to transform your body, sharpen your mind, and achieve lasting
              results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="glass p-6 rounded-2xl hover-lift">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-[#e55a2b] rounded-full flex items-center justify-center animate-glow">
                    <HiLightningBolt className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-gray-900">10K+</p>
                    <p className="text-sm text-gray-600 font-medium">
                      Active Users
                    </p>
                  </div>
                </div>
              </div>
              <div className="glass p-6 rounded-2xl hover-lift">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#2BC48A] to-[#22a76f] rounded-full flex items-center justify-center animate-glow">
                    <FaDumbbell className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-gray-900">50K+</p>
                    <p className="text-sm text-gray-600 font-medium">
                      Workouts Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in-right">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <img
                src={about}
                alt="Fitness Training"
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
