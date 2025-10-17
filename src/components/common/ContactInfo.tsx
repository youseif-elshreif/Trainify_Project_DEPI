import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { contactItems } from "../sections/contact/contactData";
import ContactItemCard from "../sections/contact/ContactItemCard";
import SocialLink from "../shared/SocialLink";

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in-right">
      <div className="glass rounded-3xl p-10 shadow-2xl hover-lift">
        <h3 className="text-3xl font-black text-gray-900 mb-8">
          Connect With Us
        </h3>
        <div className="space-y-4">
          {contactItems.map((item, index) => (
            <ContactItemCard key={index} item={item} />
          ))}
        </div>
      </div>

      <div className="glass rounded-3xl p-10 shadow-2xl hover-lift">
        <h3 className="text-3xl font-black text-gray-900 mb-8">Follow Us</h3>
        <div className="flex gap-6">
          <SocialLink
            icon={FaFacebookF}
            href="#"
            gradient="from-blue-500 to-blue-600"
            ariaLabel="Facebook"
          />
          <SocialLink
            icon={FaInstagram}
            href="#"
            gradient="from-purple-500 to-pink-500"
            ariaLabel="Instagram"
          />
          <SocialLink
            icon={FaTwitter}
            href="#"
            gradient="from-gray-800 to-black"
            ariaLabel="Twitter"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
