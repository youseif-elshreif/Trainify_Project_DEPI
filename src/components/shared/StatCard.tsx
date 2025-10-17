import React from "react";
import IconBox from "./IconBox";

interface StatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
  gradient?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  value,
  label,
  gradient,
  className = "",
}) => {
  return (
    <div className={`glass p-6 rounded-2xl hover-lift ${className}`}>
      <div className="flex items-center gap-3 mb-2">
        <IconBox icon={icon} gradient={gradient} size="sm" />
        <div>
          <p className="text-3xl font-black text-gray-900">{value}</p>
          <p className="text-sm text-gray-600 font-medium">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
