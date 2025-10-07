import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in-right">
      <div className="glass rounded-3xl p-10 shadow-2xl hover-lift">
        <h3 className="text-3xl font-black text-gray-900 mb-8">
          Connect With Us
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center">
              <HiMail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-gray-600">support@Tranfy.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#2BC48A] rounded-full flex items-center justify-center">
              <HiPhone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] rounded-full flex items-center justify-center">
              <HiLocationMarker className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Location</p>
              <p className="text-gray-600">New York, NY</p>
            </div>
          </div>
        </div>
      </div>

      <div className="glass rounded-3xl p-10 shadow-2xl hover-lift">
        <h3 className="text-3xl font-black text-gray-900 mb-8">Follow Us</h3>
        <div className="flex gap-6">
          <a
            href="#"
            className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center hover-glow transition-all duration-300 group"
          >
            <FaFacebookF className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="#"
            className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center hover-glow transition-all duration-300 group"
          >
            <FaInstagram className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
          </a>
          <a
            href="#"
            className="w-16 h-16 bg-gradient-to-r from-gray-800 to-black rounded-2xl flex items-center justify-center hover-glow transition-all duration-300 group"
          >
            <FaTwitter className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;