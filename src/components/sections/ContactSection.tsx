import React from "react";
import ContactForm from "../common/ContactForm";
import ContactInfo from "../common/ContactInfo";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-100 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#FF6B35]/10 to-[#2BC48A]/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#2BC48A]/10 to-[#FF6B35]/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Get in{" "}
            <span className="gradient-text animate-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your fitness journey? We'd love to hear from
            you and help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;