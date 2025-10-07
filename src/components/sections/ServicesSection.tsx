import React from "react";
import { HiShoppingCart, HiCalculator, HiArrowRight } from "react-icons/hi";
import { FaDumbbell, FaUtensils } from "react-icons/fa";

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: HiShoppingCart,
      title: "Supplements Store",
      description: "Premium supplements and nutrition products. Browse freely, login required for purchases.",
      color: "from-[#FF6B35] to-[#e55a2b]",
      hoverColor: "text-[#FF6B35]",
      bgGradient: "from-[#FF6B35]/20 via-transparent to-[#2BC48A]/20",
      delay: "0.1s"
    },
    {
      icon: HiCalculator,
      title: "Smart Calculator",
      description: "Advanced nutrition and fitness calculators. Available to everyone, no login required.",
      color: "from-[#2BC48A] to-[#22a76f]",
      hoverColor: "text-[#2BC48A]",
      bgGradient: "from-[#2BC48A]/20 via-transparent to-[#FF6B35]/20",
      delay: "0.2s"
    },
    {
      icon: FaDumbbell,
      title: "Workouts",
      description: "Personalized workout plans and tracking. Premium feature requiring user registration.",
      color: "from-[#FF6B35] to-[#2BC48A]",
      hoverColor: "text-purple-400",
      bgGradient: "from-purple-500/20 via-transparent to-[#FF6B35]/20",
      delay: "0.3s"
    },
    {
      icon: FaUtensils,
      title: "Recipes",
      description: "Healthy recipes and meal planning. Access our nutrition database with membership.",
      color: "from-[#2BC48A] to-[#FF6B35]",
      hoverColor: "text-green-400",
      bgGradient: "from-green-500/20 via-transparent to-[#2BC48A]/20",
      delay: "0.4s"
    }
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF6B35]/10 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2BC48A]/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Our{" "}
            <span className="gradient-text animate-gradient">Premium</span>{" "}
            Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools and resources designed to elevate your fitness
            journey to professional levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative animate-scale-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="card-hover rounded-3xl p-8 h-full relative overflow-hidden">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-glow`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className={`text-2xl font-black text-white mb-4 group-hover:${service.hoverColor} transition-colors`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className={`flex items-center ${service.hoverColor} font-semibold group-hover:translate-x-2 transition-transform`}>
                    <span>
                      {service.title === "Supplements Store" && "Explore Store"}
                      {service.title === "Smart Calculator" && "Try Calculator"}
                      {service.title === "Workouts" && "Start Training"}
                      {service.title === "Recipes" && "View Recipes"}
                    </span>
                    <HiArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;