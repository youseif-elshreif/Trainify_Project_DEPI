import React from "react";
import type { ContactItem } from "./contactData";

interface ContactItemCardProps {
  item: ContactItem;
}

const ContactItemCard: React.FC<ContactItemCardProps> = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="flex items-center gap-4">
      <div
        className={`w-12 h-12 ${item.gradient} rounded-full flex items-center justify-center`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <p className="font-medium text-gray-900">{item.label}</p>
        <p className="text-gray-600">{item.value}</p>
      </div>
    </div>
  );
};

export default ContactItemCard;
