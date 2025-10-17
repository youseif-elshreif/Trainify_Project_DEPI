import React from "react";

interface SocialLinkProps {
  icon: React.ElementType;
  href: string;
  gradient: string;
  ariaLabel?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  icon: Icon,
  href,
  gradient,
  ariaLabel,
}) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center hover-glow transition-all duration-300 group`}
    >
      <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
    </a>
  );
};

export default SocialLink;
