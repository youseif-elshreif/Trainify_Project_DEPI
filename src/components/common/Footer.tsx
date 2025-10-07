import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const developers = [
    {
      name: "John Doe",
      role: "Frontend Developer",
      github: "https://github.com/johndoe",
      facebook: "https://facebook.com/johndoe",
      whatsapp: "https://wa.me/1234567890",
      linkedin: "https://linkedin.com/in/johndoe",
      email: "johndoe@example.com",
    },
    {
      name: "Jane Smith",
      role: "Backend Developer",
      github: "https://github.com/janesmith",
      facebook: "https://facebook.com/janesmith",
      whatsapp: "https://wa.me/0987654321",
      linkedin: "https://linkedin.com/in/janesmith",
      email: "janesmith@example.com",
    },
    {
      name: "Alice Johnson",
      role: "UI/UX Designer",
      github: "https://github.com/alicejohnson",
      facebook: "https://facebook.com/alicejohnson",
      whatsapp: "https://wa.me/1122334455",
      linkedin: "https://linkedin.com/in/alicejohnson",
      email: "alicejohnson@example.com",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0B1220] via-gray-900 to-black text-gray-300 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2BC48A]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="text-3xl font-black mb-6">
              <span className="text-white">
                Train
                <span className="gradient-text animate-gradient">fy</span>
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
              Empowering athletes worldwide with cutting-edge fitness tools,
              nutrition guidance, and performance optimization solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 glass-dark rounded-2xl flex items-center justify-center hover-glow transition-all duration-300 group"
              >
                <FaFacebookF className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-12 h-12 glass-dark rounded-2xl flex items-center justify-center hover-glow transition-all duration-300 group"
              >
                <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-12 h-12 glass-dark rounded-2xl flex items-center justify-center hover-glow transition-all duration-300 group"
              >
                <FaTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black text-xl mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#FF6B35] transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#FF6B35] transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#FF6B35] transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#FF6B35] transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-black text-xl mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="hover:text-[#2BC48A] transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  Calculator
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#2BC48A] transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  Store
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#2BC48A] transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  Workouts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#2BC48A] transition-all duration-300 text-lg font-medium hover:translate-x-2 inline-block"
                >
                  Recipes
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Developers Section */}
        <div className="border-t border-gray-700/30 mt-12 pt-12">
          <div className="text-center mb-10">
            <h3 className="text-white font-black text-2xl mb-4 flex items-center justify-center gap-3">
              Meet Our Development Team
            </h3>
            <p className="text-gray-400 text-lg">
              Passionate developers crafting digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {developers.map((dev, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-[#FF6B35]/30 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="text-center mb-4">
                  <h4 className="text-white font-bold text-xl mb-2 group-hover:text-[#FF6B35] transition-colors">
                    {dev.name}
                  </h4>
                  <p className="text-gray-400 text-sm font-medium bg-gradient-to-r from-[#FF6B35]/20 to-[#2BC48A]/20 px-3 py-1 rounded-full inline-block">
                    {dev.role}
                  </p>
                </div>

                <div className="flex justify-center gap-3">
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-gray-600 hover:scale-110 transition-all duration-300 group/icon"
                    title="GitHub"
                  >
                    <FaGithub className="w-4 h-4 group-hover/icon:scale-110 transition-transform" />
                  </a>
                  <a
                    href={dev.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all duration-300 group/icon"
                    title="Facebook"
                  >
                    <FaFacebookF className="w-4 h-4 group-hover/icon:scale-110 transition-transform" />
                  </a>
                  <a
                    href={dev.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300 group/icon"
                    title="WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4 group-hover/icon:scale-110 transition-transform" />
                  </a>
                  <a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center hover:bg-blue-800 hover:scale-110 transition-all duration-300 group/icon"
                    title="LinkedIn"
                  >
                    <FaLinkedin className="w-4 h-4 group-hover/icon:scale-110 transition-transform" />
                  </a>
                  <a
                    href={`mailto:${dev.email}`}
                    className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all duration-300 group/icon"
                    title="Email"
                  >
                    <FaEnvelope className="w-4 h-4 group-hover/icon:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700/30 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            © {new Date().getFullYear()}{" "}
            <span className="gradient-text font-semibold">Tranfy</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
