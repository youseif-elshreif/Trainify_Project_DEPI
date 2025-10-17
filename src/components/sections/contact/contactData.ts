import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export interface ContactItem {
  icon: React.ElementType;
  label: string;
  value: string;
  gradient: string;
}

export const contactItems: ContactItem[] = [
  {
    icon: HiMail,
    label: "Email",
    value: "support@Tranfy.com",
    gradient: "bg-[#FF6B35]",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    gradient: "bg-[#2BC48A]",
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: "New York, NY",
    gradient: "bg-gradient-to-r from-[#FF6B35] to-[#2BC48A]",
  },
];
