import React from "react";

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group";

  const variantStyles = {
    primary: "btn-premium text-white shadow-2xl",
    secondary:
      "glass border-2 border-[#2BC48A] text-[#2BC48A] hover:bg-[#2BC48A] hover:text-white hover-glow",
    outline:
      "glass border-2 border-white/30 text-white hover:border-[#FF6B35] hover:text-[#FF6B35] hover-glow",
  };

  const sizeStyles = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
